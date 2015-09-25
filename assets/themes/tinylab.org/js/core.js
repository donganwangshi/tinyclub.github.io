function common_click(child, icon, icon_open, icon_close)
{
  var child = $(child);
  var icon= $(icon);
  var status = child.css("display");
  var icon_open = "icon-" + icon_open;
  var icon_close = "icon-" + icon_close;

  if (status == "block") {
    child.hide();
    icon.removeClass(icon_open);
    icon.addClass(icon_close);
  } else {
    icon.removeClass(icon_close);
    icon.addClass(icon_open);
    child.show();
  }
}

function click_toc(pid)
{
  var child = pid + "-cld";
  var icon = pid + " a i";

  common_click(child, icon, 'right-dir', 'down-dir');
}