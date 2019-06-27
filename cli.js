#!/usr/bin/env node

const program = require('commander');
/**
 * @desc 子进程
 * @desc .exec 衍生一个 shell 并在该 shell 中运行命令，当完成时则将 stdout 和 stderr 传给回调函数。
 */
const exec = require('child_process').exec;

program
  .option('-a, --add', 'git add .')
  .option('-m, --commit <>', 'git commit')
  .parse(process.argv);

// TODO 需要完善
if (program.add) {
  // exec('git add .');
}

if (program.commit) {
  exec('git add .');
  exec('git commit -m' + program.commit);
}
