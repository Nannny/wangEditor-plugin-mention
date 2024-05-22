/**
 * @description render elem
 * @author wangfupeng
 */

import { h, VNode } from 'snabbdom'
import { DomEditor, IDomEditor, SlateElement } from '@wangeditor/editor'
import { MentionElement } from './custom-types'

function renderMention(elem: SlateElement, children: VNode[] | null, editor: IDomEditor): VNode {
  // 当前节点是否选中
  const selected = DomEditor.isNodeSelected(editor, elem)
  const { value = '', info } = elem as MentionElement
  const { href } = info
  let vhref

  // 构建 vnode
  const vnode = h(
    'span',
    {
      props: {
        contentEditable: false, // 不可编辑
      },
      style: {
        marginLeft: '3px',
        marginRight: '3px',
        backgroundColor: 'var(--w-e-textarea-slight-bg-color)',
        border: selected // 选中/不选中，样式不一样
          ? '2px solid var(--w-e-textarea-selected-border-color)' // wangEditor 提供了 css var https://www.wangeditor.com/v5/theme.html
          : '2px solid transparent',
        borderRadius: '3px',
        padding: '0 3px',
      },
    },
    `@${value}` // 如 `@张三`
  )
  if (href) {
    vhref = h(
      'a',
      {
        props: {
          contentEditable: false, // 不可编辑
          target: '_blank',
          href: href,
        },
      },
      [vnode]
    )
  }
  return vhref ? vhref : vnode
}

const conf = {
  type: 'mention', // 节点 type ，重要！！！
  renderElem: renderMention,
}

export default conf
