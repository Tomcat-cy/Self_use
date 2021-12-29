function girls() {
    let url = {
      url: https://api.lolicon.app/setu?apikey=6762190761cbc6077a14a0&r18=1&keyword=鬼灭之刃urlcode,
      method: 'GET',
      headers:{  
     "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_7 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1.2 Mobile/15E148 Safari/604.1"
    },
    }
    $task.fetch(url).then((response) => {    
      let data = response.body
      let datas = JSON.parse(data)
      let msg = datas.data[0]
      let urls = msg.url
      let title = msg.title
      $notify(title,"","",{'open-url':urls,'media-url':urls})
      $done({});
    })
  }
girls({})
