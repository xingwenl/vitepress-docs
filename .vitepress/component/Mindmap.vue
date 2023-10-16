<template>
  <div>
    <Mindmap :config="the.config" :data="the.data" @onEvent="mindmapEvent" />
  </div>
</template>
<script lang="ts" setup>
// 引入样式
import "quick-svg/styles/mindmap.less";
// 引入组件
import { Mindmap } from "quick-svg";

defineProps<{
  // data
}>()

const the = {
  config: {
    line: 2,
    lineColor: "#9299bb",
  },
  data: [
    {
      title: "脑图节点",
      shape: "rect",
      children: [
        { title: "初始配置" },
        {
          title: "<b>传入<b>参数",
          color: "#00bb00",
          lineColor: "#00bb00",
          children: [
            {
              lineColor: "#00bb00",
              title: "config 显示配置ui",
            },
            {
              lineColor: "#00bb00",
              title: "data 脑图数组",
              children: [{ title: "title 标题" }, { title: "children 子节点" }],
            },
          ],
        },
        {
          title: "onEvent 事件指令cmd",
          color: "white",
          shape: "rect",
          line: 3,
          lineColor: "red",
          bgColor: "red",
          children: [
            {
              title: "init 初始化返回",
              color: "red",
              line: 3,
              lineColor: "red",
              children: [
                { title: "cmd 事件指令" },
                { title: "data 脑图结构数组" },
                { title: "bind 回调更新脑图", lineColor: "red" },
              ],
            },
            { title: "dot 节点点击事件" },
            { title: "text 标题点击事件" },
          ],
        },
      ],
    },
  ],
};

/**
 * 递归取出对象当前对象
 * @param {*} key 节点规则 数组.序号
 * @returns
 */
const getItemByKey = (key, data) => {
  return key.split(".").reduce((o, i) => {
    //  console.log(i, o.title)
    if (o.children) {
      // 从子节点查询
      return o.children[i];
    } else {
      // 直接取出
      return o[i];
    }
  }, data);
};

/** 脑图更新事件 */
let mindmapBind;

/**
 * 脑图事件
 */
const mindmapEvent = (resp) => {
  // console.log(resp.cmd, resp.node)
  switch (resp.cmd) {
    case "init": //组件初始化
      // 缓存脑图回调绑定方法
      mindmapBind = resp.bind;
      break;
    case "dot": //节点事件
      const _item = getItemByKey(resp.node.key, the.data);
      // 显示或隐藏
      _item.hide = !_item.hide;
      // 整体更新
      mindmapBind();
      break;
    case "text": //标题点击触发
      {
        const _item = getItemByKey(resp.node.key, the.data);
        if (_item) {
          // 编辑标题
          _item.title = "musss";
          // 只更新指定序号的脑图标题
          mindmapBind({
            cmd: resp.cmd,
            index: resp.node.index,
            data: { title: _item.title },
          });
        }
      }
      break;
  }
};
</script>
