function foo() {
  throw new Error("?? :D ??")
}

function bar() {
  return "bar" + foo()
}

function far() {
  return "far" + bar()
}

function boo() {
  console.log(far());
}

function main() {
  boo()
}
main()

