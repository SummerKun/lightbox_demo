var lightbox = function () {
  var ckimg = $('#lightbox figure img');
  var index = 0;
  var linghtboxfn = {
    'init': function () {
      //添加遮罩层和show框架层
      $(document.body).prepend("<div class='lightboxan'></div>");
      $(document.body).prepend("<div class='lightboxup'></div>");
      this.show();
      this.close();
      this.closeAll();
      this.prevPototype();
      this.nextPototype();
    },
    'show': function () {
      //添加show层内容
      $('#lightbox figure').on('click', function () {
        var src = $('img').eq($('#lightbox figure').index(this)).attr('src');
        index = ckimg.index(this);
        linghtboxfn.lightopen();
        $('.lightboxup').prepend("<div class='lightshow'>" +
        "<img src='" + src + "'/>" +
        "<img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAtCAYAAADsvzj/AAAFF0lEQVR4Ac2ZW0xcVRSGPTNnhlPKcCsUAeeChkEVxhutDQwzMANaqamNWgpaH+yDIaZp1cRHbgH0gTsxkmDCI/hiRAqgD5qYRgKQ8II6TE00wfgGAcIdKeM/ydrNZIezxxg9m518gRxWmn6s9a9zhvNQJBL5T/gfjokwA5Uw0zWFeHBOugiTsAArfSWZky+iABVowAZSwRkiDSTRz1iHlJMmogATsIDTIAPYgRs8SeTTtXSQSLVKFNkivIQKksDDJFCsquqLmqZdAa/i+yCuPQ1cJHOKjdpJEWGdsIFs8BQoy83NvTEzMzO3t7f318HBweHc3Nxdj8dznWQeIWmpIryENUaiCPgdDsfN+fn5XyLcWV5eDlmt1gBqHgOpbAHIFmESySAHeECF0+m8hd/+vcgxZ3d39wBj9grqCkA6iaiyRBRunJhEpcvl+nBhYeG3iM7Z2dnZgkg1ZSgNqLI6wgebSVTZ7faPlpaW/tSTWF9f36ivr+9AbQkF3iZRhAs2dSInJ+eDUCj0h0Biq7S09BPUBkEhyAKJssKusE6QRCGoQLDfn56eDulJrK6ubgeDwS7UXgTPAztIkXUfUbhxKgLlyMRtBPtXPYm1tbXdqqoqJnEOOGhbJQCTkSJ8sJlEMNoJrFhdicPDw6PKyspe1FaD85yE2YBnLUGwSSIrK+s2bnZLehIbGxubfr+/B7WXSMJJ42QlCcVAES7YJJGdnR0dp7BgnLZKSko6qBPngIvrBEkYIKIT7PLoOKET4TjB7kbty+A8SaRxmcAxQEQn2BUI9q3Z2dl7gk7sINhRiZeoE87jMmGECB/s3JhgR8dJV2Jzc3Pb5/N1UieKKdgsEyaAY5wIk2Dj5GHBRifCgmBHb3adLBNsO3HBNkxEAWZwCmSCx4EPwb4ZJ9jbCHYXSRQDpyDYhomoNFIOUIRMvINO/KQnsbKyshMIBD5D7RVwgQWblzBahD2Sp5jN5jzM+9uLi4s/60mEw+FNbKcvUH8DVIECcAZoXLCliaRaLBbX8PBwb0RwRkZGfkftx+BdUM4+KInDbdxoWUCKoih5CQkJgYGBgS/xs6PjRPb394+ampp+RP174CIoBGcpYypQZIqYY+4dz4DLvb29Y6LONDY2fou6OuAF+SCDZCgj8kQSQDqNihfU9vX1TYlkGhoa7qDuDVBKMpQVrjMG30fYCs6gAHuRmdqurq5JkUxLS8sEaq+CMq4zJGOgCB2Fk8kHJSaTqaazs3Pi2MzQaWtrm0RtDfDFyCQyGUNFOJlEkMlkwLWenp5vRDKtra1TNGYsM5mcjKEifGeYjBfUQUaYmebm5omYzLjFC8C4zyNqTGfcNDZ1/2ABjKHudZLXkTFARJAZN/CqqnqNMqN7Ojo6vqMF4ONkVFmvFUQLQNiZ7u7u76PZAn6S4TJjrIhoAdT+iwXAdQYYKCJaAG/iPhNvAYyj7jXwAngUpAGrDBF+ATCZAuBXFOX60NDQ3TiPM1/hyfoyPf7kgNNSXyvwmSGZMk3T3hocHPwhzlPzJLLFnpZT5PztV5wZNyilbTZFmTnZrxU4GZWXATV4ap4kmeNELlEticjsSHyZq/39/V/j374P2Lk/Pj5+BznxUuDlj1acJ4B8cAH/4er29vbPR0dH58fGxubx/ac2my1Ab3iz5Yc9/gJIB05QCJ4Fz9FXD3gC5HIfi+WKCGQ0GpuzwA7yCDtdS+b/SCFfRPwaQqPxSSaS6JrlwUjR+RtEvCM0ct4sLQAAAABJRU5ErkJggg==' id='prev'/>" +
        "<img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAtCAYAAADsvzj/AAAFDUlEQVR4Ac2ZS0xcVRjHvTN3hisw0GIRZ3AeLWHQWqdVsRqgA86AUmpqoy20Whd2YYhprJq45BVAF7yJkQQTluDGiEhBF5qYRsIjYYMKQxNNMO4gQHgjZfxP8pF8ufEe0qQ5pyf5BTKcWfzyff/vnHt5xLQ0wgbsQCfswEY80BWPxx8I5sUlHMBJP0nm4RfRWAUMkAqOgseII8AFDNqjPYwiGuEAySADeEEuOEkE6bNjIIX22riQchHWSo+SRACc1nU9ahjGG+ASfn8Vn+WT0BNUMV0so04kFTwJTodCoeuTk5N3dnd397a3t/8dHx+fzM7OvoG/nQPPADdwscqoF2HBPgJynE5nZGFhYTZuWlNTU3/4fL6b2FMMnmUyTpJRLqKTSAbIQyu9vrW1tRv/n4Uqzfv9/g+x7xUQAh6QxmVUV0SnKRWESMXm5uZ63GJNT0//GQgEPsHeUibD20xTLeKioBdUV1e3rKysrFrJzM3N/eP1ej/F3jImIxgAcsOeDLLAKRAtLCz8HDKWlZmdnf3b4/F8zCojGADyz5F04AUvgPJoNNq2tLS0YSUzNjY2iwHwEWXmFHCzymiqRGwgiaaXD7wIysvKytqWl5e3rGQwAO4iM7ewt4SmmYfLqLpr2U0yZ0FFaWlp597e3r6VDEbzXapMlGQEA0COiEYyTmozP8lcKC4u7lhdXV2zksGhOZeVlXWLy5gHgDwRJsMqE6A2qygoKGhBm60L2izmdruZjGkAyBShxTNzlGTOgvMYAO2iAYDKxKjNSgQDQI6IRWb8VJnXMADaUZlNK5mJiYl5DAC6AQgGgCwRWjaWGR/IB+fD4XDr2trahqDN5lEZ3mbZ5gEgW4QPAD6aK3BotmIArAsqE2MDIMTajGTkinAZ3mb5NAAS58zGIQPgJvaGwVMgk5597ECTLcJl+AB4GVyKRCJfLi4uijLzGzLzHrWYj1pMVyXCB4BBz/J5oAzcwDT7OhaLWZ4zMzMzvyNX79rt9uOUNyewqRSxsbzk0Jh9H3w2MDDwV1yw+vv7Ox0OR4C+q1REAzr1+ON0TpSDD+rq6n7d2dmxusbs9/T0fJOUlBTRNO2gIg6lGSGJYyAXFIFrtbW1P4oq0dnZOYR9F8EZdqaoCDtVgrJBEoXgck1Nzfciia6urlHsu0rSOSADJEkXYRK8EufAlYaGhtsiiba2thFk4kAij75Po1fiOcIkkplEGFQ2NTWNCBz2W1tbb9tstkrsLaDvcQlN5hWFS2SyTFxubGwcFUl0dHT8gH1VTCITJHMJWSLmYAcPMlFfXy9sJ0gkMnGNpEnCXAkJIhYSReAtBHvosGCTRBgEWSV0qc8jPNhMIgyutLS0/CSSSGRC1/Uqkg5aZUKGiDkTQVAMqtrb238+RGJUHGyZb1F4Je4/2FfFwZYr4qRb7QnwEngTwR4+5JxIZOJtcbDlv2lMAR5wBjfUi7h2fCuS6Ovru6Np2nVqvzwmQcFW9+43HeSg10twix0RSfT29v5iGMY7dMLniTOh+N8KghN7lKZTIQgKMiG/IkwkCJELFiL7uMWOYE+lWUL8elRNa51APoqGh4cTN9p7TOJed3f3d4nz5P4l1ITdDU66XK5Ic3PzF0NDQ1ODg4NT+P0rCFbQM3qu4MRWLsIfX7PB0yAEngPP089TwA8yBMFWKmJ+qZBGj7FecJzw0mfpwBBLqBexseAbIBWkESnAEPybQLnIf4JfIzSb+FymAAAAAElFTkSuQmCC' id='next'/>" +
        "<img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAACHUlEQVRoQ+1XgU0bQRCcqSCkgkAFpASngiQdQAVABSEdJBUAFYRUAFSAS6AEqGDRWGd0Wv1/+JvHEdKtZMmyvfszOzt7Z+KdB985fnQC/1vBrkBXwOxAHyGzgXZ6V8BuoVmgK2A20E5/EwUi4jOArwndmuRfG3EqsBiBiNgDcALgFIDej8UlgJ8kH5YgswiB0vGbfwDPeI9JiowVNoGIOAJw0YjikuRxY+4mzSJQOn/vAABgKeES0Bx/qgj8BrACcDhC6gnAY8rRTw9aPdFMICLOAfyogN6RXBUz3w6QEPgVyXVEZOLXJL+3KOkQyCDU2S8FoLZQTaIGrxU7ZPiPJFVjVjQRmJj9IRL7VefHwAt0kxdaCXwD8GekVZnEflFlCrxK6WzQWM6KVgJ5/vNDX0joi1eeExsPzULfukYHDJyf+zLzhUD2xBDOnRKYGqFsWIwYO5PY6QhpnocOsKFtI6Bj26kmsTsTl7HIa3RqVWZjr5c6zJpMXAhkIz+QPJgw7IYEABGXelqv22iafyU7BGTM3EmB0+dT12kRyd/v/ipRVNDa06nqxBnJX60FmhXYPtC8Tl+R1HW8OWwClRLXAD7MQGJ1fvucRQhUh5X+Tuo1ReQKwHnr9Tk3aDECdeGI0EGns0Ihw8q4MriuzbNvnFOqvgmBGWNk/7QTsFtoFugKmA2007sCdgvNAl0Bs4F2elfAbqFZoCtgNtBOfwapu9gxthIytgAAAABJRU5ErkJggg==' id='close'/>" +
        "</div>");
      });
    },
    'closeAll': function () {
      //点击遮罩关闭show
      $('.lightboxan').on('click', function () {
        linghtboxfn.lightcolse();
      });
    },
    'prevPototype': function () {
      //点击切换上一张
      $('.lightboxup').on('click', '#prev', function () {
        linghtboxfn.prev();
      });
    },
    'prev': function () {
      index--;
      if (index < 0) {
        index = ckimg.length - 1;
      }
      var src = ckimg.eq(index).attr('src');
      $('#prev').prev().attr('src', src);
    },
    'nextPototype': function () {
      //点击切换下一张
      $('.lightboxup').on('click', '#next', function () {
        linghtboxfn.next();
      });
    },
    'next': function () {
      index++;
      if (index > ckimg.length - 1) {
        index = 0;
      }
      var src = ckimg.eq(index).attr('src');
      $('#next').parent().find('img:first-child').attr('src', src);
    },
    'close': function () {
      //点击关闭按钮关闭showc层
      $('.lightboxup').on('click', '#close', function () {
        linghtboxfn.lightcolse();
      });
    },
    'lightcolse': function () {
      //colse show
      $('.lightboxan').css('display', 'none');
      $('.lightboxup').css('display', 'none').html('');
    },
    'lightopen': function () {
      //open show
      $('.lightboxan').css('display', 'block');
      $('.lightboxup').css('display', 'block');
    }
  }
  linghtboxfn.init();
}();