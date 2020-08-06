import axios from 'axios'
import { 
  csrfToken } from 'rails-ujs'

axios.defaults.headers.common[`X-CSRF-Token`] = csrfToken()

export default axios
// default で指定すると読み込み先でimportする際にハッシュで指定しなくても defaultで指定したものしか渡さないようになる