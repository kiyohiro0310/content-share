--
-- PostgreSQL database dump
--

\restrict oNGB2HeJBnGkNtbYAGaGgzpmWhDEJzHkZF9WaI6yaLfPz7W0isRwadynvv4HmUd

-- Dumped from database version 14.20 (Homebrew)
-- Dumped by pg_dump version 14.20 (Homebrew)

-- Started on 2026-03-06 03:42:24 AEDT

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 3 (class 2615 OID 2200)
-- Name: public; Type: SCHEMA; Schema: -; Owner: kiyo
--

CREATE SCHEMA public;


ALTER SCHEMA public OWNER TO kiyo;

--
-- TOC entry 3823 (class 0 OID 0)
-- Dependencies: 3
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: kiyo
--

COMMENT ON SCHEMA public IS 'standard public schema';


--
-- TOC entry 824 (class 1247 OID 16535)
-- Name: content_type_enum; Type: TYPE; Schema: public; Owner: kiyo
--

CREATE TYPE public.content_type_enum AS ENUM (
    'youtube',
    'spotify'
);


ALTER TYPE public.content_type_enum OWNER TO kiyo;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 210 (class 1259 OID 16540)
-- Name: content; Type: TABLE; Schema: public; Owner: kiyo
--

CREATE TABLE public.content (
    id integer NOT NULL,
    name character varying(512) NOT NULL,
    type public.content_type_enum NOT NULL,
    url character varying(512),
    image character varying(512) NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    "deleteAt" timestamp without time zone,
    comments jsonb DEFAULT '[]'::jsonb,
    "user" character varying DEFAULT 'This user'::character varying NOT NULL
);


ALTER TABLE public.content OWNER TO kiyo;

--
-- TOC entry 209 (class 1259 OID 16539)
-- Name: content_id_seq; Type: SEQUENCE; Schema: public; Owner: kiyo
--

CREATE SEQUENCE public.content_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.content_id_seq OWNER TO kiyo;

--
-- TOC entry 3824 (class 0 OID 0)
-- Dependencies: 209
-- Name: content_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: kiyo
--

ALTER SEQUENCE public.content_id_seq OWNED BY public.content.id;


--
-- TOC entry 211 (class 1259 OID 16552)
-- Name: user; Type: TABLE; Schema: public; Owner: kiyo
--

CREATE TABLE public."user" (
    id character varying NOT NULL,
    name character varying(512) NOT NULL,
    email character varying(512) NOT NULL
);


ALTER TABLE public."user" OWNER TO kiyo;

--
-- TOC entry 3667 (class 2604 OID 16543)
-- Name: content id; Type: DEFAULT; Schema: public; Owner: kiyo
--

ALTER TABLE ONLY public.content ALTER COLUMN id SET DEFAULT nextval('public.content_id_seq'::regclass);


--
-- TOC entry 3816 (class 0 OID 16540)
-- Dependencies: 210
-- Data for Name: content; Type: TABLE DATA; Schema: public; Owner: kiyo
--

