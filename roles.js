const AccessControl = require('accesscontrol');

const ac = new AccessControl();

exports.roles = (function () {
    ac.grant("user")
    .readAny("product")
    .readAny('vendor')
    .readAny('store')
    .updateOwn("order")

    ac.grant("vendor")
    .extend("user")
    .updateOwn("product")
    .updateOwn("store")
    .deleteOwn("product")
    .deleteOwn("store")

    ac.grant("admin")
    .readAny("user")
    .readAny("store")
    .readAny("order")
    .updateAny("user", ['status'])
    .updateAny("order", ['status'])
    .deleteAny("user")
    .deleteAny("order")
    .deleteAny("store")

    return ac;
})();