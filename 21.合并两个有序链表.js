/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let result = new ListNode('head');
    let temp = result;
    while(l1 && l1.val != null || (l2 && l2.val != null)){
        if(!l1 || l1.val == null){
            temp.next = new ListNode(l2.val);
            l2 = l2.next;
        } else if(!l2 || l2.val == null){
            temp.next = new ListNode(l1.val);
            l1 = l1.next;
        } else if(l1.val <= l2.val){
            temp.next = new ListNode(l1.val)
            l1 = l1.next;
        } else {
            temp.next = new ListNode(l2.val);
            l2 = l2.next
        }
        temp = temp.next;
    }
    return result.next
};
// @lc code=end

