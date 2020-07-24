function handleText(text) {
    return text.replace(/(R|r)(E|e)/g, '$1$2:');
}

function doTheThing() {
    $('a,:header,p,td,li,tr,span,input,btn,yt-formatted-string,div,strong,em,b').not("span[data-text='true']").each(function () {
        if ($(this).children().length === 0) {
            $(this).text(handleText($(this).text()));
        }
    })
}

window.onload = function () {
    this.doTheThing()
}