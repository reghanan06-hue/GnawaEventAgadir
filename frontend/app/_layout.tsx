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
          options={{ headerTitle: "The events ", headerShown: true }}
        />

        <Stack.Screen
          name="Booking"
          options={{ headerTitle: "Reservation  ", headerShown: true }}
        />
      </Stack>
    </QueryClientProvider>
  );
}
