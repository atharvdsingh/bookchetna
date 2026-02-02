
import type { roomTypeForCardWithName } from "@/types/databaseRoutesType";   
import { api } from "@/lib/axios";

export async function fetchPublicRooms(
  offset: number,
  limit: number
): Promise<roomTypeForCardWithName[]> {
  try {
    const res = await api.get(
      `/room/public?offset=${offset}&limit=${limit}`
    );
    console.log(res.data)
    return res.data.data as roomTypeForCardWithName[];
  } catch (error) {
    console.error("Failed to fetch public rooms", error);
    return [];
  }
}