INSERT INTO public.content VALUES (1, 'TBH', 'spotify', 'https://open.spotify.com/track/236P5yLtfnHgTMxevc0q6F', 'https://i.scdn.co/image/ab67616d0000b2735adf49e4d5f1eb30646a2adf', '2026-02-05 04:18:51.25314', '2026-02-05 04:18:51.25314', NULL, '[]', 'This user');
INSERT INTO public.content VALUES (5, 'FULL EPISODE: Dora&#39;s Rescue in Mermaid Kingdom 🧜‍♀️ w/ Maribel the Mermaid! | Dora the Explorer', 'youtube', 'https://www.youtube.com/watch?v=21D7QP9cN9s', 'https://i.ytimg.com/vi/21D7QP9cN9s/default.jpg', '2026-02-05 05:16:06.659418', '2026-02-05 05:16:06.659418', NULL, '[]', 'This user');
INSERT INTO public.content VALUES (10, 'Playing push game doraemon, pop it elektrik, push game challenge, asmr, #popit #toys', 'youtube', 'https://www.youtube.com/watch?v=5L45J6fQY5k', 'https://i.ytimg.com/vi/5L45J6fQY5k/default.jpg', '2026-02-06 02:43:09.570633', '2026-02-06 04:33:33.217311', NULL, '[{"date": "04:33 / Friday, 6th February, 2026", "comment": "hello"}]', 'This user');
INSERT INTO public.content VALUES (11, 'why kenjaku versus yuki is Hillarious #jjk #jujutsukaisen', 'youtube', 'https://www.youtube.com/watch?v=84rfLXJQhu4', 'https://i.ytimg.com/vi/84rfLXJQhu4/default.jpg', '2026-02-06 02:43:31.016959', '2026-02-06 02:43:31.016959', NULL, '[]', 'This user');
INSERT INTO public.content VALUES (12, 'TESTE DA NOVA FÍSICA! ATT ETS 2 1.58 | Scania R500 Graneleiro 2 Eixos com Carvão', 'youtube', 'https://www.youtube.com/watch?v=-XlXV9s9BX8', 'https://i.ytimg.com/vi/-XlXV9s9BX8/default.jpg', '2026-02-06 02:45:01.470982', '2026-02-06 02:45:01.470982', NULL, '[]', 'This user');
INSERT INTO public.content VALUES (13, 'Early Signs of #Autism', 'youtube', 'https://www.youtube.com/watch?v=QpstA4TjaT0', 'https://i.ytimg.com/vi/QpstA4TjaT0/default.jpg', '2026-02-06 02:45:28.683057', '2026-02-06 02:45:28.683057', NULL, '[]', 'This user');
INSERT INTO public.content VALUES (8, 'Don’t mess with Dora or you’ll be dealt with…😂💀 credit:@jiggisofficial  #comedy #viral', 'youtube', 'https://www.youtube.com/watch?v=uo9vO5FvLo8', 'https://i.ytimg.com/vi/uo9vO5FvLo8/default.jpg', '2026-02-05 05:17:48.368761', '2026-02-06 04:06:24.282327', NULL, '[{"date": "Friday, 6th February, 2026 04:06", "comment": "terst"}]', 'This user');
INSERT INTO public.content VALUES (2, 'TEST ME', 'spotify', 'https://open.spotify.com/track/1chmVQLbEPT5890S0X55pe', 'https://i.scdn.co/image/ab67616d0000b273af62372ee43fe1e854d0bce5', '2026-02-05 04:26:02.850402', '2026-02-06 04:41:40.440416', NULL, '[{"date": "Friday, 6th February, 2026 04:00", "comment": "test"}, {"date": "Friday, 6th February, 2026 04:01", "comment": "test again"}, {"date": "04:36 / Friday, 6th February, 2026", "comment": "nice"}, {"date": "04:36 / Friday, 6th February, 2026", "comment": "test"}]', 'This user');
INSERT INTO public.content VALUES (16, 'JJAM', 'spotify', 'https://open.spotify.com/track/6ojfWEW5oBSyXQqO9G72iM', 'https://i.scdn.co/image/ab67616d0000b27351700837cdbc6adddb88560a', '2026-02-06 04:37:06.211767', '2026-02-06 04:37:06.211767', NULL, '[]', 'This user');
INSERT INTO public.content VALUES (17, 'I Like Trains', 'spotify', 'https://open.spotify.com/track/4Us5vMePI2R5VKoeYtIO3j', 'https://i.scdn.co/image/ab67616d0000b273a9b7b1dad775d064dacba12a', '2026-02-06 04:37:29.754694', '2026-02-06 04:37:29.754694', NULL, '[]', 'This user');
INSERT INTO public.content VALUES (18, 'Everybody Do The Flop', 'spotify', 'https://open.spotify.com/track/408zdC6qiLu1Zlbr9RVXGJ', 'https://i.scdn.co/image/ab67616d0000b273c0e1261482b34ed4f712f567', '2026-02-06 04:37:52.73687', '2026-02-06 04:37:52.73687', NULL, '[]', 'This user');
INSERT INTO public.content VALUES (19, 'Doraemon Theme Song: Yume Wo Kantete Doraemon (From "Doraemon, the Movie 2016: Nobita and the Birth of Japan") [Extended Version]', 'spotify', 'https://open.spotify.com/track/6ez77or1nNzjLKlMvCwwg4', 'https://i.scdn.co/image/ab67616d0000b273ce46f77495ee25f3088ec8f9', '2026-02-06 04:40:54.033787', '2026-02-06 04:40:54.033787', NULL, '[]', 'This user');
INSERT INTO public.content VALUES (21, 'Aperture', 'spotify', 'https://open.spotify.com/track/45Z3m6yazmAi4jZuW0tzW0', 'https://i.scdn.co/image/ab67616d0000b2736b10b937d94f055f8890cb62', '2026-02-06 04:41:35.42777', '2026-02-06 04:41:35.42777', NULL, '[]', 'This user');
INSERT INTO public.content VALUES (22, 'As Long as You Love Me', 'spotify', 'https://open.spotify.com/track/3UpS7kBnkVQYG13pDDFTC4', 'https://i.scdn.co/image/ab67616d0000b273530cec85d4543693bd726167', '2026-02-06 04:43:33.967388', '2026-02-06 04:43:33.967388', NULL, '[]', 'This user');
INSERT INTO public.content VALUES (23, 'As It Was', 'spotify', 'https://open.spotify.com/track/4Dvkj6JhhA12EX05fT7y2e', 'https://i.scdn.co/image/ab67616d0000b27382ce362511fb3d9dda6578ee', '2026-02-06 04:44:00.576402', '2026-02-06 04:44:00.576402', NULL, '[]', 'This user');
INSERT INTO public.content VALUES (14, 'Ondulations du rythme', 'spotify', 'https://open.spotify.com/track/0RzXE0iJ5MZ53zxv4UM3lv', 'https://i.scdn.co/image/ab67616d0000b273b4d5821cf1dca9adc030994f', '2026-02-06 04:34:25.399661', '2026-02-06 04:49:13.914293', NULL, '[{"date": "04:45 / Friday, 6th February, 2026", "comment": "I love this music too"}, {"date": "04:45 / Friday, 6th February, 2026", "comment": "I listen to this music when I study"}]', 'This user');
INSERT INTO public.content VALUES (9, 'A Memorable Fancy', 'spotify', 'https://open.spotify.com/track/5eZhnmXQ3s6ODaV4nNvz5e', 'https://i.scdn.co/image/ab67616d0000b273a4b070883f931f6ef09d8ea6', '2026-02-06 00:33:23.409935', '2026-02-06 05:10:25.696708', NULL, '[{"date": "Friday, 6th February, 2026", "comment": "test"}, {"date": "Friday, 6th February, 2026", "comment": "test again"}, {"date": "Friday, 6th February, 2026", "comment": "test again"}, {"date": "Friday, 6th February, 2026", "comment": "test"}, {"date": "Friday, 6th February, 2026 03:49", "comment": "test"}, {"date": "Friday, 6th February, 2026 03:50", "comment": "test"}, {"date": "Friday, 6th February, 2026 03:50", "comment": "asdf"}, {"date": "Friday, 6th February, 2026 03:50", "comment": "asdf"}, {"date": "04:08 / Friday, 6th February, 2026", "comment": "this is nice"}, {"date": "04:22 / Friday, 6th February, 2026", "comment": "tews"}, {"date": "04:23 / Friday, 6th February, 2026", "comment": "test"}, {"date": "04:24 / Friday, 6th February, 2026", "comment": "asfdasdf"}, {"date": "04:26 / Friday, 6th February, 2026", "comment": "this is a pen"}, {"date": "04:31 / Friday, 6th February, 2026", "comment": "test"}, {"date": "04:32 / Friday, 6th February, 2026", "comment": "this is test again"}, {"date": "04:32 / Friday, 6th February, 2026", "comment": "hello"}, {"date": "05:10 / Friday, 6th February, 2026", "comment": "Nana is cute"}]', 'This user');
INSERT INTO public.content VALUES (15, '青のすみか', 'spotify', 'https://open.spotify.com/track/12usPU2WnqgCHAW1EK2dfd', 'https://i.scdn.co/image/ab67616d0000b27387d3383ad8d19ab88aa83a4a', '2026-02-06 04:36:27.710721', '2026-02-06 14:57:05.477875', NULL, '[{"date": "06:17 / Friday, 6th February, 2026", "comment": "JJK!"}]', 'This user');
INSERT INTO public.content VALUES (20, 'ひまわりの約束', 'spotify', 'https://open.spotify.com/track/45jGOHwYKgsRYbAJ8DR61d', 'https://i.scdn.co/image/ab67616d0000b273aa31301a56e817327e6bca04', '2026-02-06 04:41:29.071589', '2026-02-06 14:57:44.641062', NULL, '[{"date": "14:57 / Friday, 6th February, 2026", "comment": "I almost cry whenever I listen to this music"}]', 'This user');
INSERT INTO public.content VALUES (24, 'Ondulations du rythme', 'spotify', 'https://open.spotify.com/track/0RzXE0iJ5MZ53zxv4UM3lv', 'https://i.scdn.co/image/ab67616d0000b273b4d5821cf1dca9adc030994f', '2026-02-10 03:21:59.564449', '2026-02-10 03:21:59.564449', NULL, '[]', 'This user');
INSERT INTO public.content VALUES (25, 'Farewell', 'spotify', 'https://open.spotify.com/track/1JHJWwjCJa9jZvAA235QVt', 'https://i.scdn.co/image/ab67616d0000b273fc743fb89c5403593b875d07', '2026-02-10 03:39:54.280408', '2026-02-10 03:39:54.280408', NULL, '[]', 'Kiyo null');


