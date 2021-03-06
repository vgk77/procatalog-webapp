import { METHODS, DEFAULT_HEADERS } from '../constants';

export const calculateFilteredData = (data, filters) => {
	if (!filters.length) {
		return data;
	}
	return data.filter(value =>
		value.filters.some(filter =>
			filters.some(activeFilter =>
				filter.values.includes(activeFilter)
			)
		),
	);
};

export const calculateCategoriesAlphabely = data => {
	const tags = [];
	const result = [];
	data.forEach(category => {
		category.tags.forEach(value => {
			tags.push({
				category: category.category,
				value,
			});
		});
	});
	tags.sort((a, b) =>
		a.value.localeCompare(b.value)
	).forEach(value => {
		const index = result.findIndex(tag =>
			tag.category === value.value[0],
		);
		if (index > -1) {
			result[index].tags = [...result[index].tags, value];
		} else {
			result.push({ category: value.value[0], tags: [value] });
		}
		
	});
	return result;
};

export const isFunction = value =>
	value && {}.toString.call(value) === '[object Function]';

export const generateGetParams = data => {
	let params = '';

	Object.keys(data).forEach(objKey => {
		params += `${objKey}=${data[objKey]}&`;
	});

	if (params) {
		params = `?${params.substr(0, params.length - 1)}`;
	}
	return params;
};

export const request = async ({
	url,
	method = METHODS.GET,
	data = null,
	isJson = true,
	isAddId = false,
	paramsData = {},
	headers = DEFAULT_HEADERS,
	urlParts = [],
	isFormData = false,
}) => {
	let getParams = '';

	if (isAddId && data && data.id) {
		getParams += `${data.id}/`;
	}

	let paramHeaders = { ...headers };

	let body = data;
	if (body && !isFormData) {
		body = JSON.stringify(data);
		paramHeaders['Content-Type'] = 'application/json';
	} else if (body && isFormData) {
		const formData = new FormData();
		Object.keys(data).forEach(objKey =>
			formData.append(objKey, data[objKey]),
		);
		body = formData;
	}

	const parameters = {
		method,
		body,
		headers: paramHeaders,
	};

	if (paramsData) {
		getParams += generateGetParams(paramsData);
	}

	let finalUrl = url;
	if (urlParts.length) {
		finalUrl += `${urlParts.join('/')}/`;
	}
	if (getParams) {
		finalUrl += getParams;
	}
	const response = await fetch(finalUrl, parameters);
	return isJson ? response.json() : response;
};