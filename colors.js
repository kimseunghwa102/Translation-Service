var body = {
  setColor:function(color){
 document.querySelector('body').style.Color = color;
},
 backgroundSetColor:function(color){
 document.querySelector('body').style.backgroundColor = color;
}
}
var Links = {
  SetColor:function(color){
    var alist = document.querySelectorAll('a');
        var i = 0
        while(i <alist.length){
        alist[i].style.color = color;
        i = i + 1
         }
}
}
   function nightdayhanddler(self){
     var target = document.querySelector('body');
     if(self.value ==='night')
     {body.backgroundSetColor('black');
    body.setColor('white');
     self.value = 'day';

           Links.SetColor('powderblue')

     }else{
     body.backgroundSetColor('white');
     body.setColor('black');
     self.value = 'night';

           Links.SetColor('black')
   }
   }
