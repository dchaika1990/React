var Sidebar=React.DOM.ul({className:'list-group'},
  React.DOM.li({className:'list-group-item text-muted'}, 'Profile'),
  React.DOM.li({className:'list-group-item'},
    React.DOM.a({className:'center-block text-center', href:'#'}, 'Image')
  ),
  React.DOM.li({className:'list-group-item text-right'}, '06.05.2014',
    React.DOM.span({className:'pull-left'},
    React.DOM.strong({className:'pull-left'}, 'Joing Date')
  ),
  React.DOM.div({className:'clearfix'})
));
  ReactDOM.render(Sidebar, document.getElementById('sidebar'));
