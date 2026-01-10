"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const videoItems = [
  {
    id: "p150Overview",
    youtubeId: "7928dhrD0qs",
    thumbnail: "/images/videos/p150-max-overview.webp",
    categoryKey: "product",
  },
  {
    id: "calibration",
    youtubeId: "AxwDRGtp_HA",
    thumbnail: "/images/videos/calibration-tutorial.webp",
    categoryKey: "tutorial",
  },
  {
    id: "spraying",
    youtubeId: "5Nco_hkCPsU",
    thumbnail: "/images/videos/spraying-practices.webp",
    categoryKey: "tutorial",
  },
  {
    id: "r150Action",
    youtubeId: "AAuAni3d9wA",
    thumbnail: "/images/videos/r150-action.webp",
    categoryKey: "product",
  },
  {
    id: "cloudSetup",
    youtubeId: "JHCcoLvPBvw",
    thumbnail: "/images/videos/cloud-setup.webp",
    categoryKey: "tutorial",
  },
  {
    id: "maintenance",
    youtubeId: "y7v0gqrIiZk",
    thumbnail: "/images/videos/maintenance.webp",
    categoryKey: "tutorial",
  },
];

export default function VideosTutorialsPage() {
  const t = useTranslations("videosTutorials");
  const [filter, setFilter] = useState<string>("all");
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  const categories = ["all", "product", "tutorial"];

  const filteredVideos = filter === "all"
    ? videoItems
    : videoItems.filter(v => v.categoryKey === filter);

  const currentVideo = videoItems.find(v => v.id === playingVideo);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-navy py-24">
        <div className="container-main">
          <span className="inline-block px-4 py-1 bg-brand-red rounded-full text-white text-sm font-medium mb-4">
            {t("badge")}
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            {t("title")}
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            {t("description")}
          </p>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-white border-b">
        <div className="container-main">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === category
                    ? "bg-brand-red text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {t(category)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Videos Grid */}
      <section className="section bg-gray-50">
        <div className="container-main">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVideos.map((video) => (
              <div
                key={video.id}
                className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all"
              >
                <div className="aspect-video relative bg-gray-200">
                  <Image
                    src={video.thumbnail}
                    alt={t(`videos.${video.id}.title`)}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                  {/* Play Button Overlay */}
                  <button
                    onClick={() => setPlayingVideo(video.id)}
                    className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors cursor-pointer"
                  >
                    <div className="w-16 h-16 rounded-full bg-brand-red flex items-center justify-center group-hover:scale-110 transition-transform">
                      <svg
                        className="w-8 h-8 text-white ml-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </button>
                  {/* Duration Badge */}
                  <span className="absolute bottom-3 right-3 px-2 py-1 bg-black/70 text-white text-xs rounded">
                    {t(`videos.${video.id}.duration`)}
                  </span>
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-brand-red/10 text-brand-red text-xs font-medium rounded-full mb-3">
                    {t(`videos.${video.id}.category`)}
                  </span>
                  <h3 className="text-lg font-bold text-navy mb-2 group-hover:text-brand-red transition-colors">
                    {t(`videos.${video.id}.title`)}
                  </h3>
                  <p className="text-gray-600 text-sm">{t(`videos.${video.id}.description`)}</p>
                  <a
                    href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-4 text-brand-red font-medium hover:underline"
                  >
                    {t("watchNow")}
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {playingVideo && currentVideo && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setPlayingVideo(null)}
        >
          <div
            className="relative w-full max-w-5xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={`https://www.youtube.com/embed/${currentVideo.youtubeId}?autoplay=1&rel=0`}
              className="absolute inset-0 w-full h-full rounded-lg"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <button
            onClick={() => setPlayingVideo(null)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
          >
            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}
    </>
  );
}
