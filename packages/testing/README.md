# packages/testing

Python package `eos_testing`: platform stubs, factories and the **cross-tenant leak check** that every
module's test suite runs (module standard rule 11).

```python
from eos_testing import register_and_login, assert_no_cross_tenant_leak

a = register_and_login(client, slug="alpha")
b = register_and_login(client, slug="beta", academy_type="music-academy")
assert_no_cross_tenant_leak(client, "/api/v1/identity/users", a["token"], b["token"])
```
