function _async(func) {
  return function () {
    let _callback = null;

    console.log(func, arguments);

    arguments[arguments.length++] = (result) => _callback(result);

    func.apply(null, arguments);

    function _async_cb_receiver(callback) {
      _callback = callback;
    }
    return _async_cb_receiver;
  };
}

const add = _async((a, b, callback) => setTimeout(() => callback(a + b), 1000));

add(
  20,
  30
)(function (r) {
  console.log(r);
});
console.log("22");

export default _async;
