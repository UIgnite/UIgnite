import {useCallback, useEffect, useRef, useState, MouseEvent} from 'react';

export interface VideoPlayerProps {
  thumbnailUrl?: string;
  muted?: boolean;
  autoplay?: boolean;
}

export default function VideoPlayer({
  thumbnailUrl,
  muted = false,
  autoplay = false,
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const progressRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [played, setPlayed] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [fullScreenMode, setFullScreenMode] = useState(false);

  const [currentTime, setCurrentTime] = useState(0);
  const [videoDuration, setVideoDuration] = useState(0);

  //   const [volumeBtnHovered, setVolumeBtnHovered] = useState(false);

  const handleTooglePlaying = useCallback(() => {
    setPlayed(true);
    if (videoRef.current) {
      if (!playing) videoRef.current.play();
      else videoRef.current.pause();
    }
  }, [playing]);

  useEffect(() => {
    const controller = new AbortController();

    if (videoRef.current) {
      videoRef.current.addEventListener('play', () => setPlaying(true), {
        signal: controller.signal,
      });

      videoRef.current.addEventListener('pause', () => setPlaying(false), {
        signal: controller.signal,
      });

      videoRef.current.addEventListener(
        'fullscreenchange',
        () => setFullScreenMode(!fullScreenMode),
        {signal: controller.signal}
      );

      videoRef.current.addEventListener(
        'contextmenu',
        (evt) => evt.preventDefault(),
        {signal: controller.signal}
      );

      videoRef.current.addEventListener(
        'timeupdate',
        () => {
          if (videoRef.current) {
            setCurrentTime(videoRef.current.currentTime);
            setVideoDuration(videoRef.current.duration);
          }
        },
        {signal: controller.signal}
      );
    }

    return () => {
      controller.abort();
    };
  }, [fullScreenMode]);

  const handleCurrentTimeChangeClick = useCallback(
    (evt: MouseEvent<HTMLDivElement>) => {
      const box = progressRef.current?.getBoundingClientRect();
      if (videoRef.current && box) {
        const time =
          (((evt.clientX - box.x) / box.width) * 100 * videoDuration) / 100;
        videoRef.current.currentTime = time;
      }
    },
    [videoDuration]
  );

  const handleToogleFullScreenMode = useCallback(() => {
    if (containerRef.current) {
      if (!fullScreenMode) {
        containerRef.current.requestFullscreen();
      } else {
        document.exitFullscreen();
      }
      setFullScreenMode(!fullScreenMode);
    }
  }, [fullScreenMode]);

  return (
    <div
      ref={containerRef}
      style={{
        width: 741,
        height: 416,
      }}
      className="relative group shadow-xl rounded overflow-hidden"
      data-played={played}
    >
      <style>
        {`
            .parent-volume:hover .child-volume {
              opacity: 1;
              height: 20px;
            }
            .parent-progress:hover .child-progress {
              height: 8px;
            }
          `}
      </style>
      <video
        preload="true"
        ref={videoRef}
        hidden={!played}
        muted={muted}
        autoPlay={autoplay}
        className="w-full h-full"
      >
        <source
          src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
          type="video/mp4"
        />
      </video>
      <img
        hidden={played}
        className="w-full h-full object-cover"
        src={thumbnailUrl || 'https://picsum.photos/seed/picsum/1482/812'}
        alt="Video thumbnail"
      />
      <div onClick={handleTooglePlaying} className="z-2 absolute inset-0" />

      {/* Controls */}
      <div
        style={{
          opacity: !played ? 1 : undefined,
        }}
        data-type="controlls"
        className="absolute bottom-2 right-2 left-2 z-10 h-8 flex items-center gap-x-2 group-hover:opacity-100 duration-300 transition-opacity opacity-0 ease-in-out"
      >
        {/* Play / Pause */}
        <button
          onClick={handleTooglePlaying}
          className="px-4 py-1 bg-black/90 rounded cursor-pointer hover:fill-black/90 fill-neutral-100 hover:bg-white/90"
        >
          {playing ? (
            <svg className="size-6">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8 4a2 2 0 00-2 2v12a2 2 0 104 0V6a2 2 0 00-2-2zm8 0a2 2 0 00-2 2v12a2 2 0 104 0V6a2 2 0 00-2-2z"
              />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" className="size-6">
              <path d="M19 12a1 1 0 01-.496.864l-12 7A1 1 0 015 19V5a1 1 0 011.504-.864l12 7A1 1 0 0119 12z" />
            </svg>
          )}
        </button>

        {/* Progress Bar */}
        <div className="w-full bg-black/90 h-full px-1 rounded flex gap-x-0.5 items-center">
          <div className="px-2 w-full">
            <div
              onClick={handleCurrentTimeChangeClick}
              ref={progressRef}
              className="w-full h-full parent-progress flex items-center cursor-pointer"
            >
              <div className="w-full h-1 bg-neutral-800 overflow-hidden child-progress rounded-md transition-all">
                <div
                  style={{
                    width:
                      currentTime === 0
                        ? '0%'
                        : `${(currentTime / videoDuration) * 100}%`,
                  }}
                  className="bg-neutral-100 h-full"
                />
              </div>
            </div>
          </div>

          {/* Volume */}
          <button className="px-1 py-1 cursor-pointer" data-ctrltype="volume">
            <svg viewBox="0 0 24 24" className="size-5 fill-neutral-100">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20 12c0 3.728-2.55 6.86-6 7.748V21.8c4.564-.927 8-4.962 8-9.8 0-4.838-3.436-8.873-8-9.8v2.052c3.45.888 6 4.02 6 7.748zm-2 0a6.002 6.002 0 00-4-5.659v2.194c1.196.692 2 1.984 2 3.465 0 1.48-.804 2.773-2 3.465v2.194c2.33-.824 4-3.047 4-5.659zM6.586 8.004H4a2 2 0 00-2 2v4a2 2 0 002 2h2.586l3.707 4.707c.63.63 1.707.184 1.707-.707v-16c0-.89-1.077-1.337-1.707-.707L6.586 8.004z"
              />
            </svg>
          </button>

          {/* Captions */}
          <button className="px-1 py-1 cursor-pointer" data-ctrltype="captions">
            <svg viewBox="0 0 24 24" className="fill-neutral-100 size-5">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="..." // trimmed for brevity
              />
            </svg>
          </button>

          {/* Settings */}
          <button
            className="px-1 py-1 cursor-pointer relative parent-settings"
            data-ctrltype="settings"
          >
            <svg className="fill-neutral-100 size-5">
              <path
                clipRule="evenodd"
                d="..." // trimmed for brevity
              />
            </svg>
          </button>

          {/* Fullscreen */}
          <button
            onClick={handleToogleFullScreenMode}
            className="px-1 py-1 cursor-pointer"
            data-ctrltype="fullscreen"
          >
            <svg
              viewBox="0 0 512 512"
              xmlSpace="preserve"
              className="size-4 fill-neutral-100"
            >
              <path d="..." /> {/* trimmed for brevity */}
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
