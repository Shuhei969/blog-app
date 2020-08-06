import $ from 'jquery'
import axios from 'modules/axios'

const ListenInactiveHeartEvent = (articleId) => {
  $( '.inactive-heart' ).on('click', () => {
    axios.post(`/articles/${articleId}/like`)
      .then((response) => {
        if (response.data.status === `ok`) {
          $(`.active-heart`).removeClass(`hidden`)
          $(`.inactive-heart`).addClass(`hidden`)
        }
      })
      .catch((e) => {
        window.alert(`Error`)
        console.log(e)
      })
  })
}

const ListenActiveHeartEvent = (articleId) => {
  $( '.active-heart' ).on('click', () => {
    axios.delete(`/articles/${articleId}/like`)
      .then((response) => {
        if (response.data.status === `ok`) {
          $(`.inactive-heart`).removeClass(`hidden`)
          $(`.active-heart`).addClass(`hidden`)
        }
      })
      .catch((e) => {
        window.alert(`Error`)
        console.log(e)
      })
  })
}

// 他のjsファイルで使用したい場合はexportで送る必要がある
export {
  // （基本的な書き方 property: function）
  // ListenInactiveHeartEvent: ListenInactiveHeartEvent,
  // ListenActiveHeartEvent: ListenActiveHeartEvent

  // どちらも同じ内容であれば省略した書き方が可能
  ListenInactiveHeartEvent,
  ListenActiveHeartEvent
}