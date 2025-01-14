"use server";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface SongResponse {
  success: boolean;
  data?: {
    id: string;
    title: string;
    artist: string;
    theme: string;
  }[];
  error?: string;
}

export async function getSongs(): Promise<SongResponse> {
  try {
    const songs = await prisma.song.findMany({
      select: {
        id: true,
        title: true,
        artist: true,
        theme: {
          select: {
            name: true,
          },
        },
      },
      orderBy: {
        title: "asc",
      },
    });
    const filteredSongs = songs.map((song) => ({
      id: song.id,
      title: song.title,
      artist: song.artist,
      theme: song.theme.name,
    }));

    return {
      success: true,
      data: filteredSongs,
    };
  } catch (error) {
    console.error("Error fetching songs:", error);

    if (error instanceof Error && "code" in error) {
      const prismaError = error as {
        code: string;
        meta?: { target?: string[] };
      };

      if (prismaError.code === "P2002") {
        return {
          success: false,
          error: `A unique constraint violation occurred. Field: ${
            prismaError.meta?.target?.[0] || "unknown"
          }`,
        };
      }
    }

    return {
      success: false,
      error: "An error occurred while fetching songs. Please try again later.",
    };
  } finally {
    await prisma.$disconnect();
  }
}
