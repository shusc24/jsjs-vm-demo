# scope 的机制

> 需求

- 保存变量
- 可以通过parent 寻找相关的变量

---
> 机制

- 通过 var 来保存变量
- 通过 out 来设置值
    - 如果当前的scope 的 content 有值则设置
    - 如果当前的scope 的 content 没有相关的key 则向parent 寻找值
        - 如果有则设置该key 的值
        - 如果没有则弹出错误

---

> 抽象类

```ts

abstract class Scope {
    private parent?: Scope;
    private content: Map<string, unknown> = new Map();

    var(name: string) {
    }

    load(name: string): unknown {
    }

    out(name: string, value: unknown): unknown {
    }
}

```
