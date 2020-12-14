# sql 学习笔记

```sql
-- 条件查询
SELECT * from tb_users WHERE tel='13438888888'

-- 查询icon数据
SELECT * FROM bill_type_icon;

-- 查询账单数据
SELECT * from bill_money_list_log,bill_detail_list  WHERE 1234=bill_detail_list.bill_money_log_id
```
