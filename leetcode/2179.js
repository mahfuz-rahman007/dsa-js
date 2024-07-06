function goodTriplets(nums1, nums2) {
  // generate as many triplets, from both of them
  // must follow the order they are
  // triplets must be all unique number

  let triplets = new Set();

  let first = 0,
    second = 1,
    third = 2;

  while (first <= nums1.length - 3) {
    let text = nums1[first] + "," + nums1[second] + "," + nums1[third];

    if (!triplets.has(text)) {
      triplets.add(text);
    }

    let n2_tx1 = nums2[first] + "," + nums2[second] + "," + nums2[third];
    let n2_tx2 = nums2[first] + "," + nums2[third] + "," + nums2[second];
    let n2_tx3 = nums2[second] + "," + nums2[first] + "," + nums2[third];
    let n2_tx4 = nums2[second] + "," + nums2[third] + "," + nums2[first];
    let n2_tx5 = nums2[third] + "," + nums2[second] + "," + nums2[first];
    let n2_tx6 = nums2[third] + "," + nums2[first] + "," + nums2[second];

    if (
      !(
        triplets.has(n2_tx1) ||
        triplets.has(n2_tx2) ||
        triplets.has(n2_tx3) ||
        triplets.has(n2_tx4) ||
        triplets.has(n2_tx5) ||
        triplets.has(n2_tx6)
      )
    ) {
      triplets.add(n2_tx1);
    }

    if (third !== nums1.length - 1) {
      third++;
    } else if (second !== nums1.length - 2) {
      second++;
      third = second + 1;
    } else if (first !== nums1.length - 3) {
      first++;
      second = first + 1;
      third = first + 2;
    } else {
      first++;
    }
  }

  let count = 0;

  for (let key of triplets) {
    let array = key.split(",").map((a) => Number(a));

    if (
      nums1.indexOf(array[0]) < nums1.indexOf(array[1]) &&
      nums1.indexOf(array[1]) < nums1.indexOf(array[2]) &&
      nums2.indexOf(array[0]) < nums2.indexOf(array[1]) &&
      nums2.indexOf(array[1]) < nums2.indexOf(array[2])
    ) {
        count++;
    }
  }

  console.log(count);
}

goodTriplets([2, 0, 1, 3], [0, 1, 2, 3]);
goodTriplets([4, 0, 1, 3, 2], [4, 1, 0, 2, 3]);
