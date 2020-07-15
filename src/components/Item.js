import React, { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSelectedItem } from '../actions';
import ImageGallery from 'react-image-gallery';
import Table from './Table';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Item = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const { selectedItem } = useSelector(store => store);
	const [images, setImages] = useState([]);

	const columns = useMemo(() => [
		{
			Header: 'title',
			accessor: 'title',
			width: '80%',
		},
		{
			Header: 'value',
			accessor: 'value',
		},
	], []);

	useEffect(() => {
		dispatch(fetchSelectedItem(id));
	}, [dispatch, id]);

	useEffect(() => {
		if (selectedItem.images) {
			setImages(selectedItem.images.map(value => ({
				original: value,
				thumbnail: value,
				originalClass: 'item-image',
				thumbnailClass: 'item-original-thumbnail',
			})));
		}
	}, [selectedItem.images]);
    
	if (!Object.keys(selectedItem).length || selectedItem.isEmpty) {
		return <div>item not found</div>;
	}

	const specification = selectedItem.specification.map(value => (
		<div>
			<div>{value.title}</div>
			<Table
				data={value.values}
				columns={columns}
			/>
		</div>
	));

	return (
		<div style={{ textAlign: 'left', padding: 20 }}>
			<div style={{ display: 'flex' }}>
				<ImageGallery
					items={images}
					thumbnailPosition="left"
					showPlayButton={false}
					showBullets={true}
					useBrowserFullscreen={false}
					showNav={false}
					lazyLoad
				/>
				<div style={{ padding: 10 }}>
					<div>Name: {selectedItem.name}</div>
					<div>Category: {selectedItem.category}</div>
					<ul>
						Tags:
						{selectedItem.tags.map(value => (
							<li>{value}</li>
						))}
					</ul>
				</div>
			</div>
			<div style={{ display: 'flex', flexDirection: 'column' }}>
				{selectedItem.description.length
					? (
						<Tabs>
							<TabList>
								<Tab>specification</Tab>
								<Tab>Description</Tab>
							</TabList>

							<TabPanel>
								{specification}
							</TabPanel>
							<TabPanel>
							  	{selectedItem.description}
							</TabPanel>
						</Tabs>
					) : (
						{specification}
					)
				}
				
			</div>
		</div>
	);
};

export default Item;
