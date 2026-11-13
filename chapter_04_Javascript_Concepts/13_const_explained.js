const BASE_URL = 'https://app.thetestingacademy.com';
// const BASE_URL = "https://app.thetestingacademy.com";
//BASE_URL = "https:/ / staging.thetestingacademy.com";
// TypeError: Assignment to constant variable.

let name = 'pending';
name = 'done';
{
  let name = 'kumar';
}

function say() {
  let name = 'kumar';
}
say();
say();
