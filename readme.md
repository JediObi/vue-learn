(1) router 的必要性

某些组件，比如页面级的组件，通常是要做页面跳转，也就是使用url跳转，通常会有地址栏直接改变url跳转，或者组件使用url跳转。传统页面跳转依靠url请求后端定位资源实现。现在的SPA应用由前端渲染实现页面跳转。只有那些小模块才真的请求后端数据。而前端跳转依靠前端路由实现，前端路由，比如react有 react-router，vue有vue-router，前端路由也可以手写实现，但是会比较麻烦，因为你得为所有用到跳转的地方写路由逻辑。而router组件会简化这个手写的过程，只需要配置一次路由，其他地方就可以直接跳转了。

(2) flux 的必要性

flux 用于集中管理数据源。

组件可以有其自己的data域，但是这样分散的数据不易管理，会非常糟糕。

因此引入 store 单例， 所有的组件从这个实例中获取数据，所有的组件修改数据也要经过这个实例。

可以使用mapXXX函数把 store　单例的属性映射到　组件的成员上。并且 action和mutation会自动银蛇dispatch和commit。映射时，统一的命名空间前缀还可以提取出来作为mapXXX的第一个参数，以省略掉重复书写。

store可以写在 ./stroe目录，统一导出即可。



