#!/usr/bin/env ts-node
{
  const a = parseInt(process.argv[2]);
  const b = parseInt(process.argv[3]);

  if (Number.isNaN(a) || Number.isNaN(b)) {
    console.log('输入不合法');
    process.exit(1); // 1 是返回值，成功则返回 0， 失败则返回非 0。
  }
  console.log(a + b);
  process.exit(0);
}
