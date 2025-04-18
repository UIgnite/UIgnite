import {cn} from '@/lib/utils';
import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
  MouseEvent,
  useReducer,
} from 'react';

export interface VideoPlayerProps {
  thumbnailUrl?: string;
  muted?: boolean;
  autoplay?: boolean;
  loop?: boolean;
  src: string;
  srcType?: string;
  defaultVolume?: number;
  className?: string;
}

enum SpeedReducerActionKind {
  INCREASE = 'INCREASE',
  DECREASE = 'DECREASE',
}

interface SpeedReducerActionT {
  type: SpeedReducerActionKind;
}

interface SpeedReducerStateT {
  speed: number;
}

function speedReducer(
  state: SpeedReducerStateT,
  action: SpeedReducerActionT
): SpeedReducerStateT {
  const {type} = action;
  switch (type) {
    case SpeedReducerActionKind.INCREASE:
      return {
        ...state,
        speed: state.speed + 1,
      };
    case SpeedReducerActionKind.DECREASE:
      return {
        ...state,
        speed: state.speed >= 0 ? state.speed - 1 : state.speed,
      };
    default:
      return state;
  }
}

function VideoPlayer({
  src,
  thumbnailUrl,
  muted = false,
  autoplay = false,
  loop = false,
  srcType,
  defaultVolume = 20,
  className = '',
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const progressRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [played, setPlayed] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [fullScreenMode, setFullScreenMode] = useState(false);
  const [isMuted, setIsMuted] = useState(muted);

  const [currentTime, setCurrentTime] = useState(0);
  const [videoDuration, setVideoDuration] = useState(0);

  const [volumeRange, setVolumeRange] = useState(defaultVolume);

  const [volumeBtnHovered, setVolumeBtnHovered] = useState(false);
  const [settingsBtnHovered, setSettingsBtnHovered] = useState(false);

  const [state, dispatch] = useReducer(speedReducer, {speed: 1});

  const handleTooglePlaying = useCallback(() => {
    setPlayed(true);
    if (videoRef.current) {
      if (!playing) videoRef.current.play();
      else videoRef.current.pause();
    }
  }, [playing, videoRef.current]);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (autoplay && !played) timeout = setTimeout(handleTooglePlaying, 0);

    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [autoplay, videoRef.current, played]);

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
  }, [fullScreenMode, videoRef.current]);

  const handleCurrentTimeChangeClick = useCallback(
    (evt: MouseEvent<HTMLDivElement>) => {
      const box = progressRef.current?.getBoundingClientRect();
      if (videoRef.current && box) {
        const time =
          (((evt.clientX - box.x) / box.width) * 100 * videoDuration) / 100;
        videoRef.current.currentTime = time;
      }
    },
    [videoDuration, videoRef.current, progressRef]
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
  }, [fullScreenMode, containerRef, setFullScreenMode]);

  React.useEffect(() => {
    if (videoRef.current) videoRef.current.volume = volumeRange / 100;
  }, [volumeRange]);

  useEffect(() => {
    if (videoRef.current) videoRef.current.playbackRate = state.speed;
  }, [state.speed]);

  return (
    <div
      ref={containerRef}
      style={{
        width: 741,
        height: 416,
      }}
      className={cn(
        'relative group shadow-xl rounded overflow-hidden',
        className
      )}
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
        muted={isMuted}
        loop={loop}
        autoPlay={autoplay}
        className="w-full h-full"
      >
        <source src={src} type={srcType ?? 'video/mp4'} />
      </video>
      {thumbnailUrl ? (
        <img
          hidden={played}
          className="w-full h-full object-cover"
          src={thumbnailUrl || 'https://picsum.photos/seed/picsum/1482/812'}
          alt="Video thumbnail"
        />
      ) : null}
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
                  className="bg-neutral-100 rounded-md h-full"
                />
              </div>
            </div>
          </div>

          {/* Volume */}
          <div
            onMouseEnter={() => setVolumeBtnHovered(true)}
            onMouseLeave={() => setVolumeBtnHovered(false)}
            className="px-1 py-1 cursor-pointer relative flex items-center"
          >
            <div
              style={{
                opacity: volumeBtnHovered ? 1 : 0,
              }}
              className="absolute transition-opacity opacity-0 -top-24 left-0 z-30 right-0 flex"
            >
              <div className="h-full w-full bg-black/90 flex flex-col items-center justify-center relative rounded-md py-3">
                <input
                  value={volumeRange}
                  onChange={(e) => {
                    if (+e.target.value > 0 && !isMuted) setIsMuted(false);
                    setVolumeRange(+e.target.value);
                  }}
                  min={1}
                  max={100}
                  type="range"
                  className="h-16 rounded-md slider"
                  style={{
                    writingMode: 'sideways-lr',
                    appearance: 'none',
                    background: `linear-gradient(to top, #f5f5f5 0%, #f5f5f5 ${volumeRange}%, #a1a1a1 ${volumeRange}%, #a1a1a1 100%)`,
                    width: '4px',
                  }}
                />
              </div>
            </div>
            <button
              onClick={() =>
                volumeRange == 0 ? setVolumeRange(20) : setVolumeRange(0)
              }
              className="cursor-pointer my-auto"
            >
              {volumeRange > 0 ? (
                <svg
                  viewBox="0 0 24 24"
                  className="size-5 fill-neutral-100 dark:fill-neutral-100"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20 12c0 3.728-2.55 6.86-6 7.748V21.8c4.564-.927 8-4.962 8-9.8 0-4.838-3.436-8.873-8-9.8v2.052c3.45.888 6 4.02 6 7.748zm-2 0a6.002 6.002 0 00-4-5.659v2.194c1.196.692 2 1.984 2 3.465 0 1.48-.804 2.773-2 3.465v2.194c2.33-.824 4-3.047 4-5.659zM6.586 8.004H4a2 2 0 00-2 2v4a2 2 0 002 2h2.586l3.707 4.707c.63.63 1.707.184 1.707-.707v-16c0-.89-1.077-1.337-1.707-.707L6.586 8.004z"
                  />
                </svg>
              ) : (
                <svg
                  viewBox="0 0 24 24"
                  className="size-5 fill-neutral-100 dark:fill-neutral-100"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M14 2.20001C15.1263 2.42863 16.1838 2.84654 17.1379 3.41908L15.5513 4.82943C15.0606 4.58595 14.5414 4.39136 14 4.25201V2.20001ZM21.1249 7.90287L19.5378 9.31361C19.8371 10.1532 20 11.0576 20 12C20 15.7277 17.4505 18.8599 14 19.7479V21.7999C18.5645 20.8734 22 16.8379 22 12C22 10.5401 21.6872 9.15325 21.1249 7.90287ZM12 4.00396V7.98614L3.17811 15.8278C2.48346 15.5143 2 14.8156 2 14.004V10.004C2 8.89939 2.89543 8.00396 4 8.00396H6.58579L10.2929 3.29685C10.9229 2.66689 12 3.11305 12 4.00396ZM12 10.662L5.99037 16.004L2.33565 19.2526C1.92286 19.6195 1.88568 20.2516 2.2526 20.6644C2.61952 21.0772 3.25159 21.1143 3.66437 20.7474L21.6644 4.74742C22.0772 4.3805 22.1143 3.74843 21.7474 3.33565C21.3805 2.92286 20.7484 2.88568 20.3356 3.2526L12 10.662ZM10.2929 20.7111L8.81985 18.8407L12 16.0139V20.004C12 20.8949 10.9229 21.341 10.2929 20.7111ZM14 15.4648C15.0633 14.8498 15.8172 13.7593 15.971 12.4841L17.8778 10.7892C17.9579 11.1803 18 11.5852 18 12C18 14.6124 16.3304 16.8349 14 17.6586V15.4648Z"
                  ></path>
                </svg>
              )}
            </button>
          </div>

          {/* Captions */}
          <div className="px-1 py-1 cursor-pointer" data-ctrltype="captions">
            <button
              onClick={() =>
                volumeRange == 0 ? setVolumeRange(20) : setVolumeRange(0)
              }
              className="flex items-center justify-center cursor-pointer"
            >
              <svg
                viewBox="0 0 24 24"
                className="fill-neutral-100 size-5 dark:fill-neutral-100"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M20 6H4v12h16V6zM4 4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2H4zm7.486 8.824c-.112.697-.4 1.273-.855 1.714-.463.445-1.062.671-1.778.671-.882 0-1.588-.303-2.097-.903C6.254 13.713 6 12.897 6 11.878c0-1.102.288-1.966.856-2.571C7.36 8.772 8.01 8.5 8.784 8.5c1.03 0 1.799.365 2.284 1.085.263.4.407.81.428 1.216l.01.18H9.967l-.035-.127c-.07-.27-.16-.471-.265-.6-.186-.226-.457-.335-.834-.335-.374 0-.663.158-.883.484-.23.343-.348.845-.348 1.494 0 .643.121 1.126.36 1.433.232.3.517.445.87.445.364 0 .632-.12.82-.371.107-.138.198-.357.272-.647l.031-.128H11.517l-.031.195zm5.628 1.714c.455-.44.743-1.017.854-1.714l.032-.195h-1.56l-.032.128c-.074.29-.165.509-.273.647-.187.25-.456.37-.82.37-.352 0-.636-.145-.868-.444-.239-.307-.361-.79-.361-1.433 0-.649.117-1.15.35-1.494.217-.326.507-.484.881-.484.376 0 .649.11.833.335.106.129.196.33.267.6l.033.126h1.538l-.008-.179c-.023-.407-.166-.816-.43-1.216-.485-.72-1.252-1.085-2.283-1.085-.776 0-1.424.272-1.928.807-.568.605-.856 1.47-.856 2.57 0 1.02.254 1.836.755 2.43.51.599 1.215.902 2.098.902.716 0 1.314-.226 1.778-.671z"
                />
              </svg>
            </button>
          </div>

          {/* Settings */}
          <div
            onMouseEnter={() => setSettingsBtnHovered(true)}
            onMouseLeave={() => setSettingsBtnHovered(false)}
            className="px-1 py-1 cursor-pointer relative parent-settings"
          >
            <div
              style={{
                opacity: settingsBtnHovered ? 1 : 0,
              }}
              className="absolute transition-opacity opacity-0 bottom-9 w-20 h-8 z-20 -right-7 flex"
            >
              <div className="h-full w-full bg-black/90 gap-x-2 flex text-xs items-center px-2 justify-center relative rounded-md py-3">
                <button
                  onClick={() =>
                    dispatch({type: SpeedReducerActionKind.DECREASE})
                  }
                  className="cursor-pointer hover:bg-neutral-600 py-2 px-2 rounded-md"
                >
                  <svg className="size-2 -rotate-90" viewBox="0 -4.5 24 24">
                    <path
                      d="M23.345 11.39L13.615.6a2.087 2.087 0 00-1.631-.61 2.085 2.085 0 00-1.63.61L.624 11.39a2.136 2.136 0 000 3.01c.828.83 2.169.83 2.997 0l8.363-9.27 8.365 9.27c.827.83 2.169.83 2.996 0s.827-2.18 0-3.01"
                      fill="#fff"
                      fillRule="evenodd"
                    />
                  </svg>
                </button>
                <div>{state.speed}x</div>
                <button
                  onClick={() =>
                    dispatch({type: SpeedReducerActionKind.INCREASE})
                  }
                  className="cursor-pointer hover:bg-neutral-600 py-2 px-2 rounded-md"
                >
                  <svg className="size-2 rotate-90" viewBox="0 -4.5 24 24">
                    <path
                      d="M23.345 11.39L13.615.6a2.087 2.087 0 00-1.631-.61 2.085 2.085 0 00-1.63.61L.624 11.39a2.136 2.136 0 000 3.01c.828.83 2.169.83 2.997 0l8.363-9.27 8.365 9.27c.827.83 2.169.83 2.996 0s.827-2.18 0-3.01"
                      fill="#fff"
                      fillRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <svg className="fill-neutral-100 size-5 dark:fill-neutral-100">
              <path
                clipRule="evenodd"
                d="M9.167 1.667c-.92 0-1.667.746-1.667 1.667v1.394a5.828 5.828 0 00-.815.472L5.47 4.498a1.666 1.666 0 00-2.27.612l-.835 1.447a1.664 1.664 0 00.605 2.271l1.215.702a5.912 5.912 0 000 .94l-1.215.702a1.664 1.664 0 00-.605 2.272L3.2 14.89a1.666 1.666 0 002.27.613l1.215-.702c.257.178.53.336.815.471v1.395c0 .92.746 1.667 1.667 1.667h1.666c.92 0 1.667-.747 1.667-1.667v-1.395c.285-.135.557-.293.815-.471l1.215.702c.788.455 1.81.184 2.269-.613l.835-1.446a1.664 1.664 0 00-.604-2.272l-1.215-.701a5.907 5.907 0 000-.941l1.215-.702a1.664 1.664 0 00.604-2.271L16.8 5.11a1.666 1.666 0 00-2.27-.612l-1.214.702a5.824 5.824 0 00-.815-.472V3.334c0-.92-.746-1.667-1.667-1.667H9.167zM12.5 10a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
              />
            </svg>
          </div>

          {/* Fullscreen */}
          <button
            onClick={handleToogleFullScreenMode}
            className="px-1 py-1 cursor-pointer"
            data-ctrltype="fullscreen"
          >
            <svg
              viewBox="0 0 512 512"
              xmlSpace="preserve"
              className="size-4 fill-neutral-100 dark:fill-neutral-100"
            >
              <path d="M345.495 0l49.012 49.023-106.584 106.584 68.461 68.479 106.603-106.593 49.004 49.022V0zM155.615 287.914L49.022 394.507.009 345.494V512h166.506l-49.022-49.022 106.594-106.603zM356.384 287.914l-68.461 68.461 106.584 106.603L345.495 512h166.496V345.485l-49.014 49.022zM166.505 0H.009v166.506l49.013-49.013 106.593 106.593 68.472-68.479L117.501 49.023z" />{' '}
              {/* trimmed for brevity */}
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export {VideoPlayer};
