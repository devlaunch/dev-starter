import axios from 'axios';

const API_ROOT = 'http://localhost:3001';

const encode = encodeURIComponent;

let token = null;

const instance = axios.create();
instance.defaults.timeout = 2500;
instance.defaults.baseURL = `${API_ROOT}`;
instance.defaults.headers.common.Authorization = token ? `Bearer ${token}` : '';
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const requests = {
  get: (url, options = {}) => instance.get(url, { ...options }),
  post: (url, data, options = {}) => instance.post(url, data, { ...options }),
  put: (url, data, options = {}) => instance.put(url, data, { ...options }),
  del: (url, options = {}) => instance.delete(url, { ...options }),
};

const Auth = {
  current: () => requests.get('/user'),
  login: (email, password) => requests.post('/users/login', { user: { email, password } }),
  register: (username, email, password) =>
    requests.post('/users', { user: { username, email, password } }),
  save: user => requests.put('/user', { user }),
};

const Tags = {
  getAll: () => requests.get('/tags'),
};

const limit = (count, p) => `limit=${count}&offset=${p ? p * count : 0}`;
const omitSlug = article => Object.assign({}, article, { slug: undefined });
const Articles = {
  all: page => requests.get(`/articles?${limit(10, page)}`),
  byAuthor: (author, page) => requests.get(`/articles?author=${encode(author)}&${limit(5, page)}`),
  byTag: (tag, page) => requests.get(`/articles?tag=${encode(tag)}&${limit(10, page)}`),
  del: slug => requests.del(`/articles/${slug}`),
  favorite: slug => requests.post(`/articles/${slug}/favorite`),
  favoritedBy: (author, page) =>
    requests.get(`/articles?favorited=${encode(author)}&${limit(5, page)}`),
  feed: () => requests.get('/articles/feed?limit=10&offset=0'),
  get: slug => requests.get(`/articles/${slug}`),
  unfavorite: slug => requests.del(`/articles/${slug}/favorite`),
  update: article => requests.put(`/articles/${article.slug}`, { article: omitSlug(article) }),
  create: article => requests.post('/articles', { article }),
};

const Comments = {
  create: (slug, comment) => requests.post(`/articles/${slug}/comments`, { comment }),
  delete: (slug, commentId) => requests.del(`/articles/${slug}/comments/${commentId}`),
  forArticle: slug => requests.get(`/articles/${slug}/comments`),
};

const Profile = {
  follow: username => requests.post(`/profiles/${username}/follow`),
  get: username => requests.get(`/profiles/${username}`),
  unfollow: username => requests.del(`/profiles/${username}/follow`),
};

export default {
  Articles,
  Auth,
  Comments,
  Profile,
  Tags,
  setToken: (_token) => {
    token = _token;
    instance.defaults.headers.common.Authorization = '';
    delete axios.defaults.headers.common.Authorization;

    instance.defaults.headers.common.Authorization = token ? `Bearer ${token}` : '';
  },
};
