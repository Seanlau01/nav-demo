
       keys={
        0:['q','w','e','r','t','y','u','i','o','p'],
        1:['a','s','d','f','g','h','j','k','l'],
        2:['z','x','c','v','b','n','m'],
        length:3
    }
    hash={
        q:'qq.com',
        w:'weibo.com',
        e:'ele.me',
        r:undefined,
        t:'twitter.com',
        y:'youtube.com',
        u:undefined,
        i:'iqiyi.com',
        o:undefined,
        p:undefined,
        a:'alibaba.com',
        s:'souhu.com',
        d:undefined

    }
    hashInLocalStorage=JSON.parse(localStorage.getItem('savedata')||'null')
    if(hashInLocalStorage){
        hash=hashInLocalStorage  //如果hashInLoaclStorage存在则覆盖之前的hash
    }
    index=0
    while(index<keys['length']){// 0 1 2
      row=keys[index] //第一个数组  第二个数组  第三个数组
      div1=document.createElement('div')
      main1.appendChild(div1)
      index2=0
      while(index2<row['length']){
         kbd1=document.createElement('kbd')
         kbd1.textContent=row[index2] 
         div1.appendChild(kbd1)
         btn1=document.createElement('button')
         btn1.textContent='编辑'
         kbd1.appendChild(btn1)
          
         btn1.id=row[index2]
         btn1.onclick=function(event2){
            key=event2['target']['id']
             webinput=prompt('给我一个网址')
             hash[key]=webinput
             localStorage.setItem('savedata',JSON.stringify(hash)) //变更存档
         }
          
         index2+=1
     }
     index+=1
    }
    document.onkeypress=function(event1){
         key=event1['key']
         website=hash[key]
         window.open('http://'+website,'_blank')
     }   