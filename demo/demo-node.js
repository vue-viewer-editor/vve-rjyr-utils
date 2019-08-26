var base = require('../dist/vve-rjyr-utils.js')
function check(flag) {
  if(!flag) {
    console.log('不符合规范')
  } else {
    console.log('符合规范')
  }
}

check(base.ipCheck('172.30.81.82'))
check(base.macCheck('54-BF-64-5C-E8-5F'))
check(base.maskCheck('255.255.255.0'))
check(base.wlanCheck('锐捷ruijie123'))