const AccessControl = require('accesscontrol');

const ac = new AccessControl();

exports.roles = (function () {
    ac.grant("user")
    .readAny("product")
    .readAny('vendor')
    .readAny('store')
    .readOwn('cart')
    .deleteOwn('cart')
    .updateOwn("order")
    .createOwn('cart')
    .createOwn("order")
    .readOwn('order')

    ac.grant("vendor")
    .readAny("product")
    .readAny('vendor')
    .readAny("store")
    .createOwn('product')
    .createOwn("store")
    .updateOwn("product")
    .updateOwn("store")
    .deleteOwn("product")
    .deleteOwn("store")

    ac.grant("admin")
    .readAny("user")
    .readAny("store")
    .readAny("order")
    .readAny("product")
    .readAny("category")
    .createAny("category")
    .updateAny("category")
    .deleteAny("category")

    return ac;
})();