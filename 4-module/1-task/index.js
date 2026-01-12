function makeFriendsList(friends) {
  const list = document.createElement("ul");
  for (const friend of friends) {
    const listItem = document.createElement("li");
    listItem.innerText = `${friend.firstName} ${friend.lastName}`;
    list.append(listItem);
  }
  return list;
}
