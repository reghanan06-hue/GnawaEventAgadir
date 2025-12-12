import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { Stack } from "expo-router";
import React from "react";

const queryClient = new QueryClient();

export default function _layout() {
  return (
    <QueryClientProvider client={queryClient}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen
          name="artist"
          options={{ headerTitle: "the list of artists", headerShown: true }}
        />
        <Stack.Screen
          name="id"
          // options={{ headerTitle: "the detail of artist ", headerShown: true }}
          options={{ headerTitle: "the detail of artist ", headerShown: true }}
        />
      </Stack>
    </QueryClientProvider>
  );
}
