let scrollbarWidth = '';

const widthScroll = () => {
        const scrollDiv = document.createElement("div");
        scrollDiv.className = "scrollbar-measure";
        document.body.appendChild(scrollDiv);

        scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;

        document.body.removeChild(scrollDiv);
      };

      widthScroll();
      
//------style div-------//
//.scrollbar-measure {
//  width: 100px;
//  height: 100px;
//  overflow: scroll;
//  position: absolute;
//  top: -9999px;
//}
