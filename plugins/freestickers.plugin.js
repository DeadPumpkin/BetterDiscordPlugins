    /**
 * @name DiscordFreeStickers
 * @version 1.0
 * @description uses links for stickers when you don`t have nitro.
 * @author Alex
 *   
 */

     var ClickEventXD = function() {
      var elements = document.getElementsByClassName("pngImage-33yLRP stickerAsset-13j1W0");
      var myFunction = function() {
        var attribute = this.getAttribute("src");
  
        var link1 = attribute.substring(0, attribute.length - 3);
  
        BdApi.findModuleByProps('ComponentDispatch').ComponentDispatch.dispatchToLastSubscribed("INSERT_TEXT", {
          content: link1 + "160"
        })
      };
    
      for (var i = 0; i < elements.length; i++) {
        if (elements[i].getAttribute('hasclickevent') !== 'true') 
        {
          elements[i].setAttribute('hasclickevent', 'true');
          elements[i].addEventListener('click', myFunction, false);
        }
      }
    }


     module.exports = class FreeStickers{

      load() { 
        document.body.removeEventListener('mousedown',ClickEventXD);
      }
    
    
      start() {
          document.body.addEventListener("mousedown", ClickEventXD);
      }
      
      stop(){
        document.body.removeEventListener('mousedown',ClickEventXD);
      }
    }
    