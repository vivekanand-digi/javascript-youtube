const post = {
    id: 1,
    title: 'JavaScript',
    body: 'Fav language',
  };
  
  // Convert to JSON string
  const str = JSON.stringify(post);
  
  console.log(str.id);
  
  // Parse JSON
  const obj = JSON.parse(str);
  
  console.log(obj.id);
  
  // JSON & arrays
  const posts = [
    {
      id: 1,
      title: 'JavaScript',
      body: 'Fav language',
    },
    {
      id: 2,
      title: 'hello world',
      body: 'good morning',
    },
  ];
  
  const str2 = JSON.stringify(posts);
  
  console.log(str2);
