import {environment} from '../../environments/environment';

const {API} = environment;

const urls = {
  users: `${API}/users`,
  auth: `${API}/auth`,
  cars: `${API}/cars`,
}

export {
  urls
}