--
-- TOC entry 3817 (class 0 OID 16552)
-- Dependencies: 211
-- Data for Name: user; Type: TABLE DATA; Schema: public; Owner: kiyo
--



--
-- TOC entry 3825 (class 0 OID 0)
-- Dependencies: 209
-- Name: content_id_seq; Type: SEQUENCE SET; Schema: public; Owner: kiyo
--

SELECT pg_catalog.setval('public.content_id_seq', 25, true);


--
-- TOC entry 3673 (class 2606 OID 16549)
-- Name: content PK_6a2083913f3647b44f205204e36; Type: CONSTRAINT; Schema: public; Owner: kiyo
--

ALTER TABLE ONLY public.content
    ADD CONSTRAINT "PK_6a2083913f3647b44f205204e36" PRIMARY KEY (id);


--
-- TOC entry 3675 (class 2606 OID 16558)
-- Name: user PK_cace4a159ff9f2512dd42373760; Type: CONSTRAINT; Schema: public; Owner: kiyo
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY (id);


-- Completed on 2026-03-06 03:42:24 AEDT

--
-- PostgreSQL database dump complete
--

\unrestrict oNGB2HeJBnGkNtbYAGaGgzpmWhDEJzHkZF9WaI6yaLfPz7W0isRwadynvv4HmUd

