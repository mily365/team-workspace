export class UtilDecorators {
  static ComInfos:{[key:string]:any} = {};
  static ComReg(comName: string): ClassDecorator {
    return target => {
      UtilDecorators.ComInfos[comName] = target;
      console.log(UtilDecorators.ComInfos);
    };
  }
  static GetSet():PropertyDecorator {
    return (target:{[key:string]:any}, propertyName: string | symbol) => {
      // @ts-ignore
      let realValue = target[propertyName];
      Object.defineProperty(target, propertyName, {
        set(value: any) {
          if (value != realValue) {
            console.log("set is called.....",value)
            realValue = value;
          }
        },
        get() {
          return realValue;
        }
      })
    }
  }


  static log(
    target: Object,
    propertyName: string,
    propertyDesciptor: PropertyDescriptor
  ) {
    // 获取被修饰前的方法
    const original = propertyDesciptor.value;

    propertyDesciptor.value = function (...params: any[]) {
      // 执行前日志
      console.log(`${propertyName} params`, params);
      // 执行真正的方法
      const result = original.apply(this, params);
      // 执行后日志
      console.log(`${propertyName} result`, result);
      // 返回结果
      return result;
    }

    // 返回描述对象
    return propertyDesciptor;
  };
}
