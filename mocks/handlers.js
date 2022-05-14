import { rest } from 'msw';
import { API_BASE_URL } from '../src/utils/constants';
import * as apiMetadata from './en-us/api-metadata.json';
import * as featuredBanners from './en-us/featured-banners.json';
import * as productCategories from './en-us/product-categories.json';
import * as featuredProducts from './en-us/featured-products.json';
import * as products from './en-us/products.json';
import * as product from './en-us/product.json';

const handlers = [
  rest.get(API_BASE_URL, (req, res, ctx) =>
    res(ctx.status(200), ctx.json(apiMetadata))
  ),
  rest.get(`${API_BASE_URL}/documents/search`, (req, res, ctx) => {
    const query = req.url.searchParams;
    const queries = query.getAll('q');
    const page = Number(query.getAll('page')) || 1;
    const pageSize = Number(query.getAll('pageSize'));
    const [documentType] = queries;
    let jsonToReturn = {};
    if (documentType.includes('banner')) {
      jsonToReturn = featuredBanners;
    } else if (documentType.includes('category')) {
      jsonToReturn = productCategories;
    } else if (documentType.includes('product')) {
      if (queries.includes('[[at(document.tags, ["Featured"])]]')) {
        jsonToReturn = featuredProducts;
        const currentResults = jsonToReturn.default
          ? jsonToReturn.default.results
          : jsonToReturn.results;
        jsonToReturn.results = currentResults.slice(
          pageSize * page - pageSize,
          pageSize * page
        );
      } else if (queries.includes('[[fulltext(document, ""tallulah"")]]')) {
        jsonToReturn = product;
      } else if (queries.includes('[[fulltext(document, ""pot"")]]')) {
        jsonToReturn = {
          license:
            'This work is licensed under the Creative Commons Attribution 4.0 International License. To view a copy of this license, visit http://creativecommons.org/licenses/by/4.0/.',
          next_page: null,
          page: 1,
          prev_page: null,
          results: [],
          results_per_page: 20,
          results_size: 0,
          total_pages: 0,
          total_results_size: 0,
          version: '6dac34e',
        };
      } else {
        jsonToReturn = products;
        const currentResults = jsonToReturn.default
          ? jsonToReturn.default.results
          : jsonToReturn.results;
        jsonToReturn.results = currentResults.slice(
          pageSize * page - pageSize,
          pageSize * page
        );
      }
      jsonToReturn.page = page;
      jsonToReturn.total_pages = 3;
      jsonToReturn.results_per_page = pageSize;
      jsonToReturn.results_size = pageSize;
    } else if (
      documentType.includes('[[:d=at(document.id, "YWL8XBIAAC0AzuPZ") ]]')
    ) {
      jsonToReturn = product;
    } else if (
      documentType.includes('[[:d=at(document.id, "YWL8XBIAAC0AzuP0") ]]')
    ) {
      jsonToReturn = product;
      jsonToReturn.results[0].data.stock = 0;
    }
    return res(ctx.status(200), ctx.json(jsonToReturn));
  }),
];

export default handlers;
