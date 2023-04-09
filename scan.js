import liff from '@line/liff';
liff
  .scanCodeV2()
  .then((result) => {
    // result = { value: "" }
  })
  .catch((error) => {
    console.log("error", error);
  });