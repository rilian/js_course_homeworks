function getObject(path, object) {
  return eval('object.' + path);
//  var tail = path.split(".");
//  if (tail.length == 1) return object[tail[0]];
//  var attr = tail.shift();
//  return getObject(tail.join("."), object[attr]);
}

function deepCopy(source) {
  var o = new Object;
  for (var property in source) {
    if (typeof source[property] === "object"){
      o[property] = deepCopy(source[property]);
    } else {
      o[property] = source[property];
    }
  }
  return o;
};

var getFriends = function(userId) {
  var user = people.filter(function(el){
    return (el.id == userId);
  })[0];
  if (typeof user == 'undefined') return null;
  if (user.friends == null) return [];
  return people.filter(function(el){
    return (user.friends.indexOf(el.id) != -1);
  });
};