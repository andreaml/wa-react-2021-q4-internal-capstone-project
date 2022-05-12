import { rest } from 'msw';
import { API_BASE_URL } from '../src/utils/constants';
import * as apiMetadata from './en-us/api-metadata.json';
import * as featuredBanners from './en-us/featured-banners.json';
import * as productCategories from './en-us/product-categories.json';
import * as featuredProducts from './en-us/featured-products.json';

const handlers = [
  rest.get(API_BASE_URL, (req, res, ctx) =>
    res(ctx.status(200), ctx.json(apiMetadata))
  ),
  rest.get(`${API_BASE_URL}/documents/search`, (req, res, ctx) => {
    const query = req.url.searchParams;
    const queries = query.getAll('q');
    const [documentType] = queries;
    let jsonToReturn = {};
    if (documentType.includes('banner')) {
      jsonToReturn = featuredBanners;
    } else if (documentType.includes('category')) {
      jsonToReturn = productCategories;
    } else if (documentType.includes('product')) {
      jsonToReturn = featuredProducts;
    }
    return res(ctx.status(200), ctx.json(jsonToReturn));
  }),
];

export default handlers;
