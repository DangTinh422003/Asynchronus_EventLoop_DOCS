function foo() {
  return "foo"
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