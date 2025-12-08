import React, { useState, useEffect } from "react";
import { View, TextInput, FlatList, Text } from "react-native";
import useDebounce from "../Custom/Hook/DebounceHook";

export default function SearchWithPagination() {
  const DATA = Array.from({ length: 200 }).map((_, i) => `Item ${i + 1}`);

  const [displayList, setDisplayList] = useState<string[]>([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 500);

  const PAGE_SIZE = 20;

  const loadMore = () => {
    setPage(prev => prev + 1);
  };

  // Reset page when search changes
  useEffect(() => {
    setPage(1);
  }, [debouncedSearch]);

  useEffect(() => {
    const filtered = DATA.filter(item =>
      item.toLowerCase().includes(debouncedSearch.toLowerCase())
    );
    setDisplayList(filtered.slice(0, page * PAGE_SIZE));
  }, [page, debouncedSearch]);

  return (
    <View>
      <TextInput
        placeholder="Search"
        style={{ padding: 10, borderWidth: 1 }}
        onChangeText={setSearch}
      />
      <FlatList
        data={displayList}
        renderItem={({ item }) => <Text style={{ padding: 8 }}>{item}</Text>}
        keyExtractor={(item, index) => index.toString()}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
      />
    </View>
  );
}
