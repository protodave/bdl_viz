
var data = '\n\
INPUT ..\n\
\n\
\n\
$ ---------------------------------------------------------\n\
$              Abort, Diagnostics\n\
$ ---------------------------------------------------------\n\
\n\
\n\
\n\
\n\
$ ---------------------------------------------------------\n\
$              Global Parameters\n\
$ ---------------------------------------------------------\n\
\n\
\n\
\n\
$ ---------------------------------------------------------\n\
$              Title, Run Periods, Design Days, Holidays\n\
$ ---------------------------------------------------------\n\
\n\
\n\
"annual run period" = RUN-PERIOD-PD\n\
   BEGIN-MONTH      = 1\n\
   BEGIN-DAY        = 1\n\
   BEGIN-YEAR       = 2011\n\
   END-MONTH        = 12\n\
   END-DAY          = 31\n\
   END-YEAR         = 2011\n\
   ..\n\
\n\
\n\
\n\
\n\
$ ---------------------------------------------------------\n\
$              Compliance Data\n\
$ ---------------------------------------------------------\n\
\n\
\n\
\n\
$ ---------------------------------------------------------\n\
$              Site and Building Data\n\
$ ---------------------------------------------------------\n\
\n\
"SITE-PARAMETERS 1" = SITE-PARAMETERS\n\
   ..\n\
\n\
"A&B" = BUILD-PARAMETERS\n\
   AZIMUTH          = 0\n\
   ..\n\
\n\
\n\
\n\
$ ---------------------------------------------------------\n\
$              Materials / Layers / Constructions\n\
$ ---------------------------------------------------------\n\
\n\
"AcousTile 1/2in (AC02)" = MATERIAL\n\
   LIBRARY-ENTRY "AcousTile 1/2in (AC02)"\n\
   ..\n\
"Insul Bd 3in (HF-B4)" = MATERIAL\n\
   LIBRARY-ENTRY "Insul Bd 3in (HF-B4)"\n\
   ..\n\
"Soil 30in" = MATERIAL\n\
   TYPE             = PROPERTIES\n\
   THICKNESS        = 2.5\n\
   CONDUCTIVITY     = 1\n\
   DENSITY          = 115\n\
   SPECIFIC-HEAT    = 0.2\n\
   ..\n\
"fictional insulation R-100" = MATERIAL\n\
   TYPE             = RESISTANCE\n\
   RESISTANCE       = 100\n\
   ..\n\
\n\
"ASH Int Wall-34 lay" = LAYERS\n\
   LIBRARY-ENTRY "ASH Int Wall-34 lay"\n\
   ..\n\
"ASH Wall-27 lay" = LAYERS\n\
   LIBRARY-ENTRY "ASH Wall-27 lay"\n\
   ..\n\
"ASH Int Wall-23 lay" = LAYERS\n\
   LIBRARY-ENTRY "ASH Int Wall-23 lay"\n\
   ..\n\
"lay-in ceiling layers" = LAYERS\n\
   MATERIAL         = ( "AcousTile 1/2in (AC02)" )\n\
   ..\n\
"roof layers" = LAYERS\n\
   MATERIAL         = ( "Blt-Up Roof 3/8in (BR01)", "Insul Bd 3in (HF-B4)",\n\
         "Conc HW 6in (HF-C13)" )\n\
   ..\n\
"ug wall layers" = LAYERS\n\
   MATERIAL         = ( "fictional insulation R-100", "Soil 30in",\n\
         "Conc HW 6in (HF-C13)" )\n\
   ..\n\
\n\
"8in hw conc flr deck constr" = CONSTRUCTION\n\
   TYPE             = LAYERS\n\
   LAYERS           = "ASH Int Wall-34 lay"\n\
   ..\n\
"metal curt-wall 3in insul constr" = CONSTRUCTION\n\
   TYPE             = LAYERS\n\
   LAYERS           = "ASH Wall-27 lay"\n\
   ..\n\
"frame wall 0.75in gyp constr" = CONSTRUCTION\n\
   TYPE             = LAYERS\n\
   LAYERS           = "ASH Int Wall-23 lay"\n\
   ..\n\
"t-bar ceiling constr" = CONSTRUCTION\n\
   TYPE             = LAYERS\n\
   LAYERS           = "lay-in ceiling layers"\n\
   ..\n\
"roof constr" = CONSTRUCTION\n\
   TYPE             = LAYERS\n\
   LAYERS           = "roof layers"\n\
   ..\n\
"ug wall constr" = CONSTRUCTION\n\
   TYPE             = LAYERS\n\
   LAYERS           = "ug wall layers"\n\
   ..\n\
\n\
\n\
$ ---------------------------------------------------------\n\
$              Glass Type Codes\n\
$ ---------------------------------------------------------\n\
\n\
"SB 70XL on Starphire/Air/Clr 6" = GLASS-TYPE-CODE\n\
   LIBRARY-ENTRY "SB 70XL on Starphire/Air/Clr 6"\n\
   ..\n\
"Gry 3" = GLASS-TYPE-CODE\n\
   LIBRARY-ENTRY "Gry 3"\n\
   ..\n\
"Clr 6" = GLASS-TYPE-CODE\n\
   LIBRARY-ENTRY "Clr 6"\n\
   ..\n\
\n\
\n\
$ ---------------------------------------------------------\n\
$              Glass Types\n\
$ ---------------------------------------------------------\n\
\n\
"Solarban 70XL" = GLASS-TYPE\n\
   TYPE             = GLASS-TYPE-CODE\n\
   GLASS-TYPE-CODE  = "SB 70XL on Starphire/Air/Clr 6"\n\
   ..\n\
"Single Clear" = GLASS-TYPE\n\
   TYPE             = GLASS-TYPE-CODE\n\
   GLASS-TYPE-CODE  = "Clr 6"\n\
   ..\n\
\n\
\n\
$ ---------------------------------------------------------\n\
$              Window Layers\n\
$ ---------------------------------------------------------\n\
\n\
\n\
\n\
$ ---------------------------------------------------------\n\
$              Lamps / Luminaries / Lighting Systems\n\
$ ---------------------------------------------------------\n\
\n\
\n\
\n\
\n\
\n\
$ ---------------------------------------------------------\n\
$              Day Schedules\n\
$ ---------------------------------------------------------\n\
\n\
"Office_wd_01" = DAY-SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   VALUES           = ( 0.09, 0.04, 0.09, 0.02, 0.03, 0.12, 0, 0.33, 0.34,\n\
         0.64, 0.71, 1, 0.66, 0.83, 0.54, 0.56, 0.52, 0.48, 0.04, 0.06, 0.07,\n\
         0.19, 0.11, 0.02 )\n\
   ..\n\
"Office_wd_02" = DAY-SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   VALUES           = ( 0.11, 0.14, 0.14, 0.08, 0.01, 0.11, 0.01, 0.08, 0.41,\n\
         0.3, 0.79, 0.52, 0.79, 0.62, 0.99, 0.62, 0.98, 0.81, 0.4, 0.39,\n\
         0.18, 0.05, 0.1, 0.02 )\n\
   ..\n\
"Office_wd_03" = DAY-SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   VALUES           = ( 0.17, 0.06, 0.19, 0.11, 0.18, 0.2, 0.46, 0.31, 0.9,\n\
         0.99, 0.69, 0.88, 0.89, 0.51, 0.36, 0.37, 0.04, 0.17, 0.09, 0.07,\n\
         0.04, 0.12, 0.08, 0.17 )\n\
   ..\n\
"Office_wd_04" = DAY-SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   VALUES           = ( 0.12, 0, 0.06, 0.13, 0.15, 0.12, 0.05, 0.11, 0.08,\n\
         0.4, 0.4, 0.8, 0.74, 0.69, 0.82, 0.81, 0.75, 0.86, 0.58, 0.33, 0.19,\n\
         0.17, 0.08, 0.06 )\n\
   ..\n\
"Office_wd_05" = DAY-SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   VALUES           = ( 0.1, 0.11, 0.2, 0.02, 0.03, 0.07, 0.45, 0.37, 0.79,\n\
         0.69, 0.61, 0.86, 0.68, 0.89, 0.51, 0.92, 0.8, 0.41, 0.51, 0.2,\n\
         0.08, 0.14, 0.08, 0 )\n\
   ..\n\
"Office_wd_06" = DAY-SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   VALUES           = ( 0.14, 0.11, 0.13, 0.09, 0.18, 0.09, 0, 0.06, 0.28,\n\
         0.48, 0.79, 0.86, 0.55, 0.76, 0.96, 0.61, 0.59, 0.63, 0.45, 0.56,\n\
         0.09, 0.13, 0.16, 0.19 )\n\
   ..\n\
"Office_wd_07" = DAY-SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   VALUES           = ( 0, 0.07, 0.11, 0, 0.11, 0.02, 0.03, 0.42, 0.52, 0.78,\n\
         0.73, 0.81, 0.67, 0.87, 0.56, 0.42, 0.05, 0.17, 0.12, 0.03, 0.14,\n\
         0.14, 0.17, 0.06 )\n\
   ..\n\
"Office_wd_08" = DAY-SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   VALUES           = ( 0.05, 0.14, 0.04, 0.11, 0.12, 0.3, 0.34, 0.54, 0.84,\n\
         0.71, 0.53, 0.75, 0.43, 0.54, 0.01, 0.07, 0.1, 0.18, 0.18, 0.17,\n\
         0.14, 0.19, 0.01, 0 )\n\
   ..\n\
"Office_wd_09" = DAY-SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   VALUES           = ( 0.06, 0.04, 0.1, 0.07, 0.09, 0.19, 0.18, 0.1, 0.02,\n\
         0.14, 0.37, 0.49, 0.59, 0.9, 0.95, 0.87, 0.86, 0.65, 0.41, 0.37,\n\
         0.2, 0.12, 0.15, 0.16 )\n\
   ..\n\
"Office_wd_10" = DAY-SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   VALUES           = ( 0.13, 0.18, 0.01, 0.14, 0.16, 0.2, 0.17, 0.13, 0.15,\n\
         0.06, 0.36, 0.3, 0.96, 0.91, 0.58, 0.63, 0.76, 0.7, 0.35, 0.48,\n\
         0.06, 0.11, 0.08, 0.16 )\n\
   ..\n\
"Office_wd_11" = DAY-SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   VALUES           = ( 0.05, 0.08, 0.17, 0.14, 0.15, 0.2, 0.05, 0.16, 0.1,\n\
         0.38, 0.37, 0.84, 0.77, 0.81, 0.92, 0.67, 0.5, 0.49, 0.02, 0.17, 0,\n\
         0.08, 0.01, 0.01 )\n\
   ..\n\
"Office_wd_12" = DAY-SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   VALUES           = ( 0.17, 0.2, 0.2, 0.12, 0.02, 0.13, 0.18, 0.08, 0.19,\n\
         0.19, 0.38, 0.38, 0.75, 0.45, 0.53, 0.1, 0.03, 0.07, 0.09, 0.14,\n\
         0.06, 0.15, 0.19, 0.03 )\n\
   ..\n\
"Office_wd_13" = DAY-SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   VALUES           = ( 0.18, 0.01, 0.11, 0.18, 0.2, 0.04, 0.1, 0.19, 0.19,\n\
         0.03, 0.44, 0.32, 0.88, 0.84, 0.8, 0.32, 0.39, 0.02, 0.1, 0.01,\n\
         0.17, 0.08, 0.12, 0.18 )\n\
   ..\n\
"Office_wd_14" = DAY-SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   VALUES           = ( 0.15, 0.11, 0.03, 0.07, 0.16, 0.16, 0.07, 0.14, 0.01,\n\
         0.16, 0.16, 0.41, 0.34, 0.88, 0.6, 0.96, 0.33, 0.43, 0.18, 0.13,\n\
         0.05, 0.07, 0.07, 0.06 )\n\
   ..\n\
"Office_wd_15" = DAY-SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   VALUES           = ( 0.13, 0.16, 0.05, 0.05, 0.18, 0.33, 0.54, 0.93, 0.64,\n\
         0.87, 0.7, 0.81, 0.69, 0.8, 0.63, 0.53, 0.47, 0.17, 0.17, 0.19,\n\
         0.04, 0.02, 0.08, 0.07 )\n\
   ..\n\
"Office_weh_01" = DAY-SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   VALUES           = ( 0.05, 0.17, 0.07, 0.07, 0.07, 0.16, 0.12, 0.1, 0.21,\n\
         0.18, 0.24, 0.32, 0.21, 0.33, 0.23, 0.16, 0.21, 0.2, 0.03, 0.14,\n\
         0.08, 0.1, 0.1, 0.12 )\n\
   ..\n\
"Office_weh_02" = DAY-SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   VALUES           = ( 0.14, 0.13, 0.11, 0.06, 0, 0.12, 0.04, 0.14, 0.17,\n\
         0.03, 0.02, 0.19, 0.2, 0.16, 0.22, 0.36, 0.13, 0.13, 0.11, 0.12,\n\
         0.17, 0.11, 0.01, 0.05 )\n\
   ..\n\
"Office_weh_03" = DAY-SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   VALUES           = ( 0.04, 0.14, 0.02, 0.02, 0.12, 0.11, 0.1, 0, 0.18,\n\
         0.08, 0.16, 0.42, 0.46, 0.01, 0.17, 0, 0.15, 0.03, 0.15, 0.07, 0.17,\n\
         0.16, 0.01, 0.18 )\n\
   ..\n\
"Office_weh_04" = DAY-SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   VALUES           = ( 0.14, 0.1, 0.03, 0.19, 0.1, 0.06, 0.07, 0.12, 0.11,\n\
         0.13, 0.11, 0.15, 0.24, 0.47, 0.23, 0.03, 0.16, 0.16, 0.03, 0.1,\n\
         0.11, 0.02, 0.09, 0.11 )\n\
   ..\n\
"Office_weh_05" = DAY-SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   VALUES           = ( 0.06, 0.01, 0.16, 0.02, 0.16, 0.17, 0.11, 0.08, 0.17,\n\
         0.21, 0.17, 0.21, 0.32, 0.16, 0.18, 0.13, 0.03, 0.14, 0.05, 0.06,\n\
         0.01, 0.2, 0.06, 0.14 )\n\
   ..\n\
"Office_weh_06" = DAY-SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   VALUES           = ( 0, 0.13, 0.01, 0.06, 0.07, 0.11, 0.13, 0.13, 0.08,\n\
         0.19, 0.14, 0.12, 0.45, 0.38, 0.15, 0.14, 0.08, 0.08, 0.04, 0.06,\n\
         0.02, 0.14, 0.14, 0.17 )\n\
   ..\n\
"7to7 onoff wd" = DAY-SCHEDULE-PD\n\
   TYPE             = ON/OFF/FLAG\n\
   VALUES           = ( 0, &D, &D, &D, &D, &D, &D, 1, &D, &D, &D, &D, &D, &D,\n\
         &D, &D, &D, &D, &D, 0 )\n\
   ..\n\
"7to7 onoff weh" = DAY-SCHEDULE-PD\n\
   TYPE             = ON/OFF/FLAG\n\
   VALUES           = ( 0 )\n\
   ..\n\
"24x7 on dsch" = DAY-SCHEDULE-PD\n\
   TYPE             = ON/OFF/FLAG\n\
   VALUES           = ( 1 )\n\
   ..\n\
"DHW Eqp NRes WD" = DAY-SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   VALUES           = ( 0.05, &D, &D, &D, &D, &D, 0.101, 0.5005, &D, 0.9, &D,\n\
         &D, &D, &D, &D, 0.696, 0.5005, 0.2965, 0.203, &D, &D, 0.05 )\n\
   ..\n\
"DHW Eqp NRes WEH" = DAY-SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   VALUES           = ( 0.015 )\n\
   ..\n\
"DHW Eqp NRes HDD" = DAY-SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   VALUES           = ( 0 )\n\
   ..\n\
"Labtry_wd_01" = DAY-SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   VALUES           = ( 0, 0.44, 0.58, 0.13, 0.43, 0.47, 0.69, 1, 0.19, 0.27,\n\
         0.51, 0.89, 1, 0.22, 0.14, 0.77, 0.38, 1, 0.42, 0.15, 0.36, 0.01,\n\
         0.1, 0.54 )\n\
   ..\n\
"Labtry_wd_02" = DAY-SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   VALUES           = ( 0.01, 0.14, 0.03, 0.11, 0.23, 0.74, 0.59, 0.06, 0.31,\n\
         0.53, 1, 0.64, 0.43, 0.65, 0.68, 0.15, 0.63, 0.75, 0.53, 0.65, 0.46,\n\
         0.67, 0.42, 0.03 )\n\
   ..\n\
"Labtry_wd_03" = DAY-SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   VALUES           = ( 0, 0.05, 0.16, 0.05, 0.47, 0.41, 0.82, 0.16, 0.58,\n\
         0.69, 0.74, 0.11, 1, 1, 0.97, 0.48, 0.67, 1, 0.55, 0.88, 0.28, 0.17,\n\
         0.1, 0 )\n\
   ..\n\
"Labtry_wd_04" = DAY-SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   VALUES           = ( 0, 0, 0, 0.35, 0.34, 0.12, 0.99, 0.32, 0.13, 0.47,\n\
         0.11, 1, 0.31, 0.68, 0.62, 0.48, 0.17, 1, 0.69, 0.77, 0.69, 1, 0.83,\n\
         0.02 )\n\
   ..\n\
"Labtry_wd_05" = DAY-SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   VALUES           = ( 0.83, 0.59, 0.47, 1, 0.66, 1, 0.68, 1, 0.25, 0.84, 1,\n\
         0.81, 0.6, 0.44, 0.06, 0.7, 0.44, 0.34, 0.44, 0.13, 0.15, 0, 0, 0 )\n\
   ..\n\
"Labtry_wd_06" = DAY-SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   VALUES           = ( 0, 0, 0, 0.46, 0.12, 0.45, 0.52, 0.92, 0.51, 1, 0.38,\n\
         0.34, 0.81, 0.32, 0.37, 0.98, 1, 0.8, 0.53, 0.05, 0.68, 0.59, 0.21,\n\
         0.37 )\n\
   ..\n\
"Labtry_wd_07" = DAY-SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   VALUES           = ( 0, 0, 0, 0.17, 0.48, 0.43, 0.46, 0.95, 1, 0.87, 0.3,\n\
         0.75, 0.65, 0.66, 0.18, 0.67, 0.09, 0.26, 0.54, 0.29, 0.41, 0, 0, 0 )\n\
   ..\n\
"Labtry_wd_08" = DAY-SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   VALUES           = ( 0.43, 0.35, 1, 0.21, 1, 0.53, 0.99, 1, 0.23, 0.2,\n\
         0.34, 0.97, 1, 0.71, 0.39, 0.45, 1, 0.94, 0.65, 0.18, 0.31, 0.14,\n\
         0.23, 0 )\n\
   ..\n\
"Labtry_wd_09" = DAY-SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   VALUES           = ( 0.58, 1, 0.83, 0.84, 0.46, 0.48, 0.74, 0.66, 0.37,\n\
         0.95, 0.07, 0.07, 0.77, 0.17, 0.58, 0.08, 0.81, 1, 0.36, 0.1, 0.48,\n\
         0.53, 0.31, 0 )\n\
   ..\n\
"Labtry_wd_10" = DAY-SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   VALUES           = ( 0, 0, 0.23, 0.26, 0.28, 0.76, 1, 0.03, 0.35, 0.43,\n\
         0.59, 0.01, 1, 1, 0.78, 0.45, 0.59, 0.01, 0.17, 1, 0.41, 0.12, 0.58,\n\
         0 )\n\
   ..\n\
"Labtry_wd_11" = DAY-SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   VALUES           = ( 0.16, 0.6, 0.35, 0.57, 0.6, 0.51, 0.49, 0.58, 0.53,\n\
         0.46, 0.9, 0.26, 0.98, 0.01, 0.89, 0.47, 0.14, 0.18, 1, 0.49, 0.24,\n\
         0.19, 0.29, 0 )\n\
   ..\n\
"Labtry_wd_12" = DAY-SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   VALUES           = ( 0.07, 0.01, 0.23, 0.76, 0.57, 1, 0.3, 0.52, 0.23, 0,\n\
         0.23, 0.62, 0.12, 0.29, 0.83, 1, 0.65, 0.35, 0, 0.13, 0.43, 0, 0, 0 )\n\
   ..\n\
"Labtry_wd_13" = DAY-SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   VALUES           = ( 0.46, 0.47, 0.59, 0.07, 0.13, 0.22, 0.74, 0.84, 1,\n\
         0.41, 0.31, 0.19, 0.13, 0.43, 0.86, 0.94, 0.15, 0.12, 0.31, 0.02,\n\
         0.01, 0, 0, 0 )\n\
   ..\n\
"Labtry_wd_14" = DAY-SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   VALUES           = ( 0.31, 1, 1, 0.38, 0.7, 0.13, 0.68, 0.35, 0.62, 0.06,\n\
         0.24, 1, 0.98, 0.68, 0.38, 1, 1, 0.45, 0.52, 0.74, 0.7, 0.79, 1,\n\
         0.43 )\n\
   ..\n\
"Labtry_wd_15" = DAY-SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   VALUES           = ( 0.06, 0.31, 0.25, 0.13, 0.82, 0.18, 0.59, 0.92, 0.95,\n\
         0.47, 0.52, 0.49, 1, 1, 0.84, 0.49, 0.01, 0.66, 0.03, 0.48, 0.14,\n\
         0.49, 0, 0 )\n\
   ..\n\
"Labtry_weh_01" = DAY-SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   VALUES           = ( 0.17, 0.05, 0.22, 0.05, 0.45, 0.41, 0.05, 0.02, 0.36,\n\
         0.38, 0.36, 0.43, 0, 0.17, 0.17, 0.24, 0.29, 0.38, 0.42, 0.16, 0.13,\n\
         0.02, 0.21, 0 )\n\
   ..\n\
"Labtry_weh_02" = DAY-SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   VALUES           = ( 0, 0, 0, 0, 0, 0.09, 0.2, 0.12, 0.23, 0.45, 0.3, 0.46,\n\
         0.28, 0.24, 0.38, 0.45, 0.34, 0.47, 0.17, 0.2, 0.18, 0.13, 0, 0 )\n\
   ..\n\
"Labtry_weh_03" = DAY-SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   VALUES           = ( 0, 0, 0.08, 0.17, 0.16, 0.19, 0.2, 0.35, 0.33, 0.33,\n\
         0.08, 0.21, 0.03, 0.02, 0.31, 0.38, 0.04, 0.01, 0.3, 0.26, 0.33,\n\
         0.46, 0.19, 0.24 )\n\
   ..\n\
"Labtry_weh_04" = DAY-SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   VALUES           = ( 0.05, 0.18, 0.43, 0.27, 0.38, 0.35, 0.08, 0.12, 0.41,\n\
         0.27, 0.01, 0.16, 0.15, 0.22, 0.34, 0.07, 0.02, 0.01, 0.08, 0.15, 0,\n\
         0.12, 0, 0 )\n\
   ..\n\
"Labtry_weh_05" = DAY-SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   VALUES           = ( 0, 0, 0, 0, 0.15, 0.02, 0.05, 0.28, 0.37, 0.17, 0.43,\n\
         0.2, 0.46, 0.14, 0.07, 0.11, 0.22, 0.2, 0.11, 0, 0, 0, 0, 0 )\n\
   ..\n\
"Labtry_weh_06" = DAY-SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   VALUES           = ( 0, 0, 0, 0, 0.21, 0.17, 0.13, 0.33, 0.27, 0.09, 0.05,\n\
         0.01, 0.14, 0.27, 0.07, 0.39, 0.23, 0.14, 0.08, 0, 0, 0, 0, 0 )\n\
   ..\n\
"7to7 clg75 t-stat wd" = DAY-SCHEDULE-PD\n\
   TYPE             = TEMPERATURE\n\
   VALUES           = ( 80, &D, &D, &D, &D, &D, 75, &D, &D, &D, &D, &D, &D,\n\
         &D, &D, &D, &D, &D, &D, 80 )\n\
   ..\n\
"7to7 clg75 t-stat weh" = DAY-SCHEDULE-PD\n\
   TYPE             = TEMPERATURE\n\
   VALUES           = ( 80 )\n\
   ..\n\
"7to7 clg73 t-stat wd" = DAY-SCHEDULE-PD\n\
   TYPE             = TEMPERATURE\n\
   VALUES           = ( 85, &D, &D, &D, &D, &D, 73, &D, &D, &D, &D, &D, &D,\n\
         &D, &D, &D, &D, &D, &D, 85 )\n\
   ..\n\
"7to7 clg73 t-stat weh" = DAY-SCHEDULE-PD\n\
   TYPE             = TEMPERATURE\n\
   VALUES           = ( 85 )\n\
   ..\n\
"24x7 clg75 t-stat wd" = DAY-SCHEDULE-PD\n\
   TYPE             = TEMPERATURE\n\
   VALUES           = ( 75 )\n\
   ..\n\
"7to7 htg70 t-stat wd" = DAY-SCHEDULE-PD\n\
   TYPE             = TEMPERATURE\n\
   VALUES           = ( 60, &D, &D, &D, &D, &D, 70, &D, &D, &D, &D, &D, &D,\n\
         &D, &D, &D, &D, &D, &D, 60 )\n\
   ..\n\
"7to7 htg70 t-stat weh" = DAY-SCHEDULE-PD\n\
   TYPE             = TEMPERATURE\n\
   VALUES           = ( 60 )\n\
   ..\n\
"24x7 htg70 t-stat wd" = DAY-SCHEDULE-PD\n\
   TYPE             = TEMPERATURE\n\
   VALUES           = ( 70 )\n\
   ..\n\
"Custom Gas Seas1 Day" = DAY-SCHEDULE-PD\n\
   TYPE             = FLAG\n\
   VALUES           = ( 1 )\n\
   ..\n\
"Custom Gas Seas2 Day" = DAY-SCHEDULE-PD\n\
   TYPE             = FLAG\n\
   VALUES           = ( 2 )\n\
   ..\n\
\n\
$ ---------------------------------------------------------\n\
$              Week Schedules\n\
$ ---------------------------------------------------------\n\
\n\
"Office_wk_a1" = WEEK-SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   DAY-SCHEDULES    = ( "Office_wd_12", "Office_wd_02", "Office_wd_05",\n\
         "Office_wd_05", "Office_wd_07", "Office_weh_04", "Office_weh_02",\n\
         "Office_weh_05" )\n\
   ..\n\
"Office_wk_b1" = WEEK-SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   DAY-SCHEDULES    = ( "Office_wd_01", "Office_wd_14", "Office_wd_13",\n\
         "Office_wd_14", "Office_wd_06", "Office_weh_06", "Office_weh_03",\n\
         "Office_weh_05" )\n\
   ..\n\
"Office_wk_c1" = WEEK-SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   DAY-SCHEDULES    = ( "Office_wd_09", "Office_wd_12", "Office_wd_01",\n\
         "Office_wd_13", "Office_wd_05", "Office_weh_01", "Office_weh_05",\n\
         "Office_weh_03" )\n\
   ..\n\
"Office_wk_d1" = WEEK-SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   DAY-SCHEDULES    = ( "Office_wd_10", "Office_wd_05", "Office_wd_10",\n\
         "Office_wd_01", "Office_wd_09", "Office_weh_06", "Office_weh_06",\n\
         "Office_weh_01" )\n\
   ..\n\
"Office_wk_e1" = WEEK-SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   DAY-SCHEDULES    = ( "Office_wd_06", "Office_wd_05", "Office_wd_04",\n\
         "Office_wd_10", "Office_wd_15", "Office_weh_03", "Office_weh_02",\n\
         "Office_weh_01" )\n\
   ..\n\
"Office_wk_f1" = WEEK-SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   DAY-SCHEDULES    = ( "Office_wd_14", "Office_wd_13", "Office_wd_14",\n\
         "Office_wd_08", "Office_wd_14", "Office_weh_03", "Office_weh_02",\n\
         "Office_weh_06" )\n\
   ..\n\
"Office_wk_g1" = WEEK-SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   DAY-SCHEDULES    = ( "Office_wd_09", "Office_wd_08", "Office_wd_11",\n\
         "Office_wd_07", "Office_wd_11", "Office_weh_06", "Office_weh_05",\n\
         "Office_weh_02" )\n\
   ..\n\
"Office_wk_h1" = WEEK-SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   DAY-SCHEDULES    = ( "Office_wd_11", "Office_wd_14", "Office_wd_03",\n\
         "Office_wd_12", "Office_wd_07", "Office_weh_04", "Office_weh_05",\n\
         "Office_weh_04" )\n\
   ..\n\
"Office_wk_i1" = WEEK-SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   DAY-SCHEDULES    = ( "Office_wd_12", "Office_wd_01", "Office_wd_11",\n\
         "Office_wd_15", "Office_wd_01", "Office_weh_06", "Office_weh_02",\n\
         "Office_weh_03" )\n\
   ..\n\
"Office_wk_j1" = WEEK-SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   DAY-SCHEDULES    = ( "Office_wd_06", "Office_wd_07", "Office_wd_14",\n\
         "Office_wd_06", "Office_wd_03", "Office_weh_03", "Office_weh_01",\n\
         "Office_weh_03" )\n\
   ..\n\
"Office_wk_a2" = WEEK-SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   DAY-SCHEDULES    = ( "Office_wd_09", "Office_wd_08", "Office_wd_13",\n\
         "Office_wd_06", "Office_wd_04", "Office_weh_05", "Office_weh_06",\n\
         "Office_weh_02" )\n\
   ..\n\
"Office_wk_b2" = WEEK-SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   DAY-SCHEDULES    = ( "Office_wd_04", "Office_wd_01", "Office_wd_10",\n\
         "Office_wd_01", "Office_wd_08", "Office_weh_03", "Office_weh_04",\n\
         "Office_weh_06" )\n\
   ..\n\
"Office_wk_c2" = WEEK-SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   DAY-SCHEDULES    = ( "Office_wd_06", "Office_wd_12", "Office_wd_10",\n\
         "Office_wd_11", "Office_wd_10", "Office_weh_01", "Office_weh_03",\n\
         "Office_weh_05" )\n\
   ..\n\
"Office_wk_d2" = WEEK-SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   DAY-SCHEDULES    = ( "Office_wd_01", "Office_wd_01", "Office_wd_11",\n\
         "Office_wd_09", "Office_wd_04", "Office_weh_06", "Office_weh_03",\n\
         "Office_weh_03" )\n\
   ..\n\
"Office_wk_e2" = WEEK-SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   DAY-SCHEDULES    = ( "Office_wd_08", "Office_wd_04", "Office_wd_11",\n\
         "Office_wd_06", "Office_wd_07", "Office_weh_03", "Office_weh_02",\n\
         "Office_weh_04" )\n\
   ..\n\
"Office_wk_f2" = WEEK-SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   DAY-SCHEDULES    = ( "Office_wd_12", "Office_wd_04", "Office_wd_08",\n\
         "Office_wd_04", "Office_wd_07", "Office_weh_04", "Office_weh_03",\n\
         "Office_weh_03" )\n\
   ..\n\
"Office_wk_g2" = WEEK-SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   DAY-SCHEDULES    = ( "Office_wd_07", "Office_wd_07", "Office_wd_01",\n\
         "Office_wd_09", "Office_wd_07", "Office_weh_04", "Office_weh_01",\n\
         "Office_weh_04" )\n\
   ..\n\
"Office_wk_h2" = WEEK-SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   DAY-SCHEDULES    = ( "Office_wd_05", "Office_wd_08", "Office_wd_15",\n\
         "Office_wd_07", "Office_wd_14", "Office_weh_03", "Office_weh_05",\n\
         "Office_weh_02" )\n\
   ..\n\
"Office_wk_i2" = WEEK-SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   DAY-SCHEDULES    = ( "Office_wd_06", "Office_wd_12", "Office_wd_06",\n\
         "Office_wd_02", "Office_wd_08", "Office_weh_01", "Office_weh_02",\n\
         "Office_weh_01" )\n\
   ..\n\
"Office_wk_j2" = WEEK-SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   DAY-SCHEDULES    = ( "Office_wd_01", "Office_wd_08", "Office_wd_15",\n\
         "Office_wd_09", "Office_wd_04", "Office_weh_02", "Office_weh_06",\n\
         "Office_weh_04" )\n\
   ..\n\
"Office_wk_a3" = WEEK-SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   DAY-SCHEDULES    = ( "Office_wd_13", "Office_wd_10", "Office_wd_05",\n\
         "Office_wd_07", "Office_wd_09", "Office_weh_01", "Office_weh_02",\n\
         "Office_weh_06" )\n\
   ..\n\
"Office_wk_b3" = WEEK-SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   DAY-SCHEDULES    = ( "Office_wd_11", "Office_wd_01", "Office_wd_14",\n\
         "Office_wd_12", "Office_wd_10", "Office_weh_05", "Office_weh_06",\n\
         "Office_weh_03" )\n\
   ..\n\
"Office_wk_c3" = WEEK-SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   DAY-SCHEDULES    = ( "Office_wd_07", "Office_wd_06", "Office_wd_03",\n\
         "Office_wd_07", "Office_wd_15", "Office_weh_04", "Office_weh_06",\n\
         "Office_weh_06" )\n\
   ..\n\
"Office_wk_d3" = WEEK-SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   DAY-SCHEDULES    = ( "Office_wd_10", "Office_wd_03", "Office_wd_01",\n\
         "Office_wd_05", "Office_wd_05", "Office_weh_02", "Office_weh_05",\n\
         "Office_weh_04" )\n\
   ..\n\
"Office_wk_e3" = WEEK-SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   DAY-SCHEDULES    = ( "Office_wd_09", "Office_wd_14", "Office_wd_13",\n\
         "Office_wd_14", "Office_wd_09", "Office_weh_04", "Office_weh_01",\n\
         "Office_weh_02" )\n\
   ..\n\
"Office_wk_f3" = WEEK-SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   DAY-SCHEDULES    = ( "Office_wd_04", "Office_wd_09", "Office_wd_13",\n\
         "Office_wd_09", "Office_wd_14", "Office_weh_06", "Office_weh_05",\n\
         "Office_weh_03" )\n\
   ..\n\
"Office_wk_g3" = WEEK-SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   DAY-SCHEDULES    = ( "Office_wd_08", "Office_wd_15", "Office_wd_13",\n\
         "Office_wd_10", "Office_wd_09", "Office_weh_03", "Office_weh_02",\n\
         "Office_weh_06" )\n\
   ..\n\
"Office_wk_h3" = WEEK-SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   DAY-SCHEDULES    = ( "Office_wd_13", "Office_wd_09", "Office_wd_03",\n\
         "Office_wd_03", "Office_wd_03", "Office_weh_05", "Office_weh_05",\n\
         "Office_weh_04" )\n\
   ..\n\
"Office_wk_i3" = WEEK-SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   DAY-SCHEDULES    = ( "Office_wd_06", "Office_wd_07", "Office_wd_08",\n\
         "Office_wd_10", "Office_wd_06", "Office_weh_05", "Office_weh_05",\n\
         "Office_weh_04" )\n\
   ..\n\
"Office_wk_j3" = WEEK-SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   DAY-SCHEDULES    = ( "Office_wd_15", "Office_wd_01", "Office_wd_14",\n\
         "Office_wd_05", "Office_wd_03", "Office_weh_03", "Office_weh_05",\n\
         "Office_weh_05" )\n\
   ..\n\
"Office_wk_a4" = WEEK-SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   DAY-SCHEDULES    = ( "Office_wd_03", "Office_wd_02", "Office_wd_14",\n\
         "Office_wd_08", "Office_wd_09", "Office_weh_02", "Office_weh_06",\n\
         "Office_weh_03" )\n\
   ..\n\
"Office_wk_b4" = WEEK-SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   DAY-SCHEDULES    = ( "Office_wd_14", "Office_wd_11", "Office_wd_03",\n\
         "Office_wd_11", "Office_wd_02", "Office_weh_03", "Office_weh_01",\n\
         "Office_weh_02" )\n\
   ..\n\
"Office_wk_c4" = WEEK-SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   DAY-SCHEDULES    = ( "Office_wd_14", "Office_wd_03", "Office_wd_09",\n\
         "Office_wd_13", "Office_wd_02", "Office_weh_06", "Office_weh_04",\n\
         "Office_weh_04" )\n\
   ..\n\
"Office_wk_d4" = WEEK-SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   DAY-SCHEDULES    = ( "Office_wd_10", "Office_wd_06", "Office_wd_10",\n\
         "Office_wd_01", "Office_wd_01", "Office_weh_05", "Office_weh_06",\n\
         "Office_weh_05" )\n\
   ..\n\
"Office_wk_e4" = WEEK-SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   DAY-SCHEDULES    = ( "Office_wd_09", "Office_wd_06", "Office_wd_04",\n\
         "Office_wd_11", "Office_wd_10", "Office_weh_02", "Office_weh_05",\n\
         "Office_weh_03" )\n\
   ..\n\
"Office_wk_f4" = WEEK-SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   DAY-SCHEDULES    = ( "Office_wd_04", "Office_wd_08", "Office_wd_14",\n\
         "Office_wd_13", "Office_wd_05", "Office_weh_06", "Office_weh_01",\n\
         "Office_weh_01" )\n\
   ..\n\
"Office_wk_g4" = WEEK-SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   DAY-SCHEDULES    = ( "Office_wd_13", "Office_wd_09", "Office_wd_04",\n\
         "Office_wd_10", "Office_wd_04", "Office_weh_03", "Office_weh_03",\n\
         "Office_weh_01" )\n\
   ..\n\
"Office_wk_h4" = WEEK-SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   DAY-SCHEDULES    = ( "Office_wd_12", "Office_wd_08", "Office_wd_02",\n\
         "Office_wd_08", "Office_wd_15", "Office_weh_04", "Office_weh_02",\n\
         "Office_weh_06" )\n\
   ..\n\
"Office_wk_i4" = WEEK-SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   DAY-SCHEDULES    = ( "Office_wd_10", "Office_wd_13", "Office_wd_12",\n\
         "Office_wd_07", "Office_wd_05", "Office_weh_01", "Office_weh_05",\n\
         "Office_weh_05" )\n\
   ..\n\
"Office_wk_j4" = WEEK-SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   DAY-SCHEDULES    = ( "Office_wd_10", "Office_wd_15", "Office_wd_05",\n\
         "Office_wd_15", "Office_wd_10", "Office_weh_02", "Office_weh_02",\n\
         "Office_weh_04" )\n\
   ..\n\
"Office_wk_a5" = WEEK-SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   DAY-SCHEDULES    = ( "Office_wd_09", "Office_wd_12", "Office_wd_13",\n\
         "Office_wd_04", "Office_wd_02", "Office_weh_05", "Office_weh_04",\n\
         "Office_weh_04" )\n\
   ..\n\
"Office_wk_b5" = WEEK-SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   DAY-SCHEDULES    = ( "Office_wd_08", "Office_wd_10", "Office_wd_09",\n\
         "Office_wd_15", "Office_wd_14", "Office_weh_05", "Office_weh_05",\n\
         "Office_weh_02" )\n\
   ..\n\
"Office_wk_c5" = WEEK-SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   DAY-SCHEDULES    = ( "Office_wd_04", "Office_wd_06", "Office_wd_05",\n\
         "Office_wd_15", "Office_wd_04", "Office_weh_06", "Office_weh_05",\n\
         "Office_weh_05" )\n\
   ..\n\
"Office_wk_d5" = WEEK-SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   DAY-SCHEDULES    = ( "Office_wd_14", "Office_wd_14", "Office_wd_14",\n\
         "Office_wd_02", "Office_wd_01", "Office_weh_02", "Office_weh_05",\n\
         "Office_weh_03" )\n\
   ..\n\
"Office_wk_e5" = WEEK-SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   DAY-SCHEDULES    = ( "Office_wd_15", "Office_wd_10", "Office_wd_09",\n\
         "Office_wd_14", "Office_wd_01", "Office_weh_06", "Office_weh_01",\n\
         "Office_weh_06" )\n\
   ..\n\
"Office_wk_f5" = WEEK-SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   DAY-SCHEDULES    = ( "Office_wd_07", "Office_wd_04", "Office_wd_08",\n\
         "Office_wd_01", "Office_wd_03", "Office_weh_03", "Office_weh_01",\n\
         "Office_weh_05" )\n\
   ..\n\
"Office_wk_g5" = WEEK-SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   DAY-SCHEDULES    = ( "Office_wd_12", "Office_wd_02", "Office_wd_02",\n\
         "Office_wd_12", "Office_wd_02", "Office_weh_02", "Office_weh_06",\n\
         "Office_weh_05" )\n\
   ..\n\
"Office_wk_h5" = WEEK-SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   DAY-SCHEDULES    = ( "Office_wd_14", "Office_wd_09", "Office_wd_15",\n\
         "Office_wd_08", "Office_wd_03", "Office_weh_02", "Office_weh_05",\n\
         "Office_weh_04" )\n\
   ..\n\
"Office_wk_i5" = WEEK-SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   DAY-SCHEDULES    = ( "Office_wd_03", "Office_wd_10", "Office_wd_12",\n\
         "Office_wd_13", "Office_wd_14", "Office_weh_03", "Office_weh_01",\n\
         "Office_weh_04" )\n\
   ..\n\
"Office_wk_j5" = WEEK-SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   DAY-SCHEDULES    = ( "Office_wd_15", "Office_wd_08", "Office_wd_01",\n\
         "Office_wd_15", "Office_wd_02", "Office_weh_05", "Office_weh_03",\n\
         "Office_weh_05" )\n\
   ..\n\
"7to7 onoff wsch" = WEEK-SCHEDULE-PD\n\
   TYPE             = ON/OFF/FLAG\n\
   DAY-SCHEDULES    = ( "7to7 onoff wd", &D, &D, &D, &D, "7to7 onoff weh" )\n\
   ..\n\
"24x7 on wsch" = WEEK-SCHEDULE-PD\n\
   TYPE             = ON/OFF/FLAG\n\
   DAY-SCHEDULES    = ( "24x7 on dsch" )\n\
   ..\n\
"DHW Eqp NRes Wk" = WEEK-SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   DAY-SCHEDULES    = ( "DHW Eqp NRes WD", &D, &D, &D, &D, "DHW Eqp NRes WEH",\n\
         &D, &D, "DHW Eqp NRes HDD" )\n\
   ..\n\
"Labtry_wk_a1" = WEEK-SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   DAY-SCHEDULES    = ( "Labtry_wd_05", "Labtry_wd_12", "Labtry_wd_08",\n\
         "Labtry_wd_06", "Labtry_wd_09", "Labtry_weh_03", "Labtry_weh_03",\n\
         "Labtry_weh_02" )\n\
   ..\n\
"Labtry_wk_b1" = WEEK-SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   DAY-SCHEDULES    = ( "Labtry_wd_11", "Labtry_wd_15", "Labtry_wd_12",\n\
         "Labtry_wd_12", "Labtry_wd_01", "Labtry_weh_04", "Labtry_weh_01",\n\
         "Labtry_weh_06" )\n\
   ..\n\
"Labtry_wk_c1" = WEEK-SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   DAY-SCHEDULES    = ( "Labtry_wd_11", "Labtry_wd_06", "Labtry_wd_10",\n\
         "Labtry_wd_07", "Labtry_wd_09", "Labtry_weh_02", "Labtry_weh_01",\n\
         "Labtry_weh_02" )\n\
   ..\n\
"Labtry_wk_d1" = WEEK-SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   DAY-SCHEDULES    = ( "Labtry_wd_12", "Labtry_wd_15", "Labtry_wd_13",\n\
         "Labtry_wd_12", "Labtry_wd_04", "Labtry_weh_01", "Labtry_weh_01",\n\
         "Labtry_weh_01" )\n\
   ..\n\
"Labtry_wk_e1" = WEEK-SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   DAY-SCHEDULES    = ( "Labtry_wd_13", "Labtry_wd_15", "Labtry_wd_03",\n\
         "Labtry_wd_07", "Labtry_wd_13", "Labtry_weh_01", "Labtry_weh_01",\n\
         "Labtry_weh_02" )\n\
   ..\n\
"Labtry_wk_f1" = WEEK-SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   DAY-SCHEDULES    = ( "Labtry_wd_01", "Labtry_wd_06", "Labtry_wd_04",\n\
         "Labtry_wd_05", "Labtry_wd_12", "Labtry_weh_06", "Labtry_weh_05",\n\
         "Labtry_weh_03" )\n\
   ..\n\
"Labtry_wk_g1" = WEEK-SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   DAY-SCHEDULES    = ( "Labtry_wd_04", "Labtry_wd_06", "Labtry_wd_05",\n\
         "Labtry_wd_08", "Labtry_wd_04", "Labtry_weh_06", "Labtry_weh_03",\n\
         "Labtry_weh_03" )\n\
   ..\n\
"Labtry_wk_h1" = WEEK-SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   DAY-SCHEDULES    = ( "Labtry_wd_11", "Labtry_wd_08", "Labtry_wd_10",\n\
         "Labtry_wd_10", "Labtry_wd_09", "Labtry_weh_03", "Labtry_weh_04",\n\
         "Labtry_weh_06" )\n\
   ..\n\
"Labtry_wk_i1" = WEEK-SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   DAY-SCHEDULES    = ( "Labtry_wd_05", "Labtry_wd_02", "Labtry_wd_09",\n\
         "Labtry_wd_09", "Labtry_wd_14", "Labtry_weh_05", "Labtry_weh_03",\n\
         "Labtry_weh_05" )\n\
   ..\n\
"Labtry_wk_j1" = WEEK-SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   DAY-SCHEDULES    = ( "Labtry_wd_08", "Labtry_wd_04", "Labtry_wd_15",\n\
         "Labtry_wd_10", "Labtry_wd_03", "Labtry_weh_03", "Labtry_weh_05",\n\
         "Labtry_weh_03" )\n\
   ..\n\
"Labtry_wk_a2" = WEEK-SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   DAY-SCHEDULES    = ( "Labtry_wd_09", "Labtry_wd_13", "Labtry_wd_09",\n\
         "Labtry_wd_07", "Labtry_wd_07", "Labtry_weh_05", "Labtry_weh_03",\n\
         "Labtry_weh_02" )\n\
   ..\n\
"Labtry_wk_b2" = WEEK-SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   DAY-SCHEDULES    = ( "Labtry_wd_01", "Labtry_wd_14", "Labtry_wd_07",\n\
         "Labtry_wd_04", "Labtry_wd_10", "Labtry_weh_02", "Labtry_weh_03",\n\
         "Labtry_weh_04" )\n\
   ..\n\
"Labtry_wk_c2" = WEEK-SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   DAY-SCHEDULES    = ( "Labtry_wd_13", "Labtry_wd_15", "Labtry_wd_14",\n\
         "Labtry_wd_03", "Labtry_wd_10", "Labtry_weh_02", "Labtry_weh_03",\n\
         "Labtry_weh_03" )\n\
   ..\n\
"Labtry_wk_d2" = WEEK-SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   DAY-SCHEDULES    = ( "Labtry_wd_08", "Labtry_wd_15", "Labtry_wd_14",\n\
         "Labtry_wd_08", "Labtry_wd_10", "Labtry_weh_01", "Labtry_weh_05",\n\
         "Labtry_weh_02" )\n\
   ..\n\
"Labtry_wk_e2" = WEEK-SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   DAY-SCHEDULES    = ( "Labtry_wd_01", "Labtry_wd_15", "Labtry_wd_04",\n\
         "Labtry_wd_12", "Labtry_wd_06", "Labtry_weh_05", "Labtry_weh_05",\n\
         "Labtry_weh_02" )\n\
   ..\n\
"Labtry_wk_f2" = WEEK-SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   DAY-SCHEDULES    = ( "Labtry_wd_14", "Labtry_wd_11", "Labtry_wd_09",\n\
         "Labtry_wd_15", "Labtry_wd_11", "Labtry_weh_04", "Labtry_weh_02",\n\
         "Labtry_weh_01" )\n\
   ..\n\
"Labtry_wk_g2" = WEEK-SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   DAY-SCHEDULES    = ( "Labtry_wd_06", "Labtry_wd_05", "Labtry_wd_08",\n\
         "Labtry_wd_02", "Labtry_wd_10", "Labtry_weh_03", "Labtry_weh_01",\n\
         "Labtry_weh_03" )\n\
   ..\n\
"Labtry_wk_h2" = WEEK-SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   DAY-SCHEDULES    = ( "Labtry_wd_07", "Labtry_wd_11", "Labtry_wd_14",\n\
         "Labtry_wd_03", "Labtry_wd_04", "Labtry_weh_03", "Labtry_weh_03",\n\
         "Labtry_weh_05" )\n\
   ..\n\
"Labtry_wk_i2" = WEEK-SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   DAY-SCHEDULES    = ( "Labtry_wd_01", "Labtry_wd_06", "Labtry_wd_08",\n\
         "Labtry_wd_06", "Labtry_wd_11", "Labtry_weh_06", "Labtry_weh_03",\n\
         "Labtry_weh_03" )\n\
   ..\n\
"Labtry_wk_j2" = WEEK-SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   DAY-SCHEDULES    = ( "Labtry_wd_01", "Labtry_wd_06", "Labtry_wd_12",\n\
         "Labtry_wd_07", "Labtry_wd_06", "Labtry_weh_06", "Labtry_weh_01",\n\
         "Labtry_weh_03" )\n\
   ..\n\
"Labtry_wk_a3" = WEEK-SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   DAY-SCHEDULES    = ( "Labtry_wd_12", "Labtry_wd_11", "Labtry_wd_03",\n\
         "Labtry_wd_09", "Labtry_wd_05", "Labtry_weh_06", "Labtry_weh_04",\n\
         "Labtry_weh_06" )\n\
   ..\n\
"Labtry_wk_b3" = WEEK-SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   DAY-SCHEDULES    = ( "Labtry_wd_04", "Labtry_wd_06", "Labtry_wd_09",\n\
         "Labtry_wd_09", "Labtry_wd_06", "Labtry_weh_03", "Labtry_weh_06",\n\
         "Labtry_weh_06" )\n\
   ..\n\
"Labtry_wk_c3" = WEEK-SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   DAY-SCHEDULES    = ( "Labtry_wd_05", "Labtry_wd_08", "Labtry_wd_12",\n\
         "Labtry_wd_11", "Labtry_wd_13", "Labtry_weh_04", "Labtry_weh_03",\n\
         "Labtry_weh_04" )\n\
   ..\n\
"Labtry_wk_d3" = WEEK-SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   DAY-SCHEDULES    = ( "Labtry_wd_06", "Labtry_wd_05", "Labtry_wd_12",\n\
         "Labtry_wd_06", "Labtry_wd_15", "Labtry_weh_03", "Labtry_weh_06",\n\
         "Labtry_weh_01" )\n\
   ..\n\
"Labtry_wk_e3" = WEEK-SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   DAY-SCHEDULES    = ( "Labtry_wd_12", "Labtry_wd_03", "Labtry_wd_13",\n\
         "Labtry_wd_03", "Labtry_wd_14", "Labtry_weh_02", "Labtry_weh_06",\n\
         "Labtry_weh_02" )\n\
   ..\n\
"Labtry_wk_f3" = WEEK-SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   DAY-SCHEDULES    = ( "Labtry_wd_14", "Labtry_wd_13", "Labtry_wd_14",\n\
         "Labtry_wd_13", "Labtry_wd_07", "Labtry_weh_01", "Labtry_weh_04",\n\
         "Labtry_weh_02" )\n\
   ..\n\
"Labtry_wk_g3" = WEEK-SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   DAY-SCHEDULES    = ( "Labtry_wd_12", "Labtry_wd_12", "Labtry_wd_11",\n\
         "Labtry_wd_04", "Labtry_wd_01", "Labtry_weh_04", "Labtry_weh_04",\n\
         "Labtry_weh_04" )\n\
   ..\n\
"Labtry_wk_h3" = WEEK-SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   DAY-SCHEDULES    = ( "Labtry_wd_04", "Labtry_wd_14", "Labtry_wd_07",\n\
         "Labtry_wd_02", "Labtry_wd_02", "Labtry_weh_01", "Labtry_weh_05",\n\
         "Labtry_weh_04" )\n\
   ..\n\
"Labtry_wk_i3" = WEEK-SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   DAY-SCHEDULES    = ( "Labtry_wd_12", "Labtry_wd_11", "Labtry_wd_09",\n\
         "Labtry_wd_14", "Labtry_wd_09", "Labtry_weh_03", "Labtry_weh_03",\n\
         "Labtry_weh_03" )\n\
   ..\n\
"Labtry_wk_j3" = WEEK-SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   DAY-SCHEDULES    = ( "Labtry_wd_06", "Labtry_wd_02", "Labtry_wd_01",\n\
         "Labtry_wd_11", "Labtry_wd_12", "Labtry_weh_02", "Labtry_weh_04",\n\
         "Labtry_weh_02" )\n\
   ..\n\
"Labtry_wk_a4" = WEEK-SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   DAY-SCHEDULES    = ( "Labtry_wd_13", "Labtry_wd_01", "Labtry_wd_07",\n\
         "Labtry_wd_01", "Labtry_wd_09", "Labtry_weh_03", "Labtry_weh_03",\n\
         "Labtry_weh_06" )\n\
   ..\n\
"Labtry_wk_b4" = WEEK-SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   DAY-SCHEDULES    = ( "Labtry_wd_04", "Labtry_wd_14", "Labtry_wd_05",\n\
         "Labtry_wd_10", "Labtry_wd_15", "Labtry_weh_04", "Labtry_weh_02",\n\
         "Labtry_weh_02" )\n\
   ..\n\
"Labtry_wk_c4" = WEEK-SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   DAY-SCHEDULES    = ( "Labtry_wd_01", "Labtry_wd_09", "Labtry_wd_09",\n\
         "Labtry_wd_15", "Labtry_wd_07", "Labtry_weh_03", "Labtry_weh_05",\n\
         "Labtry_weh_03" )\n\
   ..\n\
"Labtry_wk_d4" = WEEK-SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   DAY-SCHEDULES    = ( "Labtry_wd_02", "Labtry_wd_15", "Labtry_wd_01",\n\
         "Labtry_wd_10", "Labtry_wd_11", "Labtry_weh_04", "Labtry_weh_06",\n\
         "Labtry_weh_05" )\n\
   ..\n\
"Labtry_wk_e4" = WEEK-SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   DAY-SCHEDULES    = ( "Labtry_wd_03", "Labtry_wd_04", "Labtry_wd_15",\n\
         "Labtry_wd_09", "Labtry_wd_02", "Labtry_weh_01", "Labtry_weh_05",\n\
         "Labtry_weh_06" )\n\
   ..\n\
"Labtry_wk_f4" = WEEK-SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   DAY-SCHEDULES    = ( "Labtry_wd_05", "Labtry_wd_10", "Labtry_wd_13",\n\
         "Labtry_wd_04", "Labtry_wd_11", "Labtry_weh_03", "Labtry_weh_02",\n\
         "Labtry_weh_02" )\n\
   ..\n\
"Labtry_wk_g4" = WEEK-SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   DAY-SCHEDULES    = ( "Labtry_wd_12", "Labtry_wd_06", "Labtry_wd_09",\n\
         "Labtry_wd_11", "Labtry_wd_03", "Labtry_weh_01", "Labtry_weh_03",\n\
         "Labtry_weh_06" )\n\
   ..\n\
"Labtry_wk_h4" = WEEK-SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   DAY-SCHEDULES    = ( "Labtry_wd_07", "Labtry_wd_03", "Labtry_wd_13",\n\
         "Labtry_wd_10", "Labtry_wd_13", "Labtry_weh_03", "Labtry_weh_02",\n\
         "Labtry_weh_05" )\n\
   ..\n\
"Labtry_wk_i4" = WEEK-SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   DAY-SCHEDULES    = ( "Labtry_wd_01", "Labtry_wd_10", "Labtry_wd_12",\n\
         "Labtry_wd_14", "Labtry_wd_15", "Labtry_weh_05", "Labtry_weh_03",\n\
         "Labtry_weh_05" )\n\
   ..\n\
"Labtry_wk_j4" = WEEK-SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   DAY-SCHEDULES    = ( "Labtry_wd_09", "Labtry_wd_03", "Labtry_wd_01",\n\
         "Labtry_wd_13", "Labtry_wd_13", "Labtry_weh_06", "Labtry_weh_06",\n\
         "Labtry_weh_04" )\n\
   ..\n\
"Labtry_wk_a5" = WEEK-SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   DAY-SCHEDULES    = ( "Labtry_wd_10", "Labtry_wd_08", "Labtry_wd_04",\n\
         "Labtry_wd_02", "Labtry_wd_13", "Labtry_weh_03", "Labtry_weh_02",\n\
         "Labtry_weh_05" )\n\
   ..\n\
"Labtry_wk_b5" = WEEK-SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   DAY-SCHEDULES    = ( "Labtry_wd_06", "Labtry_wd_05", "Labtry_wd_06",\n\
         "Labtry_wd_14", "Labtry_wd_14", "Labtry_weh_06", "Labtry_weh_05",\n\
         "Labtry_weh_03" )\n\
   ..\n\
"Labtry_wk_c5" = WEEK-SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   DAY-SCHEDULES    = ( "Labtry_wd_10", "Labtry_wd_14", "Labtry_wd_10",\n\
         "Labtry_wd_14", "Labtry_wd_04", "Labtry_weh_06", "Labtry_weh_02",\n\
         "Labtry_weh_03" )\n\
   ..\n\
"Labtry_wk_d5" = WEEK-SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   DAY-SCHEDULES    = ( "Labtry_wd_10", "Labtry_wd_10", "Labtry_wd_08",\n\
         "Labtry_wd_08", "Labtry_wd_13", "Labtry_weh_01", "Labtry_weh_02",\n\
         "Labtry_weh_05" )\n\
   ..\n\
"Labtry_wk_e5" = WEEK-SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   DAY-SCHEDULES    = ( "Labtry_wd_06", "Labtry_wd_14", "Labtry_wd_12",\n\
         "Labtry_wd_09", "Labtry_wd_02", "Labtry_weh_04", "Labtry_weh_03",\n\
         "Labtry_weh_03" )\n\
   ..\n\
"Labtry_wk_f5" = WEEK-SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   DAY-SCHEDULES    = ( "Labtry_wd_05", "Labtry_wd_01", "Labtry_wd_08",\n\
         "Labtry_wd_06", "Labtry_wd_01", "Labtry_weh_01", "Labtry_weh_01",\n\
         "Labtry_weh_03" )\n\
   ..\n\
"Labtry_wk_g5" = WEEK-SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   DAY-SCHEDULES    = ( "Labtry_wd_07", "Labtry_wd_08", "Labtry_wd_01",\n\
         "Labtry_wd_06", "Labtry_wd_06", "Labtry_weh_06", "Labtry_weh_05",\n\
         "Labtry_weh_05" )\n\
   ..\n\
"Labtry_wk_h5" = WEEK-SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   DAY-SCHEDULES    = ( "Labtry_wd_01", "Labtry_wd_09", "Labtry_wd_14",\n\
         "Labtry_wd_11", "Labtry_wd_12", "Labtry_weh_03", "Labtry_weh_03",\n\
         "Labtry_weh_06" )\n\
   ..\n\
"Labtry_wk_i5" = WEEK-SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   DAY-SCHEDULES    = ( "Labtry_wd_09", "Labtry_wd_04", "Labtry_wd_06",\n\
         "Labtry_wd_08", "Labtry_wd_06", "Labtry_weh_03", "Labtry_weh_05",\n\
         "Labtry_weh_05" )\n\
   ..\n\
"Labtry_wk_j5" = WEEK-SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   DAY-SCHEDULES    = ( "Labtry_wd_03", "Labtry_wd_13", "Labtry_wd_13",\n\
         "Labtry_wd_05", "Labtry_wd_01", "Labtry_weh_01", "Labtry_weh_01",\n\
         "Labtry_weh_05" )\n\
   ..\n\
"7to7 clg75 t-stat wsch" = WEEK-SCHEDULE-PD\n\
   TYPE             = TEMPERATURE\n\
   DAY-SCHEDULES    = ( "7to7 clg75 t-stat wd", &D, &D, &D, &D,\n\
         "7to7 clg75 t-stat weh" )\n\
   ..\n\
"7to7 clg73 t-stat wsch" = WEEK-SCHEDULE-PD\n\
   TYPE             = TEMPERATURE\n\
   DAY-SCHEDULES    = ( "7to7 clg73 t-stat wd", &D, &D, &D, &D,\n\
         "7to7 clg73 t-stat weh" )\n\
   ..\n\
"24x7 clg75 t-stat wsch" = WEEK-SCHEDULE-PD\n\
   TYPE             = TEMPERATURE\n\
   DAY-SCHEDULES    = ( "24x7 clg75 t-stat wd" )\n\
   ..\n\
"7to7 htg70 t-stat wsch" = WEEK-SCHEDULE-PD\n\
   TYPE             = TEMPERATURE\n\
   DAY-SCHEDULES    = ( "7to7 htg70 t-stat wd", &D, &D, &D, &D,\n\
         "7to7 htg70 t-stat weh" )\n\
   ..\n\
"24x7 htg70 t-stat wsch" = WEEK-SCHEDULE-PD\n\
   TYPE             = TEMPERATURE\n\
   DAY-SCHEDULES    = ( "24x7 htg70 t-stat wd" )\n\
   ..\n\
"Custom Gas Seas1 Week" = WEEK-SCHEDULE-PD\n\
   TYPE             = FLAG\n\
   DAY-SCHEDULES    = ( "Custom Gas Seas1 Day" )\n\
   ..\n\
"Custom Gas Seas2 Week" = WEEK-SCHEDULE-PD\n\
   TYPE             = FLAG\n\
   DAY-SCHEDULES    = ( "Custom Gas Seas2 Day" )\n\
   ..\n\
\n\
$ ---------------------------------------------------------\n\
$              Annual Schedules\n\
$ ---------------------------------------------------------\n\
\n\
"Office1" = SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   MONTH            = ( 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5,\n\
         5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 9, 9, 10,\n\
         10, 10, 10, 11, 11, 11, 11, 12, 12, 12, 12, 12 )\n\
   DAY              = ( 7, 14, 21, 28, 4, 11, 18, 25, 4, 11, 18, 25, 1, 8, 15,\n\
         22, 29, 6, 13, 20, 27, 3, 10, 17, 24, 1, 8, 15, 22, 29, 5, 12, 19,\n\
         26, 2, 9, 16, 23, 30, 7, 14, 21, 28, 4, 11, 18, 25, 2, 9, 16, 23,\n\
         31 )\n\
   WEEK-SCHEDULES   = ( "Office_wk_a1", "Office_wk_e1", "Office_wk_i1",\n\
         "Office_wk_j1", "Office_wk_f1", "Office_wk_f1", "Office_wk_a1",\n\
         "Office_wk_a1", "Office_wk_g1", "Office_wk_b1", "Office_wk_j1",\n\
         "Office_wk_b1", "Office_wk_e1", "Office_wk_g1", "Office_wk_d1",\n\
         "Office_wk_j1", "Office_wk_e1", "Office_wk_d1", "Office_wk_g1",\n\
         "Office_wk_j1", "Office_wk_g1", "Office_wk_i1", "Office_wk_g1",\n\
         "Office_wk_e1", "Office_wk_a1", "Office_wk_c1", "Office_wk_f1",\n\
         "Office_wk_j1", "Office_wk_i1", "Office_wk_e1", "Office_wk_a1",\n\
         "Office_wk_j1", "Office_wk_j1", "Office_wk_h1", "Office_wk_i1",\n\
         "Office_wk_j1", "Office_wk_j1", "Office_wk_b1", "Office_wk_c1",\n\
         "Office_wk_b1", "Office_wk_j1", "Office_wk_f1", "Office_wk_e1",\n\
         "Office_wk_a1", "Office_wk_a1", "Office_wk_h1", "Office_wk_c1",\n\
         "Office_wk_a1", "Office_wk_e1", "Office_wk_c1", "Office_wk_f1",\n\
         "Office_wk_a1" )\n\
   ..\n\
"Office2" = SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   MONTH            = ( 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5,\n\
         5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 9, 9, 10,\n\
         10, 10, 10, 11, 11, 11, 11, 12, 12, 12, 12, 12 )\n\
   DAY              = ( 7, 14, 21, 28, 4, 11, 18, 25, 4, 11, 18, 25, 1, 8, 15,\n\
         22, 29, 6, 13, 20, 27, 3, 10, 17, 24, 1, 8, 15, 22, 29, 5, 12, 19,\n\
         26, 2, 9, 16, 23, 30, 7, 14, 21, 28, 4, 11, 18, 25, 2, 9, 16, 23,\n\
         31 )\n\
   WEEK-SCHEDULES   = ( "Office_wk_a2", "Office_wk_g2", "Office_wk_j2",\n\
         "Office_wk_f2", "Office_wk_j2", "Office_wk_c2", "Office_wk_e2",\n\
         "Office_wk_f2", "Office_wk_g2", "Office_wk_c2", "Office_wk_f2",\n\
         "Office_wk_c2", "Office_wk_f2", "Office_wk_f2", "Office_wk_a2",\n\
         "Office_wk_h2", "Office_wk_j2", "Office_wk_e2", "Office_wk_c2",\n\
         "Office_wk_i2", "Office_wk_a2", "Office_wk_d2", "Office_wk_e2",\n\
         "Office_wk_j2", "Office_wk_b2", "Office_wk_d2", "Office_wk_h2",\n\
         "Office_wk_g2", "Office_wk_j2", "Office_wk_f2", "Office_wk_c2",\n\
         "Office_wk_f2", "Office_wk_i2", "Office_wk_c2", "Office_wk_c2",\n\
         "Office_wk_i2", "Office_wk_i2", "Office_wk_h2", "Office_wk_g2",\n\
         "Office_wk_a2", "Office_wk_b2", "Office_wk_f2", "Office_wk_b2",\n\
         "Office_wk_f2", "Office_wk_j2", "Office_wk_e2", "Office_wk_e2",\n\
         "Office_wk_c2", "Office_wk_a2", "Office_wk_g2", "Office_wk_h2",\n\
         "Office_wk_h2" )\n\
   ..\n\
"Office3" = SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   MONTH            = ( 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5,\n\
         5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 9, 9, 10,\n\
         10, 10, 10, 11, 11, 11, 11, 12, 12, 12, 12, 12 )\n\
   DAY              = ( 7, 14, 21, 28, 4, 11, 18, 25, 4, 11, 18, 25, 1, 8, 15,\n\
         22, 29, 6, 13, 20, 27, 3, 10, 17, 24, 1, 8, 15, 22, 29, 5, 12, 19,\n\
         26, 2, 9, 16, 23, 30, 7, 14, 21, 28, 4, 11, 18, 25, 2, 9, 16, 23,\n\
         31 )\n\
   WEEK-SCHEDULES   = ( "Office_wk_j3", "Office_wk_b3", "Office_wk_i3",\n\
         "Office_wk_c3", "Office_wk_f3", "Office_wk_a3", "Office_wk_i3",\n\
         "Office_wk_d3", "Office_wk_f3", "Office_wk_a3", "Office_wk_f3",\n\
         "Office_wk_b3", "Office_wk_f3", "Office_wk_g3", "Office_wk_d3",\n\
         "Office_wk_b3", "Office_wk_f3", "Office_wk_e3", "Office_wk_e3",\n\
         "Office_wk_f3", "Office_wk_b3", "Office_wk_e3", "Office_wk_d3",\n\
         "Office_wk_i3", "Office_wk_h3", "Office_wk_b3", "Office_wk_f3",\n\
         "Office_wk_d3", "Office_wk_d3", "Office_wk_f3", "Office_wk_a3",\n\
         "Office_wk_b3", "Office_wk_i3", "Office_wk_j3", "Office_wk_h3",\n\
         "Office_wk_a3", "Office_wk_a3", "Office_wk_b3", "Office_wk_f3",\n\
         "Office_wk_e3", "Office_wk_g3", "Office_wk_h3", "Office_wk_g3",\n\
         "Office_wk_g3", "Office_wk_d3", "Office_wk_j3", "Office_wk_f3",\n\
         "Office_wk_j3", "Office_wk_j3", "Office_wk_a3", "Office_wk_h3",\n\
         "Office_wk_b3" )\n\
   ..\n\
"Office4" = SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   MONTH            = ( 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5,\n\
         5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 9, 9, 10,\n\
         10, 10, 10, 11, 11, 11, 11, 12, 12, 12, 12, 12 )\n\
   DAY              = ( 7, 14, 21, 28, 4, 11, 18, 25, 4, 11, 18, 25, 1, 8, 15,\n\
         22, 29, 6, 13, 20, 27, 3, 10, 17, 24, 1, 8, 15, 22, 29, 5, 12, 19,\n\
         26, 2, 9, 16, 23, 30, 7, 14, 21, 28, 4, 11, 18, 25, 2, 9, 16, 23,\n\
         31 )\n\
   WEEK-SCHEDULES   = ( "Office_wk_b4", "Office_wk_d4", "Office_wk_c4",\n\
         "Office_wk_f4", "Office_wk_a4", "Office_wk_i4", "Office_wk_a4",\n\
         "Office_wk_j4", "Office_wk_d4", "Office_wk_j4", "Office_wk_c4",\n\
         "Office_wk_j4", "Office_wk_i4", "Office_wk_i4", "Office_wk_c4",\n\
         "Office_wk_e4", "Office_wk_j4", "Office_wk_d4", "Office_wk_g4",\n\
         "Office_wk_h4", "Office_wk_g4", "Office_wk_j4", "Office_wk_g4",\n\
         "Office_wk_b4", "Office_wk_b4", "Office_wk_e4", "Office_wk_e4",\n\
         "Office_wk_d4", "Office_wk_j4", "Office_wk_e4", "Office_wk_c4",\n\
         "Office_wk_e4", "Office_wk_j4", "Office_wk_c4", "Office_wk_a4",\n\
         "Office_wk_d4", "Office_wk_a4", "Office_wk_d4", "Office_wk_g4",\n\
         "Office_wk_a4", "Office_wk_h4", "Office_wk_c4", "Office_wk_f4",\n\
         "Office_wk_j4", "Office_wk_f4", "Office_wk_f4", "Office_wk_g4",\n\
         "Office_wk_f4", "Office_wk_i4", "Office_wk_f4", "Office_wk_e4",\n\
         "Office_wk_d4" )\n\
   ..\n\
"Office5" = SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   MONTH            = ( 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5,\n\
         5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 9, 9, 10,\n\
         10, 10, 10, 11, 11, 11, 11, 12, 12, 12, 12, 12 )\n\
   DAY              = ( 7, 14, 21, 28, 4, 11, 18, 25, 4, 11, 18, 25, 1, 8, 15,\n\
         22, 29, 6, 13, 20, 27, 3, 10, 17, 24, 1, 8, 15, 22, 29, 5, 12, 19,\n\
         26, 2, 9, 16, 23, 30, 7, 14, 21, 28, 4, 11, 18, 25, 2, 9, 16, 23,\n\
         31 )\n\
   WEEK-SCHEDULES   = ( "Office_wk_b5", "Office_wk_j5", "Office_wk_i5",\n\
         "Office_wk_e5", "Office_wk_h5", "Office_wk_g5", "Office_wk_d5",\n\
         "Office_wk_b5", "Office_wk_h5", "Office_wk_a5", "Office_wk_h5",\n\
         "Office_wk_i5", "Office_wk_j5", "Office_wk_i5", "Office_wk_i5",\n\
         "Office_wk_j5", "Office_wk_b5", "Office_wk_e5", "Office_wk_e5",\n\
         "Office_wk_f5", "Office_wk_f5", "Office_wk_i5", "Office_wk_d5",\n\
         "Office_wk_g5", "Office_wk_h5", "Office_wk_f5", "Office_wk_e5",\n\
         "Office_wk_d5", "Office_wk_b5", "Office_wk_g5", "Office_wk_e5",\n\
         "Office_wk_a5", "Office_wk_d5", "Office_wk_d5", "Office_wk_b5",\n\
         "Office_wk_c5", "Office_wk_c5", "Office_wk_e5", "Office_wk_e5",\n\
         "Office_wk_f5", "Office_wk_a5", "Office_wk_e5", "Office_wk_d5",\n\
         "Office_wk_j5", "Office_wk_f5", "Office_wk_f5", "Office_wk_c5",\n\
         "Office_wk_c5", "Office_wk_c5", "Office_wk_a5", "Office_wk_i5",\n\
         "Office_wk_b5" )\n\
   ..\n\
"7to7 onoff sch" = SCHEDULE-PD\n\
   TYPE             = ON/OFF/FLAG\n\
   MONTH            = ( 12 )\n\
   DAY              = ( 31 )\n\
   WEEK-SCHEDULES   = ( "7to7 onoff wsch" )\n\
   ..\n\
"24x7 on sch" = SCHEDULE-PD\n\
   TYPE             = ON/OFF/FLAG\n\
   MONTH            = ( 12 )\n\
   DAY              = ( 31 )\n\
   WEEK-SCHEDULES   = ( "24x7 on wsch" )\n\
   ..\n\
"DHW Eqp NRes Sch" = SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   MONTH            = ( 12 )\n\
   DAY              = ( 31 )\n\
   WEEK-SCHEDULES   = ( "DHW Eqp NRes Wk" )\n\
   ..\n\
"Labtry1" = SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   MONTH            = ( 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5,\n\
         5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 9, 9, 10,\n\
         10, 10, 10, 11, 11, 11, 11, 12, 12, 12, 12, 12 )\n\
   DAY              = ( 7, 14, 21, 28, 4, 11, 18, 25, 4, 11, 18, 25, 1, 8, 15,\n\
         22, 29, 6, 13, 20, 27, 3, 10, 17, 24, 1, 8, 15, 22, 29, 5, 12, 19,\n\
         26, 2, 9, 16, 23, 30, 7, 14, 21, 28, 4, 11, 18, 25, 2, 9, 16, 23,\n\
         31 )\n\
   WEEK-SCHEDULES   = ( "Labtry_wk_f1", "Labtry_wk_a1", "Labtry_wk_j1",\n\
         "Labtry_wk_g1", "Labtry_wk_f1", "Labtry_wk_b1", "Labtry_wk_d1",\n\
         "Labtry_wk_c1", "Labtry_wk_h1", "Labtry_wk_e1", "Labtry_wk_c1",\n\
         "Labtry_wk_h1", "Labtry_wk_j1", "Labtry_wk_h1", "Labtry_wk_d1",\n\
         "Labtry_wk_j1", "Labtry_wk_a1", "Labtry_wk_i1", "Labtry_wk_d1",\n\
         "Labtry_wk_a1", "Labtry_wk_i1", "Labtry_wk_e1", "Labtry_wk_e1",\n\
         "Labtry_wk_d1", "Labtry_wk_j1", "Labtry_wk_h1", "Labtry_wk_j1",\n\
         "Labtry_wk_d1", "Labtry_wk_h1", "Labtry_wk_j1", "Labtry_wk_d1",\n\
         "Labtry_wk_i1", "Labtry_wk_j1", "Labtry_wk_j1", "Labtry_wk_a1",\n\
         "Labtry_wk_c1", "Labtry_wk_b1", "Labtry_wk_b1", "Labtry_wk_j1",\n\
         "Labtry_wk_a1", "Labtry_wk_i1", "Labtry_wk_a1", "Labtry_wk_h1",\n\
         "Labtry_wk_g1", "Labtry_wk_a1", "Labtry_wk_a1", "Labtry_wk_g1",\n\
         "Labtry_wk_d1", "Labtry_wk_c1", "Labtry_wk_e1", "Labtry_wk_h1",\n\
         "Labtry_wk_a1" )\n\
   ..\n\
"Labtry2" = SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   MONTH            = ( 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5,\n\
         5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 9, 9, 10,\n\
         10, 10, 10, 11, 11, 11, 11, 12, 12, 12, 12, 12 )\n\
   DAY              = ( 7, 14, 21, 28, 4, 11, 18, 25, 4, 11, 18, 25, 1, 8, 15,\n\
         22, 29, 6, 13, 20, 27, 3, 10, 17, 24, 1, 8, 15, 22, 29, 5, 12, 19,\n\
         26, 2, 9, 16, 23, 30, 7, 14, 21, 28, 4, 11, 18, 25, 2, 9, 16, 23,\n\
         31 )\n\
   WEEK-SCHEDULES   = ( "Labtry_wk_g2", "Labtry_wk_h2", "Labtry_wk_i2",\n\
         "Labtry_wk_b2", "Labtry_wk_g2", "Labtry_wk_g2", "Labtry_wk_e2",\n\
         "Labtry_wk_c2", "Labtry_wk_a2", "Labtry_wk_h2", "Labtry_wk_f2",\n\
         "Labtry_wk_d2", "Labtry_wk_d2", "Labtry_wk_j2", "Labtry_wk_g2",\n\
         "Labtry_wk_h2", "Labtry_wk_j2", "Labtry_wk_i2", "Labtry_wk_c2",\n\
         "Labtry_wk_d2", "Labtry_wk_h2", "Labtry_wk_h2", "Labtry_wk_e2",\n\
         "Labtry_wk_c2", "Labtry_wk_i2", "Labtry_wk_i2", "Labtry_wk_g2",\n\
         "Labtry_wk_g2", "Labtry_wk_b2", "Labtry_wk_d2", "Labtry_wk_f2",\n\
         "Labtry_wk_h2", "Labtry_wk_g2", "Labtry_wk_b2", "Labtry_wk_c2",\n\
         "Labtry_wk_i2", "Labtry_wk_d2", "Labtry_wk_h2", "Labtry_wk_c2",\n\
         "Labtry_wk_f2", "Labtry_wk_j2", "Labtry_wk_b2", "Labtry_wk_a2",\n\
         "Labtry_wk_d2", "Labtry_wk_a2", "Labtry_wk_d2", "Labtry_wk_c2",\n\
         "Labtry_wk_i2", "Labtry_wk_j2", "Labtry_wk_f2", "Labtry_wk_a2",\n\
         "Labtry_wk_g2" )\n\
   ..\n\
"Labtry3" = SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   MONTH            = ( 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5,\n\
         5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 9, 9, 10,\n\
         10, 10, 10, 11, 11, 11, 11, 12, 12, 12, 12, 12 )\n\
   DAY              = ( 7, 14, 21, 28, 4, 11, 18, 25, 4, 11, 18, 25, 1, 8, 15,\n\
         22, 29, 6, 13, 20, 27, 3, 10, 17, 24, 1, 8, 15, 22, 29, 5, 12, 19,\n\
         26, 2, 9, 16, 23, 30, 7, 14, 21, 28, 4, 11, 18, 25, 2, 9, 16, 23,\n\
         31 )\n\
   WEEK-SCHEDULES   = ( "Labtry_wk_a3", "Labtry_wk_c3", "Labtry_wk_d3",\n\
         "Labtry_wk_a3", "Labtry_wk_f3", "Labtry_wk_d3", "Labtry_wk_i3",\n\
         "Labtry_wk_i3", "Labtry_wk_j3", "Labtry_wk_i3", "Labtry_wk_d3",\n\
         "Labtry_wk_e3", "Labtry_wk_j3", "Labtry_wk_d3", "Labtry_wk_c3",\n\
         "Labtry_wk_e3", "Labtry_wk_b3", "Labtry_wk_j3", "Labtry_wk_g3",\n\
         "Labtry_wk_i3", "Labtry_wk_j3", "Labtry_wk_i3", "Labtry_wk_i3",\n\
         "Labtry_wk_g3", "Labtry_wk_h3", "Labtry_wk_h3", "Labtry_wk_e3",\n\
         "Labtry_wk_d3", "Labtry_wk_d3", "Labtry_wk_j3", "Labtry_wk_j3",\n\
         "Labtry_wk_h3", "Labtry_wk_i3", "Labtry_wk_f3", "Labtry_wk_i3",\n\
         "Labtry_wk_a3", "Labtry_wk_j3", "Labtry_wk_g3", "Labtry_wk_a3",\n\
         "Labtry_wk_c3", "Labtry_wk_b3", "Labtry_wk_b3", "Labtry_wk_g3",\n\
         "Labtry_wk_c3", "Labtry_wk_d3", "Labtry_wk_h3", "Labtry_wk_b3",\n\
         "Labtry_wk_c3", "Labtry_wk_d3", "Labtry_wk_e3", "Labtry_wk_h3",\n\
         "Labtry_wk_c3" )\n\
   ..\n\
"Labtry4" = SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   MONTH            = ( 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5,\n\
         5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 9, 9, 10,\n\
         10, 10, 10, 11, 11, 11, 11, 12, 12, 12, 12, 12 )\n\
   DAY              = ( 7, 14, 21, 28, 4, 11, 18, 25, 4, 11, 18, 25, 1, 8, 15,\n\
         22, 29, 6, 13, 20, 27, 3, 10, 17, 24, 1, 8, 15, 22, 29, 5, 12, 19,\n\
         26, 2, 9, 16, 23, 30, 7, 14, 21, 28, 4, 11, 18, 25, 2, 9, 16, 23,\n\
         31 )\n\
   WEEK-SCHEDULES   = ( "Labtry_wk_i4", "Labtry_wk_d4", "Labtry_wk_e4",\n\
         "Labtry_wk_e4", "Labtry_wk_h4", "Labtry_wk_j4", "Labtry_wk_i4",\n\
         "Labtry_wk_d4", "Labtry_wk_d4", "Labtry_wk_a4", "Labtry_wk_b4",\n\
         "Labtry_wk_f4", "Labtry_wk_d4", "Labtry_wk_h4", "Labtry_wk_g4",\n\
         "Labtry_wk_f4", "Labtry_wk_c4", "Labtry_wk_h4", "Labtry_wk_i4",\n\
         "Labtry_wk_c4", "Labtry_wk_j4", "Labtry_wk_f4", "Labtry_wk_b4",\n\
         "Labtry_wk_h4", "Labtry_wk_d4", "Labtry_wk_h4", "Labtry_wk_i4",\n\
         "Labtry_wk_e4", "Labtry_wk_i4", "Labtry_wk_a4", "Labtry_wk_d4",\n\
         "Labtry_wk_d4", "Labtry_wk_e4", "Labtry_wk_d4", "Labtry_wk_d4",\n\
         "Labtry_wk_d4", "Labtry_wk_d4", "Labtry_wk_e4", "Labtry_wk_j4",\n\
         "Labtry_wk_g4", "Labtry_wk_a4", "Labtry_wk_e4", "Labtry_wk_e4",\n\
         "Labtry_wk_g4", "Labtry_wk_c4", "Labtry_wk_h4", "Labtry_wk_h4",\n\
         "Labtry_wk_b4", "Labtry_wk_e4", "Labtry_wk_j4", "Labtry_wk_d4",\n\
         "Labtry_wk_d4" )\n\
   ..\n\
"Labtry5" = SCHEDULE-PD\n\
   TYPE             = FRACTION\n\
   MONTH            = ( 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5,\n\
         5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 9, 9, 10,\n\
         10, 10, 10, 11, 11, 11, 11, 12, 12, 12, 12, 12 )\n\
   DAY              = ( 7, 14, 21, 28, 4, 11, 18, 25, 4, 11, 18, 25, 1, 8, 15,\n\
         22, 29, 6, 13, 20, 27, 3, 10, 17, 24, 1, 8, 15, 22, 29, 5, 12, 19,\n\
         26, 2, 9, 16, 23, 30, 7, 14, 21, 28, 4, 11, 18, 25, 2, 9, 16, 23,\n\
         31 )\n\
   WEEK-SCHEDULES   = ( "Labtry_wk_j5", "Labtry_wk_b5", "Labtry_wk_f5",\n\
         "Labtry_wk_f5", "Labtry_wk_a5", "Labtry_wk_b5", "Labtry_wk_i5",\n\
         "Labtry_wk_a5", "Labtry_wk_i5", "Labtry_wk_c5", "Labtry_wk_b5",\n\
         "Labtry_wk_i5", "Labtry_wk_f5", "Labtry_wk_e5", "Labtry_wk_e5",\n\
         "Labtry_wk_a5", "Labtry_wk_g5", "Labtry_wk_f5", "Labtry_wk_c5",\n\
         "Labtry_wk_j5", "Labtry_wk_i5", "Labtry_wk_j5", "Labtry_wk_g5",\n\
         "Labtry_wk_c5", "Labtry_wk_j5", "Labtry_wk_a5", "Labtry_wk_j5",\n\
         "Labtry_wk_e5", "Labtry_wk_g5", "Labtry_wk_b5", "Labtry_wk_b5",\n\
         "Labtry_wk_a5", "Labtry_wk_a5", "Labtry_wk_c5", "Labtry_wk_a5",\n\
         "Labtry_wk_e5", "Labtry_wk_e5", "Labtry_wk_i5", "Labtry_wk_d5",\n\
         "Labtry_wk_d5", "Labtry_wk_c5", "Labtry_wk_e5", "Labtry_wk_d5",\n\
         "Labtry_wk_d5", "Labtry_wk_g5", "Labtry_wk_g5", "Labtry_wk_i5",\n\
         "Labtry_wk_c5", "Labtry_wk_f5", "Labtry_wk_i5", "Labtry_wk_b5",\n\
         "Labtry_wk_e5" )\n\
   ..\n\
"7to7 clg75 t-stat sch" = SCHEDULE-PD\n\
   TYPE             = TEMPERATURE\n\
   MONTH            = ( 12 )\n\
   DAY              = ( 31 )\n\
   WEEK-SCHEDULES   = ( "7to7 clg75 t-stat wsch" )\n\
   ..\n\
"7to7 clg73 t-stat sch" = SCHEDULE-PD\n\
   TYPE             = TEMPERATURE\n\
   MONTH            = ( 12 )\n\
   DAY              = ( 31 )\n\
   WEEK-SCHEDULES   = ( "7to7 clg73 t-stat wsch" )\n\
   ..\n\
"24x7 clg75 t-stat sch" = SCHEDULE-PD\n\
   TYPE             = TEMPERATURE\n\
   MONTH            = ( 12 )\n\
   DAY              = ( 31 )\n\
   WEEK-SCHEDULES   = ( "24x7 clg75 t-stat wsch" )\n\
   ..\n\
"7to7 htg70 t-stat sch" = SCHEDULE-PD\n\
   TYPE             = TEMPERATURE\n\
   MONTH            = ( 12 )\n\
   DAY              = ( 31 )\n\
   WEEK-SCHEDULES   = ( "7to7 htg70 t-stat wsch" )\n\
   ..\n\
"24x7 htg70 t-stat sch" = SCHEDULE-PD\n\
   TYPE             = TEMPERATURE\n\
   MONTH            = ( 12 )\n\
   DAY              = ( 31 )\n\
   WEEK-SCHEDULES   = ( "24x7 htg70 t-stat wsch" )\n\
   ..\n\
"Custom Gas Season Sched" = SCHEDULE-PD\n\
   TYPE             = FLAG\n\
   MONTH            = ( 3, 10, 12 )\n\
   DAY              = ( 31, 31, 31 )\n\
   WEEK-SCHEDULES   = ( "Custom Gas Seas1 Week", "Custom Gas Seas2 Week",\n\
         "Custom Gas Seas1 Week" )\n\
   ..\n\
"Schedule ON/OFF" = SCHEDULE-PD\n\
   LIBRARY-ENTRY "Schedule ON/OFF"\n\
   ..\n\
\n\
\n\
$ ---------------------------------------------------------\n\
$              Polygons\n\
$ ---------------------------------------------------------\n\
\n\
"Basement pg" = POLYGON\n\
   V1               = ( 104.25, 88.25 )\n\
   V2               = ( 105.25, 92 )\n\
   V3               = ( 85, 99 )\n\
   V4               = ( 82.25, 91.75 )\n\
   V5               = ( 16.5, 114 )\n\
   V6               = ( 10.25, 96 )\n\
   V7               = ( 8.75, 96.5 )\n\
   V8               = ( 4.5, 83.75 )\n\
   V9               = ( 12, 81.5 )\n\
   V10              = ( 13.5, 84.25 )\n\
   V11              = ( 22.75, 111.25 )\n\
   V12              = ( 82, 91.25 )\n\
   V13              = ( 78.25, 79.25 )\n\
   V14              = ( 76.25, 72.75 )\n\
   V15              = ( 73.25, 64 )\n\
   V16              = ( 71.5, 57.5 )\n\
   V17              = ( 79.75, 55 )\n\
   V18              = ( 83.75, 65 )\n\
   V19              = ( 101.25, 59.25 )\n\
   V20              = ( 105.5, 72 )\n\
   V21              = ( 160.5, 53.75 )\n\
   V22              = ( 156, 40 )\n\
   V23              = ( 157.5, 39.5 )\n\
   V24              = ( 153.75, 29.75 )\n\
   V25              = ( 177.25, 22 )\n\
   V26              = ( 179.75, 28.5 )\n\
   V27              = ( 182.75, 37.25 )\n\
   V28              = ( 184.25, 42.75 )\n\
   V29              = ( 187, 50 )\n\
   V30              = ( 247.25, 29.5 )\n\
   V31              = ( 240, 8.5 )\n\
   V32              = ( 239, 5.5 )\n\
   V33              = ( 246.5, 3 )\n\
   V34              = ( 251, 15.5 )\n\
   V35              = ( 249.25, 16.25 )\n\
   V36              = ( 253.393, 27.3796 )\n\
   V37              = ( 255.5, 34.25 )\n\
   V38              = ( 189, 56.75 )\n\
   V39              = ( 191.25, 63.75 )\n\
   V40              = ( 171, 70.5 )\n\
   V41              = ( 169.75, 66.5 )\n\
   ..\n\
"0-EL1 Elevator 1 pg" = POLYGON\n\
   V1               = ( 157.5, 39.5 )\n\
   V2               = ( 153.75, 29.75 )\n\
   V3               = ( 160.981, 27.3652 )\n\
   V4               = ( 164.25, 37.25 )\n\
   V5               = ( 160.75, 38.25 )\n\
   ..\n\
"0-EL1 Elevator 1 slab pg" = POLYGON\n\
   V1               = ( 157.5, 39.5 )\n\
   V2               = ( 153.75, 29.75 )\n\
   V3               = ( 160.981, 27.3652 )\n\
   V4               = ( 164.25, 37.25 )\n\
   V5               = ( 160.75, 38.25 )\n\
   ..\n\
"0-ST2 Stair 2 pg" = POLYGON\n\
   V1               = ( 76.25, 72.75 )\n\
   V2               = ( 73.25, 64 )\n\
   V3               = ( 71.5, 57.5 )\n\
   V4               = ( 79.75, 55 )\n\
   V5               = ( 83.75, 65 )\n\
   V6               = ( 85.25, 70 )\n\
   ..\n\
"0-ST2 Stair 2 slab pg" = POLYGON\n\
   V1               = ( 76.25, 72.75 )\n\
   V2               = ( 73.25, 64 )\n\
   V3               = ( 71.5, 57.5 )\n\
   V4               = ( 79.75, 55 )\n\
   V5               = ( 83.75, 65 )\n\
   V6               = ( 85.25, 70 )\n\
   ..\n\
"0-ST3 Stair 3 pg" = POLYGON\n\
   V1               = ( 174.5, 40.25 )\n\
   V2               = ( 168.717, 24.814 )\n\
   V3               = ( 177.25, 22 )\n\
   V4               = ( 179.75, 28.5 )\n\
   V5               = ( 182.75, 37.25 )\n\
   ..\n\
"0-ST3 Stair 3 slab pg" = POLYGON\n\
   V1               = ( 174.5, 40.25 )\n\
   V2               = ( 168.717, 24.814 )\n\
   V3               = ( 177.25, 22 )\n\
   V4               = ( 179.75, 28.5 )\n\
   V5               = ( 182.75, 37.25 )\n\
   ..\n\
"020 Elev Lobby pg" = POLYGON\n\
   V1               = ( 162.5, 44.25 )\n\
   V2               = ( 160.75, 38.25 )\n\
   V3               = ( 164.25, 37.25 )\n\
   V4               = ( 160.981, 27.3652 )\n\
   V5               = ( 168.717, 24.814 )\n\
   V6               = ( 174.5, 40.25 )\n\
   ..\n\
"020 Elev Lobby slab pg" = POLYGON\n\
   V1               = ( 162.5, 44.25 )\n\
   V2               = ( 160.75, 38.25 )\n\
   V3               = ( 164.25, 37.25 )\n\
   V4               = ( 160.981, 27.3652 )\n\
   V5               = ( 168.717, 24.814 )\n\
   V6               = ( 174.5, 40.25 )\n\
   ..\n\
"021 Pottery pg" = POLYGON\n\
   V1               = ( 171, 70.5 )\n\
   V2               = ( 169.75, 66.5 )\n\
   V3               = ( 166.479, 56.6629 )\n\
   V4               = ( 162.5, 44.25 )\n\
   V5               = ( 174.5, 40.25 )\n\
   V6               = ( 176.25, 45.25 )\n\
   V7               = ( 184.25, 42.75 )\n\
   V8               = ( 187, 50 )\n\
   V9               = ( 189, 56.75 )\n\
   V10              = ( 191.25, 63.75 )\n\
   ..\n\
"021 Pottery slab pg" = POLYGON\n\
   V1               = ( 171, 70.5 )\n\
   V2               = ( 169.75, 66.5 )\n\
   V3               = ( 166.479, 56.6629 )\n\
   V4               = ( 162.5, 44.25 )\n\
   V5               = ( 174.5, 40.25 )\n\
   V6               = ( 176.25, 45.25 )\n\
   V7               = ( 184.25, 42.75 )\n\
   V8               = ( 187, 50 )\n\
   V9               = ( 189, 56.75 )\n\
   V10              = ( 191.25, 63.75 )\n\
   ..\n\
"021A Storage pg" = POLYGON\n\
   V1               = ( 176.25, 45.25 )\n\
   V2               = ( 174.5, 40.25 )\n\
   V3               = ( 182.75, 37.25 )\n\
   V4               = ( 184.25, 42.75 )\n\
   ..\n\
"021A Storage slab pg" = POLYGON\n\
   V1               = ( 176.25, 45.25 )\n\
   V2               = ( 174.5, 40.25 )\n\
   V3               = ( 182.75, 37.25 )\n\
   V4               = ( 184.25, 42.75 )\n\
   ..\n\
"022 Equip pg" = POLYGON\n\
   V1               = ( 160.104, 69.7029 )\n\
   V2               = ( 156.5, 60 )\n\
   V3               = ( 166.479, 56.6629 )\n\
   V4               = ( 169.75, 66.5 )\n\
   ..\n\
"022 Equip slab pg" = POLYGON\n\
   V1               = ( 160.104, 69.7029 )\n\
   V2               = ( 156.5, 60 )\n\
   V3               = ( 166.479, 56.6629 )\n\
   V4               = ( 169.75, 66.5 )\n\
   ..\n\
"023A Corridor pg" = POLYGON\n\
   V1               = ( 85.25, 70 )\n\
   V2               = ( 83.75, 65 )\n\
   V3               = ( 101.25, 59.25 )\n\
   V4               = ( 105.5, 72 )\n\
   V5               = ( 160.5, 53.75 )\n\
   V6               = ( 156, 40 )\n\
   V7               = ( 157.5, 39.5 )\n\
   V8               = ( 160.75, 38.25 )\n\
   V9               = ( 162.5, 44.25 )\n\
   V10              = ( 166.479, 56.6629 )\n\
   V11              = ( 156.5, 60 )\n\
   V12              = ( 144.25, 64 )\n\
   V13              = ( 138, 66.25 )\n\
   V14              = ( 118.25, 72.75 )\n\
   V15              = ( 100.75, 78.75 )\n\
   V16              = ( 96.75, 66 )\n\
   ..\n\
"023A Corridor slab pg" = POLYGON\n\
   V1               = ( 85.25, 70 )\n\
   V2               = ( 83.75, 65 )\n\
   V3               = ( 101.25, 59.25 )\n\
   V4               = ( 105.5, 72 )\n\
   V5               = ( 160.5, 53.75 )\n\
   V6               = ( 156, 40 )\n\
   V7               = ( 157.5, 39.5 )\n\
   V8               = ( 160.75, 38.25 )\n\
   V9               = ( 162.5, 44.25 )\n\
   V10              = ( 166.479, 56.6629 )\n\
   V11              = ( 156.5, 60 )\n\
   V12              = ( 144.25, 64 )\n\
   V13              = ( 138, 66.25 )\n\
   V14              = ( 118.25, 72.75 )\n\
   V15              = ( 100.75, 78.75 )\n\
   V16              = ( 96.75, 66 )\n\
   ..\n\
"024 Laundry 2 pg" = POLYGON\n\
   V1               = ( 147.851, 73.772 )\n\
   V2               = ( 144.25, 64 )\n\
   V3               = ( 156.5, 60 )\n\
   V4               = ( 160.104, 69.7029 )\n\
   ..\n\
"024 Laundry 2 slab pg" = POLYGON\n\
   V1               = ( 147.851, 73.772 )\n\
   V2               = ( 144.25, 64 )\n\
   V3               = ( 156.5, 60 )\n\
   V4               = ( 160.104, 69.7029 )\n\
   ..\n\
"025 Piping pg" = POLYGON\n\
   V1               = ( 141.249, 75.964 )\n\
   V2               = ( 138, 66.25 )\n\
   V3               = ( 144.25, 64 )\n\
   V4               = ( 147.851, 73.772 )\n\
   ..\n\
"025 Piping slab pg" = POLYGON\n\
   V1               = ( 141.249, 75.964 )\n\
   V2               = ( 138, 66.25 )\n\
   V3               = ( 144.25, 64 )\n\
   V4               = ( 147.851, 73.772 )\n\
   ..\n\
"026 Laundry pg" = POLYGON\n\
   V1               = ( 121.889, 82.3929 )\n\
   V2               = ( 118.25, 72.75 )\n\
   V3               = ( 138, 66.25 )\n\
   V4               = ( 141.249, 75.964 )\n\
   ..\n\
"026 Laundry slab pg" = POLYGON\n\
   V1               = ( 121.889, 82.3929 )\n\
   V2               = ( 118.25, 72.75 )\n\
   V3               = ( 138, 66.25 )\n\
   V4               = ( 141.249, 75.964 )\n\
   ..\n\
"028 IT pg" = POLYGON\n\
   V1               = ( 104.25, 88.25 )\n\
   V2               = ( 100.75, 78.75 )\n\
   V3               = ( 118.25, 72.75 )\n\
   V4               = ( 121.889, 82.3929 )\n\
   ..\n\
"028 IT slab pg" = POLYGON\n\
   V1               = ( 104.25, 88.25 )\n\
   V2               = ( 100.75, 78.75 )\n\
   V3               = ( 118.25, 72.75 )\n\
   V4               = ( 121.889, 82.3929 )\n\
   ..\n\
"029 Pottery pg" = POLYGON\n\
   V1               = ( 85, 99 )\n\
   V2               = ( 82.25, 91.75 )\n\
   V3               = ( 82, 91.25 )\n\
   V4               = ( 78.25, 79.25 )\n\
   V5               = ( 76.25, 72.75 )\n\
   V6               = ( 85.25, 70 )\n\
   V7               = ( 96.75, 66 )\n\
   V8               = ( 100.75, 78.75 )\n\
   V9               = ( 104.25, 88.25 )\n\
   V10              = ( 105.25, 92 )\n\
   ..\n\
"029 Pottery slab pg" = POLYGON\n\
   V1               = ( 85, 99 )\n\
   V2               = ( 82.25, 91.75 )\n\
   V3               = ( 82, 91.25 )\n\
   V4               = ( 78.25, 79.25 )\n\
   V5               = ( 76.25, 72.75 )\n\
   V6               = ( 85.25, 70 )\n\
   V7               = ( 96.75, 66 )\n\
   V8               = ( 100.75, 78.75 )\n\
   V9               = ( 104.25, 88.25 )\n\
   V10              = ( 105.25, 92 )\n\
   ..\n\
"034 Storage pg" = POLYGON\n\
   V1               = ( 189, 56.75 )\n\
   V2               = ( 187, 50 )\n\
   V3               = ( 247.25, 29.5 )\n\
   V4               = ( 253.393, 27.3796 )\n\
   V5               = ( 255.5, 34.25 )\n\
   ..\n\
"034 Storage slab pg" = POLYGON\n\
   V1               = ( 189, 56.75 )\n\
   V2               = ( 187, 50 )\n\
   V3               = ( 247.25, 29.5 )\n\
   V4               = ( 253.393, 27.3796 )\n\
   V5               = ( 255.5, 34.25 )\n\
   ..\n\
"Level 1 pg" = POLYGON\n\
   V1               = ( 16.5, 114 )\n\
   V2               = ( 10.25, 96 )\n\
   V3               = ( 8.75, 96.5 )\n\
   V4               = ( 4.5, 83.75 )\n\
   V5               = ( 12, 81.5 )\n\
   V6               = ( 13.5, 84.25 )\n\
   V7               = ( 73.25, 64 )\n\
   V8               = ( 71.5, 57.5 )\n\
   V9               = ( 98, 48.25 )\n\
   V10              = ( 101.5, 58.75 )\n\
   V11              = ( 157.5, 39.5 )\n\
   V12              = ( 153.75, 29.75 )\n\
   V13              = ( 177.25, 22 )\n\
   V14              = ( 179.75, 28.5 )\n\
   V15              = ( 240, 8.5 )\n\
   V16              = ( 239, 5.5 )\n\
   V17              = ( 246.5, 3 )\n\
   V18              = ( 251, 15.5 )\n\
   V19              = ( 249.25, 16.25 )\n\
   V20              = ( 255.5, 34.25 )\n\
   V21              = ( 189, 56.75 )\n\
   V22              = ( 191.25, 63.75 )\n\
   V23              = ( 171, 70.5 )\n\
   V24              = ( 169.75, 66.5 )\n\
   V25              = ( 104.25, 88.25 )\n\
   V26              = ( 105.25, 92 )\n\
   V27              = ( 85, 99 )\n\
   V28              = ( 82.25, 91.75 )\n\
   ..\n\
"1-21 Potter Upper pg" = POLYGON\n\
   V1               = ( 171, 70.5 )\n\
   V2               = ( 169.75, 66.5 )\n\
   V3               = ( 165, 53 )\n\
   V4               = ( 164, 49.75 )\n\
   V5               = ( 175.5, 45.75 )\n\
   V6               = ( 184.75, 43 )\n\
   V7               = ( 189, 56.75 )\n\
   V8               = ( 191.25, 63.75 )\n\
   ..\n\
"1-21 Potter Upper floor pg" = POLYGON\n\
   V1               = ( 171, 70.5 )\n\
   V2               = ( 169.75, 66.5 )\n\
   V3               = ( 165, 53 )\n\
   V4               = ( 164, 49.75 )\n\
   V5               = ( 175.5, 45.75 )\n\
   V6               = ( 184.75, 43 )\n\
   V7               = ( 189, 56.75 )\n\
   V8               = ( 191.25, 63.75 )\n\
   ..\n\
"1-29 Pottery Upper pg" = POLYGON\n\
   V1               = ( 85, 99 )\n\
   V2               = ( 82.25, 91.75 )\n\
   V3               = ( 78, 78.25 )\n\
   V4               = ( 87.25, 75.5 )\n\
   V5               = ( 98.25, 71.75 )\n\
   V6               = ( 99.75, 75 )\n\
   V7               = ( 104.25, 88.25 )\n\
   V8               = ( 105.25, 92 )\n\
   ..\n\
"1-29 Pottery Upper floor pg" = POLYGON\n\
   V1               = ( 85, 99 )\n\
   V2               = ( 82.25, 91.75 )\n\
   V3               = ( 78, 78.25 )\n\
   V4               = ( 87.25, 75.5 )\n\
   V5               = ( 98.25, 71.75 )\n\
   V6               = ( 99.75, 75 )\n\
   V7               = ( 104.25, 88.25 )\n\
   V8               = ( 105.25, 92 )\n\
   ..\n\
"1-EL Elev pg" = POLYGON\n\
   V1               = ( 157.5, 39.5 )\n\
   V2               = ( 153.75, 29.75 )\n\
   V3               = ( 160.797, 27.4258 )\n\
   V4               = ( 164.25, 37.75 )\n\
   ..\n\
"1-EL Elev floor pg" = POLYGON\n\
   V1               = ( 157.5, 39.5 )\n\
   V2               = ( 153.75, 29.75 )\n\
   V3               = ( 160.797, 27.4258 )\n\
   V4               = ( 164.25, 37.75 )\n\
   ..\n\
"1-ST1 Stair 1 pg" = POLYGON\n\
   V1               = ( 8.75, 96.5 )\n\
   V2               = ( 4.5, 83.75 )\n\
   V3               = ( 12, 81.5 )\n\
   V4               = ( 13.5, 84.25 )\n\
   V5               = ( 16.5, 94.75 )\n\
   V6               = ( 10.25, 96 )\n\
   ..\n\
"1-ST1 Stair 1 slab pg" = POLYGON\n\
   V1               = ( 8.75, 96.5 )\n\
   V2               = ( 4.5, 83.75 )\n\
   V3               = ( 12, 81.5 )\n\
   V4               = ( 13.5, 84.25 )\n\
   V5               = ( 16.5, 94.75 )\n\
   V6               = ( 10.25, 96 )\n\
   ..\n\
"1-ST2 Stair 2 pg" = POLYGON\n\
   V1               = ( 78, 78.25 )\n\
   V2               = ( 73.25, 64 )\n\
   V3               = ( 71.5, 57.5 )\n\
   V4               = ( 79.8177, 54.5967 )\n\
   V5               = ( 87.25, 75.5 )\n\
   ..\n\
"1-ST2 Stair 2 floor pg" = POLYGON\n\
   V1               = ( 78, 78.25 )\n\
   V2               = ( 73.25, 64 )\n\
   V3               = ( 71.5, 57.5 )\n\
   V4               = ( 79.8177, 54.5967 )\n\
   V5               = ( 87.25, 75.5 )\n\
   ..\n\
"1-ST3 Stair 3 pg" = POLYGON\n\
   V1               = ( 175.5, 45.75 )\n\
   V2               = ( 172, 35.25 )\n\
   V3               = ( 168.752, 24.8025 )\n\
   V4               = ( 177.25, 22 )\n\
   V5               = ( 179.75, 28.5 )\n\
   V6               = ( 184.75, 43 )\n\
   ..\n\
"1-ST3 Stair 3 floor pg" = POLYGON\n\
   V1               = ( 175.5, 45.75 )\n\
   V2               = ( 172, 35.25 )\n\
   V3               = ( 168.752, 24.8025 )\n\
   V4               = ( 177.25, 22 )\n\
   V5               = ( 179.75, 28.5 )\n\
   V6               = ( 184.75, 43 )\n\
   ..\n\
"1-ST4 Stair 4 pg" = POLYGON\n\
   V1               = ( 243.5, 18.5 )\n\
   V2               = ( 240, 8.5 )\n\
   V3               = ( 239, 5.5 )\n\
   V4               = ( 246.5, 3 )\n\
   V5               = ( 251, 15.5 )\n\
   V6               = ( 249.25, 16.25 )\n\
   ..\n\
"1-ST4 Stair 4 slab pg" = POLYGON\n\
   V1               = ( 243.5, 18.5 )\n\
   V2               = ( 240, 8.5 )\n\
   V3               = ( 239, 5.5 )\n\
   V4               = ( 246.5, 3 )\n\
   V5               = ( 251, 15.5 )\n\
   V6               = ( 249.25, 16.25 )\n\
   ..\n\
"101 Lounge pg" = POLYGON\n\
   V1               = ( 87.25, 75.5 )\n\
   V2               = ( 79.8177, 54.5967 )\n\
   V3               = ( 98, 48.25 )\n\
   V4               = ( 101.5, 58.75 )\n\
   V5               = ( 104.25, 68.5 )\n\
   V6               = ( 98.25, 71.75 )\n\
   ..\n\
"101 Lounge floor pg" = POLYGON\n\
   V1               = ( 87.25, 75.5 )\n\
   V2               = ( 79.8177, 54.5967 )\n\
   V3               = ( 98, 48.25 )\n\
   V4               = ( 101.5, 58.75 )\n\
   V5               = ( 104.25, 68.5 )\n\
   V6               = ( 98.25, 71.75 )\n\
   ..\n\
"102 Room pg" = POLYGON\n\
   V1               = ( 70.6699, 95.6687 )\n\
   V2               = ( 66, 82.75 )\n\
   V3               = ( 78, 78.25 )\n\
   V4               = ( 82.25, 91.75 )\n\
   ..\n\
"102 Room slab pg" = POLYGON\n\
   V1               = ( 70.6699, 95.6687 )\n\
   V2               = ( 66, 82.75 )\n\
   V3               = ( 78, 78.25 )\n\
   V4               = ( 82.25, 91.75 )\n\
   ..\n\
"104 Room pg" = POLYGON\n\
   V1               = ( 60.7805, 99.0154 )\n\
   V2               = ( 56, 86 )\n\
   V3               = ( 66, 82.75 )\n\
   V4               = ( 70.6699, 95.6687 )\n\
   ..\n\
"104 Room slab pg" = POLYGON\n\
   V1               = ( 60.7805, 99.0154 )\n\
   V2               = ( 56, 86 )\n\
   V3               = ( 66, 82.75 )\n\
   V4               = ( 70.6699, 95.6687 )\n\
   ..\n\
"105 Room pg" = POLYGON\n\
   V1               = ( 60.25, 79.75 )\n\
   V2               = ( 57.2113, 69.4357 )\n\
   V3               = ( 68.1475, 65.7293 )\n\
   V4               = ( 71.5, 76 )\n\
   ..\n\
"105 Room slab pg" = POLYGON\n\
   V1               = ( 60.25, 79.75 )\n\
   V2               = ( 57.2113, 69.4357 )\n\
   V3               = ( 68.1475, 65.7293 )\n\
   V4               = ( 71.5, 76 )\n\
   ..\n\
"106 Room pg" = POLYGON\n\
   V1               = ( 50.4542, 102.51 )\n\
   V2               = ( 45.75, 89.25 )\n\
   V3               = ( 56, 86 )\n\
   V4               = ( 60.7805, 99.0154 )\n\
   ..\n\
"106 Room slab pg" = POLYGON\n\
   V1               = ( 50.4542, 102.51 )\n\
   V2               = ( 45.75, 89.25 )\n\
   V3               = ( 56, 86 )\n\
   V4               = ( 60.7805, 99.0154 )\n\
   ..\n\
"107 Room pg" = POLYGON\n\
   V1               = ( 49, 83.5 )\n\
   V2               = ( 45.682, 73.3431 )\n\
   V3               = ( 57.2113, 69.4357 )\n\
   V4               = ( 60.25, 79.75 )\n\
   ..\n\
"107 Room slab pg" = POLYGON\n\
   V1               = ( 49, 83.5 )\n\
   V2               = ( 45.682, 73.3431 )\n\
   V3               = ( 57.2113, 69.4357 )\n\
   V4               = ( 60.25, 79.75 )\n\
   ..\n\
"108 Bathroom pg" = POLYGON\n\
   V1               = ( 39.3169, 106.279 )\n\
   V2               = ( 35, 93 )\n\
   V3               = ( 45.75, 89.25 )\n\
   V4               = ( 50.4542, 102.51 )\n\
   ..\n\
"108 Bathroom slab pg" = POLYGON\n\
   V1               = ( 39.3169, 106.279 )\n\
   V2               = ( 35, 93 )\n\
   V3               = ( 45.75, 89.25 )\n\
   V4               = ( 50.4542, 102.51 )\n\
   ..\n\
"109 Room pg" = POLYGON\n\
   V1               = ( 33, 88.75 )\n\
   V2               = ( 29.4494, 78.8446 )\n\
   V3               = ( 45.682, 73.3431 )\n\
   V4               = ( 49, 83.5 )\n\
   ..\n\
"109 Room slab pg" = POLYGON\n\
   V1               = ( 33, 88.75 )\n\
   V2               = ( 29.4494, 78.8446 )\n\
   V3               = ( 45.682, 73.3431 )\n\
   V4               = ( 49, 83.5 )\n\
   ..\n\
"110 Room pg" = POLYGON\n\
   V1               = ( 27.6182, 110.238 )\n\
   V2               = ( 23.25, 97 )\n\
   V3               = ( 35, 93 )\n\
   V4               = ( 39.3169, 106.279 )\n\
   ..\n\
"110 Room slab pg" = POLYGON\n\
   V1               = ( 27.6182, 110.238 )\n\
   V2               = ( 23.25, 97 )\n\
   V3               = ( 35, 93 )\n\
   V4               = ( 39.3169, 106.279 )\n\
   ..\n\
"111 Room pg" = POLYGON\n\
   V1               = ( 16.5, 94.75 )\n\
   V2               = ( 13.5, 84.25 )\n\
   V3               = ( 29.4494, 78.8446 )\n\
   V4               = ( 33, 88.75 )\n\
   ..\n\
"111 Room slab pg" = POLYGON\n\
   V1               = ( 16.5, 94.75 )\n\
   V2               = ( 13.5, 84.25 )\n\
   V3               = ( 29.4494, 78.8446 )\n\
   V4               = ( 33, 88.75 )\n\
   ..\n\
"112 Room pg" = POLYGON\n\
   V1               = ( 16.5, 114 )\n\
   V2               = ( 11.8987, 100.748 )\n\
   V3               = ( 23.25, 97 )\n\
   V4               = ( 27.6182, 110.238 )\n\
   ..\n\
"112 Room slab pg" = POLYGON\n\
   V1               = ( 16.5, 114 )\n\
   V2               = ( 11.8987, 100.748 )\n\
   V3               = ( 23.25, 97 )\n\
   V4               = ( 27.6182, 110.238 )\n\
   ..\n\
"113 Corridor pg" = POLYGON\n\
   V1               = ( 11.8987, 100.748 )\n\
   V2               = ( 10.25, 96 )\n\
   V3               = ( 16.5, 94.75 )\n\
   V4               = ( 33, 88.75 )\n\
   V5               = ( 49, 83.5 )\n\
   V6               = ( 56, 86 )\n\
   V7               = ( 45.75, 89.25 )\n\
   V8               = ( 35, 93 )\n\
   V9               = ( 23.25, 97 )\n\
   ..\n\
"113 Corridor slab pg" = POLYGON\n\
   V1               = ( 11.8987, 100.748 )\n\
   V2               = ( 10.25, 96 )\n\
   V3               = ( 16.5, 94.75 )\n\
   V4               = ( 33, 88.75 )\n\
   V5               = ( 49, 83.5 )\n\
   V6               = ( 56, 86 )\n\
   V7               = ( 45.75, 89.25 )\n\
   V8               = ( 35, 93 )\n\
   V9               = ( 23.25, 97 )\n\
   ..\n\
"114 Corridor pg" = POLYGON\n\
   V1               = ( 56, 86 )\n\
   V2               = ( 49, 83.5 )\n\
   V3               = ( 60.25, 79.75 )\n\
   V4               = ( 71.5, 76 )\n\
   V5               = ( 68.1475, 65.7293 )\n\
   V6               = ( 73.25, 64 )\n\
   V7               = ( 78, 78.25 )\n\
   V8               = ( 66, 82.75 )\n\
   ..\n\
"114 Corridor slab pg" = POLYGON\n\
   V1               = ( 56, 86 )\n\
   V2               = ( 49, 83.5 )\n\
   V3               = ( 60.25, 79.75 )\n\
   V4               = ( 71.5, 76 )\n\
   V5               = ( 68.1475, 65.7293 )\n\
   V6               = ( 73.25, 64 )\n\
   V7               = ( 78, 78.25 )\n\
   V8               = ( 66, 82.75 )\n\
   ..\n\
"121 Corridor pg" = POLYGON\n\
   V1               = ( 157.5, 39.5 )\n\
   V2               = ( 164.25, 37.75 )\n\
   V3               = ( 172, 35.25 )\n\
   V4               = ( 175.5, 45.75 )\n\
   V5               = ( 164, 49.75 )\n\
   V6               = ( 159.5, 50.25 )\n\
   V7               = ( 156.113, 39.9769 )\n\
   ..\n\
"121 Corridor floor pg" = POLYGON\n\
   V1               = ( 157.5, 39.5 )\n\
   V2               = ( 164.25, 37.75 )\n\
   V3               = ( 172, 35.25 )\n\
   V4               = ( 175.5, 45.75 )\n\
   V5               = ( 164, 49.75 )\n\
   V6               = ( 159.5, 50.25 )\n\
   V7               = ( 156.113, 39.9769 )\n\
   ..\n\
"121A Elev Lobby pg" = POLYGON\n\
   V1               = ( 164.25, 37.75 )\n\
   V2               = ( 160.797, 27.4258 )\n\
   V3               = ( 168.752, 24.8025 )\n\
   V4               = ( 172, 35.25 )\n\
   ..\n\
"121A Elev Lobby floor pg" = POLYGON\n\
   V1               = ( 164.25, 37.75 )\n\
   V2               = ( 160.797, 27.4258 )\n\
   V3               = ( 168.752, 24.8025 )\n\
   V4               = ( 172, 35.25 )\n\
   ..\n\
"122 Room pg" = POLYGON\n\
   V1               = ( 158.589, 70.2062 )\n\
   V2               = ( 154, 56.75 )\n\
   V3               = ( 165, 53 )\n\
   V4               = ( 169.75, 66.5 )\n\
   ..\n\
"122 Room floor pg" = POLYGON\n\
   V1               = ( 158.589, 70.2062 )\n\
   V2               = ( 154, 56.75 )\n\
   V3               = ( 165, 53 )\n\
   V4               = ( 169.75, 66.5 )\n\
   ..\n\
"124 Room pg" = POLYGON\n\
   V1               = ( 148.759, 73.4703 )\n\
   V2               = ( 144, 60 )\n\
   V3               = ( 154, 56.75 )\n\
   V4               = ( 158.589, 70.2062 )\n\
   ..\n\
"124 Room floor pg" = POLYGON\n\
   V1               = ( 148.759, 73.4703 )\n\
   V2               = ( 144, 60 )\n\
   V3               = ( 154, 56.75 )\n\
   V4               = ( 158.589, 70.2062 )\n\
   ..\n\
"125 Corridor pg" = POLYGON\n\
   V1               = ( 99.75, 75 )\n\
   V2               = ( 98.25, 71.75 )\n\
   V3               = ( 104.25, 68.5 )\n\
   V4               = ( 120.5, 63 )\n\
   V5               = ( 137, 57.75 )\n\
   V6               = ( 148.75, 53.75 )\n\
   V7               = ( 159.5, 50.25 )\n\
   V8               = ( 164, 49.75 )\n\
   V9               = ( 165, 53 )\n\
   V10              = ( 154, 56.75 )\n\
   V11              = ( 144, 60 )\n\
   V12              = ( 133.75, 63.5 )\n\
   V13              = ( 122.75, 67 )\n\
   V14              = ( 114.75, 70 )\n\
   ..\n\
"125 Corridor slab pg" = POLYGON\n\
   V1               = ( 160.5, 53.75 )\n\
   V2               = ( 105.5, 72 )\n\
   V3               = ( 104.325, 68.4747 )\n\
   V4               = ( 120.5, 63 )\n\
   V5               = ( 137, 57.75 )\n\
   V6               = ( 148.75, 53.75 )\n\
   V7               = ( 159.368, 50.2928 )\n\
   ..\n\
"125 Corridor floor pg" = POLYGON\n\
   V1               = ( 114.75, 70 )\n\
   V2               = ( 99.75, 75 )\n\
   V3               = ( 98.25, 71.75 )\n\
   V4               = ( 104.25, 68.5 )\n\
   V5               = ( 104.325, 68.4747 )\n\
   V6               = ( 105.5, 72 )\n\
   V7               = ( 160.5, 53.75 )\n\
   V8               = ( 159.368, 50.2928 )\n\
   V9               = ( 159.5, 50.25 )\n\
   V10              = ( 164, 49.75 )\n\
   V11              = ( 165, 53 )\n\
   V12              = ( 154, 56.75 )\n\
   V13              = ( 144, 60 )\n\
   V14              = ( 133.75, 63.5 )\n\
   V15              = ( 122.75, 67 )\n\
   ..\n\
"125 Room pg" = POLYGON\n\
   V1               = ( 159.5, 50.25 )\n\
   V2               = ( 148.75, 53.75 )\n\
   V3               = ( 145.102, 43.7617 )\n\
   V4               = ( 156.113, 39.9769 )\n\
   ..\n\
"125 Room slab pg" = POLYGON\n\
   V1               = ( 159.5, 50.25 )\n\
   V2               = ( 148.75, 53.75 )\n\
   V3               = ( 145.102, 43.7617 )\n\
   V4               = ( 156.113, 39.9769 )\n\
   ..\n\
"126 Room pg" = POLYGON\n\
   V1               = ( 138.573, 76.8528 )\n\
   V2               = ( 133.75, 63.5 )\n\
   V3               = ( 144, 60 )\n\
   V4               = ( 148.759, 73.4703 )\n\
   ..\n\
"126 Room floor pg" = POLYGON\n\
   V1               = ( 138.573, 76.8528 )\n\
   V2               = ( 133.75, 63.5 )\n\
   V3               = ( 144, 60 )\n\
   V4               = ( 148.759, 73.4703 )\n\
   ..\n\
"127 Room pg" = POLYGON\n\
   V1               = ( 137, 57.75 )\n\
   V2               = ( 133.537, 47.7374 )\n\
   V3               = ( 145.102, 43.7617 )\n\
   V4               = ( 148.75, 53.75 )\n\
   ..\n\
"127 Room slab pg" = POLYGON\n\
   V1               = ( 137, 57.75 )\n\
   V2               = ( 133.537, 47.7374 )\n\
   V3               = ( 145.102, 43.7617 )\n\
   V4               = ( 148.75, 53.75 )\n\
   ..\n\
"128 Bathroom pg" = POLYGON\n\
   V1               = ( 127.315, 80.5911 )\n\
   V2               = ( 122.75, 67 )\n\
   V3               = ( 133.75, 63.5 )\n\
   V4               = ( 138.573, 76.8528 )\n\
   ..\n\
"128 Bathroom floor pg" = POLYGON\n\
   V1               = ( 127.315, 80.5911 )\n\
   V2               = ( 122.75, 67 )\n\
   V3               = ( 133.75, 63.5 )\n\
   V4               = ( 138.573, 76.8528 )\n\
   ..\n\
"129 Room pg" = POLYGON\n\
   V1               = ( 120.5, 63 )\n\
   V2               = ( 117.418, 53.2781 )\n\
   V3               = ( 133.537, 47.7374 )\n\
   V4               = ( 137, 57.75 )\n\
   ..\n\
"129 Room slab pg" = POLYGON\n\
   V1               = ( 120.5, 63 )\n\
   V2               = ( 117.418, 53.2781 )\n\
   V3               = ( 133.537, 47.7374 )\n\
   V4               = ( 137, 57.75 )\n\
   ..\n\
"130 Bathroom pg" = POLYGON\n\
   V1               = ( 119.056, 83.3336 )\n\
   V2               = ( 114.75, 70 )\n\
   V3               = ( 122.75, 67 )\n\
   V4               = ( 127.315, 80.5911 )\n\
   ..\n\
"130 Bathroom floor pg" = POLYGON\n\
   V1               = ( 119.056, 83.3336 )\n\
   V2               = ( 114.75, 70 )\n\
   V3               = ( 122.75, 67 )\n\
   V4               = ( 127.315, 80.5911 )\n\
   ..\n\
"131 Room pg" = POLYGON\n\
   V1               = ( 104.25, 68.5 )\n\
   V2               = ( 101.5, 58.75 )\n\
   V3               = ( 117.418, 53.2781 )\n\
   V4               = ( 120.5, 63 )\n\
   ..\n\
"131 Room slab pg" = POLYGON\n\
   V1               = ( 120.5, 63 )\n\
   V2               = ( 104.325, 68.4747 )\n\
   V3               = ( 103.792, 66.875 )\n\
   V4               = ( 101.5, 58.75 )\n\
   V5               = ( 117.418, 53.2781 )\n\
   ..\n\
"131 Room floor pg" = POLYGON\n\
   V1               = ( 104.325, 68.4747 )\n\
   V2               = ( 104.25, 68.5 )\n\
   V3               = ( 103.792, 66.8751 )\n\
   ..\n\
"132 Room pg" = POLYGON\n\
   V1               = ( 104.25, 88.25 )\n\
   V2               = ( 99.75, 75 )\n\
   V3               = ( 114.75, 70 )\n\
   V4               = ( 119.056, 83.3336 )\n\
   ..\n\
"132 Room floor pg" = POLYGON\n\
   V1               = ( 104.25, 88.25 )\n\
   V2               = ( 99.75, 75 )\n\
   V3               = ( 114.75, 70 )\n\
   V4               = ( 119.056, 83.3336 )\n\
   ..\n\
"142 Room pg" = POLYGON\n\
   V1               = ( 189, 56.75 )\n\
   V2               = ( 184.75, 43 )\n\
   V3               = ( 197, 39 )\n\
   V4               = ( 201.449, 52.5379 )\n\
   ..\n\
"142 Room floor pg" = POLYGON\n\
   V1               = ( 189, 56.75 )\n\
   V2               = ( 184.75, 43 )\n\
   V3               = ( 197, 39 )\n\
   V4               = ( 201.449, 52.5379 )\n\
   ..\n\
"143 Room pg" = POLYGON\n\
   V1               = ( 188.5, 37 )\n\
   V2               = ( 184.748, 26.841 )\n\
   V3               = ( 196.064, 23.0847 )\n\
   V4               = ( 199.5, 33.25 )\n\
   ..\n\
"143 Room slab pg" = POLYGON\n\
   V1               = ( 188.5, 37 )\n\
   V2               = ( 184.748, 26.841 )\n\
   V3               = ( 196.064, 23.0847 )\n\
   V4               = ( 199.5, 33.25 )\n\
   ..\n\
"144 Room pg" = POLYGON\n\
   V1               = ( 201.449, 52.5379 )\n\
   V2               = ( 197, 39 )\n\
   V3               = ( 206.75, 35.5 )\n\
   V4               = ( 211.289, 49.2085 )\n\
   ..\n\
"144 Room floor pg" = POLYGON\n\
   V1               = ( 201.449, 52.5379 )\n\
   V2               = ( 197, 39 )\n\
   V3               = ( 206.75, 35.5 )\n\
   V4               = ( 211.289, 49.2085 )\n\
   ..\n\
"145 Room pg" = POLYGON\n\
   V1               = ( 199.5, 33.25 )\n\
   V2               = ( 196.064, 23.0847 )\n\
   V3               = ( 207.38, 19.3283 )\n\
   V4               = ( 211.25, 29.25 )\n\
   ..\n\
"145 Room slab pg" = POLYGON\n\
   V1               = ( 199.5, 33.25 )\n\
   V2               = ( 196.064, 23.0847 )\n\
   V3               = ( 207.38, 19.3283 )\n\
   V4               = ( 211.25, 29.25 )\n\
   ..\n\
"146 Room pg" = POLYGON\n\
   V1               = ( 211.289, 49.2085 )\n\
   V2               = ( 206.75, 35.5 )\n\
   V3               = ( 216.25, 32.5 )\n\
   V4               = ( 220.752, 46.007 )\n\
   ..\n\
"146 Room floor pg" = POLYGON\n\
   V1               = ( 211.289, 49.2085 )\n\
   V2               = ( 206.75, 35.5 )\n\
   V3               = ( 216.25, 32.5 )\n\
   V4               = ( 220.752, 46.007 )\n\
   ..\n\
"147 Room pg" = POLYGON\n\
   V1               = ( 211.25, 29.25 )\n\
   V2               = ( 207.38, 19.3283 )\n\
   V3               = ( 223.778, 13.8849 )\n\
   V4               = ( 227, 24 )\n\
   ..\n\
"147 Room slab pg" = POLYGON\n\
   V1               = ( 211.25, 29.25 )\n\
   V2               = ( 207.38, 19.3283 )\n\
   V3               = ( 223.778, 13.8849 )\n\
   V4               = ( 227, 24 )\n\
   ..\n\
"148 Bathroom pg" = POLYGON\n\
   V1               = ( 220.752, 46.007 )\n\
   V2               = ( 216.25, 32.5 )\n\
   V3               = ( 228, 28.5 )\n\
   V4               = ( 232.736, 41.952 )\n\
   ..\n\
"148 Bathroom floor pg" = POLYGON\n\
   V1               = ( 220.752, 46.007 )\n\
   V2               = ( 216.25, 32.5 )\n\
   V3               = ( 228, 28.5 )\n\
   V4               = ( 232.736, 41.952 )\n\
   ..\n\
"149 Room pg" = POLYGON\n\
   V1               = ( 227, 24 )\n\
   V2               = ( 223.778, 13.8849 )\n\
   V3               = ( 240, 8.5 )\n\
   V4               = ( 243.5, 18.5 )\n\
   ..\n\
"149 Room slab pg" = POLYGON\n\
   V1               = ( 227, 24 )\n\
   V2               = ( 223.778, 13.8849 )\n\
   V3               = ( 240, 8.5 )\n\
   V4               = ( 243.5, 18.5 )\n\
   ..\n\
"150 Room pg" = POLYGON\n\
   V1               = ( 232.736, 41.952 )\n\
   V2               = ( 228, 28.5 )\n\
   V3               = ( 239.75, 24.75 )\n\
   V4               = ( 244.084, 38.1126 )\n\
   ..\n\
"150 Room floor pg" = POLYGON\n\
   V1               = ( 232.736, 41.952 )\n\
   V2               = ( 228, 28.5 )\n\
   V3               = ( 239.75, 24.75 )\n\
   V4               = ( 244.084, 38.1126 )\n\
   ..\n\
"152 Room pg" = POLYGON\n\
   V1               = ( 244.084, 38.1126 )\n\
   V2               = ( 239.75, 24.75 )\n\
   V3               = ( 250.807, 20.7334 )\n\
   V4               = ( 255.5, 34.25 )\n\
   ..\n\
"152 Room floor pg" = POLYGON\n\
   V1               = ( 244.084, 38.1126 )\n\
   V2               = ( 239.75, 24.75 )\n\
   V3               = ( 250.807, 20.7334 )\n\
   V4               = ( 255.5, 34.25 )\n\
   ..\n\
"153 Corridor pg" = POLYGON\n\
   V1               = ( 184.75, 43 )\n\
   V2               = ( 179.75, 28.5 )\n\
   V3               = ( 184.748, 26.841 )\n\
   V4               = ( 188.5, 37 )\n\
   V5               = ( 199.5, 33.25 )\n\
   V6               = ( 211.25, 29.25 )\n\
   V7               = ( 227, 24 )\n\
   V8               = ( 243.5, 18.5 )\n\
   V9               = ( 249.25, 16.25 )\n\
   V10              = ( 250.807, 20.7334 )\n\
   V11              = ( 239.75, 24.75 )\n\
   V12              = ( 228, 28.5 )\n\
   V13              = ( 216.25, 32.5 )\n\
   V14              = ( 206.75, 35.5 )\n\
   V15              = ( 197, 39 )\n\
   ..\n\
"153 Corridor slab pg" = POLYGON\n\
   V1               = ( 184.75, 43 )\n\
   V2               = ( 179.75, 28.5 )\n\
   V3               = ( 184.748, 26.841 )\n\
   V4               = ( 188.5, 37 )\n\
   V5               = ( 199.5, 33.25 )\n\
   V6               = ( 211.25, 29.25 )\n\
   V7               = ( 227, 24 )\n\
   V8               = ( 243.5, 18.5 )\n\
   V9               = ( 249.25, 16.25 )\n\
   V10              = ( 250.807, 20.7334 )\n\
   V11              = ( 239.75, 24.75 )\n\
   V12              = ( 228, 28.5 )\n\
   V13              = ( 216.25, 32.5 )\n\
   V14              = ( 206.75, 35.5 )\n\
   V15              = ( 197, 39 )\n\
   ..\n\
"Level 2 pg" = POLYGON\n\
   V1               = ( 85, 99 )\n\
   V2               = ( 82.25, 91.75 )\n\
   V3               = ( 16.5, 114 )\n\
   V4               = ( 10.25, 96 )\n\
   V5               = ( 8.75, 96.5 )\n\
   V6               = ( 4.5, 83.75 )\n\
   V7               = ( 12, 81.5 )\n\
   V8               = ( 13.5, 84.25 )\n\
   V9               = ( 73.25, 64 )\n\
   V10              = ( 71.5, 57.5 )\n\
   V11              = ( 98, 48.25 )\n\
   V12              = ( 101.5, 58.75 )\n\
   V13              = ( 157.5, 39.5 )\n\
   V14              = ( 153.75, 29.75 )\n\
   V15              = ( 177.25, 22 )\n\
   V16              = ( 179.75, 28.5 )\n\
   V17              = ( 240, 8.5 )\n\
   V18              = ( 239, 5.5 )\n\
   V19              = ( 246.5, 3 )\n\
   V20              = ( 251, 15.5 )\n\
   V21              = ( 249.25, 16.25 )\n\
   V22              = ( 255.5, 34.25 )\n\
   V23              = ( 189, 56.75 )\n\
   V24              = ( 191.25, 63.75 )\n\
   V25              = ( 171, 70.5 )\n\
   V26              = ( 169.75, 66.5 )\n\
   V27              = ( 104.25, 88.25 )\n\
   V28              = ( 105.25, 92 )\n\
   ..\n\
"2-EL1 Elev pg" = POLYGON\n\
   V1               = ( 157.5, 39.5 )\n\
   V2               = ( 153.75, 29.75 )\n\
   V3               = ( 160.861, 27.4048 )\n\
   V4               = ( 164.5, 37.5 )\n\
   ..\n\
"2-EL1 Elev floor pg" = POLYGON\n\
   V1               = ( 157.5, 39.5 )\n\
   V2               = ( 153.75, 29.75 )\n\
   V3               = ( 160.861, 27.4048 )\n\
   V4               = ( 164.5, 37.5 )\n\
   ..\n\
"2-ST1 Stair 1 pg" = POLYGON\n\
   V1               = ( 8.75, 96.5 )\n\
   V2               = ( 4.5, 83.75 )\n\
   V3               = ( 12, 81.5 )\n\
   V4               = ( 13.5, 84.25 )\n\
   V5               = ( 16.25, 94.25 )\n\
   V6               = ( 10.25, 96 )\n\
   ..\n\
"2-ST1 Stair 1 floor pg" = POLYGON\n\
   V1               = ( 8.75, 96.5 )\n\
   V2               = ( 4.5, 83.75 )\n\
   V3               = ( 12, 81.5 )\n\
   V4               = ( 13.5, 84.25 )\n\
   V5               = ( 16.25, 94.25 )\n\
   V6               = ( 10.25, 96 )\n\
   ..\n\
"2-ST2 Stair 2 pg" = POLYGON\n\
   V1               = ( 76.25, 72.5 )\n\
   V2               = ( 73.25, 64 )\n\
   V3               = ( 71.5, 57.5 )\n\
   V4               = ( 79.8201, 54.5958 )\n\
   V5               = ( 82.75, 62 )\n\
   V6               = ( 84.25, 69.75 )\n\
   ..\n\
"2-ST2 Stair 2 floor pg" = POLYGON\n\
   V1               = ( 76.25, 72.5 )\n\
   V2               = ( 73.25, 64 )\n\
   V3               = ( 71.5, 57.5 )\n\
   V4               = ( 79.8201, 54.5958 )\n\
   V5               = ( 82.75, 62 )\n\
   V6               = ( 84.25, 69.75 )\n\
   ..\n\
"2-ST3 Stair 3 pg" = POLYGON\n\
   V1               = ( 173.75, 40.25 )\n\
   V2               = ( 168.658, 24.8334 )\n\
   V3               = ( 177.25, 22 )\n\
   V4               = ( 179.75, 28.5 )\n\
   V5               = ( 182.75, 37 )\n\
   ..\n\
"2-ST3 Stair 3 floor pg" = POLYGON\n\
   V1               = ( 173.75, 40.25 )\n\
   V2               = ( 168.658, 24.8334 )\n\
   V3               = ( 177.25, 22 )\n\
   V4               = ( 179.75, 28.5 )\n\
   V5               = ( 182.75, 37 )\n\
   ..\n\
"2-ST4 Stair 4 pg" = POLYGON\n\
   V1               = ( 243.75, 18.25 )\n\
   V2               = ( 240, 8.5 )\n\
   V3               = ( 239, 5.5 )\n\
   V4               = ( 246.5, 3 )\n\
   V5               = ( 251, 15.5 )\n\
   V6               = ( 249.25, 16.25 )\n\
   ..\n\
"2-ST4 Stair 4 floor pg" = POLYGON\n\
   V1               = ( 243.75, 18.25 )\n\
   V2               = ( 240, 8.5 )\n\
   V3               = ( 239, 5.5 )\n\
   V4               = ( 246.5, 3 )\n\
   V5               = ( 251, 15.5 )\n\
   V6               = ( 249.25, 16.25 )\n\
   ..\n\
"200 CRE pg" = POLYGON\n\
   V1               = ( 85, 99 )\n\
   V2               = ( 82.25, 91.75 )\n\
   V3               = ( 77.75, 78.25 )\n\
   V4               = ( 86.25, 75.5 )\n\
   V5               = ( 84.25, 69.75 )\n\
   V6               = ( 96.75, 66 )\n\
   V7               = ( 99.75, 74.75 )\n\
   V8               = ( 104.25, 88.25 )\n\
   V9               = ( 105.25, 92 )\n\
   ..\n\
"200 CRE floor pg" = POLYGON\n\
   V1               = ( 85, 99 )\n\
   V2               = ( 82.25, 91.75 )\n\
   V3               = ( 77.75, 78.25 )\n\
   V4               = ( 86.25, 75.5 )\n\
   V5               = ( 84.25, 69.75 )\n\
   V6               = ( 96.75, 66 )\n\
   V7               = ( 99.75, 74.75 )\n\
   V8               = ( 104.25, 88.25 )\n\
   V9               = ( 105.25, 92 )\n\
   ..\n\
"200B Storage pg" = POLYGON\n\
   V1               = ( 77.75, 78.25 )\n\
   V2               = ( 76.25, 72.5 )\n\
   V3               = ( 84.25, 69.75 )\n\
   V4               = ( 86.25, 75.5 )\n\
   ..\n\
"200B Storage floor pg" = POLYGON\n\
   V1               = ( 77.75, 78.25 )\n\
   V2               = ( 76.25, 72.5 )\n\
   V3               = ( 84.25, 69.75 )\n\
   V4               = ( 86.25, 75.5 )\n\
   ..\n\
"201 Corridor pg" = POLYGON\n\
   V1               = ( 84.25, 69.75 )\n\
   V2               = ( 82.75, 62 )\n\
   V3               = ( 95.75, 63.5 )\n\
   V4               = ( 102, 61.25 )\n\
   V5               = ( 104.25, 68.25 )\n\
   V6               = ( 99.75, 74.75 )\n\
   V7               = ( 96.75, 66 )\n\
   ..\n\
"201 Corridor floor pg" = POLYGON\n\
   V1               = ( 84.25, 69.75 )\n\
   V2               = ( 82.75, 62 )\n\
   V3               = ( 95.75, 63.5 )\n\
   V4               = ( 102, 61.25 )\n\
   V5               = ( 104.25, 68.25 )\n\
   V6               = ( 99.75, 74.75 )\n\
   V7               = ( 96.75, 66 )\n\
   ..\n\
"201A Lounge pg" = POLYGON\n\
   V1               = ( 82.75, 62 )\n\
   V2               = ( 79.8201, 54.5958 )\n\
   V3               = ( 98, 48.25 )\n\
   V4               = ( 101.5, 58.75 )\n\
   V5               = ( 102, 61.25 )\n\
   V6               = ( 95.75, 63.5 )\n\
   ..\n\
"201A Lounge floor pg" = POLYGON\n\
   V1               = ( 82.75, 62 )\n\
   V2               = ( 79.8201, 54.5958 )\n\
   V3               = ( 98, 48.25 )\n\
   V4               = ( 101.5, 58.75 )\n\
   V5               = ( 102, 61.25 )\n\
   V6               = ( 95.75, 63.5 )\n\
   ..\n\
"202 Room pg" = POLYGON\n\
   V1               = ( 70.7899, 95.6281 )\n\
   V2               = ( 66, 82.5 )\n\
   V3               = ( 77.75, 78.25 )\n\
   V4               = ( 82.25, 91.75 )\n\
   ..\n\
"202 Room floor pg" = POLYGON\n\
   V1               = ( 70.7899, 95.6281 )\n\
   V2               = ( 66, 82.5 )\n\
   V3               = ( 77.75, 78.25 )\n\
   V4               = ( 82.25, 91.75 )\n\
   ..\n\
"203 Room pg" = POLYGON\n\
   V1               = ( 60.75, 79.25 )\n\
   V2               = ( 57.2134, 69.435 )\n\
   V3               = ( 68.2301, 65.7013 )\n\
   V4               = ( 71.75, 75.75 )\n\
   ..\n\
"203 Room floor pg" = POLYGON\n\
   V1               = ( 60.75, 79.25 )\n\
   V2               = ( 57.2134, 69.435 )\n\
   V3               = ( 68.2301, 65.7013 )\n\
   V4               = ( 71.75, 75.75 )\n\
   ..\n\
"204 Room pg" = POLYGON\n\
   V1               = ( 60.6591, 99.0564 )\n\
   V2               = ( 56.25, 85.75 )\n\
   V3               = ( 66, 82.5 )\n\
   V4               = ( 70.7899, 95.6281 )\n\
   ..\n\
"204 Room floor pg" = POLYGON\n\
   V1               = ( 60.6591, 99.0564 )\n\
   V2               = ( 56.25, 85.75 )\n\
   V3               = ( 66, 82.5 )\n\
   V4               = ( 70.7899, 95.6281 )\n\
   ..\n\
"206 Room pg" = POLYGON\n\
   V1               = ( 50.6529, 102.443 )\n\
   V2               = ( 46, 89 )\n\
   V3               = ( 56.25, 85.75 )\n\
   V4               = ( 60.6591, 99.0564 )\n\
   ..\n\
"206 Room floor pg" = POLYGON\n\
   V1               = ( 50.6529, 102.443 )\n\
   V2               = ( 46, 89 )\n\
   V3               = ( 56.25, 85.75 )\n\
   V4               = ( 60.6591, 99.0564 )\n\
   ..\n\
"207 Room pg" = POLYGON\n\
   V1               = ( 49, 83.25 )\n\
   V2               = ( 45.8097, 73.2999 )\n\
   V3               = ( 57.2134, 69.435 )\n\
   V4               = ( 60.75, 79.25 )\n\
   ..\n\
"207 Room floor pg" = POLYGON\n\
   V1               = ( 49, 83.25 )\n\
   V2               = ( 45.8097, 73.2999 )\n\
   V3               = ( 57.2134, 69.435 )\n\
   V4               = ( 60.75, 79.25 )\n\
   ..\n\
"208 Bathroom pg" = POLYGON\n\
   V1               = ( 39.422, 106.243 )\n\
   V2               = ( 34.75, 93 )\n\
   V3               = ( 46, 89 )\n\
   V4               = ( 50.6529, 102.443 )\n\
   ..\n\
"208 Bathroom floor pg" = POLYGON\n\
   V1               = ( 39.422, 106.243 )\n\
   V2               = ( 34.75, 93 )\n\
   V3               = ( 46, 89 )\n\
   V4               = ( 50.6529, 102.443 )\n\
   ..\n\
"209 Room pg" = POLYGON\n\
   V1               = ( 32.75, 88.75 )\n\
   V2               = ( 29.7017, 78.759 )\n\
   V3               = ( 45.8097, 73.2999 )\n\
   V4               = ( 49, 83.25 )\n\
   ..\n\
"209 Room floor pg" = POLYGON\n\
   V1               = ( 32.75, 88.75 )\n\
   V2               = ( 29.7017, 78.759 )\n\
   V3               = ( 45.8097, 73.2999 )\n\
   V4               = ( 49, 83.25 )\n\
   ..\n\
"210 Room pg" = POLYGON\n\
   V1               = ( 27.8175, 110.17 )\n\
   V2               = ( 23.25, 96.75 )\n\
   V3               = ( 34.75, 93 )\n\
   V4               = ( 39.422, 106.243 )\n\
   ..\n\
"210 Room floor pg" = POLYGON\n\
   V1               = ( 27.8175, 110.17 )\n\
   V2               = ( 23.25, 96.75 )\n\
   V3               = ( 34.75, 93 )\n\
   V4               = ( 39.422, 106.243 )\n\
   ..\n\
"211 Room pg" = POLYGON\n\
   V1               = ( 16.25, 94.25 )\n\
   V2               = ( 13.5, 84.25 )\n\
   V3               = ( 29.7017, 78.759 )\n\
   V4               = ( 32.75, 88.75 )\n\
   ..\n\
"211 Room floor pg" = POLYGON\n\
   V1               = ( 16.25, 94.25 )\n\
   V2               = ( 13.5, 84.25 )\n\
   V3               = ( 29.7017, 78.759 )\n\
   V4               = ( 32.75, 88.75 )\n\
   ..\n\
"212 Room pg" = POLYGON\n\
   V1               = ( 16.5, 114 )\n\
   V2               = ( 11.841, 100.582 )\n\
   V3               = ( 23.25, 96.75 )\n\
   V4               = ( 27.8175, 110.17 )\n\
   ..\n\
"212 Room floor pg" = POLYGON\n\
   V1               = ( 16.5, 114 )\n\
   V2               = ( 11.841, 100.582 )\n\
   V3               = ( 23.25, 96.75 )\n\
   V4               = ( 27.8175, 110.17 )\n\
   ..\n\
"213 Corridor pg" = POLYGON\n\
   V1               = ( 11.841, 100.582 )\n\
   V2               = ( 10.25, 96 )\n\
   V3               = ( 16.25, 94.25 )\n\
   V4               = ( 32.75, 88.75 )\n\
   V5               = ( 49, 83.25 )\n\
   V6               = ( 56.25, 85.75 )\n\
   V7               = ( 46, 89 )\n\
   V8               = ( 34.75, 93 )\n\
   V9               = ( 23.25, 96.75 )\n\
   ..\n\
"213 Corridor floor pg" = POLYGON\n\
   V1               = ( 11.841, 100.582 )\n\
   V2               = ( 10.25, 96 )\n\
   V3               = ( 16.25, 94.25 )\n\
   V4               = ( 32.75, 88.75 )\n\
   V5               = ( 49, 83.25 )\n\
   V6               = ( 56.25, 85.75 )\n\
   V7               = ( 46, 89 )\n\
   V8               = ( 34.75, 93 )\n\
   V9               = ( 23.25, 96.75 )\n\
   ..\n\
"214 Corridor pg" = POLYGON\n\
   V1               = ( 56.25, 85.75 )\n\
   V2               = ( 49, 83.25 )\n\
   V3               = ( 60.75, 79.25 )\n\
   V4               = ( 71.75, 75.75 )\n\
   V5               = ( 68.2301, 65.7013 )\n\
   V6               = ( 73.25, 64 )\n\
   V7               = ( 76.25, 72.5 )\n\
   V8               = ( 77.75, 78.25 )\n\
   V9               = ( 66, 82.5 )\n\
   ..\n\
"214 Corridor floor pg" = POLYGON\n\
   V1               = ( 56.25, 85.75 )\n\
   V2               = ( 49, 83.25 )\n\
   V3               = ( 60.75, 79.25 )\n\
   V4               = ( 71.75, 75.75 )\n\
   V5               = ( 68.2301, 65.7013 )\n\
   V6               = ( 73.25, 64 )\n\
   V7               = ( 76.25, 72.5 )\n\
   V8               = ( 77.75, 78.25 )\n\
   V9               = ( 66, 82.5 )\n\
   ..\n\
"221 Corridor pg" = POLYGON\n\
   V1               = ( 159.5, 49.75 )\n\
   V2               = ( 155.736, 40.1064 )\n\
   V3               = ( 157.5, 39.5 )\n\
   V4               = ( 164.5, 37.5 )\n\
   V5               = ( 160.861, 27.4048 )\n\
   V6               = ( 168.658, 24.8334 )\n\
   V7               = ( 173.75, 40.25 )\n\
   V8               = ( 176, 45.5 )\n\
   V9               = ( 164, 49.5 )\n\
   ..\n\
"221 Corridor floor pg" = POLYGON\n\
   V1               = ( 159.5, 49.75 )\n\
   V2               = ( 155.736, 40.1064 )\n\
   V3               = ( 157.5, 39.5 )\n\
   V4               = ( 164.5, 37.5 )\n\
   V5               = ( 160.861, 27.4048 )\n\
   V6               = ( 168.658, 24.8334 )\n\
   V7               = ( 173.75, 40.25 )\n\
   V8               = ( 176, 45.5 )\n\
   V9               = ( 164, 49.5 )\n\
   ..\n\
"221A IT pg" = POLYGON\n\
   V1               = ( 176, 45.5 )\n\
   V2               = ( 173.75, 40.25 )\n\
   V3               = ( 182.75, 37 )\n\
   V4               = ( 184.75, 42.5 )\n\
   ..\n\
"221A IT floor pg" = POLYGON\n\
   V1               = ( 176, 45.5 )\n\
   V2               = ( 173.75, 40.25 )\n\
   V3               = ( 182.75, 37 )\n\
   V4               = ( 184.75, 42.5 )\n\
   ..\n\
"222 Room pg" = POLYGON\n\
   V1               = ( 158.606, 70.2005 )\n\
   V2               = ( 154, 56.75 )\n\
   V3               = ( 165.25, 52.75 )\n\
   V4               = ( 169.75, 66.5 )\n\
   ..\n\
"222 Room floor pg" = POLYGON\n\
   V1               = ( 158.606, 70.2005 )\n\
   V2               = ( 154, 56.75 )\n\
   V3               = ( 165.25, 52.75 )\n\
   V4               = ( 169.75, 66.5 )\n\
   ..\n\
"223 Room pg" = POLYGON\n\
   V1               = ( 148.5, 53.5 )\n\
   V2               = ( 145.086, 43.7673 )\n\
   V3               = ( 155.736, 40.1064 )\n\
   V4               = ( 159.5, 49.75 )\n\
   ..\n\
"223 Room floor pg" = POLYGON\n\
   V1               = ( 148.5, 53.5 )\n\
   V2               = ( 145.086, 43.7673 )\n\
   V3               = ( 155.736, 40.1064 )\n\
   V4               = ( 159.5, 49.75 )\n\
   ..\n\
"224 Room pg" = POLYGON\n\
   V1               = ( 148.613, 73.5188 )\n\
   V2               = ( 144, 60 )\n\
   V3               = ( 154, 56.75 )\n\
   V4               = ( 158.606, 70.2005 )\n\
   ..\n\
"224 Room floor pg" = POLYGON\n\
   V1               = ( 148.613, 73.5188 )\n\
   V2               = ( 144, 60 )\n\
   V3               = ( 154, 56.75 )\n\
   V4               = ( 158.606, 70.2005 )\n\
   ..\n\
"225 Corridor pg" = POLYGON\n\
   V1               = ( 99.75, 74.75 )\n\
   V2               = ( 104.25, 68.25 )\n\
   V3               = ( 120.75, 62.75 )\n\
   V4               = ( 136.75, 57.25 )\n\
   V5               = ( 148.5, 53.5 )\n\
   V6               = ( 159.5, 49.75 )\n\
   V7               = ( 164, 49.5 )\n\
   V8               = ( 165.25, 52.75 )\n\
   V9               = ( 154, 56.75 )\n\
   V10              = ( 144, 60 )\n\
   V11              = ( 133.5, 63.25 )\n\
   V12              = ( 122.75, 67 )\n\
   V13              = ( 111.25, 71 )\n\
   ..\n\
"225 Corridor floor pg" = POLYGON\n\
   V1               = ( 99.75, 74.75 )\n\
   V2               = ( 104.25, 68.25 )\n\
   V3               = ( 120.75, 62.75 )\n\
   V4               = ( 136.75, 57.25 )\n\
   V5               = ( 148.5, 53.5 )\n\
   V6               = ( 159.5, 49.75 )\n\
   V7               = ( 164, 49.5 )\n\
   V8               = ( 165.25, 52.75 )\n\
   V9               = ( 154, 56.75 )\n\
   V10              = ( 144, 60 )\n\
   V11              = ( 133.5, 63.25 )\n\
   V12              = ( 122.75, 67 )\n\
   V13              = ( 111.25, 71 )\n\
   ..\n\
"226 Room pg" = POLYGON\n\
   V1               = ( 138.537, 76.8646 )\n\
   V2               = ( 133.5, 63.25 )\n\
   V3               = ( 144, 60 )\n\
   V4               = ( 148.613, 73.5188 )\n\
   ..\n\
"226 Room floor pg" = POLYGON\n\
   V1               = ( 138.537, 76.8646 )\n\
   V2               = ( 133.5, 63.25 )\n\
   V3               = ( 144, 60 )\n\
   V4               = ( 148.613, 73.5188 )\n\
   ..\n\
"227 Room pg" = POLYGON\n\
   V1               = ( 136.75, 57.25 )\n\
   V2               = ( 133.679, 47.6883 )\n\
   V3               = ( 145.086, 43.7673 )\n\
   V4               = ( 148.5, 53.5 )\n\
   ..\n\
"227 Room floor pg" = POLYGON\n\
   V1               = ( 136.75, 57.25 )\n\
   V2               = ( 133.679, 47.6883 )\n\
   V3               = ( 145.086, 43.7673 )\n\
   V4               = ( 148.5, 53.5 )\n\
   ..\n\
"228 Bathroom pg" = POLYGON\n\
   V1               = ( 127.297, 80.5968 )\n\
   V2               = ( 122.75, 67 )\n\
   V3               = ( 133.5, 63.25 )\n\
   V4               = ( 138.537, 76.8646 )\n\
   ..\n\
"228 Bathroom floor pg" = POLYGON\n\
   V1               = ( 127.297, 80.5968 )\n\
   V2               = ( 122.75, 67 )\n\
   V3               = ( 133.5, 63.25 )\n\
   V4               = ( 138.537, 76.8646 )\n\
   ..\n\
"229 Room pg" = POLYGON\n\
   V1               = ( 120.75, 62.75 )\n\
   V2               = ( 117.699, 53.1816 )\n\
   V3               = ( 133.679, 47.6883 )\n\
   V4               = ( 136.75, 57.25 )\n\
   ..\n\
"229 Room floor pg" = POLYGON\n\
   V1               = ( 120.75, 62.75 )\n\
   V2               = ( 117.699, 53.1816 )\n\
   V3               = ( 133.679, 47.6883 )\n\
   V4               = ( 136.75, 57.25 )\n\
   ..\n\
"230 Room pg" = POLYGON\n\
   V1               = ( 115.58, 84.4877 )\n\
   V2               = ( 111.25, 71 )\n\
   V3               = ( 122.75, 67 )\n\
   V4               = ( 127.297, 80.5968 )\n\
   ..\n\
"230 Room floor pg" = POLYGON\n\
   V1               = ( 115.58, 84.4877 )\n\
   V2               = ( 111.25, 71 )\n\
   V3               = ( 122.75, 67 )\n\
   V4               = ( 127.297, 80.5968 )\n\
   ..\n\
"231 Room pg" = POLYGON\n\
   V1               = ( 104.25, 68.25 )\n\
   V2               = ( 102, 61.25 )\n\
   V3               = ( 101.5, 58.75 )\n\
   V4               = ( 117.699, 53.1816 )\n\
   V5               = ( 120.75, 62.75 )\n\
   ..\n\
"231 Room floor pg" = POLYGON\n\
   V1               = ( 104.25, 68.25 )\n\
   V2               = ( 102, 61.25 )\n\
   V3               = ( 101.5, 58.75 )\n\
   V4               = ( 117.699, 53.1816 )\n\
   V5               = ( 120.75, 62.75 )\n\
   ..\n\
"232 Room pg" = POLYGON\n\
   V1               = ( 104.25, 88.25 )\n\
   V2               = ( 99.75, 74.75 )\n\
   V3               = ( 111.25, 71 )\n\
   V4               = ( 115.58, 84.4877 )\n\
   ..\n\
"232 Room floor pg" = POLYGON\n\
   V1               = ( 104.25, 88.25 )\n\
   V2               = ( 99.75, 74.75 )\n\
   V3               = ( 111.25, 71 )\n\
   V4               = ( 115.58, 84.4877 )\n\
   ..\n\
"240 Room pg" = POLYGON\n\
   V1               = ( 171, 70.5 )\n\
   V2               = ( 169.75, 66.5 )\n\
   V3               = ( 165.25, 52.75 )\n\
   V4               = ( 164, 49.5 )\n\
   V5               = ( 176, 45.5 )\n\
   V6               = ( 184.75, 42.5 )\n\
   V7               = ( 189, 56.75 )\n\
   V8               = ( 191.25, 63.75 )\n\
   ..\n\
"240 Room floor pg" = POLYGON\n\
   V1               = ( 171, 70.5 )\n\
   V2               = ( 169.75, 66.5 )\n\
   V3               = ( 165.25, 52.75 )\n\
   V4               = ( 164, 49.5 )\n\
   V5               = ( 176, 45.5 )\n\
   V6               = ( 184.75, 42.5 )\n\
   V7               = ( 189, 56.75 )\n\
   V8               = ( 191.25, 63.75 )\n\
   ..\n\
"242 Room pg" = POLYGON\n\
   V1               = ( 189, 56.75 )\n\
   V2               = ( 184.75, 42.5 )\n\
   V3               = ( 197, 38.75 )\n\
   V4               = ( 201.601, 52.4866 )\n\
   ..\n\
"242 Room floor pg" = POLYGON\n\
   V1               = ( 189, 56.75 )\n\
   V2               = ( 184.75, 42.5 )\n\
   V3               = ( 197, 38.75 )\n\
   V4               = ( 201.601, 52.4866 )\n\
   ..\n\
"243 Room pg" = POLYGON\n\
   V1               = ( 188.5, 36.75 )\n\
   V2               = ( 184.95, 26.7738 )\n\
   V3               = ( 196.024, 23.0979 )\n\
   V4               = ( 199.5, 33 )\n\
   ..\n\
"243 Room floor pg" = POLYGON\n\
   V1               = ( 188.5, 36.75 )\n\
   V2               = ( 184.95, 26.7738 )\n\
   V3               = ( 196.024, 23.0979 )\n\
   V4               = ( 199.5, 33 )\n\
   ..\n\
"244 Room pg" = POLYGON\n\
   V1               = ( 201.601, 52.4866 )\n\
   V2               = ( 197, 38.75 )\n\
   V3               = ( 207, 35.25 )\n\
   V4               = ( 211.665, 49.0813 )\n\
   ..\n\
"244 Room floor pg" = POLYGON\n\
   V1               = ( 201.601, 52.4866 )\n\
   V2               = ( 197, 38.75 )\n\
   V3               = ( 207, 35.25 )\n\
   V4               = ( 211.665, 49.0813 )\n\
   ..\n\
"245 Room pg" = POLYGON\n\
   V1               = ( 199.5, 33 )\n\
   V2               = ( 196.024, 23.0979 )\n\
   V3               = ( 207.7, 19.222 )\n\
   V4               = ( 211, 29.25 )\n\
   ..\n\
"245 Room floor pg" = POLYGON\n\
   V1               = ( 199.5, 33 )\n\
   V2               = ( 196.024, 23.0979 )\n\
   V3               = ( 207.7, 19.222 )\n\
   V4               = ( 211, 29.25 )\n\
   ..\n\
"246 Room pg" = POLYGON\n\
   V1               = ( 211.665, 49.0813 )\n\
   V2               = ( 207, 35.25 )\n\
   V3               = ( 217, 32 )\n\
   V4               = ( 221.44, 45.774 )\n\
   ..\n\
"246 Room floor pg" = POLYGON\n\
   V1               = ( 211.665, 49.0813 )\n\
   V2               = ( 207, 35.25 )\n\
   V3               = ( 217, 32 )\n\
   V4               = ( 221.44, 45.774 )\n\
   ..\n\
"247 Room pg" = POLYGON\n\
   V1               = ( 211, 29.25 )\n\
   V2               = ( 207.7, 19.222 )\n\
   V3               = ( 223.822, 13.8703 )\n\
   V4               = ( 227.25, 23.75 )\n\
   ..\n\
"247 Room floor pg" = POLYGON\n\
   V1               = ( 211, 29.25 )\n\
   V2               = ( 207.7, 19.222 )\n\
   V3               = ( 223.822, 13.8703 )\n\
   V4               = ( 227.25, 23.75 )\n\
   ..\n\
"248 Bathroom pg" = POLYGON\n\
   V1               = ( 221.44, 45.774 )\n\
   V2               = ( 217, 32 )\n\
   V3               = ( 228.25, 28.5 )\n\
   V4               = ( 232.745, 41.9489 )\n\
   ..\n\
"248 Bathroom floor pg" = POLYGON\n\
   V1               = ( 221.44, 45.774 )\n\
   V2               = ( 217, 32 )\n\
   V3               = ( 228.25, 28.5 )\n\
   V4               = ( 232.745, 41.9489 )\n\
   ..\n\
"249 Room pg" = POLYGON\n\
   V1               = ( 227.25, 23.75 )\n\
   V2               = ( 223.822, 13.8703 )\n\
   V3               = ( 240, 8.5 )\n\
   V4               = ( 243.75, 18.25 )\n\
   ..\n\
"249 Room floor pg" = POLYGON\n\
   V1               = ( 227.25, 23.75 )\n\
   V2               = ( 223.822, 13.8703 )\n\
   V3               = ( 240, 8.5 )\n\
   V4               = ( 243.75, 18.25 )\n\
   ..\n\
"250 Room pg" = POLYGON\n\
   V1               = ( 232.745, 41.9489 )\n\
   V2               = ( 228.25, 28.5 )\n\
   V3               = ( 239.5, 24.5 )\n\
   V4               = ( 244.318, 38.0332 )\n\
   ..\n\
"250 Room floor pg" = POLYGON\n\
   V1               = ( 232.745, 41.9489 )\n\
   V2               = ( 228.25, 28.5 )\n\
   V3               = ( 239.5, 24.5 )\n\
   V4               = ( 244.318, 38.0332 )\n\
   ..\n\
"251 Corridor pg" = POLYGON\n\
   V1               = ( 217, 32 )\n\
   V2               = ( 211, 29.25 )\n\
   V3               = ( 227.25, 23.75 )\n\
   V4               = ( 243.75, 18.25 )\n\
   V5               = ( 249.25, 16.25 )\n\
   V6               = ( 250.794, 20.6958 )\n\
   V7               = ( 239.5, 24.5 )\n\
   V8               = ( 228.25, 28.5 )\n\
   ..\n\
"251 Corridor floor pg" = POLYGON\n\
   V1               = ( 217, 32 )\n\
   V2               = ( 211, 29.25 )\n\
   V3               = ( 227.25, 23.75 )\n\
   V4               = ( 243.75, 18.25 )\n\
   V5               = ( 249.25, 16.25 )\n\
   V6               = ( 250.794, 20.6958 )\n\
   V7               = ( 239.5, 24.5 )\n\
   V8               = ( 228.25, 28.5 )\n\
   ..\n\
"252 Room pg" = POLYGON\n\
   V1               = ( 244.318, 38.0332 )\n\
   V2               = ( 239.5, 24.5 )\n\
   V3               = ( 250.794, 20.6958 )\n\
   V4               = ( 255.5, 34.25 )\n\
   ..\n\
"252 Room floor pg" = POLYGON\n\
   V1               = ( 244.318, 38.0332 )\n\
   V2               = ( 239.5, 24.5 )\n\
   V3               = ( 250.794, 20.6958 )\n\
   V4               = ( 255.5, 34.25 )\n\
   ..\n\
"253 Corridor pg" = POLYGON\n\
   V1               = ( 184.75, 42.5 )\n\
   V2               = ( 182.75, 37 )\n\
   V3               = ( 179.75, 28.5 )\n\
   V4               = ( 184.95, 26.7738 )\n\
   V5               = ( 188.5, 36.75 )\n\
   V6               = ( 199.5, 33 )\n\
   V7               = ( 211, 29.25 )\n\
   V8               = ( 217, 32 )\n\
   V9               = ( 207, 35.25 )\n\
   V10              = ( 197, 38.75 )\n\
   ..\n\
"253 Corridor floor pg" = POLYGON\n\
   V1               = ( 184.75, 42.5 )\n\
   V2               = ( 182.75, 37 )\n\
   V3               = ( 179.75, 28.5 )\n\
   V4               = ( 184.95, 26.7738 )\n\
   V5               = ( 188.5, 36.75 )\n\
   V6               = ( 199.5, 33 )\n\
   V7               = ( 211, 29.25 )\n\
   V8               = ( 217, 32 )\n\
   V9               = ( 207, 35.25 )\n\
   V10              = ( 197, 38.75 )\n\
   ..\n\
"Level 3 pg" = POLYGON\n\
   V1               = ( 85, 99 )\n\
   V2               = ( 82.25, 91.75 )\n\
   V3               = ( 16.5, 114 )\n\
   V4               = ( 10.25, 96 )\n\
   V5               = ( 8.75, 96.5 )\n\
   V6               = ( 4.5, 83.75 )\n\
   V7               = ( 12, 81.5 )\n\
   V8               = ( 13.5, 84.25 )\n\
   V9               = ( 73.25, 64 )\n\
   V10              = ( 71.5, 57.5 )\n\
   V11              = ( 98, 48.25 )\n\
   V12              = ( 101.5, 58.75 )\n\
   V13              = ( 157.5, 39.5 )\n\
   V14              = ( 153.75, 29.75 )\n\
   V15              = ( 177.25, 22 )\n\
   V16              = ( 179.75, 28.5 )\n\
   V17              = ( 240, 8.5 )\n\
   V18              = ( 239, 5.5 )\n\
   V19              = ( 246.5, 3 )\n\
   V20              = ( 251, 15.5 )\n\
   V21              = ( 249.25, 16.25 )\n\
   V22              = ( 255.5, 34.25 )\n\
   V23              = ( 189, 56.75 )\n\
   V24              = ( 191.25, 63.75 )\n\
   V25              = ( 171, 70.5 )\n\
   V26              = ( 169.75, 66.5 )\n\
   V27              = ( 104.25, 88.25 )\n\
   V28              = ( 105.25, 92 )\n\
   ..\n\
"3-EL Elev pg" = POLYGON\n\
   V1               = ( 157.5, 39.5 )\n\
   V2               = ( 153.75, 29.75 )\n\
   V3               = ( 160.854, 27.4073 )\n\
   V4               = ( 164.25, 37.75 )\n\
   ..\n\
"3-EL Elev floor pg" = POLYGON\n\
   V1               = ( 157.5, 39.5 )\n\
   V2               = ( 153.75, 29.75 )\n\
   V3               = ( 160.854, 27.4073 )\n\
   V4               = ( 164.25, 37.75 )\n\
   ..\n\
"3-ST1 Stair 1 pg" = POLYGON\n\
   V1               = ( 8.75, 96.5 )\n\
   V2               = ( 4.5, 83.75 )\n\
   V3               = ( 12, 81.5 )\n\
   V4               = ( 13.5, 84.25 )\n\
   V5               = ( 16, 94.25 )\n\
   V6               = ( 10.25, 96 )\n\
   ..\n\
"3-ST1 Stair 1 floor pg" = POLYGON\n\
   V1               = ( 8.75, 96.5 )\n\
   V2               = ( 4.5, 83.75 )\n\
   V3               = ( 12, 81.5 )\n\
   V4               = ( 13.5, 84.25 )\n\
   V5               = ( 16, 94.25 )\n\
   V6               = ( 10.25, 96 )\n\
   ..\n\
"3-ST2 Stair 2 pg" = POLYGON\n\
   V1               = ( 76, 72.5 )\n\
   V2               = ( 73.25, 64 )\n\
   V3               = ( 71.5, 57.5 )\n\
   V4               = ( 79.9052, 54.5661 )\n\
   V5               = ( 85.25, 69.5 )\n\
   ..\n\
"3-ST2 Stair 2 floor pg" = POLYGON\n\
   V1               = ( 76, 72.5 )\n\
   V2               = ( 73.25, 64 )\n\
   V3               = ( 71.5, 57.5 )\n\
   V4               = ( 79.9052, 54.5661 )\n\
   V5               = ( 85.25, 69.5 )\n\
   ..\n\
"3-ST3 Stair 3 pg" = POLYGON\n\
   V1               = ( 174, 40 )\n\
   V2               = ( 172.25, 35 )\n\
   V3               = ( 168.774, 24.7954 )\n\
   V4               = ( 177.25, 22 )\n\
   V5               = ( 179.75, 28.5 )\n\
   V6               = ( 182.75, 37 )\n\
   ..\n\
"3-ST3 Stair 3 floor pg" = POLYGON\n\
   V1               = ( 174, 40 )\n\
   V2               = ( 172.25, 35 )\n\
   V3               = ( 168.774, 24.7954 )\n\
   V4               = ( 177.25, 22 )\n\
   V5               = ( 179.75, 28.5 )\n\
   V6               = ( 182.75, 37 )\n\
   ..\n\
"3-ST4 Stair 4 pg" = POLYGON\n\
   V1               = ( 243.75, 18 )\n\
   V2               = ( 240, 8.5 )\n\
   V3               = ( 239, 5.5 )\n\
   V4               = ( 246.5, 3 )\n\
   V5               = ( 251, 15.5 )\n\
   V6               = ( 249.25, 16.25 )\n\
   ..\n\
"3-ST4 Stair 4 floor pg" = POLYGON\n\
   V1               = ( 243.75, 18 )\n\
   V2               = ( 240, 8.5 )\n\
   V3               = ( 239, 5.5 )\n\
   V4               = ( 246.5, 3 )\n\
   V5               = ( 251, 15.5 )\n\
   V6               = ( 249.25, 16.25 )\n\
   ..\n\
"300A CRE pg" = POLYGON\n\
   V1               = ( 80.25, 84.75 )\n\
   V2               = ( 78.25, 78.25 )\n\
   V3               = ( 76, 72.5 )\n\
   V4               = ( 85.25, 69.5 )\n\
   V5               = ( 86, 71.25 )\n\
   V6               = ( 97.25, 67.25 )\n\
   V7               = ( 99.25, 73.25 )\n\
   V8               = ( 89.75, 76.5 )\n\
   V9               = ( 92, 83.75 )\n\
   V10              = ( 89.25, 84.5 )\n\
   V11              = ( 88.25, 82 )\n\
   ..\n\
"300A CRE floor pg" = POLYGON\n\
   V1               = ( 80.25, 84.75 )\n\
   V2               = ( 78.25, 78.25 )\n\
   V3               = ( 76, 72.5 )\n\
   V4               = ( 85.25, 69.5 )\n\
   V5               = ( 86, 71.25 )\n\
   V6               = ( 97.25, 67.25 )\n\
   V7               = ( 99.25, 73.25 )\n\
   V8               = ( 89.75, 76.5 )\n\
   V9               = ( 92, 83.75 )\n\
   V10              = ( 89.25, 84.5 )\n\
   V11              = ( 88.25, 82 )\n\
   ..\n\
"300B CRE pg" = POLYGON\n\
   V1               = ( 85, 99 )\n\
   V2               = ( 82.25, 91.75 )\n\
   V3               = ( 80.25, 84.75 )\n\
   V4               = ( 88.25, 82 )\n\
   V5               = ( 89.25, 84.5 )\n\
   V6               = ( 92, 83.75 )\n\
   V7               = ( 95.8647, 95.2443 )\n\
   ..\n\
"300B CRE floor pg" = POLYGON\n\
   V1               = ( 85, 99 )\n\
   V2               = ( 82.25, 91.75 )\n\
   V3               = ( 80.25, 84.75 )\n\
   V4               = ( 88.25, 82 )\n\
   V5               = ( 89.25, 84.5 )\n\
   V6               = ( 92, 83.75 )\n\
   V7               = ( 95.8647, 95.2443 )\n\
   ..\n\
"300C CRE pg" = POLYGON\n\
   V1               = ( 95.8647, 95.2443 )\n\
   V2               = ( 92, 83.75 )\n\
   V3               = ( 89.75, 76.5 )\n\
   V4               = ( 99.25, 73.25 )\n\
   V5               = ( 99.75, 74.75 )\n\
   V6               = ( 104.25, 88.25 )\n\
   V7               = ( 105.25, 92 )\n\
   ..\n\
"300C CRE floor pg" = POLYGON\n\
   V1               = ( 95.8647, 95.2443 )\n\
   V2               = ( 92, 83.75 )\n\
   V3               = ( 89.75, 76.5 )\n\
   V4               = ( 99.25, 73.25 )\n\
   V5               = ( 99.75, 74.75 )\n\
   V6               = ( 104.25, 88.25 )\n\
   V7               = ( 105.25, 92 )\n\
   ..\n\
"301 Lounge pg" = POLYGON\n\
   V1               = ( 86, 71.25 )\n\
   V2               = ( 85.25, 69.5 )\n\
   V3               = ( 79.9052, 54.5661 )\n\
   V4               = ( 98, 48.25 )\n\
   V5               = ( 101.5, 58.75 )\n\
   V6               = ( 104.25, 68 )\n\
   V7               = ( 99.25, 73.25 )\n\
   V8               = ( 97.25, 67.25 )\n\
   ..\n\
"301 Lounge floor pg" = POLYGON\n\
   V1               = ( 86, 71.25 )\n\
   V2               = ( 85.25, 69.5 )\n\
   V3               = ( 79.9052, 54.5661 )\n\
   V4               = ( 98, 48.25 )\n\
   V5               = ( 101.5, 58.75 )\n\
   V6               = ( 104.25, 68 )\n\
   V7               = ( 99.25, 73.25 )\n\
   V8               = ( 97.25, 67.25 )\n\
   ..\n\
"302 Room pg" = POLYGON\n\
   V1               = ( 70.5642, 95.7045 )\n\
   V2               = ( 66, 82.5 )\n\
   V3               = ( 78.25, 78.25 )\n\
   V4               = ( 80.25, 84.75 )\n\
   V5               = ( 82.25, 91.75 )\n\
   ..\n\
"302 Room floor pg" = POLYGON\n\
   V1               = ( 70.5642, 95.7045 )\n\
   V2               = ( 66, 82.5 )\n\
   V3               = ( 78.25, 78.25 )\n\
   V4               = ( 80.25, 84.75 )\n\
   V5               = ( 82.25, 91.75 )\n\
   ..\n\
"303 Room pg" = POLYGON\n\
   V1               = ( 60.5, 79.5 )\n\
   V2               = ( 57.0064, 69.5051 )\n\
   V3               = ( 67.8677, 65.8241 )\n\
   V4               = ( 71.5, 75.75 )\n\
   ..\n\
"303 Room floor pg" = POLYGON\n\
   V1               = ( 60.5, 79.5 )\n\
   V2               = ( 57.0064, 69.5051 )\n\
   V3               = ( 67.8677, 65.8241 )\n\
   V4               = ( 71.5, 75.75 )\n\
   ..\n\
"304 Room pg" = POLYGON\n\
   V1               = ( 60.9248, 98.9665 )\n\
   V2               = ( 56.25, 85.75 )\n\
   V3               = ( 66, 82.5 )\n\
   V4               = ( 70.5642, 95.7045 )\n\
   ..\n\
"304 Room floor pg" = POLYGON\n\
   V1               = ( 60.9248, 98.9665 )\n\
   V2               = ( 56.25, 85.75 )\n\
   V3               = ( 66, 82.5 )\n\
   V4               = ( 70.5642, 95.7045 )\n\
   ..\n\
"306 Room pg" = POLYGON\n\
   V1               = ( 50.6964, 102.428 )\n\
   V2               = ( 46, 89 )\n\
   V3               = ( 56.25, 85.75 )\n\
   V4               = ( 60.9248, 98.9665 )\n\
   ..\n\
"306 Room floor pg" = POLYGON\n\
   V1               = ( 50.6964, 102.428 )\n\
   V2               = ( 46, 89 )\n\
   V3               = ( 56.25, 85.75 )\n\
   V4               = ( 60.9248, 98.9665 )\n\
   ..\n\
"307 Room pg" = POLYGON\n\
   V1               = ( 48.75, 83 )\n\
   V2               = ( 45.6709, 73.3469 )\n\
   V3               = ( 57.0064, 69.5051 )\n\
   V4               = ( 60.5, 79.5 )\n\
   ..\n\
"307 Room floor pg" = POLYGON\n\
   V1               = ( 48.75, 83 )\n\
   V2               = ( 45.6709, 73.3469 )\n\
   V3               = ( 57.0064, 69.5051 )\n\
   V4               = ( 60.5, 79.5 )\n\
   ..\n\
"308 Bathroom pg" = POLYGON\n\
   V1               = ( 39.232, 106.307 )\n\
   V2               = ( 34.75, 92.75 )\n\
   V3               = ( 46, 89 )\n\
   V4               = ( 50.6964, 102.428 )\n\
   ..\n\
"308 Bathroom floor pg" = POLYGON\n\
   V1               = ( 39.232, 106.307 )\n\
   V2               = ( 34.75, 92.75 )\n\
   V3               = ( 46, 89 )\n\
   V4               = ( 50.6964, 102.428 )\n\
   ..\n\
"309 Room pg" = POLYGON\n\
   V1               = ( 32.5, 88.75 )\n\
   V2               = ( 29.4181, 78.8552 )\n\
   V3               = ( 45.6709, 73.3469 )\n\
   V4               = ( 48.75, 83 )\n\
   ..\n\
"309 Room floor pg" = POLYGON\n\
   V1               = ( 32.5, 88.75 )\n\
   V2               = ( 29.4181, 78.8552 )\n\
   V3               = ( 45.6709, 73.3469 )\n\
   V4               = ( 48.75, 83 )\n\
   ..\n\
"310 Room pg" = POLYGON\n\
   V1               = ( 27.7674, 110.187 )\n\
   V2               = ( 23.25, 96.75 )\n\
   V3               = ( 34.75, 92.75 )\n\
   V4               = ( 39.232, 106.307 )\n\
   ..\n\
"310 Room floor pg" = POLYGON\n\
   V1               = ( 27.7674, 110.187 )\n\
   V2               = ( 23.25, 96.75 )\n\
   V3               = ( 34.75, 92.75 )\n\
   V4               = ( 39.232, 106.307 )\n\
   ..\n\
"311 Room pg" = POLYGON\n\
   V1               = ( 16, 94.25 )\n\
   V2               = ( 13.5, 84.25 )\n\
   V3               = ( 29.4181, 78.8552 )\n\
   V4               = ( 32.5, 88.75 )\n\
   ..\n\
"311 Room floor pg" = POLYGON\n\
   V1               = ( 16, 94.25 )\n\
   V2               = ( 13.5, 84.25 )\n\
   V3               = ( 29.4181, 78.8552 )\n\
   V4               = ( 32.5, 88.75 )\n\
   ..\n\
"312 Room pg" = POLYGON\n\
   V1               = ( 16.5, 114 )\n\
   V2               = ( 11.7898, 100.435 )\n\
   V3               = ( 23.25, 96.75 )\n\
   V4               = ( 27.7674, 110.187 )\n\
   ..\n\
"312 Room floor pg" = POLYGON\n\
   V1               = ( 16.5, 114 )\n\
   V2               = ( 11.7898, 100.435 )\n\
   V3               = ( 23.25, 96.75 )\n\
   V4               = ( 27.7674, 110.187 )\n\
   ..\n\
"313 Corridor pg" = POLYGON\n\
   V1               = ( 11.7898, 100.435 )\n\
   V2               = ( 10.25, 96 )\n\
   V3               = ( 16, 94.25 )\n\
   V4               = ( 32.5, 88.75 )\n\
   V5               = ( 48.75, 83 )\n\
   V6               = ( 56.25, 85.75 )\n\
   V7               = ( 46, 89 )\n\
   V8               = ( 34.75, 92.75 )\n\
   V9               = ( 23.25, 96.75 )\n\
   ..\n\
"313 Corridor floor pg" = POLYGON\n\
   V1               = ( 11.7898, 100.435 )\n\
   V2               = ( 10.25, 96 )\n\
   V3               = ( 16, 94.25 )\n\
   V4               = ( 32.5, 88.75 )\n\
   V5               = ( 48.75, 83 )\n\
   V6               = ( 56.25, 85.75 )\n\
   V7               = ( 46, 89 )\n\
   V8               = ( 34.75, 92.75 )\n\
   V9               = ( 23.25, 96.75 )\n\
   ..\n\
"314 Corridor pg" = POLYGON\n\
   V1               = ( 56.25, 85.75 )\n\
   V2               = ( 48.75, 83 )\n\
   V3               = ( 60.5, 79.5 )\n\
   V4               = ( 71.5, 75.75 )\n\
   V5               = ( 67.8677, 65.8241 )\n\
   V6               = ( 73.25, 64 )\n\
   V7               = ( 76, 72.5 )\n\
   V8               = ( 78.25, 78.25 )\n\
   V9               = ( 66, 82.5 )\n\
   ..\n\
"314 Corridor floor pg" = POLYGON\n\
   V1               = ( 56.25, 85.75 )\n\
   V2               = ( 48.75, 83 )\n\
   V3               = ( 60.5, 79.5 )\n\
   V4               = ( 71.5, 75.75 )\n\
   V5               = ( 67.8677, 65.8241 )\n\
   V6               = ( 73.25, 64 )\n\
   V7               = ( 76, 72.5 )\n\
   V8               = ( 78.25, 78.25 )\n\
   V9               = ( 66, 82.5 )\n\
   ..\n\
"321 Corridor pg" = POLYGON\n\
   V1               = ( 159.5, 49.75 )\n\
   V2               = ( 156.029, 40.0056 )\n\
   V3               = ( 157.5, 39.5 )\n\
   V4               = ( 164.25, 37.75 )\n\
   V5               = ( 172.25, 35 )\n\
   V6               = ( 174, 40 )\n\
   V7               = ( 175.75, 45.5 )\n\
   V8               = ( 164, 49.25 )\n\
   ..\n\
"321 Corridor floor pg" = POLYGON\n\
   V1               = ( 159.5, 49.75 )\n\
   V2               = ( 156.029, 40.0056 )\n\
   V3               = ( 157.5, 39.5 )\n\
   V4               = ( 164.25, 37.75 )\n\
   V5               = ( 172.25, 35 )\n\
   V6               = ( 174, 40 )\n\
   V7               = ( 175.75, 45.5 )\n\
   V8               = ( 164, 49.25 )\n\
   ..\n\
"321A IT pg" = POLYGON\n\
   V1               = ( 175.75, 45.5 )\n\
   V2               = ( 174, 40 )\n\
   V3               = ( 182.75, 37 )\n\
   V4               = ( 184.75, 42.75 )\n\
   ..\n\
"321A IT floor pg" = POLYGON\n\
   V1               = ( 175.75, 45.5 )\n\
   V2               = ( 174, 40 )\n\
   V3               = ( 182.75, 37 )\n\
   V4               = ( 184.75, 42.75 )\n\
   ..\n\
"321B Elev Lobby pg" = POLYGON\n\
   V1               = ( 164.25, 37.75 )\n\
   V2               = ( 160.854, 27.4073 )\n\
   V3               = ( 168.774, 24.7954 )\n\
   V4               = ( 172.25, 35 )\n\
   ..\n\
"321B Elev Lobby floor pg" = POLYGON\n\
   V1               = ( 164.25, 37.75 )\n\
   V2               = ( 160.854, 27.4073 )\n\
   V3               = ( 168.774, 24.7954 )\n\
   V4               = ( 172.25, 35 )\n\
   ..\n\
"322 Room pg" = POLYGON\n\
   V1               = ( 158.517, 70.23 )\n\
   V2               = ( 153.75, 56.5 )\n\
   V3               = ( 165.25, 52.5 )\n\
   V4               = ( 169.75, 66.5 )\n\
   ..\n\
"322 Room floor pg" = POLYGON\n\
   V1               = ( 158.517, 70.23 )\n\
   V2               = ( 153.75, 56.5 )\n\
   V3               = ( 165.25, 52.5 )\n\
   V4               = ( 169.75, 66.5 )\n\
   ..\n\
"323 Room pg" = POLYGON\n\
   V1               = ( 148.5, 53.5 )\n\
   V2               = ( 145.166, 43.7398 )\n\
   V3               = ( 156.029, 40.0056 )\n\
   V4               = ( 159.5, 49.75 )\n\
   ..\n\
"323 Room floor pg" = POLYGON\n\
   V1               = ( 148.5, 53.5 )\n\
   V2               = ( 145.166, 43.7398 )\n\
   V3               = ( 156.029, 40.0056 )\n\
   V4               = ( 159.5, 49.75 )\n\
   ..\n\
"324 Room pg" = POLYGON\n\
   V1               = ( 148.662, 73.5026 )\n\
   V2               = ( 144, 60 )\n\
   V3               = ( 153.75, 56.5 )\n\
   V4               = ( 158.517, 70.23 )\n\
   ..\n\
"324 Room floor pg" = POLYGON\n\
   V1               = ( 148.662, 73.5026 )\n\
   V2               = ( 144, 60 )\n\
   V3               = ( 153.75, 56.5 )\n\
   V4               = ( 158.517, 70.23 )\n\
   ..\n\
"325 Corridor pg" = POLYGON\n\
   V1               = ( 99.75, 74.75 )\n\
   V2               = ( 99.25, 73.25 )\n\
   V3               = ( 104.25, 68 )\n\
   V4               = ( 120.75, 62.5 )\n\
   V5               = ( 136.75, 57.5 )\n\
   V6               = ( 148.5, 53.5 )\n\
   V7               = ( 159.5, 49.75 )\n\
   V8               = ( 164, 49.25 )\n\
   V9               = ( 165.25, 52.5 )\n\
   V10              = ( 153.75, 56.5 )\n\
   V11              = ( 144, 60 )\n\
   V12              = ( 133.75, 63.25 )\n\
   V13              = ( 122.75, 67 )\n\
   V14              = ( 114.75, 69.5 )\n\
   ..\n\
"325 Corridor floor pg" = POLYGON\n\
   V1               = ( 99.75, 74.75 )\n\
   V2               = ( 99.25, 73.25 )\n\
   V3               = ( 104.25, 68 )\n\
   V4               = ( 120.75, 62.5 )\n\
   V5               = ( 136.75, 57.5 )\n\
   V6               = ( 148.5, 53.5 )\n\
   V7               = ( 159.5, 49.75 )\n\
   V8               = ( 164, 49.25 )\n\
   V9               = ( 165.25, 52.5 )\n\
   V10              = ( 153.75, 56.5 )\n\
   V11              = ( 144, 60 )\n\
   V12              = ( 133.75, 63.25 )\n\
   V13              = ( 122.75, 67 )\n\
   V14              = ( 114.75, 69.5 )\n\
   ..\n\
"326 Room pg" = POLYGON\n\
   V1               = ( 138.311, 76.9398 )\n\
   V2               = ( 133.75, 63.25 )\n\
   V3               = ( 144, 60 )\n\
   V4               = ( 148.662, 73.5026 )\n\
   ..\n\
"326 Room floor pg" = POLYGON\n\
   V1               = ( 138.311, 76.9398 )\n\
   V2               = ( 133.75, 63.25 )\n\
   V3               = ( 144, 60 )\n\
   V4               = ( 148.662, 73.5026 )\n\
   ..\n\
"327 Room pg" = POLYGON\n\
   V1               = ( 136.75, 57.5 )\n\
   V2               = ( 133.373, 47.7938 )\n\
   V3               = ( 145.166, 43.7398 )\n\
   V4               = ( 148.5, 53.5 )\n\
   ..\n\
"327 Room floor pg" = POLYGON\n\
   V1               = ( 136.75, 57.5 )\n\
   V2               = ( 133.373, 47.7938 )\n\
   V3               = ( 145.166, 43.7398 )\n\
   V4               = ( 148.5, 53.5 )\n\
   ..\n\
"328 Bathroom pg" = POLYGON\n\
   V1               = ( 127.333, 80.5852 )\n\
   V2               = ( 122.75, 67 )\n\
   V3               = ( 133.75, 63.25 )\n\
   V4               = ( 138.311, 76.9398 )\n\
   ..\n\
"328 Bathroom floor pg" = POLYGON\n\
   V1               = ( 127.333, 80.5852 )\n\
   V2               = ( 122.75, 67 )\n\
   V3               = ( 133.75, 63.25 )\n\
   V4               = ( 138.311, 76.9398 )\n\
   ..\n\
"329 Room pg" = POLYGON\n\
   V1               = ( 120.75, 62.5 )\n\
   V2               = ( 117.579, 53.223 )\n\
   V3               = ( 133.373, 47.7938 )\n\
   V4               = ( 136.75, 57.5 )\n\
   ..\n\
"329 Room floor pg" = POLYGON\n\
   V1               = ( 120.75, 62.5 )\n\
   V2               = ( 117.579, 53.223 )\n\
   V3               = ( 133.373, 47.7938 )\n\
   V4               = ( 136.75, 57.5 )\n\
   ..\n\
"330 Bathroom pg" = POLYGON\n\
   V1               = ( 119.246, 83.2703 )\n\
   V2               = ( 114.75, 69.5 )\n\
   V3               = ( 122.75, 67 )\n\
   V4               = ( 127.333, 80.5852 )\n\
   ..\n\
"330 Bathroom floor pg" = POLYGON\n\
   V1               = ( 119.246, 83.2703 )\n\
   V2               = ( 114.75, 69.5 )\n\
   V3               = ( 122.75, 67 )\n\
   V4               = ( 127.333, 80.5852 )\n\
   ..\n\
"331 Room pg" = POLYGON\n\
   V1               = ( 104.25, 68 )\n\
   V2               = ( 101.5, 58.75 )\n\
   V3               = ( 117.579, 53.223 )\n\
   V4               = ( 120.75, 62.5 )\n\
   ..\n\
"331 Room floor pg" = POLYGON\n\
   V1               = ( 104.25, 68 )\n\
   V2               = ( 101.5, 58.75 )\n\
   V3               = ( 117.579, 53.223 )\n\
   V4               = ( 120.75, 62.5 )\n\
   ..\n\
"332 Room pg" = POLYGON\n\
   V1               = ( 104.25, 88.25 )\n\
   V2               = ( 99.75, 74.75 )\n\
   V3               = ( 114.75, 69.5 )\n\
   V4               = ( 119.246, 83.2703 )\n\
   ..\n\
"332 Room floor pg" = POLYGON\n\
   V1               = ( 104.25, 88.25 )\n\
   V2               = ( 99.75, 74.75 )\n\
   V3               = ( 114.75, 69.5 )\n\
   V4               = ( 119.246, 83.2703 )\n\
   ..\n\
"340 Lounge pg" = POLYGON\n\
   V1               = ( 171, 70.5 )\n\
   V2               = ( 169.75, 66.5 )\n\
   V3               = ( 165.25, 52.5 )\n\
   V4               = ( 164, 49.25 )\n\
   V5               = ( 175.75, 45.5 )\n\
   V6               = ( 184.75, 42.75 )\n\
   V7               = ( 189, 56.75 )\n\
   V8               = ( 191.25, 63.75 )\n\
   ..\n\
"340 Lounge floor pg" = POLYGON\n\
   V1               = ( 171, 70.5 )\n\
   V2               = ( 169.75, 66.5 )\n\
   V3               = ( 165.25, 52.5 )\n\
   V4               = ( 164, 49.25 )\n\
   V5               = ( 175.75, 45.5 )\n\
   V6               = ( 184.75, 42.75 )\n\
   V7               = ( 189, 56.75 )\n\
   V8               = ( 191.25, 63.75 )\n\
   ..\n\
"342 Room pg" = POLYGON\n\
   V1               = ( 189, 56.75 )\n\
   V2               = ( 184.75, 42.75 )\n\
   V3               = ( 197, 39 )\n\
   V4               = ( 201.716, 52.4476 )\n\
   ..\n\
"342 Room floor pg" = POLYGON\n\
   V1               = ( 189, 56.75 )\n\
   V2               = ( 184.75, 42.75 )\n\
   V3               = ( 197, 39 )\n\
   V4               = ( 201.716, 52.4476 )\n\
   ..\n\
"343 Room pg" = POLYGON\n\
   V1               = ( 188.25, 36.5 )\n\
   V2               = ( 184.889, 26.7943 )\n\
   V3               = ( 196.096, 23.074 )\n\
   V4               = ( 199.5, 33 )\n\
   ..\n\
"343 Room floor pg" = POLYGON\n\
   V1               = ( 188.25, 36.5 )\n\
   V2               = ( 184.889, 26.7943 )\n\
   V3               = ( 196.096, 23.074 )\n\
   V4               = ( 199.5, 33 )\n\
   ..\n\
"344 Room pg" = POLYGON\n\
   V1               = ( 201.716, 52.4476 )\n\
   V2               = ( 197, 39 )\n\
   V3               = ( 206.75, 35.5 )\n\
   V4               = ( 211.335, 49.1931 )\n\
   ..\n\
"344 Room floor pg" = POLYGON\n\
   V1               = ( 201.716, 52.4476 )\n\
   V2               = ( 197, 39 )\n\
   V3               = ( 206.75, 35.5 )\n\
   V4               = ( 211.335, 49.1931 )\n\
   ..\n\
"345 Room pg" = POLYGON\n\
   V1               = ( 199.5, 33 )\n\
   V2               = ( 196.096, 23.074 )\n\
   V3               = ( 207.512, 19.2843 )\n\
   V4               = ( 210.75, 29 )\n\
   ..\n\
"345 Room floor pg" = POLYGON\n\
   V1               = ( 199.5, 33 )\n\
   V2               = ( 196.096, 23.074 )\n\
   V3               = ( 207.512, 19.2843 )\n\
   V4               = ( 210.75, 29 )\n\
   ..\n\
"346 Room pg" = POLYGON\n\
   V1               = ( 211.335, 49.1931 )\n\
   V2               = ( 206.75, 35.5 )\n\
   V3               = ( 216.75, 32 )\n\
   V4               = ( 221.476, 45.762 )\n\
   ..\n\
"346 Room floor pg" = POLYGON\n\
   V1               = ( 211.335, 49.1931 )\n\
   V2               = ( 206.75, 35.5 )\n\
   V3               = ( 216.75, 32 )\n\
   V4               = ( 221.476, 45.762 )\n\
   ..\n\
"347 Room pg" = POLYGON\n\
   V1               = ( 210.75, 29 )\n\
   V2               = ( 207.512, 19.2843 )\n\
   V3               = ( 223.761, 13.8904 )\n\
   V4               = ( 227.25, 23.75 )\n\
   ..\n\
"347 Room floor pg" = POLYGON\n\
   V1               = ( 210.75, 29 )\n\
   V2               = ( 207.512, 19.2843 )\n\
   V3               = ( 223.761, 13.8904 )\n\
   V4               = ( 227.25, 23.75 )\n\
   ..\n\
"348 Bathroom pg" = POLYGON\n\
   V1               = ( 221.476, 45.762 )\n\
   V2               = ( 216.75, 32 )\n\
   V3               = ( 228, 28.25 )\n\
   V4               = ( 232.623, 41.9902 )\n\
   ..\n\
"348 Bathroom floor pg" = POLYGON\n\
   V1               = ( 221.476, 45.762 )\n\
   V2               = ( 216.75, 32 )\n\
   V3               = ( 228, 28.25 )\n\
   V4               = ( 232.623, 41.9902 )\n\
   ..\n\
"349 Room pg" = POLYGON\n\
   V1               = ( 227.25, 23.75 )\n\
   V2               = ( 223.761, 13.8904 )\n\
   V3               = ( 240, 8.5 )\n\
   V4               = ( 243.75, 18 )\n\
   ..\n\
"349 Room floor pg" = POLYGON\n\
   V1               = ( 227.25, 23.75 )\n\
   V2               = ( 223.761, 13.8904 )\n\
   V3               = ( 240, 8.5 )\n\
   V4               = ( 243.75, 18 )\n\
   ..\n\
"350 Room pg" = POLYGON\n\
   V1               = ( 232.623, 41.9902 )\n\
   V2               = ( 228, 28.25 )\n\
   V3               = ( 239.25, 24.5 )\n\
   V4               = ( 244.339, 38.0261 )\n\
   ..\n\
"350 Room floor pg" = POLYGON\n\
   V1               = ( 232.623, 41.9902 )\n\
   V2               = ( 228, 28.25 )\n\
   V3               = ( 239.25, 24.5 )\n\
   V4               = ( 244.339, 38.0261 )\n\
   ..\n\
"351 Corridor pg" = POLYGON\n\
   V1               = ( 216.75, 32 )\n\
   V2               = ( 210.75, 29 )\n\
   V3               = ( 227.25, 23.75 )\n\
   V4               = ( 243.75, 18 )\n\
   V5               = ( 249.25, 16.25 )\n\
   V6               = ( 250.804, 20.7259 )\n\
   V7               = ( 239.25, 24.5 )\n\
   V8               = ( 228, 28.25 )\n\
   ..\n\
"351 Corridor floor pg" = POLYGON\n\
   V1               = ( 216.75, 32 )\n\
   V2               = ( 210.75, 29 )\n\
   V3               = ( 227.25, 23.75 )\n\
   V4               = ( 243.75, 18 )\n\
   V5               = ( 249.25, 16.25 )\n\
   V6               = ( 250.804, 20.7259 )\n\
   V7               = ( 239.25, 24.5 )\n\
   V8               = ( 228, 28.25 )\n\
   ..\n\
"352 Room pg" = POLYGON\n\
   V1               = ( 244.339, 38.0261 )\n\
   V2               = ( 239.25, 24.5 )\n\
   V3               = ( 250.804, 20.7259 )\n\
   V4               = ( 255.5, 34.25 )\n\
   ..\n\
"352 Room floor pg" = POLYGON\n\
   V1               = ( 244.339, 38.0261 )\n\
   V2               = ( 239.25, 24.5 )\n\
   V3               = ( 250.804, 20.7259 )\n\
   V4               = ( 255.5, 34.25 )\n\
   ..\n\
"353 Corridor pg" = POLYGON\n\
   V1               = ( 184.75, 42.75 )\n\
   V2               = ( 182.75, 37 )\n\
   V3               = ( 179.75, 28.5 )\n\
   V4               = ( 184.889, 26.7943 )\n\
   V5               = ( 188.25, 36.5 )\n\
   V6               = ( 199.5, 33 )\n\
   V7               = ( 210.75, 29 )\n\
   V8               = ( 216.75, 32 )\n\
   V9               = ( 206.75, 35.5 )\n\
   V10              = ( 197, 39 )\n\
   ..\n\
"353 Corridor floor pg" = POLYGON\n\
   V1               = ( 184.75, 42.75 )\n\
   V2               = ( 182.75, 37 )\n\
   V3               = ( 179.75, 28.5 )\n\
   V4               = ( 184.889, 26.7943 )\n\
   V5               = ( 188.25, 36.5 )\n\
   V6               = ( 199.5, 33 )\n\
   V7               = ( 210.75, 29 )\n\
   V8               = ( 216.75, 32 )\n\
   V9               = ( 206.75, 35.5 )\n\
   V10              = ( 197, 39 )\n\
   ..\n\
"Level 4 pg" = POLYGON\n\
   V1               = ( 16.5, 114 )\n\
   V2               = ( 10.25, 96 )\n\
   V3               = ( 8.75, 96.5 )\n\
   V4               = ( 4.5, 83.75 )\n\
   V5               = ( 12, 81.5 )\n\
   V6               = ( 13.5, 84.25 )\n\
   V7               = ( 73.25, 64 )\n\
   V8               = ( 71.5, 57.5 )\n\
   V9               = ( 98, 48.25 )\n\
   V10              = ( 101.5, 58.75 )\n\
   V11              = ( 157.5, 39.5 )\n\
   V12              = ( 153.75, 29.75 )\n\
   V13              = ( 177.25, 22 )\n\
   V14              = ( 179.75, 28.5 )\n\
   V15              = ( 240, 8.5 )\n\
   V16              = ( 239, 5.5 )\n\
   V17              = ( 246.5, 3 )\n\
   V18              = ( 251, 15.5 )\n\
   V19              = ( 249.25, 16.25 )\n\
   V20              = ( 255.5, 34.25 )\n\
   V21              = ( 189, 56.75 )\n\
   V22              = ( 191.25, 63.75 )\n\
   V23              = ( 171, 70.5 )\n\
   V24              = ( 169.75, 66.5 )\n\
   V25              = ( 104.25, 88.25 )\n\
   V26              = ( 105.25, 92 )\n\
   V27              = ( 85, 99 )\n\
   V28              = ( 82.25, 91.75 )\n\
   ..\n\
"4-EL Elev pg" = POLYGON\n\
   V1               = ( 157.5, 39.5 )\n\
   V2               = ( 153.75, 29.75 )\n\
   V3               = ( 160.871, 27.4015 )\n\
   V4               = ( 164.5, 37.5 )\n\
   ..\n\
"4-EL Elev floor pg" = POLYGON\n\
   V1               = ( 157.5, 39.5 )\n\
   V2               = ( 153.75, 29.75 )\n\
   V3               = ( 160.871, 27.4015 )\n\
   V4               = ( 164.5, 37.5 )\n\
   ..\n\
"4-ST1 Stair 1 pg" = POLYGON\n\
   V1               = ( 8.75, 96.5 )\n\
   V2               = ( 4.5, 83.75 )\n\
   V3               = ( 12, 81.5 )\n\
   V4               = ( 13.5, 84.25 )\n\
   V5               = ( 16.5, 94 )\n\
   V6               = ( 10.25, 96 )\n\
   ..\n\
"4-ST1 Stair 1 floor pg" = POLYGON\n\
   V1               = ( 8.75, 96.5 )\n\
   V2               = ( 4.5, 83.75 )\n\
   V3               = ( 12, 81.5 )\n\
   V4               = ( 13.5, 84.25 )\n\
   V5               = ( 16.5, 94 )\n\
   V6               = ( 10.25, 96 )\n\
   ..\n\
"4-ST2 Stair 2 pg" = POLYGON\n\
   V1               = ( 76, 72.5 )\n\
   V2               = ( 73.25, 64 )\n\
   V3               = ( 71.5, 57.5 )\n\
   V4               = ( 79.8572, 54.5829 )\n\
   V5               = ( 83.25, 63.5 )\n\
   V6               = ( 85.25, 69.25 )\n\
   ..\n\
"4-ST2 Stair 2 floor pg" = POLYGON\n\
   V1               = ( 76, 72.5 )\n\
   V2               = ( 73.25, 64 )\n\
   V3               = ( 71.5, 57.5 )\n\
   V4               = ( 79.8572, 54.5829 )\n\
   V5               = ( 83.25, 63.5 )\n\
   V6               = ( 85.25, 69.25 )\n\
   ..\n\
"4-ST3 Stair 3 pg" = POLYGON\n\
   V1               = ( 173.75, 39.75 )\n\
   V2               = ( 168.8, 24.7868 )\n\
   V3               = ( 177.25, 22 )\n\
   V4               = ( 179.75, 28.5 )\n\
   V5               = ( 182.75, 37 )\n\
   ..\n\
"4-ST3 Stair 3 floor pg" = POLYGON\n\
   V1               = ( 173.75, 39.75 )\n\
   V2               = ( 168.8, 24.7868 )\n\
   V3               = ( 177.25, 22 )\n\
   V4               = ( 179.75, 28.5 )\n\
   V5               = ( 182.75, 37 )\n\
   ..\n\
"4-ST4 Stair 4 pg" = POLYGON\n\
   V1               = ( 243.5, 18 )\n\
   V2               = ( 240, 8.5 )\n\
   V3               = ( 239, 5.5 )\n\
   V4               = ( 246.5, 3 )\n\
   V5               = ( 251, 15.5 )\n\
   V6               = ( 249.25, 16.25 )\n\
   ..\n\
"4-ST4 Stair 4 floor pg" = POLYGON\n\
   V1               = ( 243.5, 18 )\n\
   V2               = ( 240, 8.5 )\n\
   V3               = ( 239, 5.5 )\n\
   V4               = ( 246.5, 3 )\n\
   V5               = ( 251, 15.5 )\n\
   V6               = ( 249.25, 16.25 )\n\
   ..\n\
"400 Lounge pg" = POLYGON\n\
   V1               = ( 85, 99 )\n\
   V2               = ( 82.25, 91.75 )\n\
   V3               = ( 78.25, 78 )\n\
   V4               = ( 87.25, 75 )\n\
   V5               = ( 98.5, 71.25 )\n\
   V6               = ( 99.5, 74.75 )\n\
   V7               = ( 104.25, 88.25 )\n\
   V8               = ( 105.25, 92 )\n\
   ..\n\
"400 Lounge floor pg" = POLYGON\n\
   V1               = ( 85, 99 )\n\
   V2               = ( 82.25, 91.75 )\n\
   V3               = ( 78.25, 78 )\n\
   V4               = ( 87.25, 75 )\n\
   V5               = ( 98.5, 71.25 )\n\
   V6               = ( 99.5, 74.75 )\n\
   V7               = ( 104.25, 88.25 )\n\
   V8               = ( 105.25, 92 )\n\
   ..\n\
"401 Corridor pg" = POLYGON\n\
   V1               = ( 87.25, 75 )\n\
   V2               = ( 85.25, 69.25 )\n\
   V3               = ( 83.25, 63.5 )\n\
   V4               = ( 96, 65 )\n\
   V5               = ( 102.5, 62.5 )\n\
   V6               = ( 104.25, 68.25 )\n\
   V7               = ( 120.75, 62.75 )\n\
   V8               = ( 136.75, 57.5 )\n\
   V9               = ( 144, 59.75 )\n\
   V10              = ( 134, 63.25 )\n\
   V11              = ( 122.75, 67 )\n\
   V12              = ( 111, 71 )\n\
   V13              = ( 99.5, 74.75 )\n\
   V14              = ( 98.5, 71.25 )\n\
   ..\n\
"401 Corridor floor pg" = POLYGON\n\
   V1               = ( 87.25, 75 )\n\
   V2               = ( 85.25, 69.25 )\n\
   V3               = ( 83.25, 63.5 )\n\
   V4               = ( 96, 65 )\n\
   V5               = ( 102.5, 62.5 )\n\
   V6               = ( 104.25, 68.25 )\n\
   V7               = ( 120.75, 62.75 )\n\
   V8               = ( 136.75, 57.5 )\n\
   V9               = ( 144, 59.75 )\n\
   V10              = ( 134, 63.25 )\n\
   V11              = ( 122.75, 67 )\n\
   V12              = ( 111, 71 )\n\
   V13              = ( 99.5, 74.75 )\n\
   V14              = ( 98.5, 71.25 )\n\
   ..\n\
"401A Janitor pg" = POLYGON\n\
   V1               = ( 78.25, 78 )\n\
   V2               = ( 76, 72.5 )\n\
   V3               = ( 85.25, 69.25 )\n\
   V4               = ( 87.25, 75 )\n\
   ..\n\
"401A Janitor floor pg" = POLYGON\n\
   V1               = ( 78.25, 78 )\n\
   V2               = ( 76, 72.5 )\n\
   V3               = ( 85.25, 69.25 )\n\
   V4               = ( 87.25, 75 )\n\
   ..\n\
"401B Lounge pg" = POLYGON\n\
   V1               = ( 83.25, 63.5 )\n\
   V2               = ( 79.8572, 54.5829 )\n\
   V3               = ( 98, 48.25 )\n\
   V4               = ( 101.5, 58.75 )\n\
   V5               = ( 102.5, 62.5 )\n\
   V6               = ( 96, 65 )\n\
   ..\n\
"401B Lounge floor pg" = POLYGON\n\
   V1               = ( 83.25, 63.5 )\n\
   V2               = ( 79.8572, 54.5829 )\n\
   V3               = ( 98, 48.25 )\n\
   V4               = ( 101.5, 58.75 )\n\
   V5               = ( 102.5, 62.5 )\n\
   V6               = ( 96, 65 )\n\
   ..\n\
"402 Room pg" = POLYGON\n\
   V1               = ( 70.5693, 95.7028 )\n\
   V2               = ( 66, 82 )\n\
   V3               = ( 78.25, 78 )\n\
   V4               = ( 82.25, 91.75 )\n\
   ..\n\
"402 Room floor pg" = POLYGON\n\
   V1               = ( 70.5693, 95.7028 )\n\
   V2               = ( 66, 82 )\n\
   V3               = ( 78.25, 78 )\n\
   V4               = ( 82.25, 91.75 )\n\
   ..\n\
"403 Room pg" = POLYGON\n\
   V1               = ( 60.5, 79.25 )\n\
   V2               = ( 57.1375, 69.4607 )\n\
   V3               = ( 68.2104, 65.708 )\n\
   V4               = ( 71.5, 75.25 )\n\
   ..\n\
"403 Room floor pg" = POLYGON\n\
   V1               = ( 60.5, 79.25 )\n\
   V2               = ( 57.1375, 69.4607 )\n\
   V3               = ( 68.2104, 65.708 )\n\
   V4               = ( 71.5, 75.25 )\n\
   ..\n\
"404 Room pg" = POLYGON\n\
   V1               = ( 60.78, 99.0155 )\n\
   V2               = ( 56.25, 85.5 )\n\
   V3               = ( 66, 82 )\n\
   V4               = ( 70.5693, 95.7028 )\n\
   ..\n\
"404 Room floor pg" = POLYGON\n\
   V1               = ( 60.78, 99.0155 )\n\
   V2               = ( 56.25, 85.5 )\n\
   V3               = ( 66, 82 )\n\
   V4               = ( 70.5693, 95.7028 )\n\
   ..\n\
"406 Room pg" = POLYGON\n\
   V1               = ( 50.6755, 102.435 )\n\
   V2               = ( 45.75, 88.75 )\n\
   V3               = ( 56.25, 85.5 )\n\
   V4               = ( 60.78, 99.0155 )\n\
   ..\n\
"406 Room floor pg" = POLYGON\n\
   V1               = ( 50.6755, 102.435 )\n\
   V2               = ( 45.75, 88.75 )\n\
   V3               = ( 56.25, 85.5 )\n\
   V4               = ( 60.78, 99.0155 )\n\
   ..\n\
"407 Room pg" = POLYGON\n\
   V1               = ( 49, 83 )\n\
   V2               = ( 45.731, 73.3265 )\n\
   V3               = ( 57.1375, 69.4607 )\n\
   V4               = ( 60.5, 79.25 )\n\
   ..\n\
"407 Room floor pg" = POLYGON\n\
   V1               = ( 49, 83 )\n\
   V2               = ( 45.731, 73.3265 )\n\
   V3               = ( 57.1375, 69.4607 )\n\
   V4               = ( 60.5, 79.25 )\n\
   ..\n\
"408 Bathroom pg" = POLYGON\n\
   V1               = ( 39.2733, 106.293 )\n\
   V2               = ( 34.5, 92.75 )\n\
   V3               = ( 45.75, 88.75 )\n\
   V4               = ( 50.6755, 102.435 )\n\
   ..\n\
"408 Bathroom floor pg" = POLYGON\n\
   V1               = ( 39.2733, 106.293 )\n\
   V2               = ( 34.5, 92.75 )\n\
   V3               = ( 45.75, 88.75 )\n\
   V4               = ( 50.6755, 102.435 )\n\
   ..\n\
"409 Room pg" = POLYGON\n\
   V1               = ( 32.75, 88.5 )\n\
   V2               = ( 29.3262, 78.8863 )\n\
   V3               = ( 45.731, 73.3265 )\n\
   V4               = ( 49, 83 )\n\
   ..\n\
"409 Room floor pg" = POLYGON\n\
   V1               = ( 32.75, 88.5 )\n\
   V2               = ( 29.3262, 78.8863 )\n\
   V3               = ( 45.731, 73.3265 )\n\
   V4               = ( 49, 83 )\n\
   ..\n\
"410 Room pg" = POLYGON\n\
   V1               = ( 27.7228, 110.202 )\n\
   V2               = ( 23.25, 96.5 )\n\
   V3               = ( 34.5, 92.75 )\n\
   V4               = ( 39.2733, 106.293 )\n\
   ..\n\
"410 Room floor pg" = POLYGON\n\
   V1               = ( 27.7228, 110.202 )\n\
   V2               = ( 23.25, 96.5 )\n\
   V3               = ( 34.5, 92.75 )\n\
   V4               = ( 39.2733, 106.293 )\n\
   ..\n\
"411 Room pg" = POLYGON\n\
   V1               = ( 16.5, 94 )\n\
   V2               = ( 13.5, 84.25 )\n\
   V3               = ( 29.3262, 78.8863 )\n\
   V4               = ( 32.75, 88.5 )\n\
   ..\n\
"411 Room floor pg" = POLYGON\n\
   V1               = ( 16.5, 94 )\n\
   V2               = ( 13.5, 84.25 )\n\
   V3               = ( 29.3262, 78.8863 )\n\
   V4               = ( 32.75, 88.5 )\n\
   ..\n\
"412 Room pg" = POLYGON\n\
   V1               = ( 16.5, 114 )\n\
   V2               = ( 11.7818, 100.412 )\n\
   V3               = ( 23.25, 96.5 )\n\
   V4               = ( 27.7228, 110.202 )\n\
   ..\n\
"412 Room floor pg" = POLYGON\n\
   V1               = ( 16.5, 114 )\n\
   V2               = ( 11.7818, 100.412 )\n\
   V3               = ( 23.25, 96.5 )\n\
   V4               = ( 27.7228, 110.202 )\n\
   ..\n\
"413 Corridor pg" = POLYGON\n\
   V1               = ( 11.7818, 100.412 )\n\
   V2               = ( 10.25, 96 )\n\
   V3               = ( 16.5, 94 )\n\
   V4               = ( 32.75, 88.5 )\n\
   V5               = ( 49, 83 )\n\
   V6               = ( 56.25, 85.5 )\n\
   V7               = ( 45.75, 88.75 )\n\
   V8               = ( 34.5, 92.75 )\n\
   V9               = ( 23.25, 96.5 )\n\
   ..\n\
"413 Corridor floor pg" = POLYGON\n\
   V1               = ( 11.7818, 100.412 )\n\
   V2               = ( 10.25, 96 )\n\
   V3               = ( 16.5, 94 )\n\
   V4               = ( 32.75, 88.5 )\n\
   V5               = ( 49, 83 )\n\
   V6               = ( 56.25, 85.5 )\n\
   V7               = ( 45.75, 88.75 )\n\
   V8               = ( 34.5, 92.75 )\n\
   V9               = ( 23.25, 96.5 )\n\
   ..\n\
"414 Corridor pg" = POLYGON\n\
   V1               = ( 56.25, 85.5 )\n\
   V2               = ( 49, 83 )\n\
   V3               = ( 60.5, 79.25 )\n\
   V4               = ( 71.5, 75.25 )\n\
   V5               = ( 68.2104, 65.708 )\n\
   V6               = ( 73.25, 64 )\n\
   V7               = ( 76, 72.5 )\n\
   V8               = ( 78.25, 78 )\n\
   V9               = ( 66, 82 )\n\
   ..\n\
"414 Corridor floor pg" = POLYGON\n\
   V1               = ( 56.25, 85.5 )\n\
   V2               = ( 49, 83 )\n\
   V3               = ( 60.5, 79.25 )\n\
   V4               = ( 71.5, 75.25 )\n\
   V5               = ( 68.2104, 65.708 )\n\
   V6               = ( 73.25, 64 )\n\
   V7               = ( 76, 72.5 )\n\
   V8               = ( 78.25, 78 )\n\
   V9               = ( 66, 82 )\n\
   ..\n\
"421 Corridor pg" = POLYGON\n\
   V1               = ( 144, 59.75 )\n\
   V2               = ( 136.75, 57.5 )\n\
   V3               = ( 148.5, 53.5 )\n\
   V4               = ( 159.25, 49.75 )\n\
   V5               = ( 155.825, 40.0759 )\n\
   V6               = ( 157.5, 39.5 )\n\
   V7               = ( 164.5, 37.5 )\n\
   V8               = ( 160.871, 27.4015 )\n\
   V9               = ( 168.8, 24.7868 )\n\
   V10              = ( 173.75, 39.75 )\n\
   V11              = ( 175.5, 45.5 )\n\
   V12              = ( 164.25, 49.25 )\n\
   V13              = ( 165.5, 52.75 )\n\
   V14              = ( 153.75, 56.5 )\n\
   ..\n\
"421 Corridor floor pg" = POLYGON\n\
   V1               = ( 144, 59.75 )\n\
   V2               = ( 136.75, 57.5 )\n\
   V3               = ( 148.5, 53.5 )\n\
   V4               = ( 159.25, 49.75 )\n\
   V5               = ( 155.825, 40.0759 )\n\
   V6               = ( 157.5, 39.5 )\n\
   V7               = ( 164.5, 37.5 )\n\
   V8               = ( 160.871, 27.4015 )\n\
   V9               = ( 168.8, 24.7868 )\n\
   V10              = ( 173.75, 39.75 )\n\
   V11              = ( 175.5, 45.5 )\n\
   V12              = ( 164.25, 49.25 )\n\
   V13              = ( 165.5, 52.75 )\n\
   V14              = ( 153.75, 56.5 )\n\
   ..\n\
"421A IT pg" = POLYGON\n\
   V1               = ( 175.5, 45.5 )\n\
   V2               = ( 173.75, 39.75 )\n\
   V3               = ( 182.75, 37 )\n\
   V4               = ( 184.75, 42.75 )\n\
   ..\n\
"421A IT floor pg" = POLYGON\n\
   V1               = ( 175.5, 45.5 )\n\
   V2               = ( 173.75, 39.75 )\n\
   V3               = ( 182.75, 37 )\n\
   V4               = ( 184.75, 42.75 )\n\
   ..\n\
"422 Room pg" = POLYGON\n\
   V1               = ( 158.35, 70.2854 )\n\
   V2               = ( 153.75, 56.5 )\n\
   V3               = ( 165.5, 52.75 )\n\
   V4               = ( 169.75, 66.5 )\n\
   ..\n\
"422 Room floor pg" = POLYGON\n\
   V1               = ( 158.35, 70.2854 )\n\
   V2               = ( 153.75, 56.5 )\n\
   V3               = ( 165.5, 52.75 )\n\
   V4               = ( 169.75, 66.5 )\n\
   ..\n\
"423 Room pg" = POLYGON\n\
   V1               = ( 148.5, 53.5 )\n\
   V2               = ( 144.934, 43.8195 )\n\
   V3               = ( 155.825, 40.0759 )\n\
   V4               = ( 159.25, 49.75 )\n\
   ..\n\
"423 Room floor pg" = POLYGON\n\
   V1               = ( 148.5, 53.5 )\n\
   V2               = ( 144.934, 43.8195 )\n\
   V3               = ( 155.825, 40.0759 )\n\
   V4               = ( 159.25, 49.75 )\n\
   ..\n\
"424 Room pg" = POLYGON\n\
   V1               = ( 148.646, 73.5077 )\n\
   V2               = ( 144, 59.75 )\n\
   V3               = ( 153.75, 56.5 )\n\
   V4               = ( 158.35, 70.2854 )\n\
   ..\n\
"424 Room floor pg" = POLYGON\n\
   V1               = ( 148.646, 73.5077 )\n\
   V2               = ( 144, 59.75 )\n\
   V3               = ( 153.75, 56.5 )\n\
   V4               = ( 158.35, 70.2854 )\n\
   ..\n\
"426 Room pg" = POLYGON\n\
   V1               = ( 138.664, 76.8224 )\n\
   V2               = ( 134, 63.25 )\n\
   V3               = ( 144, 59.75 )\n\
   V4               = ( 148.646, 73.5077 )\n\
   ..\n\
"426 Room floor pg" = POLYGON\n\
   V1               = ( 138.664, 76.8224 )\n\
   V2               = ( 134, 63.25 )\n\
   V3               = ( 144, 59.75 )\n\
   V4               = ( 148.646, 73.5077 )\n\
   ..\n\
"427 Room pg" = POLYGON\n\
   V1               = ( 136.75, 57.5 )\n\
   V2               = ( 133.396, 47.7859 )\n\
   V3               = ( 144.934, 43.8195 )\n\
   V4               = ( 148.5, 53.5 )\n\
   ..\n\
"427 Room floor pg" = POLYGON\n\
   V1               = ( 136.75, 57.5 )\n\
   V2               = ( 133.396, 47.7859 )\n\
   V3               = ( 144.934, 43.8195 )\n\
   V4               = ( 148.5, 53.5 )\n\
   ..\n\
"428 Bathroom pg" = POLYGON\n\
   V1               = ( 127.216, 80.6239 )\n\
   V2               = ( 122.75, 67 )\n\
   V3               = ( 134, 63.25 )\n\
   V4               = ( 138.664, 76.8224 )\n\
   ..\n\
"428 Bathroom floor pg" = POLYGON\n\
   V1               = ( 127.216, 80.6239 )\n\
   V2               = ( 122.75, 67 )\n\
   V3               = ( 134, 63.25 )\n\
   V4               = ( 138.664, 76.8224 )\n\
   ..\n\
"429 Room pg" = POLYGON\n\
   V1               = ( 120.75, 62.75 )\n\
   V2               = ( 117.606, 53.2134 )\n\
   V3               = ( 133.396, 47.7859 )\n\
   V4               = ( 136.75, 57.5 )\n\
   ..\n\
"429 Room floor pg" = POLYGON\n\
   V1               = ( 120.75, 62.75 )\n\
   V2               = ( 117.606, 53.2134 )\n\
   V3               = ( 133.396, 47.7859 )\n\
   V4               = ( 136.75, 57.5 )\n\
   ..\n\
"430 Room pg" = POLYGON\n\
   V1               = ( 115.898, 84.3822 )\n\
   V2               = ( 111, 71 )\n\
   V3               = ( 122.75, 67 )\n\
   V4               = ( 127.216, 80.6239 )\n\
   ..\n\
"430 Room floor pg" = POLYGON\n\
   V1               = ( 115.898, 84.3822 )\n\
   V2               = ( 111, 71 )\n\
   V3               = ( 122.75, 67 )\n\
   V4               = ( 127.216, 80.6239 )\n\
   ..\n\
"431 Room pg" = POLYGON\n\
   V1               = ( 104.25, 68.25 )\n\
   V2               = ( 102.5, 62.5 )\n\
   V3               = ( 101.5, 58.75 )\n\
   V4               = ( 117.606, 53.2134 )\n\
   V5               = ( 120.75, 62.75 )\n\
   ..\n\
"431 Room floor pg" = POLYGON\n\
   V1               = ( 104.25, 68.25 )\n\
   V2               = ( 102.5, 62.5 )\n\
   V3               = ( 101.5, 58.75 )\n\
   V4               = ( 117.606, 53.2134 )\n\
   V5               = ( 120.75, 62.75 )\n\
   ..\n\
"432 Room pg" = POLYGON\n\
   V1               = ( 104.25, 88.25 )\n\
   V2               = ( 99.5, 74.75 )\n\
   V3               = ( 111, 71 )\n\
   V4               = ( 115.898, 84.3822 )\n\
   ..\n\
"432 Room floor pg" = POLYGON\n\
   V1               = ( 104.25, 88.25 )\n\
   V2               = ( 99.5, 74.75 )\n\
   V3               = ( 111, 71 )\n\
   V4               = ( 115.898, 84.3822 )\n\
   ..\n\
"440 Room pg" = POLYGON\n\
   V1               = ( 171, 70.5 )\n\
   V2               = ( 169.75, 66.5 )\n\
   V3               = ( 165.5, 52.75 )\n\
   V4               = ( 164.25, 49.25 )\n\
   V5               = ( 175.5, 45.5 )\n\
   V6               = ( 184.75, 42.75 )\n\
   V7               = ( 189, 56.75 )\n\
   V8               = ( 191.25, 63.75 )\n\
   ..\n\
"440 Room floor pg" = POLYGON\n\
   V1               = ( 171, 70.5 )\n\
   V2               = ( 169.75, 66.5 )\n\
   V3               = ( 165.5, 52.75 )\n\
   V4               = ( 164.25, 49.25 )\n\
   V5               = ( 175.5, 45.5 )\n\
   V6               = ( 184.75, 42.75 )\n\
   V7               = ( 189, 56.75 )\n\
   V8               = ( 191.25, 63.75 )\n\
   ..\n\
"442 Room pg" = POLYGON\n\
   V1               = ( 189, 56.75 )\n\
   V2               = ( 184.75, 42.75 )\n\
   V3               = ( 197, 38.75 )\n\
   V4               = ( 201.586, 52.4915 )\n\
   ..\n\
"442 Room floor pg" = POLYGON\n\
   V1               = ( 189, 56.75 )\n\
   V2               = ( 184.75, 42.75 )\n\
   V3               = ( 197, 38.75 )\n\
   V4               = ( 201.586, 52.4915 )\n\
   ..\n\
"443 Room pg" = POLYGON\n\
   V1               = ( 188.25, 36.5 )\n\
   V2               = ( 184.922, 26.7833 )\n\
   V3               = ( 196.092, 23.0753 )\n\
   V4               = ( 199.25, 33 )\n\
   ..\n\
"443 Room floor pg" = POLYGON\n\
   V1               = ( 188.25, 36.5 )\n\
   V2               = ( 184.922, 26.7833 )\n\
   V3               = ( 196.092, 23.0753 )\n\
   V4               = ( 199.25, 33 )\n\
   ..\n\
"444 Room pg" = POLYGON\n\
   V1               = ( 201.586, 52.4915 )\n\
   V2               = ( 197, 38.75 )\n\
   V3               = ( 206.75, 35.25 )\n\
   V4               = ( 211.534, 49.1256 )\n\
   ..\n\
"444 Room floor pg" = POLYGON\n\
   V1               = ( 201.586, 52.4915 )\n\
   V2               = ( 197, 38.75 )\n\
   V3               = ( 206.75, 35.25 )\n\
   V4               = ( 211.534, 49.1256 )\n\
   ..\n\
"445 Room pg" = POLYGON\n\
   V1               = ( 199.25, 33 )\n\
   V2               = ( 196.092, 23.0753 )\n\
   V3               = ( 207.707, 19.2196 )\n\
   V4               = ( 210.75, 29 )\n\
   ..\n\
"445 Room floor pg" = POLYGON\n\
   V1               = ( 199.25, 33 )\n\
   V2               = ( 196.092, 23.0753 )\n\
   V3               = ( 207.707, 19.2196 )\n\
   V4               = ( 210.75, 29 )\n\
   ..\n\
"446 Room pg" = POLYGON\n\
   V1               = ( 211.534, 49.1256 )\n\
   V2               = ( 206.75, 35.25 )\n\
   V3               = ( 216.5, 32 )\n\
   V4               = ( 221.409, 45.7845 )\n\
   ..\n\
"446 Room floor pg" = POLYGON\n\
   V1               = ( 211.534, 49.1256 )\n\
   V2               = ( 206.75, 35.25 )\n\
   V3               = ( 216.5, 32 )\n\
   V4               = ( 221.409, 45.7845 )\n\
   ..\n\
"447 Room pg" = POLYGON\n\
   V1               = ( 210.75, 29 )\n\
   V2               = ( 207.707, 19.2196 )\n\
   V3               = ( 223.794, 13.8795 )\n\
   V4               = ( 227.25, 23.75 )\n\
   ..\n\
"447 Room floor pg" = POLYGON\n\
   V1               = ( 210.75, 29 )\n\
   V2               = ( 207.707, 19.2196 )\n\
   V3               = ( 223.794, 13.8795 )\n\
   V4               = ( 227.25, 23.75 )\n\
   ..\n\
"448 Bathroom pg" = POLYGON\n\
   V1               = ( 221.409, 45.7845 )\n\
   V2               = ( 216.5, 32 )\n\
   V3               = ( 228, 28.25 )\n\
   V4               = ( 232.501, 42.0315 )\n\
   ..\n\
"448 Bathroom floor pg" = POLYGON\n\
   V1               = ( 221.409, 45.7845 )\n\
   V2               = ( 216.5, 32 )\n\
   V3               = ( 228, 28.25 )\n\
   V4               = ( 232.501, 42.0315 )\n\
   ..\n\
"449 Room pg" = POLYGON\n\
   V1               = ( 227.25, 23.75 )\n\
   V2               = ( 223.794, 13.8795 )\n\
   V3               = ( 240, 8.5 )\n\
   V4               = ( 243.5, 18 )\n\
   ..\n\
"449 Room floor pg" = POLYGON\n\
   V1               = ( 227.25, 23.75 )\n\
   V2               = ( 223.794, 13.8795 )\n\
   V3               = ( 240, 8.5 )\n\
   V4               = ( 243.5, 18 )\n\
   ..\n\
"450 Room pg" = POLYGON\n\
   V1               = ( 232.501, 42.0315 )\n\
   V2               = ( 228, 28.25 )\n\
   V3               = ( 239.5, 24.25 )\n\
   V4               = ( 244.166, 38.0849 )\n\
   ..\n\
"450 Room floor pg" = POLYGON\n\
   V1               = ( 232.501, 42.0315 )\n\
   V2               = ( 228, 28.25 )\n\
   V3               = ( 239.5, 24.25 )\n\
   V4               = ( 244.166, 38.0849 )\n\
   ..\n\
"451 Corridor pg" = POLYGON\n\
   V1               = ( 216.5, 32 )\n\
   V2               = ( 210.75, 29 )\n\
   V3               = ( 227.25, 23.75 )\n\
   V4               = ( 243.5, 18 )\n\
   V5               = ( 249.25, 16.25 )\n\
   V6               = ( 250.699, 20.4225 )\n\
   V7               = ( 239.5, 24.25 )\n\
   V8               = ( 228, 28.25 )\n\
   ..\n\
"451 Corridor floor pg" = POLYGON\n\
   V1               = ( 216.5, 32 )\n\
   V2               = ( 210.75, 29 )\n\
   V3               = ( 227.25, 23.75 )\n\
   V4               = ( 243.5, 18 )\n\
   V5               = ( 249.25, 16.25 )\n\
   V6               = ( 250.699, 20.4225 )\n\
   V7               = ( 239.5, 24.25 )\n\
   V8               = ( 228, 28.25 )\n\
   ..\n\
"452 Room pg" = POLYGON\n\
   V1               = ( 244.166, 38.0849 )\n\
   V2               = ( 239.5, 24.25 )\n\
   V3               = ( 250.699, 20.4225 )\n\
   V4               = ( 255.5, 34.25 )\n\
   ..\n\
"452 Room floor pg" = POLYGON\n\
   V1               = ( 244.166, 38.0849 )\n\
   V2               = ( 239.5, 24.25 )\n\
   V3               = ( 250.699, 20.4225 )\n\
   V4               = ( 255.5, 34.25 )\n\
   ..\n\
"453 Corridor pg" = POLYGON\n\
   V1               = ( 184.75, 42.75 )\n\
   V2               = ( 182.75, 37 )\n\
   V3               = ( 179.75, 28.5 )\n\
   V4               = ( 184.922, 26.7833 )\n\
   V5               = ( 188.25, 36.5 )\n\
   V6               = ( 199.25, 33 )\n\
   V7               = ( 210.75, 29 )\n\
   V8               = ( 216.5, 32 )\n\
   V9               = ( 206.75, 35.25 )\n\
   V10              = ( 197, 38.75 )\n\
   ..\n\
"453 Corridor floor pg" = POLYGON\n\
   V1               = ( 184.75, 42.75 )\n\
   V2               = ( 182.75, 37 )\n\
   V3               = ( 179.75, 28.5 )\n\
   V4               = ( 184.922, 26.7833 )\n\
   V5               = ( 188.25, 36.5 )\n\
   V6               = ( 199.25, 33 )\n\
   V7               = ( 210.75, 29 )\n\
   V8               = ( 216.5, 32 )\n\
   V9               = ( 206.75, 35.25 )\n\
   V10              = ( 197, 38.75 )\n\
   ..\n\
"Level 5 pg" = POLYGON\n\
   V1               = ( 16.5, 114 )\n\
   V2               = ( 10.25, 96 )\n\
   V3               = ( 8.75, 96.5 )\n\
   V4               = ( 4.5, 83.75 )\n\
   V5               = ( 12, 81.5 )\n\
   V6               = ( 13.5, 84.25 )\n\
   V7               = ( 73.25, 64 )\n\
   V8               = ( 71.5, 57.5 )\n\
   V9               = ( 98, 48.25 )\n\
   V10              = ( 101.5, 58.75 )\n\
   V11              = ( 157.5, 39.5 )\n\
   V12              = ( 153.75, 29.75 )\n\
   V13              = ( 177.25, 22 )\n\
   V14              = ( 179.75, 28.5 )\n\
   V15              = ( 240, 8.5 )\n\
   V16              = ( 239, 5.5 )\n\
   V17              = ( 246.5, 3 )\n\
   V18              = ( 251, 15.5 )\n\
   V19              = ( 249.25, 16.25 )\n\
   V20              = ( 255.5, 34.25 )\n\
   V21              = ( 189, 56.75 )\n\
   V22              = ( 191.25, 63.75 )\n\
   V23              = ( 171, 70.5 )\n\
   V24              = ( 169.75, 66.5 )\n\
   V25              = ( 104.25, 88.25 )\n\
   V26              = ( 105.25, 92 )\n\
   V27              = ( 85, 99 )\n\
   V28              = ( 82.25, 91.75 )\n\
   ..\n\
"5-EL Elev pg" = POLYGON\n\
   V1               = ( 157.5, 39.5 )\n\
   V2               = ( 153.75, 29.75 )\n\
   V3               = ( 160.611, 27.4872 )\n\
   V4               = ( 164, 37.75 )\n\
   ..\n\
"5-EL Elev roof pg" = POLYGON\n\
   V1               = ( 157.5, 39.5 )\n\
   V2               = ( 153.75, 29.75 )\n\
   V3               = ( 160.611, 27.4872 )\n\
   V4               = ( 164, 37.75 )\n\
   ..\n\
"5-EL Elev floor pg" = POLYGON\n\
   V1               = ( 157.5, 39.5 )\n\
   V2               = ( 153.75, 29.75 )\n\
   V3               = ( 160.611, 27.4872 )\n\
   V4               = ( 164, 37.75 )\n\
   ..\n\
"5-ST1 Stair 1 pg" = POLYGON\n\
   V1               = ( 8.75, 96.5 )\n\
   V2               = ( 4.5, 83.75 )\n\
   V3               = ( 12, 81.5 )\n\
   V4               = ( 13.5, 84.25 )\n\
   V5               = ( 16, 94.25 )\n\
   V6               = ( 10.25, 96 )\n\
   ..\n\
"5-ST1 Stair 1 roof pg" = POLYGON\n\
   V1               = ( 8.75, 96.5 )\n\
   V2               = ( 4.5, 83.75 )\n\
   V3               = ( 12, 81.5 )\n\
   V4               = ( 13.5, 84.25 )\n\
   V5               = ( 16, 94.25 )\n\
   V6               = ( 10.25, 96 )\n\
   ..\n\
"5-ST1 Stair 1 floor pg" = POLYGON\n\
   V1               = ( 8.75, 96.5 )\n\
   V2               = ( 4.5, 83.75 )\n\
   V3               = ( 12, 81.5 )\n\
   V4               = ( 13.5, 84.25 )\n\
   V5               = ( 16, 94.25 )\n\
   V6               = ( 10.25, 96 )\n\
   ..\n\
"5-ST2 Stair 2 pg" = POLYGON\n\
   V1               = ( 75.5, 72.5 )\n\
   V2               = ( 73.25, 64 )\n\
   V3               = ( 71.5, 57.5 )\n\
   V4               = ( 79.914, 54.563 )\n\
   V5               = ( 83, 63.5 )\n\
   V6               = ( 85, 69.25 )\n\
   ..\n\
"5-ST2 Stair 2 roof pg" = POLYGON\n\
   V1               = ( 75.5, 72.5 )\n\
   V2               = ( 73.25, 64 )\n\
   V3               = ( 71.5, 57.5 )\n\
   V4               = ( 79.914, 54.563 )\n\
   V5               = ( 83, 63.5 )\n\
   V6               = ( 85, 69.25 )\n\
   ..\n\
"5-ST2 Stair 2 floor pg" = POLYGON\n\
   V1               = ( 75.5, 72.5 )\n\
   V2               = ( 73.25, 64 )\n\
   V3               = ( 71.5, 57.5 )\n\
   V4               = ( 79.914, 54.563 )\n\
   V5               = ( 83, 63.5 )\n\
   V6               = ( 85, 69.25 )\n\
   ..\n\
"5-ST3 Stair 3 pg" = POLYGON\n\
   V1               = ( 173.5, 39.75 )\n\
   V2               = ( 168.394, 24.9206 )\n\
   V3               = ( 177.25, 22 )\n\
   V4               = ( 179.75, 28.5 )\n\
   V5               = ( 182.5, 37 )\n\
   ..\n\
"5-ST3 Stair 3 roof pg" = POLYGON\n\
   V1               = ( 173.5, 39.75 )\n\
   V2               = ( 168.394, 24.9206 )\n\
   V3               = ( 177.25, 22 )\n\
   V4               = ( 179.75, 28.5 )\n\
   V5               = ( 182.5, 37 )\n\
   ..\n\
"5-ST3 Stair 3 floor pg" = POLYGON\n\
   V1               = ( 173.5, 39.75 )\n\
   V2               = ( 168.394, 24.9206 )\n\
   V3               = ( 177.25, 22 )\n\
   V4               = ( 179.75, 28.5 )\n\
   V5               = ( 182.5, 37 )\n\
   ..\n\
"5-ST4 Stair 4 pg" = POLYGON\n\
   V1               = ( 243.5, 18.5 )\n\
   V2               = ( 240, 8.5 )\n\
   V3               = ( 239, 5.5 )\n\
   V4               = ( 246.5, 3 )\n\
   V5               = ( 251, 15.5 )\n\
   V6               = ( 249.25, 16.25 )\n\
   ..\n\
"5-ST4 Stair 4 roof pg" = POLYGON\n\
   V1               = ( 243.5, 18.5 )\n\
   V2               = ( 240, 8.5 )\n\
   V3               = ( 239, 5.5 )\n\
   V4               = ( 246.5, 3 )\n\
   V5               = ( 251, 15.5 )\n\
   V6               = ( 249.25, 16.25 )\n\
   ..\n\
"5-ST4 Stair 4 floor pg" = POLYGON\n\
   V1               = ( 243.5, 18.5 )\n\
   V2               = ( 240, 8.5 )\n\
   V3               = ( 239, 5.5 )\n\
   V4               = ( 246.5, 3 )\n\
   V5               = ( 251, 15.5 )\n\
   V6               = ( 249.25, 16.25 )\n\
   ..\n\
"500 Lounge pg" = POLYGON\n\
   V1               = ( 85, 99 )\n\
   V2               = ( 82.25, 91.75 )\n\
   V3               = ( 77.5, 78.5 )\n\
   V4               = ( 87, 75 )\n\
   V5               = ( 98, 71.5 )\n\
   V6               = ( 99, 75 )\n\
   V7               = ( 104.25, 88.25 )\n\
   V8               = ( 105.25, 92 )\n\
   ..\n\
"500 Lounge roof pg" = POLYGON\n\
   V1               = ( 85, 99 )\n\
   V2               = ( 82.25, 91.75 )\n\
   V3               = ( 77.5, 78.5 )\n\
   V4               = ( 87, 75 )\n\
   V5               = ( 98, 71.5 )\n\
   V6               = ( 99, 75 )\n\
   V7               = ( 104.25, 88.25 )\n\
   V8               = ( 105.25, 92 )\n\
   ..\n\
"500 Lounge floor pg" = POLYGON\n\
   V1               = ( 85, 99 )\n\
   V2               = ( 82.25, 91.75 )\n\
   V3               = ( 77.5, 78.5 )\n\
   V4               = ( 87, 75 )\n\
   V5               = ( 98, 71.5 )\n\
   V6               = ( 99, 75 )\n\
   V7               = ( 104.25, 88.25 )\n\
   V8               = ( 105.25, 92 )\n\
   ..\n\
"501 Corridor pg" = POLYGON\n\
   V1               = ( 87, 75 )\n\
   V2               = ( 85, 69.25 )\n\
   V3               = ( 83, 63.5 )\n\
   V4               = ( 96.25, 65.25 )\n\
   V5               = ( 102.25, 62.75 )\n\
   V6               = ( 104.25, 68.25 )\n\
   V7               = ( 120.5, 62.75 )\n\
   V8               = ( 136.5, 57.5 )\n\
   V9               = ( 143.5, 60 )\n\
   V10              = ( 133.5, 63.25 )\n\
   V11              = ( 122.25, 67.25 )\n\
   V12              = ( 111, 71 )\n\
   V13              = ( 99, 75 )\n\
   V14              = ( 98, 71.5 )\n\
   ..\n\
"501 Corridor roof pg" = POLYGON\n\
   V1               = ( 87, 75 )\n\
   V2               = ( 85, 69.25 )\n\
   V3               = ( 83, 63.5 )\n\
   V4               = ( 96.25, 65.25 )\n\
   V5               = ( 102.25, 62.75 )\n\
   V6               = ( 104.25, 68.25 )\n\
   V7               = ( 120.5, 62.75 )\n\
   V8               = ( 136.5, 57.5 )\n\
   V9               = ( 143.5, 60 )\n\
   V10              = ( 133.5, 63.25 )\n\
   V11              = ( 122.25, 67.25 )\n\
   V12              = ( 111, 71 )\n\
   V13              = ( 99, 75 )\n\
   V14              = ( 98, 71.5 )\n\
   ..\n\
"501 Corridor floor pg" = POLYGON\n\
   V1               = ( 87, 75 )\n\
   V2               = ( 85, 69.25 )\n\
   V3               = ( 83, 63.5 )\n\
   V4               = ( 96.25, 65.25 )\n\
   V5               = ( 102.25, 62.75 )\n\
   V6               = ( 104.25, 68.25 )\n\
   V7               = ( 120.5, 62.75 )\n\
   V8               = ( 136.5, 57.5 )\n\
   V9               = ( 143.5, 60 )\n\
   V10              = ( 133.5, 63.25 )\n\
   V11              = ( 122.25, 67.25 )\n\
   V12              = ( 111, 71 )\n\
   V13              = ( 99, 75 )\n\
   V14              = ( 98, 71.5 )\n\
   ..\n\
"501A Janitor pg" = POLYGON\n\
   V1               = ( 77.5, 78.5 )\n\
   V2               = ( 75.5, 72.5 )\n\
   V3               = ( 85, 69.25 )\n\
   V4               = ( 87, 75 )\n\
   ..\n\
"501A Janitor roof pg" = POLYGON\n\
   V1               = ( 77.5, 78.5 )\n\
   V2               = ( 75.5, 72.5 )\n\
   V3               = ( 85, 69.25 )\n\
   V4               = ( 87, 75 )\n\
   ..\n\
"501A Janitor floor pg" = POLYGON\n\
   V1               = ( 77.5, 78.5 )\n\
   V2               = ( 75.5, 72.5 )\n\
   V3               = ( 85, 69.25 )\n\
   V4               = ( 87, 75 )\n\
   ..\n\
"501B Lounge pg" = POLYGON\n\
   V1               = ( 83, 63.5 )\n\
   V2               = ( 79.914, 54.563 )\n\
   V3               = ( 98, 48.25 )\n\
   V4               = ( 101.5, 58.75 )\n\
   V5               = ( 102.25, 62.75 )\n\
   V6               = ( 96.25, 65.25 )\n\
   ..\n\
"501B Lounge roof pg" = POLYGON\n\
   V1               = ( 83, 63.5 )\n\
   V2               = ( 79.914, 54.563 )\n\
   V3               = ( 98, 48.25 )\n\
   V4               = ( 101.5, 58.75 )\n\
   V5               = ( 102.25, 62.75 )\n\
   V6               = ( 96.25, 65.25 )\n\
   ..\n\
"501B Lounge floor pg" = POLYGON\n\
   V1               = ( 83, 63.5 )\n\
   V2               = ( 79.914, 54.563 )\n\
   V3               = ( 98, 48.25 )\n\
   V4               = ( 101.5, 58.75 )\n\
   V5               = ( 102.25, 62.75 )\n\
   V6               = ( 96.25, 65.25 )\n\
   ..\n\
"502 Room pg" = POLYGON\n\
   V1               = ( 70.5992, 95.6927 )\n\
   V2               = ( 65.75, 82.75 )\n\
   V3               = ( 77.5, 78.5 )\n\
   V4               = ( 82.25, 91.75 )\n\
   ..\n\
"502 Room roof pg" = POLYGON\n\
   V1               = ( 70.5992, 95.6927 )\n\
   V2               = ( 65.75, 82.75 )\n\
   V3               = ( 77.5, 78.5 )\n\
   V4               = ( 82.25, 91.75 )\n\
   ..\n\
"502 Room floor pg" = POLYGON\n\
   V1               = ( 70.5992, 95.6927 )\n\
   V2               = ( 65.75, 82.75 )\n\
   V3               = ( 77.5, 78.5 )\n\
   V4               = ( 82.25, 91.75 )\n\
   ..\n\
"503 Room pg" = POLYGON\n\
   V1               = ( 60.25, 79.5 )\n\
   V2               = ( 57.0139, 69.5026 )\n\
   V3               = ( 67.8929, 65.8156 )\n\
   V4               = ( 71.25, 75.75 )\n\
   ..\n\
"503 Room roof pg" = POLYGON\n\
   V1               = ( 60.25, 79.5 )\n\
   V2               = ( 57.0139, 69.5026 )\n\
   V3               = ( 67.8929, 65.8156 )\n\
   V4               = ( 71.25, 75.75 )\n\
   ..\n\
"503 Room floor pg" = POLYGON\n\
   V1               = ( 60.25, 79.5 )\n\
   V2               = ( 57.0139, 69.5026 )\n\
   V3               = ( 67.8929, 65.8156 )\n\
   V4               = ( 71.25, 75.75 )\n\
   ..\n\
"504 Room pg" = POLYGON\n\
   V1               = ( 60.3323, 99.167 )\n\
   V2               = ( 56, 85.75 )\n\
   V3               = ( 65.75, 82.75 )\n\
   V4               = ( 70.5992, 95.6927 )\n\
   ..\n\
"504 Room roof pg" = POLYGON\n\
   V1               = ( 60.3323, 99.167 )\n\
   V2               = ( 56, 85.75 )\n\
   V3               = ( 65.75, 82.75 )\n\
   V4               = ( 70.5992, 95.6927 )\n\
   ..\n\
"504 Room floor pg" = POLYGON\n\
   V1               = ( 60.3323, 99.167 )\n\
   V2               = ( 56, 85.75 )\n\
   V3               = ( 65.75, 82.75 )\n\
   V4               = ( 70.5992, 95.6927 )\n\
   ..\n\
"506 Room pg" = POLYGON\n\
   V1               = ( 50.2961, 102.563 )\n\
   V2               = ( 45.5, 89.25 )\n\
   V3               = ( 56, 85.75 )\n\
   V4               = ( 60.3323, 99.167 )\n\
   ..\n\
"506 Room roof pg" = POLYGON\n\
   V1               = ( 50.2961, 102.563 )\n\
   V2               = ( 45.5, 89.25 )\n\
   V3               = ( 56, 85.75 )\n\
   V4               = ( 60.3323, 99.167 )\n\
   ..\n\
"506 Room floor pg" = POLYGON\n\
   V1               = ( 50.2961, 102.563 )\n\
   V2               = ( 45.5, 89.25 )\n\
   V3               = ( 56, 85.75 )\n\
   V4               = ( 60.3323, 99.167 )\n\
   ..\n\
"507 Room pg" = POLYGON\n\
   V1               = ( 48.5, 83.25 )\n\
   V2               = ( 45.2511, 73.4892 )\n\
   V3               = ( 57.0139, 69.5026 )\n\
   V4               = ( 60.25, 79.5 )\n\
   ..\n\
"507 Room roof pg" = POLYGON\n\
   V1               = ( 48.5, 83.25 )\n\
   V2               = ( 45.2511, 73.4892 )\n\
   V3               = ( 57.0139, 69.5026 )\n\
   V4               = ( 60.25, 79.5 )\n\
   ..\n\
"507 Room floor pg" = POLYGON\n\
   V1               = ( 48.5, 83.25 )\n\
   V2               = ( 45.2511, 73.4892 )\n\
   V3               = ( 57.0139, 69.5026 )\n\
   V4               = ( 60.25, 79.5 )\n\
   ..\n\
"508 Bathroom pg" = POLYGON\n\
   V1               = ( 38.9795, 106.393 )\n\
   V2               = ( 34.5, 93 )\n\
   V3               = ( 45.5, 89.25 )\n\
   V4               = ( 50.2961, 102.563 )\n\
   ..\n\
"508 Bathroom roof pg" = POLYGON\n\
   V1               = ( 38.9795, 106.393 )\n\
   V2               = ( 34.5, 93 )\n\
   V3               = ( 45.5, 89.25 )\n\
   V4               = ( 50.2961, 102.563 )\n\
   ..\n\
"508 Bathroom floor pg" = POLYGON\n\
   V1               = ( 38.9795, 106.393 )\n\
   V2               = ( 34.5, 93 )\n\
   V3               = ( 45.5, 89.25 )\n\
   V4               = ( 50.2961, 102.563 )\n\
   ..\n\
"509 Room pg" = POLYGON\n\
   V1               = ( 32.5, 88.75 )\n\
   V2               = ( 29.1887, 78.9329 )\n\
   V3               = ( 45.2511, 73.4892 )\n\
   V4               = ( 48.5, 83.25 )\n\
   ..\n\
"509 Room roof pg" = POLYGON\n\
   V1               = ( 32.5, 88.75 )\n\
   V2               = ( 29.1887, 78.9329 )\n\
   V3               = ( 45.2511, 73.4892 )\n\
   V4               = ( 48.5, 83.25 )\n\
   ..\n\
"509 Room floor pg" = POLYGON\n\
   V1               = ( 32.5, 88.75 )\n\
   V2               = ( 29.1887, 78.9329 )\n\
   V3               = ( 45.2511, 73.4892 )\n\
   V4               = ( 48.5, 83.25 )\n\
   ..\n\
"510 Room pg" = POLYGON\n\
   V1               = ( 27.5607, 110.257 )\n\
   V2               = ( 22.75, 96.75 )\n\
   V3               = ( 34.5, 93 )\n\
   V4               = ( 38.9795, 106.393 )\n\
   ..\n\
"510 Room roof pg" = POLYGON\n\
   V1               = ( 27.5607, 110.257 )\n\
   V2               = ( 22.75, 96.75 )\n\
   V3               = ( 34.5, 93 )\n\
   V4               = ( 38.9795, 106.393 )\n\
   ..\n\
"510 Room floor pg" = POLYGON\n\
   V1               = ( 27.5607, 110.257 )\n\
   V2               = ( 22.75, 96.75 )\n\
   V3               = ( 34.5, 93 )\n\
   V4               = ( 38.9795, 106.393 )\n\
   ..\n\
"511 Room pg" = POLYGON\n\
   V1               = ( 16, 94.25 )\n\
   V2               = ( 13.5, 84.25 )\n\
   V3               = ( 29.1887, 78.9329 )\n\
   V4               = ( 32.5, 88.75 )\n\
   ..\n\
"511 Room roof pg" = POLYGON\n\
   V1               = ( 16, 94.25 )\n\
   V2               = ( 13.5, 84.25 )\n\
   V3               = ( 29.1887, 78.9329 )\n\
   V4               = ( 32.5, 88.75 )\n\
   ..\n\
"511 Room floor pg" = POLYGON\n\
   V1               = ( 16, 94.25 )\n\
   V2               = ( 13.5, 84.25 )\n\
   V3               = ( 29.1887, 78.9329 )\n\
   V4               = ( 32.5, 88.75 )\n\
   ..\n\
"512 Room pg" = POLYGON\n\
   V1               = ( 16.5, 114 )\n\
   V2               = ( 11.7779, 100.4 )\n\
   V3               = ( 22.75, 96.75 )\n\
   V4               = ( 27.5607, 110.257 )\n\
   ..\n\
"512 Room roof pg" = POLYGON\n\
   V1               = ( 16.5, 114 )\n\
   V2               = ( 11.7779, 100.4 )\n\
   V3               = ( 22.75, 96.75 )\n\
   V4               = ( 27.5607, 110.257 )\n\
   ..\n\
"512 Room floor pg" = POLYGON\n\
   V1               = ( 16.5, 114 )\n\
   V2               = ( 11.7779, 100.4 )\n\
   V3               = ( 22.75, 96.75 )\n\
   V4               = ( 27.5607, 110.257 )\n\
   ..\n\
"513 Corridor pg" = POLYGON\n\
   V1               = ( 11.7779, 100.4 )\n\
   V2               = ( 10.25, 96 )\n\
   V3               = ( 16, 94.25 )\n\
   V4               = ( 32.5, 88.75 )\n\
   V5               = ( 48.5, 83.25 )\n\
   V6               = ( 56, 85.75 )\n\
   V7               = ( 45.5, 89.25 )\n\
   V8               = ( 34.5, 93 )\n\
   V9               = ( 22.75, 96.75 )\n\
   ..\n\
"513 Corridor roof pg" = POLYGON\n\
   V1               = ( 11.7779, 100.4 )\n\
   V2               = ( 10.25, 96 )\n\
   V3               = ( 16, 94.25 )\n\
   V4               = ( 32.5, 88.75 )\n\
   V5               = ( 48.5, 83.25 )\n\
   V6               = ( 56, 85.75 )\n\
   V7               = ( 45.5, 89.25 )\n\
   V8               = ( 34.5, 93 )\n\
   V9               = ( 22.75, 96.75 )\n\
   ..\n\
"513 Corridor floor pg" = POLYGON\n\
   V1               = ( 11.7779, 100.4 )\n\
   V2               = ( 10.25, 96 )\n\
   V3               = ( 16, 94.25 )\n\
   V4               = ( 32.5, 88.75 )\n\
   V5               = ( 48.5, 83.25 )\n\
   V6               = ( 56, 85.75 )\n\
   V7               = ( 45.5, 89.25 )\n\
   V8               = ( 34.5, 93 )\n\
   V9               = ( 22.75, 96.75 )\n\
   ..\n\
"514 Corridor pg" = POLYGON\n\
   V1               = ( 56, 85.75 )\n\
   V2               = ( 48.5, 83.25 )\n\
   V3               = ( 60.25, 79.5 )\n\
   V4               = ( 71.25, 75.75 )\n\
   V5               = ( 67.8929, 65.8156 )\n\
   V6               = ( 73.25, 64 )\n\
   V7               = ( 75.5, 72.5 )\n\
   V8               = ( 77.5, 78.5 )\n\
   V9               = ( 65.75, 82.75 )\n\
   ..\n\
"514 Corridor roof pg" = POLYGON\n\
   V1               = ( 56, 85.75 )\n\
   V2               = ( 48.5, 83.25 )\n\
   V3               = ( 60.25, 79.5 )\n\
   V4               = ( 71.25, 75.75 )\n\
   V5               = ( 67.8929, 65.8156 )\n\
   V6               = ( 73.25, 64 )\n\
   V7               = ( 75.5, 72.5 )\n\
   V8               = ( 77.5, 78.5 )\n\
   V9               = ( 65.75, 82.75 )\n\
   ..\n\
"514 Corridor floor pg" = POLYGON\n\
   V1               = ( 56, 85.75 )\n\
   V2               = ( 48.5, 83.25 )\n\
   V3               = ( 60.25, 79.5 )\n\
   V4               = ( 71.25, 75.75 )\n\
   V5               = ( 67.8929, 65.8156 )\n\
   V6               = ( 73.25, 64 )\n\
   V7               = ( 75.5, 72.5 )\n\
   V8               = ( 77.5, 78.5 )\n\
   V9               = ( 65.75, 82.75 )\n\
   ..\n\
"521 Corridor pg" = POLYGON\n\
   V1               = ( 143.5, 60 )\n\
   V2               = ( 136.5, 57.5 )\n\
   V3               = ( 148.25, 53.75 )\n\
   V4               = ( 159.25, 49.75 )\n\
   V5               = ( 155.654, 40.1344 )\n\
   V6               = ( 157.5, 39.5 )\n\
   V7               = ( 164, 37.75 )\n\
   V8               = ( 160.611, 27.4872 )\n\
   V9               = ( 168.394, 24.9206 )\n\
   V10              = ( 173.5, 39.75 )\n\
   V11              = ( 175.5, 45.5 )\n\
   V12              = ( 164, 49.5 )\n\
   V13              = ( 165, 52.75 )\n\
   V14              = ( 153.5, 56.5 )\n\
   ..\n\
"521 Corridor roof pg" = POLYGON\n\
   V1               = ( 143.5, 60 )\n\
   V2               = ( 136.5, 57.5 )\n\
   V3               = ( 148.25, 53.75 )\n\
   V4               = ( 159.25, 49.75 )\n\
   V5               = ( 155.654, 40.1344 )\n\
   V6               = ( 157.5, 39.5 )\n\
   V7               = ( 164, 37.75 )\n\
   V8               = ( 160.611, 27.4872 )\n\
   V9               = ( 168.394, 24.9206 )\n\
   V10              = ( 173.5, 39.75 )\n\
   V11              = ( 175.5, 45.5 )\n\
   V12              = ( 164, 49.5 )\n\
   V13              = ( 165, 52.75 )\n\
   V14              = ( 153.5, 56.5 )\n\
   ..\n\
"521 Corridor floor pg" = POLYGON\n\
   V1               = ( 143.5, 60 )\n\
   V2               = ( 136.5, 57.5 )\n\
   V3               = ( 148.25, 53.75 )\n\
   V4               = ( 159.25, 49.75 )\n\
   V5               = ( 155.654, 40.1344 )\n\
   V6               = ( 157.5, 39.5 )\n\
   V7               = ( 164, 37.75 )\n\
   V8               = ( 160.611, 27.4872 )\n\
   V9               = ( 168.394, 24.9206 )\n\
   V10              = ( 173.5, 39.75 )\n\
   V11              = ( 175.5, 45.5 )\n\
   V12              = ( 164, 49.5 )\n\
   V13              = ( 165, 52.75 )\n\
   V14              = ( 153.5, 56.5 )\n\
   ..\n\
"521A IT pg" = POLYGON\n\
   V1               = ( 175.5, 45.5 )\n\
   V2               = ( 173.5, 39.75 )\n\
   V3               = ( 182.5, 37 )\n\
   V4               = ( 184.5, 42.5 )\n\
   ..\n\
"521A IT roof pg" = POLYGON\n\
   V1               = ( 175.5, 45.5 )\n\
   V2               = ( 173.5, 39.75 )\n\
   V3               = ( 182.5, 37 )\n\
   V4               = ( 184.5, 42.5 )\n\
   ..\n\
"521A IT floor pg" = POLYGON\n\
   V1               = ( 175.5, 45.5 )\n\
   V2               = ( 173.5, 39.75 )\n\
   V3               = ( 182.5, 37 )\n\
   V4               = ( 184.5, 42.5 )\n\
   ..\n\
"522 Room pg" = POLYGON\n\
   V1               = ( 158.158, 70.3491 )\n\
   V2               = ( 153.5, 56.5 )\n\
   V3               = ( 165, 52.75 )\n\
   V4               = ( 169.75, 66.5 )\n\
   ..\n\
"522 Room roof pg" = POLYGON\n\
   V1               = ( 158.158, 70.3491 )\n\
   V2               = ( 153.5, 56.5 )\n\
   V3               = ( 165, 52.75 )\n\
   V4               = ( 169.75, 66.5 )\n\
   ..\n\
"522 Room floor pg" = POLYGON\n\
   V1               = ( 158.158, 70.3491 )\n\
   V2               = ( 153.5, 56.5 )\n\
   V3               = ( 165, 52.75 )\n\
   V4               = ( 169.75, 66.5 )\n\
   ..\n\
"523 Room pg" = POLYGON\n\
   V1               = ( 148.25, 53.75 )\n\
   V2               = ( 144.881, 43.8377 )\n\
   V3               = ( 155.654, 40.1344 )\n\
   V4               = ( 159.25, 49.75 )\n\
   ..\n\
"523 Room roof pg" = POLYGON\n\
   V1               = ( 148.25, 53.75 )\n\
   V2               = ( 144.881, 43.8377 )\n\
   V3               = ( 155.654, 40.1344 )\n\
   V4               = ( 159.25, 49.75 )\n\
   ..\n\
"523 Room floor pg" = POLYGON\n\
   V1               = ( 148.25, 53.75 )\n\
   V2               = ( 144.881, 43.8377 )\n\
   V3               = ( 155.654, 40.1344 )\n\
   V4               = ( 159.25, 49.75 )\n\
   ..\n\
"524 Room pg" = POLYGON\n\
   V1               = ( 148.422, 73.5822 )\n\
   V2               = ( 143.5, 60 )\n\
   V3               = ( 153.5, 56.5 )\n\
   V4               = ( 158.158, 70.3491 )\n\
   ..\n\
"524 Room roof pg" = POLYGON\n\
   V1               = ( 148.422, 73.5822 )\n\
   V2               = ( 143.5, 60 )\n\
   V3               = ( 153.5, 56.5 )\n\
   V4               = ( 158.158, 70.3491 )\n\
   ..\n\
"524 Room floor pg" = POLYGON\n\
   V1               = ( 148.422, 73.5822 )\n\
   V2               = ( 143.5, 60 )\n\
   V3               = ( 153.5, 56.5 )\n\
   V4               = ( 158.158, 70.3491 )\n\
   ..\n\
"526 Room pg" = POLYGON\n\
   V1               = ( 138.378, 76.9175 )\n\
   V2               = ( 133.5, 63.25 )\n\
   V3               = ( 143.5, 60 )\n\
   V4               = ( 148.422, 73.5822 )\n\
   ..\n\
"526 Room roof pg" = POLYGON\n\
   V1               = ( 138.378, 76.9175 )\n\
   V2               = ( 133.5, 63.25 )\n\
   V3               = ( 143.5, 60 )\n\
   V4               = ( 148.422, 73.5822 )\n\
   ..\n\
"526 Room floor pg" = POLYGON\n\
   V1               = ( 138.378, 76.9175 )\n\
   V2               = ( 133.5, 63.25 )\n\
   V3               = ( 143.5, 60 )\n\
   V4               = ( 148.422, 73.5822 )\n\
   ..\n\
"527 Room pg" = POLYGON\n\
   V1               = ( 136.5, 57.5 )\n\
   V2               = ( 133.162, 47.8663 )\n\
   V3               = ( 144.881, 43.8377 )\n\
   V4               = ( 148.25, 53.75 )\n\
   ..\n\
"527 Room roof pg" = POLYGON\n\
   V1               = ( 136.5, 57.5 )\n\
   V2               = ( 133.162, 47.8663 )\n\
   V3               = ( 144.881, 43.8377 )\n\
   V4               = ( 148.25, 53.75 )\n\
   ..\n\
"527 Room floor pg" = POLYGON\n\
   V1               = ( 136.5, 57.5 )\n\
   V2               = ( 133.162, 47.8663 )\n\
   V3               = ( 144.881, 43.8377 )\n\
   V4               = ( 148.25, 53.75 )\n\
   ..\n\
"528 Bathroom pg" = POLYGON\n\
   V1               = ( 127.155, 80.6441 )\n\
   V2               = ( 122.25, 67.25 )\n\
   V3               = ( 133.5, 63.25 )\n\
   V4               = ( 138.378, 76.9175 )\n\
   ..\n\
"528 Bathroom roof pg" = POLYGON\n\
   V1               = ( 127.155, 80.6441 )\n\
   V2               = ( 122.25, 67.25 )\n\
   V3               = ( 133.5, 63.25 )\n\
   V4               = ( 138.378, 76.9175 )\n\
   ..\n\
"528 Bathroom floor pg" = POLYGON\n\
   V1               = ( 127.155, 80.6441 )\n\
   V2               = ( 122.25, 67.25 )\n\
   V3               = ( 133.5, 63.25 )\n\
   V4               = ( 138.378, 76.9175 )\n\
   ..\n\
"529 Room pg" = POLYGON\n\
   V1               = ( 120.5, 62.75 )\n\
   V2               = ( 117.26, 53.3326 )\n\
   V3               = ( 133.162, 47.8663 )\n\
   V4               = ( 136.5, 57.5 )\n\
   ..\n\
"529 Room roof pg" = POLYGON\n\
   V1               = ( 120.5, 62.75 )\n\
   V2               = ( 117.26, 53.3326 )\n\
   V3               = ( 133.162, 47.8663 )\n\
   V4               = ( 136.5, 57.5 )\n\
   ..\n\
"529 Room floor pg" = POLYGON\n\
   V1               = ( 120.5, 62.75 )\n\
   V2               = ( 117.26, 53.3326 )\n\
   V3               = ( 133.162, 47.8663 )\n\
   V4               = ( 136.5, 57.5 )\n\
   ..\n\
"530 Room pg" = POLYGON\n\
   V1               = ( 115.548, 84.4983 )\n\
   V2               = ( 111, 71 )\n\
   V3               = ( 122.25, 67.25 )\n\
   V4               = ( 127.155, 80.6441 )\n\
   ..\n\
"530 Room roof pg" = POLYGON\n\
   V1               = ( 115.548, 84.4983 )\n\
   V2               = ( 111, 71 )\n\
   V3               = ( 122.25, 67.25 )\n\
   V4               = ( 127.155, 80.6441 )\n\
   ..\n\
"530 Room floor pg" = POLYGON\n\
   V1               = ( 115.548, 84.4983 )\n\
   V2               = ( 111, 71 )\n\
   V3               = ( 122.25, 67.25 )\n\
   V4               = ( 127.155, 80.6441 )\n\
   ..\n\
"531 Room pg" = POLYGON\n\
   V1               = ( 104.25, 68.25 )\n\
   V2               = ( 102.25, 62.75 )\n\
   V3               = ( 101.5, 58.75 )\n\
   V4               = ( 117.26, 53.3326 )\n\
   V5               = ( 120.5, 62.75 )\n\
   ..\n\
"531 Room roof pg" = POLYGON\n\
   V1               = ( 104.25, 68.25 )\n\
   V2               = ( 102.25, 62.75 )\n\
   V3               = ( 101.5, 58.75 )\n\
   V4               = ( 117.26, 53.3326 )\n\
   V5               = ( 120.5, 62.75 )\n\
   ..\n\
"531 Room floor pg" = POLYGON\n\
   V1               = ( 104.25, 68.25 )\n\
   V2               = ( 102.25, 62.75 )\n\
   V3               = ( 101.5, 58.75 )\n\
   V4               = ( 117.26, 53.3326 )\n\
   V5               = ( 120.5, 62.75 )\n\
   ..\n\
"531 Corridor pg" = POLYGON\n\
   V1               = ( 216.5, 32.25 )\n\
   V2               = ( 210.5, 29 )\n\
   V3               = ( 226.75, 23.75 )\n\
   V4               = ( 243.5, 18.5 )\n\
   V5               = ( 249.25, 16.25 )\n\
   V6               = ( 250.857, 20.8775 )\n\
   V7               = ( 239.25, 24.5 )\n\
   V8               = ( 227.75, 28.25 )\n\
   ..\n\
"531 Corridor roof pg" = POLYGON\n\
   V1               = ( 216.5, 32.25 )\n\
   V2               = ( 210.5, 29 )\n\
   V3               = ( 226.75, 23.75 )\n\
   V4               = ( 243.5, 18.5 )\n\
   V5               = ( 249.25, 16.25 )\n\
   V6               = ( 250.857, 20.8775 )\n\
   V7               = ( 239.25, 24.5 )\n\
   V8               = ( 227.75, 28.25 )\n\
   ..\n\
"531 Corridor floor pg" = POLYGON\n\
   V1               = ( 216.5, 32.25 )\n\
   V2               = ( 210.5, 29 )\n\
   V3               = ( 226.75, 23.75 )\n\
   V4               = ( 243.5, 18.5 )\n\
   V5               = ( 249.25, 16.25 )\n\
   V6               = ( 250.857, 20.8775 )\n\
   V7               = ( 239.25, 24.5 )\n\
   V8               = ( 227.75, 28.25 )\n\
   ..\n\
"532 Room pg" = POLYGON\n\
   V1               = ( 104.25, 88.25 )\n\
   V2               = ( 99, 75 )\n\
   V3               = ( 111, 71 )\n\
   V4               = ( 115.548, 84.4983 )\n\
   ..\n\
"532 Room roof pg" = POLYGON\n\
   V1               = ( 104.25, 88.25 )\n\
   V2               = ( 99, 75 )\n\
   V3               = ( 111, 71 )\n\
   V4               = ( 115.548, 84.4983 )\n\
   ..\n\
"532 Room floor pg" = POLYGON\n\
   V1               = ( 104.25, 88.25 )\n\
   V2               = ( 99, 75 )\n\
   V3               = ( 111, 71 )\n\
   V4               = ( 115.548, 84.4983 )\n\
   ..\n\
"540 Lounge pg" = POLYGON\n\
   V1               = ( 171, 70.5 )\n\
   V2               = ( 169.75, 66.5 )\n\
   V3               = ( 165, 52.75 )\n\
   V4               = ( 164, 49.5 )\n\
   V5               = ( 175.5, 45.5 )\n\
   V6               = ( 184.5, 42.5 )\n\
   V7               = ( 189, 56.75 )\n\
   V8               = ( 191.25, 63.75 )\n\
   ..\n\
"540 Lounge roof pg" = POLYGON\n\
   V1               = ( 171, 70.5 )\n\
   V2               = ( 169.75, 66.5 )\n\
   V3               = ( 165, 52.75 )\n\
   V4               = ( 164, 49.5 )\n\
   V5               = ( 175.5, 45.5 )\n\
   V6               = ( 184.5, 42.5 )\n\
   V7               = ( 189, 56.75 )\n\
   V8               = ( 191.25, 63.75 )\n\
   ..\n\
"540 Lounge floor pg" = POLYGON\n\
   V1               = ( 171, 70.5 )\n\
   V2               = ( 169.75, 66.5 )\n\
   V3               = ( 165, 52.75 )\n\
   V4               = ( 164, 49.5 )\n\
   V5               = ( 175.5, 45.5 )\n\
   V6               = ( 184.5, 42.5 )\n\
   V7               = ( 189, 56.75 )\n\
   V8               = ( 191.25, 63.75 )\n\
   ..\n\
"540 Room pg" = POLYGON\n\
   V1               = ( 189, 56.75 )\n\
   V2               = ( 184.5, 42.5 )\n\
   V3               = ( 196.5, 38.75 )\n\
   V4               = ( 201.641, 52.4731 )\n\
   ..\n\
"540 Room roof pg" = POLYGON\n\
   V1               = ( 189, 56.75 )\n\
   V2               = ( 184.5, 42.5 )\n\
   V3               = ( 196.5, 38.75 )\n\
   V4               = ( 201.641, 52.4731 )\n\
   ..\n\
"540 Room floor pg" = POLYGON\n\
   V1               = ( 189, 56.75 )\n\
   V2               = ( 184.5, 42.5 )\n\
   V3               = ( 196.5, 38.75 )\n\
   V4               = ( 201.641, 52.4731 )\n\
   ..\n\
"543 Room pg" = POLYGON\n\
   V1               = ( 188, 37 )\n\
   V2               = ( 184.633, 26.879 )\n\
   V3               = ( 195.838, 23.1597 )\n\
   V4               = ( 199.25, 33 )\n\
   ..\n\
"543 Room roof pg" = POLYGON\n\
   V1               = ( 188, 37 )\n\
   V2               = ( 184.633, 26.879 )\n\
   V3               = ( 195.838, 23.1597 )\n\
   V4               = ( 199.25, 33 )\n\
   ..\n\
"543 Room floor pg" = POLYGON\n\
   V1               = ( 188, 37 )\n\
   V2               = ( 184.633, 26.879 )\n\
   V3               = ( 195.838, 23.1597 )\n\
   V4               = ( 199.25, 33 )\n\
   ..\n\
"544 Room pg" = POLYGON\n\
   V1               = ( 201.641, 52.4731 )\n\
   V2               = ( 196.5, 38.75 )\n\
   V3               = ( 206.5, 35.5 )\n\
   V4               = ( 211.117, 49.2668 )\n\
   ..\n\
"544 Room roof pg" = POLYGON\n\
   V1               = ( 201.641, 52.4731 )\n\
   V2               = ( 196.5, 38.75 )\n\
   V3               = ( 206.5, 35.5 )\n\
   V4               = ( 211.117, 49.2668 )\n\
   ..\n\
"544 Room floor pg" = POLYGON\n\
   V1               = ( 201.641, 52.4731 )\n\
   V2               = ( 196.5, 38.75 )\n\
   V3               = ( 206.5, 35.5 )\n\
   V4               = ( 211.117, 49.2668 )\n\
   ..\n\
"545 Room pg" = POLYGON\n\
   V1               = ( 199.25, 33 )\n\
   V2               = ( 195.838, 23.1597 )\n\
   V3               = ( 207.415, 19.3167 )\n\
   V4               = ( 210.5, 29 )\n\
   ..\n\
"545 Room roof pg" = POLYGON\n\
   V1               = ( 199.25, 33 )\n\
   V2               = ( 195.838, 23.1597 )\n\
   V3               = ( 207.415, 19.3167 )\n\
   V4               = ( 210.5, 29 )\n\
   ..\n\
"545 Room floor pg" = POLYGON\n\
   V1               = ( 199.25, 33 )\n\
   V2               = ( 195.838, 23.1597 )\n\
   V3               = ( 207.415, 19.3167 )\n\
   V4               = ( 210.5, 29 )\n\
   ..\n\
"546 Room pg" = POLYGON\n\
   V1               = ( 211.117, 49.2668 )\n\
   V2               = ( 206.5, 35.5 )\n\
   V3               = ( 216.5, 32.25 )\n\
   V4               = ( 221.219, 45.8487 )\n\
   ..\n\
"546 Room roof pg" = POLYGON\n\
   V1               = ( 211.117, 49.2668 )\n\
   V2               = ( 206.5, 35.5 )\n\
   V3               = ( 216.5, 32.25 )\n\
   V4               = ( 221.219, 45.8487 )\n\
   ..\n\
"546 Room floor pg" = POLYGON\n\
   V1               = ( 211.117, 49.2668 )\n\
   V2               = ( 206.5, 35.5 )\n\
   V3               = ( 216.5, 32.25 )\n\
   V4               = ( 221.219, 45.8487 )\n\
   ..\n\
"547 Room pg" = POLYGON\n\
   V1               = ( 210.5, 29 )\n\
   V2               = ( 207.415, 19.3167 )\n\
   V3               = ( 223.534, 13.9659 )\n\
   V4               = ( 226.75, 23.75 )\n\
   ..\n\
"547 Room roof pg" = POLYGON\n\
   V1               = ( 210.5, 29 )\n\
   V2               = ( 207.415, 19.3167 )\n\
   V3               = ( 223.534, 13.9659 )\n\
   V4               = ( 226.75, 23.75 )\n\
   ..\n\
"547 Room floor pg" = POLYGON\n\
   V1               = ( 210.5, 29 )\n\
   V2               = ( 207.415, 19.3167 )\n\
   V3               = ( 223.534, 13.9659 )\n\
   V4               = ( 226.75, 23.75 )\n\
   ..\n\
"548 Bathroom pg" = POLYGON\n\
   V1               = ( 221.219, 45.8487 )\n\
   V2               = ( 216.5, 32.25 )\n\
   V3               = ( 227.75, 28.25 )\n\
   V4               = ( 232.411, 42.0621 )\n\
   ..\n\
"548 Bathroom roof pg" = POLYGON\n\
   V1               = ( 221.219, 45.8487 )\n\
   V2               = ( 216.5, 32.25 )\n\
   V3               = ( 227.75, 28.25 )\n\
   V4               = ( 232.411, 42.0621 )\n\
   ..\n\
"548 Bathroom floor pg" = POLYGON\n\
   V1               = ( 221.219, 45.8487 )\n\
   V2               = ( 216.5, 32.25 )\n\
   V3               = ( 227.75, 28.25 )\n\
   V4               = ( 232.411, 42.0621 )\n\
   ..\n\
"549 Room pg" = POLYGON\n\
   V1               = ( 226.75, 23.75 )\n\
   V2               = ( 223.534, 13.9659 )\n\
   V3               = ( 240, 8.5 )\n\
   V4               = ( 243.5, 18.5 )\n\
   ..\n\
"549 Room roof pg" = POLYGON\n\
   V1               = ( 226.75, 23.75 )\n\
   V2               = ( 223.534, 13.9659 )\n\
   V3               = ( 240, 8.5 )\n\
   V4               = ( 243.5, 18.5 )\n\
   ..\n\
"549 Room floor pg" = POLYGON\n\
   V1               = ( 226.75, 23.75 )\n\
   V2               = ( 223.534, 13.9659 )\n\
   V3               = ( 240, 8.5 )\n\
   V4               = ( 243.5, 18.5 )\n\
   ..\n\
"550 Room pg" = POLYGON\n\
   V1               = ( 232.411, 42.0621 )\n\
   V2               = ( 227.75, 28.25 )\n\
   V3               = ( 239.25, 24.5 )\n\
   V4               = ( 243.764, 38.2207 )\n\
   ..\n\
"550 Room roof pg" = POLYGON\n\
   V1               = ( 232.411, 42.0621 )\n\
   V2               = ( 227.75, 28.25 )\n\
   V3               = ( 239.25, 24.5 )\n\
   V4               = ( 243.764, 38.2207 )\n\
   ..\n\
"550 Room floor pg" = POLYGON\n\
   V1               = ( 232.411, 42.0621 )\n\
   V2               = ( 227.75, 28.25 )\n\
   V3               = ( 239.25, 24.5 )\n\
   V4               = ( 243.764, 38.2207 )\n\
   ..\n\
"552 Room pg" = POLYGON\n\
   V1               = ( 243.764, 38.2207 )\n\
   V2               = ( 239.25, 24.5 )\n\
   V3               = ( 250.857, 20.8775 )\n\
   V4               = ( 255.5, 34.25 )\n\
   ..\n\
"552 Room roof pg" = POLYGON\n\
   V1               = ( 243.764, 38.2207 )\n\
   V2               = ( 239.25, 24.5 )\n\
   V3               = ( 250.857, 20.8775 )\n\
   V4               = ( 255.5, 34.25 )\n\
   ..\n\
"552 Room floor pg" = POLYGON\n\
   V1               = ( 243.764, 38.2207 )\n\
   V2               = ( 239.25, 24.5 )\n\
   V3               = ( 250.857, 20.8775 )\n\
   V4               = ( 255.5, 34.25 )\n\
   ..\n\
"553 Corridor pg" = POLYGON\n\
   V1               = ( 184.5, 42.5 )\n\
   V2               = ( 182.5, 37 )\n\
   V3               = ( 179.75, 28.5 )\n\
   V4               = ( 184.633, 26.879 )\n\
   V5               = ( 188, 37 )\n\
   V6               = ( 199.25, 33 )\n\
   V7               = ( 210.5, 29 )\n\
   V8               = ( 216.5, 32.25 )\n\
   V9               = ( 206.5, 35.5 )\n\
   V10              = ( 196.5, 38.75 )\n\
   ..\n\
"553 Corridor roof pg" = POLYGON\n\
   V1               = ( 184.5, 42.5 )\n\
   V2               = ( 182.5, 37 )\n\
   V3               = ( 179.75, 28.5 )\n\
   V4               = ( 184.633, 26.879 )\n\
   V5               = ( 188, 37 )\n\
   V6               = ( 199.25, 33 )\n\
   V7               = ( 210.5, 29 )\n\
   V8               = ( 216.5, 32.25 )\n\
   V9               = ( 206.5, 35.5 )\n\
   V10              = ( 196.5, 38.75 )\n\
   ..\n\
"553 Corridor floor pg" = POLYGON\n\
   V1               = ( 184.5, 42.5 )\n\
   V2               = ( 182.5, 37 )\n\
   V3               = ( 179.75, 28.5 )\n\
   V4               = ( 184.633, 26.879 )\n\
   V5               = ( 188, 37 )\n\
   V6               = ( 199.25, 33 )\n\
   V7               = ( 210.5, 29 )\n\
   V8               = ( 216.5, 32.25 )\n\
   V9               = ( 206.5, 35.5 )\n\
   V10              = ( 196.5, 38.75 )\n\
   ..\n\
"Basement pg mr" = POLYGON\n\
   V1               = ( 66.5, 169.75 )\n\
   V2               = ( 70.5, 171 )\n\
   V3               = ( 63.75, 191.25 )\n\
   V4               = ( 56.75, 189 )\n\
   V5               = ( 34.25, 255.5 )\n\
   V6               = ( 27.3796, 253.393 )\n\
   V7               = ( 16.25, 249.25 )\n\
   V8               = ( 15.5, 251 )\n\
   V9               = ( 3, 246.5 )\n\
   V10              = ( 5.5, 239 )\n\
   V11              = ( 8.5, 240 )\n\
   V12              = ( 29.5, 247.25 )\n\
   V13              = ( 50, 187 )\n\
   V14              = ( 42.75, 184.25 )\n\
   V15              = ( 37.25, 182.75 )\n\
   V16              = ( 28.5, 179.75 )\n\
   V17              = ( 22, 177.25 )\n\
   V18              = ( 29.75, 153.75 )\n\
   V19              = ( 39.5, 157.5 )\n\
   V20              = ( 40, 156 )\n\
   V21              = ( 53.75, 160.5 )\n\
   V22              = ( 72, 105.5 )\n\
   V23              = ( 59.25, 101.25 )\n\
   V24              = ( 65, 83.75 )\n\
   V25              = ( 55, 79.75 )\n\
   V26              = ( 57.5, 71.5 )\n\
   V27              = ( 64, 73.25 )\n\
   V28              = ( 72.75, 76.25 )\n\
   V29              = ( 79.25, 78.25 )\n\
   V30              = ( 91.25, 82 )\n\
   V31              = ( 111.25, 22.75 )\n\
   V32              = ( 84.25, 13.5 )\n\
   V33              = ( 81.5, 12 )\n\
   V34              = ( 83.75, 4.5 )\n\
   V35              = ( 96.5, 8.75 )\n\
   V36              = ( 96, 10.25 )\n\
   V37              = ( 114, 16.5 )\n\
   V38              = ( 91.75, 82.25 )\n\
   V39              = ( 99, 85 )\n\
   V40              = ( 92, 105.25 )\n\
   V41              = ( 88.25, 104.25 )\n\
   ..\n\
"0-EL1 Elevator 1 pg mr" = POLYGON\n\
   V1               = ( 38.25, 160.75 )\n\
   V2               = ( 37.25, 164.25 )\n\
   V3               = ( 27.3652, 160.981 )\n\
   V4               = ( 29.75, 153.75 )\n\
   V5               = ( 39.5, 157.5 )\n\
   ..\n\
"0-EL1 Elevator 1 slab pg mr" = POLYGON\n\
   V1               = ( 38.25, 160.75 )\n\
   V2               = ( 37.25, 164.25 )\n\
   V3               = ( 27.3652, 160.981 )\n\
   V4               = ( 29.75, 153.75 )\n\
   V5               = ( 39.5, 157.5 )\n\
   ..\n\
"0-ST2 Stair 2 pg mr" = POLYGON\n\
   V1               = ( 70, 85.25 )\n\
   V2               = ( 65, 83.75 )\n\
   V3               = ( 55, 79.75 )\n\
   V4               = ( 57.5, 71.5 )\n\
   V5               = ( 64, 73.25 )\n\
   V6               = ( 72.75, 76.25 )\n\
   ..\n\
"0-ST2 Stair 2 slab pg mr" = POLYGON\n\
   V1               = ( 70, 85.25 )\n\
   V2               = ( 65, 83.75 )\n\
   V3               = ( 55, 79.75 )\n\
   V4               = ( 57.5, 71.5 )\n\
   V5               = ( 64, 73.25 )\n\
   V6               = ( 72.75, 76.25 )\n\
   ..\n\
"0-ST3 Stair 3 pg mr" = POLYGON\n\
   V1               = ( 37.25, 182.75 )\n\
   V2               = ( 28.5, 179.75 )\n\
   V3               = ( 22, 177.25 )\n\
   V4               = ( 24.814, 168.717 )\n\
   V5               = ( 40.25, 174.5 )\n\
   ..\n\
"0-ST3 Stair 3 slab pg mr" = POLYGON\n\
   V1               = ( 37.25, 182.75 )\n\
   V2               = ( 28.5, 179.75 )\n\
   V3               = ( 22, 177.25 )\n\
   V4               = ( 24.814, 168.717 )\n\
   V5               = ( 40.25, 174.5 )\n\
   ..\n\
"020 Elev Lobby pg mr" = POLYGON\n\
   V1               = ( 40.25, 174.5 )\n\
   V2               = ( 24.814, 168.717 )\n\
   V3               = ( 27.3652, 160.981 )\n\
   V4               = ( 37.25, 164.25 )\n\
   V5               = ( 38.25, 160.75 )\n\
   V6               = ( 44.25, 162.5 )\n\
   ..\n\
"020 Elev Lobby slab pg mr" = POLYGON\n\
   V1               = ( 40.25, 174.5 )\n\
   V2               = ( 24.814, 168.717 )\n\
   V3               = ( 27.3652, 160.981 )\n\
   V4               = ( 37.25, 164.25 )\n\
   V5               = ( 38.25, 160.75 )\n\
   V6               = ( 44.25, 162.5 )\n\
   ..\n\
"021 Pottery pg mr" = POLYGON\n\
   V1               = ( 63.75, 191.25 )\n\
   V2               = ( 56.75, 189 )\n\
   V3               = ( 50, 187 )\n\
   V4               = ( 42.75, 184.25 )\n\
   V5               = ( 45.25, 176.25 )\n\
   V6               = ( 40.25, 174.5 )\n\
   V7               = ( 44.25, 162.5 )\n\
   V8               = ( 56.6629, 166.479 )\n\
   V9               = ( 66.5, 169.75 )\n\
   V10              = ( 70.5, 171 )\n\
   ..\n\
"021 Pottery slab pg mr" = POLYGON\n\
   V1               = ( 63.75, 191.25 )\n\
   V2               = ( 56.75, 189 )\n\
   V3               = ( 50, 187 )\n\
   V4               = ( 42.75, 184.25 )\n\
   V5               = ( 45.25, 176.25 )\n\
   V6               = ( 40.25, 174.5 )\n\
   V7               = ( 44.25, 162.5 )\n\
   V8               = ( 56.6629, 166.479 )\n\
   V9               = ( 66.5, 169.75 )\n\
   V10              = ( 70.5, 171 )\n\
   ..\n\
"021A Storage pg mr" = POLYGON\n\
   V1               = ( 42.75, 184.25 )\n\
   V2               = ( 37.25, 182.75 )\n\
   V3               = ( 40.25, 174.5 )\n\
   V4               = ( 45.25, 176.25 )\n\
   ..\n\
"021A Storage slab pg mr" = POLYGON\n\
   V1               = ( 42.75, 184.25 )\n\
   V2               = ( 37.25, 182.75 )\n\
   V3               = ( 40.25, 174.5 )\n\
   V4               = ( 45.25, 176.25 )\n\
   ..\n\
"022 Equip pg mr" = POLYGON\n\
   V1               = ( 66.5, 169.75 )\n\
   V2               = ( 56.6629, 166.479 )\n\
   V3               = ( 60, 156.5 )\n\
   V4               = ( 69.7029, 160.104 )\n\
   ..\n\
"022 Equip slab pg mr" = POLYGON\n\
   V1               = ( 66.5, 169.75 )\n\
   V2               = ( 56.6629, 166.479 )\n\
   V3               = ( 60, 156.5 )\n\
   V4               = ( 69.7029, 160.104 )\n\
   ..\n\
"023A Corridor pg mr" = POLYGON\n\
   V1               = ( 66, 96.75 )\n\
   V2               = ( 78.75, 100.75 )\n\
   V3               = ( 72.75, 118.25 )\n\
   V4               = ( 66.25, 138 )\n\
   V5               = ( 64, 144.25 )\n\
   V6               = ( 60, 156.5 )\n\
   V7               = ( 56.6629, 166.479 )\n\
   V8               = ( 44.25, 162.5 )\n\
   V9               = ( 38.25, 160.75 )\n\
   V10              = ( 39.5, 157.5 )\n\
   V11              = ( 40, 156 )\n\
   V12              = ( 53.75, 160.5 )\n\
   V13              = ( 72, 105.5 )\n\
   V14              = ( 59.25, 101.25 )\n\
   V15              = ( 65, 83.75 )\n\
   V16              = ( 70, 85.25 )\n\
   ..\n\
"023A Corridor slab pg mr" = POLYGON\n\
   V1               = ( 66, 96.75 )\n\
   V2               = ( 78.75, 100.75 )\n\
   V3               = ( 72.75, 118.25 )\n\
   V4               = ( 66.25, 138 )\n\
   V5               = ( 64, 144.25 )\n\
   V6               = ( 60, 156.5 )\n\
   V7               = ( 56.6629, 166.479 )\n\
   V8               = ( 44.25, 162.5 )\n\
   V9               = ( 38.25, 160.75 )\n\
   V10              = ( 39.5, 157.5 )\n\
   V11              = ( 40, 156 )\n\
   V12              = ( 53.75, 160.5 )\n\
   V13              = ( 72, 105.5 )\n\
   V14              = ( 59.25, 101.25 )\n\
   V15              = ( 65, 83.75 )\n\
   V16              = ( 70, 85.25 )\n\
   ..\n\
"024 Laundry 2 pg mr" = POLYGON\n\
   V1               = ( 69.7029, 160.104 )\n\
   V2               = ( 60, 156.5 )\n\
   V3               = ( 64, 144.25 )\n\
   V4               = ( 73.772, 147.851 )\n\
   ..\n\
"024 Laundry 2 slab pg mr" = POLYGON\n\
   V1               = ( 69.7029, 160.104 )\n\
   V2               = ( 60, 156.5 )\n\
   V3               = ( 64, 144.25 )\n\
   V4               = ( 73.772, 147.851 )\n\
   ..\n\
"025 Piping pg mr" = POLYGON\n\
   V1               = ( 73.772, 147.851 )\n\
   V2               = ( 64, 144.25 )\n\
   V3               = ( 66.25, 138 )\n\
   V4               = ( 75.964, 141.249 )\n\
   ..\n\
"025 Piping slab pg mr" = POLYGON\n\
   V1               = ( 73.772, 147.851 )\n\
   V2               = ( 64, 144.25 )\n\
   V3               = ( 66.25, 138 )\n\
   V4               = ( 75.964, 141.249 )\n\
   ..\n\
"026 Laundry pg mr" = POLYGON\n\
   V1               = ( 75.964, 141.249 )\n\
   V2               = ( 66.25, 138 )\n\
   V3               = ( 72.75, 118.25 )\n\
   V4               = ( 82.3929, 121.889 )\n\
   ..\n\
"026 Laundry slab pg mr" = POLYGON\n\
   V1               = ( 75.964, 141.249 )\n\
   V2               = ( 66.25, 138 )\n\
   V3               = ( 72.75, 118.25 )\n\
   V4               = ( 82.3929, 121.889 )\n\
   ..\n\
"028 IT pg mr" = POLYGON\n\
   V1               = ( 82.3929, 121.889 )\n\
   V2               = ( 72.75, 118.25 )\n\
   V3               = ( 78.75, 100.75 )\n\
   V4               = ( 88.25, 104.25 )\n\
   ..\n\
"028 IT slab pg mr" = POLYGON\n\
   V1               = ( 82.3929, 121.889 )\n\
   V2               = ( 72.75, 118.25 )\n\
   V3               = ( 78.75, 100.75 )\n\
   V4               = ( 88.25, 104.25 )\n\
   ..\n\
"029 Pottery pg mr" = POLYGON\n\
   V1               = ( 92, 105.25 )\n\
   V2               = ( 88.25, 104.25 )\n\
   V3               = ( 78.75, 100.75 )\n\
   V4               = ( 66, 96.75 )\n\
   V5               = ( 70, 85.25 )\n\
   V6               = ( 72.75, 76.25 )\n\
   V7               = ( 79.25, 78.25 )\n\
   V8               = ( 91.25, 82 )\n\
   V9               = ( 91.75, 82.25 )\n\
   V10              = ( 99, 85 )\n\
   ..\n\
"029 Pottery slab pg mr" = POLYGON\n\
   V1               = ( 92, 105.25 )\n\
   V2               = ( 88.25, 104.25 )\n\
   V3               = ( 78.75, 100.75 )\n\
   V4               = ( 66, 96.75 )\n\
   V5               = ( 70, 85.25 )\n\
   V6               = ( 72.75, 76.25 )\n\
   V7               = ( 79.25, 78.25 )\n\
   V8               = ( 91.25, 82 )\n\
   V9               = ( 91.75, 82.25 )\n\
   V10              = ( 99, 85 )\n\
   ..\n\
"034 Storage pg mr" = POLYGON\n\
   V1               = ( 34.25, 255.5 )\n\
   V2               = ( 27.3796, 253.393 )\n\
   V3               = ( 29.5, 247.25 )\n\
   V4               = ( 50, 187 )\n\
   V5               = ( 56.75, 189 )\n\
   ..\n\
"034 Storage slab pg mr" = POLYGON\n\
   V1               = ( 34.25, 255.5 )\n\
   V2               = ( 27.3796, 253.393 )\n\
   V3               = ( 29.5, 247.25 )\n\
   V4               = ( 50, 187 )\n\
   V5               = ( 56.75, 189 )\n\
   ..\n\
"Level 1 pg mr" = POLYGON\n\
   V1               = ( 91.75, 82.25 )\n\
   V2               = ( 99, 85 )\n\
   V3               = ( 92, 105.25 )\n\
   V4               = ( 88.25, 104.25 )\n\
   V5               = ( 66.5, 169.75 )\n\
   V6               = ( 70.5, 171 )\n\
   V7               = ( 63.75, 191.25 )\n\
   V8               = ( 56.75, 189 )\n\
   V9               = ( 34.25, 255.5 )\n\
   V10              = ( 16.25, 249.25 )\n\
   V11              = ( 15.5, 251 )\n\
   V12              = ( 3, 246.5 )\n\
   V13              = ( 5.5, 239 )\n\
   V14              = ( 8.5, 240 )\n\
   V15              = ( 28.5, 179.75 )\n\
   V16              = ( 22, 177.25 )\n\
   V17              = ( 29.75, 153.75 )\n\
   V18              = ( 39.5, 157.5 )\n\
   V19              = ( 58.75, 101.5 )\n\
   V20              = ( 48.25, 98 )\n\
   V21              = ( 57.5, 71.5 )\n\
   V22              = ( 64, 73.25 )\n\
   V23              = ( 84.25, 13.5 )\n\
   V24              = ( 81.5, 12 )\n\
   V25              = ( 83.75, 4.5 )\n\
   V26              = ( 96.5, 8.75 )\n\
   V27              = ( 96, 10.25 )\n\
   V28              = ( 114, 16.5 )\n\
   ..\n\
"1-21 Potter Upper pg mr" = POLYGON\n\
   V1               = ( 63.75, 191.25 )\n\
   V2               = ( 56.75, 189 )\n\
   V3               = ( 43, 184.75 )\n\
   V4               = ( 45.75, 175.5 )\n\
   V5               = ( 49.75, 164 )\n\
   V6               = ( 53, 165 )\n\
   V7               = ( 66.5, 169.75 )\n\
   V8               = ( 70.5, 171 )\n\
   ..\n\
"1-21 Potter Upper floor pg mr" = POLYGON\n\
   V1               = ( 63.75, 191.25 )\n\
   V2               = ( 56.75, 189 )\n\
   V3               = ( 43, 184.75 )\n\
   V4               = ( 45.75, 175.5 )\n\
   V5               = ( 49.75, 164 )\n\
   V6               = ( 53, 165 )\n\
   V7               = ( 66.5, 169.75 )\n\
   V8               = ( 70.5, 171 )\n\
   ..\n\
"1-29 Pottery Upper pg mr" = POLYGON\n\
   V1               = ( 92, 105.25 )\n\
   V2               = ( 88.25, 104.25 )\n\
   V3               = ( 75, 99.75 )\n\
   V4               = ( 71.75, 98.25 )\n\
   V5               = ( 75.5, 87.25 )\n\
   V6               = ( 78.25, 78 )\n\
   V7               = ( 91.75, 82.25 )\n\
   V8               = ( 99, 85 )\n\
   ..\n\
"1-29 Pottery Upper floor pg mr" = POLYGON\n\
   V1               = ( 92, 105.25 )\n\
   V2               = ( 88.25, 104.25 )\n\
   V3               = ( 75, 99.75 )\n\
   V4               = ( 71.75, 98.25 )\n\
   V5               = ( 75.5, 87.25 )\n\
   V6               = ( 78.25, 78 )\n\
   V7               = ( 91.75, 82.25 )\n\
   V8               = ( 99, 85 )\n\
   ..\n\
"1-EL Elev pg mr" = POLYGON\n\
   V1               = ( 37.75, 164.25 )\n\
   V2               = ( 27.4258, 160.797 )\n\
   V3               = ( 29.75, 153.75 )\n\
   V4               = ( 39.5, 157.5 )\n\
   ..\n\
"1-EL Elev floor pg mr" = POLYGON\n\
   V1               = ( 37.75, 164.25 )\n\
   V2               = ( 27.4258, 160.797 )\n\
   V3               = ( 29.75, 153.75 )\n\
   V4               = ( 39.5, 157.5 )\n\
   ..\n\
"1-ST1 Stair 1 pg mr" = POLYGON\n\
   V1               = ( 96, 10.25 )\n\
   V2               = ( 94.75, 16.5 )\n\
   V3               = ( 84.25, 13.5 )\n\
   V4               = ( 81.5, 12 )\n\
   V5               = ( 83.75, 4.5 )\n\
   V6               = ( 96.5, 8.75 )\n\
   ..\n\
"1-ST1 Stair 1 slab pg mr" = POLYGON\n\
   V1               = ( 96, 10.25 )\n\
   V2               = ( 94.75, 16.5 )\n\
   V3               = ( 84.25, 13.5 )\n\
   V4               = ( 81.5, 12 )\n\
   V5               = ( 83.75, 4.5 )\n\
   V6               = ( 96.5, 8.75 )\n\
   ..\n\
"1-ST2 Stair 2 pg mr" = POLYGON\n\
   V1               = ( 75.5, 87.25 )\n\
   V2               = ( 54.5967, 79.8177 )\n\
   V3               = ( 57.5, 71.5 )\n\
   V4               = ( 64, 73.25 )\n\
   V5               = ( 78.25, 78 )\n\
   ..\n\
"1-ST2 Stair 2 floor pg mr" = POLYGON\n\
   V1               = ( 75.5, 87.25 )\n\
   V2               = ( 54.5967, 79.8177 )\n\
   V3               = ( 57.5, 71.5 )\n\
   V4               = ( 64, 73.25 )\n\
   V5               = ( 78.25, 78 )\n\
   ..\n\
"1-ST3 Stair 3 pg mr" = POLYGON\n\
   V1               = ( 43, 184.75 )\n\
   V2               = ( 28.5, 179.75 )\n\
   V3               = ( 22, 177.25 )\n\
   V4               = ( 24.8025, 168.752 )\n\
   V5               = ( 35.25, 172 )\n\
   V6               = ( 45.75, 175.5 )\n\
   ..\n\
"1-ST3 Stair 3 floor pg mr" = POLYGON\n\
   V1               = ( 43, 184.75 )\n\
   V2               = ( 28.5, 179.75 )\n\
   V3               = ( 22, 177.25 )\n\
   V4               = ( 24.8025, 168.752 )\n\
   V5               = ( 35.25, 172 )\n\
   V6               = ( 45.75, 175.5 )\n\
   ..\n\
"1-ST4 Stair 4 pg mr" = POLYGON\n\
   V1               = ( 16.25, 249.25 )\n\
   V2               = ( 15.5, 251 )\n\
   V3               = ( 3, 246.5 )\n\
   V4               = ( 5.5, 239 )\n\
   V5               = ( 8.5, 240 )\n\
   V6               = ( 18.5, 243.5 )\n\
   ..\n\
"1-ST4 Stair 4 slab pg mr" = POLYGON\n\
   V1               = ( 16.25, 249.25 )\n\
   V2               = ( 15.5, 251 )\n\
   V3               = ( 3, 246.5 )\n\
   V4               = ( 5.5, 239 )\n\
   V5               = ( 8.5, 240 )\n\
   V6               = ( 18.5, 243.5 )\n\
   ..\n\
"101 Lounge pg mr" = POLYGON\n\
   V1               = ( 71.75, 98.25 )\n\
   V2               = ( 68.5, 104.25 )\n\
   V3               = ( 58.75, 101.5 )\n\
   V4               = ( 48.25, 98 )\n\
   V5               = ( 54.5967, 79.8177 )\n\
   V6               = ( 75.5, 87.25 )\n\
   ..\n\
"101 Lounge floor pg mr" = POLYGON\n\
   V1               = ( 71.75, 98.25 )\n\
   V2               = ( 68.5, 104.25 )\n\
   V3               = ( 58.75, 101.5 )\n\
   V4               = ( 48.25, 98 )\n\
   V5               = ( 54.5967, 79.8177 )\n\
   V6               = ( 75.5, 87.25 )\n\
   ..\n\
"102 Room pg mr" = POLYGON\n\
   V1               = ( 91.75, 82.25 )\n\
   V2               = ( 78.25, 78 )\n\
   V3               = ( 82.75, 66 )\n\
   V4               = ( 95.6687, 70.6699 )\n\
   ..\n\
"102 Room slab pg mr" = POLYGON\n\
   V1               = ( 91.75, 82.25 )\n\
   V2               = ( 78.25, 78 )\n\
   V3               = ( 82.75, 66 )\n\
   V4               = ( 95.6687, 70.6699 )\n\
   ..\n\
"104 Room pg mr" = POLYGON\n\
   V1               = ( 95.6687, 70.6699 )\n\
   V2               = ( 82.75, 66 )\n\
   V3               = ( 86, 56 )\n\
   V4               = ( 99.0154, 60.7805 )\n\
   ..\n\
"104 Room slab pg mr" = POLYGON\n\
   V1               = ( 95.6687, 70.6699 )\n\
   V2               = ( 82.75, 66 )\n\
   V3               = ( 86, 56 )\n\
   V4               = ( 99.0154, 60.7805 )\n\
   ..\n\
"105 Room pg mr" = POLYGON\n\
   V1               = ( 76, 71.5 )\n\
   V2               = ( 65.7293, 68.1475 )\n\
   V3               = ( 69.4357, 57.2113 )\n\
   V4               = ( 79.75, 60.25 )\n\
   ..\n\
"105 Room slab pg mr" = POLYGON\n\
   V1               = ( 76, 71.5 )\n\
   V2               = ( 65.7293, 68.1475 )\n\
   V3               = ( 69.4357, 57.2113 )\n\
   V4               = ( 79.75, 60.25 )\n\
   ..\n\
"106 Room pg mr" = POLYGON\n\
   V1               = ( 99.0154, 60.7805 )\n\
   V2               = ( 86, 56 )\n\
   V3               = ( 89.25, 45.75 )\n\
   V4               = ( 102.51, 50.4542 )\n\
   ..\n\
"106 Room slab pg mr" = POLYGON\n\
   V1               = ( 99.0154, 60.7805 )\n\
   V2               = ( 86, 56 )\n\
   V3               = ( 89.25, 45.75 )\n\
   V4               = ( 102.51, 50.4542 )\n\
   ..\n\
"107 Room pg mr" = POLYGON\n\
   V1               = ( 79.75, 60.25 )\n\
   V2               = ( 69.4357, 57.2113 )\n\
   V3               = ( 73.3431, 45.682 )\n\
   V4               = ( 83.5, 49 )\n\
   ..\n\
"107 Room slab pg mr" = POLYGON\n\
   V1               = ( 79.75, 60.25 )\n\
   V2               = ( 69.4357, 57.2113 )\n\
   V3               = ( 73.3431, 45.682 )\n\
   V4               = ( 83.5, 49 )\n\
   ..\n\
"108 Bathroom pg mr" = POLYGON\n\
   V1               = ( 102.51, 50.4542 )\n\
   V2               = ( 89.25, 45.75 )\n\
   V3               = ( 93, 35 )\n\
   V4               = ( 106.279, 39.3169 )\n\
   ..\n\
"108 Bathroom slab pg mr" = POLYGON\n\
   V1               = ( 102.51, 50.4542 )\n\
   V2               = ( 89.25, 45.75 )\n\
   V3               = ( 93, 35 )\n\
   V4               = ( 106.279, 39.3169 )\n\
   ..\n\
"109 Room pg mr" = POLYGON\n\
   V1               = ( 83.5, 49 )\n\
   V2               = ( 73.3431, 45.682 )\n\
   V3               = ( 78.8446, 29.4494 )\n\
   V4               = ( 88.75, 33 )\n\
   ..\n\
"109 Room slab pg mr" = POLYGON\n\
   V1               = ( 83.5, 49 )\n\
   V2               = ( 73.3431, 45.682 )\n\
   V3               = ( 78.8446, 29.4494 )\n\
   V4               = ( 88.75, 33 )\n\
   ..\n\
"110 Room pg mr" = POLYGON\n\
   V1               = ( 106.279, 39.3169 )\n\
   V2               = ( 93, 35 )\n\
   V3               = ( 97, 23.25 )\n\
   V4               = ( 110.238, 27.6182 )\n\
   ..\n\
"110 Room slab pg mr" = POLYGON\n\
   V1               = ( 106.279, 39.3169 )\n\
   V2               = ( 93, 35 )\n\
   V3               = ( 97, 23.25 )\n\
   V4               = ( 110.238, 27.6182 )\n\
   ..\n\
"111 Room pg mr" = POLYGON\n\
   V1               = ( 88.75, 33 )\n\
   V2               = ( 78.8446, 29.4494 )\n\
   V3               = ( 84.25, 13.5 )\n\
   V4               = ( 94.75, 16.5 )\n\
   ..\n\
"111 Room slab pg mr" = POLYGON\n\
   V1               = ( 88.75, 33 )\n\
   V2               = ( 78.8446, 29.4494 )\n\
   V3               = ( 84.25, 13.5 )\n\
   V4               = ( 94.75, 16.5 )\n\
   ..\n\
"112 Room pg mr" = POLYGON\n\
   V1               = ( 110.238, 27.6182 )\n\
   V2               = ( 97, 23.25 )\n\
   V3               = ( 100.748, 11.8987 )\n\
   V4               = ( 114, 16.5 )\n\
   ..\n\
"112 Room slab pg mr" = POLYGON\n\
   V1               = ( 110.238, 27.6182 )\n\
   V2               = ( 97, 23.25 )\n\
   V3               = ( 100.748, 11.8987 )\n\
   V4               = ( 114, 16.5 )\n\
   ..\n\
"113 Corridor pg mr" = POLYGON\n\
   V1               = ( 97, 23.25 )\n\
   V2               = ( 93, 35 )\n\
   V3               = ( 89.25, 45.75 )\n\
   V4               = ( 86, 56 )\n\
   V5               = ( 83.5, 49 )\n\
   V6               = ( 88.75, 33 )\n\
   V7               = ( 94.75, 16.5 )\n\
   V8               = ( 96, 10.25 )\n\
   V9               = ( 100.748, 11.8987 )\n\
   ..\n\
"113 Corridor slab pg mr" = POLYGON\n\
   V1               = ( 97, 23.25 )\n\
   V2               = ( 93, 35 )\n\
   V3               = ( 89.25, 45.75 )\n\
   V4               = ( 86, 56 )\n\
   V5               = ( 83.5, 49 )\n\
   V6               = ( 88.75, 33 )\n\
   V7               = ( 94.75, 16.5 )\n\
   V8               = ( 96, 10.25 )\n\
   V9               = ( 100.748, 11.8987 )\n\
   ..\n\
"114 Corridor pg mr" = POLYGON\n\
   V1               = ( 82.75, 66 )\n\
   V2               = ( 78.25, 78 )\n\
   V3               = ( 64, 73.25 )\n\
   V4               = ( 65.7293, 68.1475 )\n\
   V5               = ( 76, 71.5 )\n\
   V6               = ( 79.75, 60.25 )\n\
   V7               = ( 83.5, 49 )\n\
   V8               = ( 86, 56 )\n\
   ..\n\
"114 Corridor slab pg mr" = POLYGON\n\
   V1               = ( 82.75, 66 )\n\
   V2               = ( 78.25, 78 )\n\
   V3               = ( 64, 73.25 )\n\
   V4               = ( 65.7293, 68.1475 )\n\
   V5               = ( 76, 71.5 )\n\
   V6               = ( 79.75, 60.25 )\n\
   V7               = ( 83.5, 49 )\n\
   V8               = ( 86, 56 )\n\
   ..\n\
"121 Corridor pg mr" = POLYGON\n\
   V1               = ( 39.9769, 156.113 )\n\
   V2               = ( 50.25, 159.5 )\n\
   V3               = ( 49.75, 164 )\n\
   V4               = ( 45.75, 175.5 )\n\
   V5               = ( 35.25, 172 )\n\
   V6               = ( 37.75, 164.25 )\n\
   V7               = ( 39.5, 157.5 )\n\
   ..\n\
"121 Corridor floor pg mr" = POLYGON\n\
   V1               = ( 39.9769, 156.113 )\n\
   V2               = ( 50.25, 159.5 )\n\
   V3               = ( 49.75, 164 )\n\
   V4               = ( 45.75, 175.5 )\n\
   V5               = ( 35.25, 172 )\n\
   V6               = ( 37.75, 164.25 )\n\
   V7               = ( 39.5, 157.5 )\n\
   ..\n\
"121A Elev Lobby pg mr" = POLYGON\n\
   V1               = ( 35.25, 172 )\n\
   V2               = ( 24.8025, 168.752 )\n\
   V3               = ( 27.4258, 160.797 )\n\
   V4               = ( 37.75, 164.25 )\n\
   ..\n\
"121A Elev Lobby floor pg mr" = POLYGON\n\
   V1               = ( 35.25, 172 )\n\
   V2               = ( 24.8025, 168.752 )\n\
   V3               = ( 27.4258, 160.797 )\n\
   V4               = ( 37.75, 164.25 )\n\
   ..\n\
"122 Room pg mr" = POLYGON\n\
   V1               = ( 66.5, 169.75 )\n\
   V2               = ( 53, 165 )\n\
   V3               = ( 56.75, 154 )\n\
   V4               = ( 70.2062, 158.589 )\n\
   ..\n\
"122 Room floor pg mr" = POLYGON\n\
   V1               = ( 66.5, 169.75 )\n\
   V2               = ( 53, 165 )\n\
   V3               = ( 56.75, 154 )\n\
   V4               = ( 70.2062, 158.589 )\n\
   ..\n\
"124 Room pg mr" = POLYGON\n\
   V1               = ( 70.2062, 158.589 )\n\
   V2               = ( 56.75, 154 )\n\
   V3               = ( 60, 144 )\n\
   V4               = ( 73.4703, 148.759 )\n\
   ..\n\
"124 Room floor pg mr" = POLYGON\n\
   V1               = ( 70.2062, 158.589 )\n\
   V2               = ( 56.75, 154 )\n\
   V3               = ( 60, 144 )\n\
   V4               = ( 73.4703, 148.759 )\n\
   ..\n\
"125 Corridor pg mr" = POLYGON\n\
   V1               = ( 70, 114.75 )\n\
   V2               = ( 67, 122.75 )\n\
   V3               = ( 63.5, 133.75 )\n\
   V4               = ( 60, 144 )\n\
   V5               = ( 56.75, 154 )\n\
   V6               = ( 53, 165 )\n\
   V7               = ( 49.75, 164 )\n\
   V8               = ( 50.25, 159.5 )\n\
   V9               = ( 53.75, 148.75 )\n\
   V10              = ( 57.75, 137 )\n\
   V11              = ( 63, 120.5 )\n\
   V12              = ( 68.5, 104.25 )\n\
   V13              = ( 71.75, 98.25 )\n\
   V14              = ( 75, 99.75 )\n\
   ..\n\
"125 Corridor slab pg mr" = POLYGON\n\
   V1               = ( 53.75, 160.5 )\n\
   V2               = ( 50.2928, 159.368 )\n\
   V3               = ( 53.75, 148.75 )\n\
   V4               = ( 57.75, 137 )\n\
   V5               = ( 63, 120.5 )\n\
   V6               = ( 68.4747, 104.325 )\n\
   V7               = ( 72, 105.5 )\n\
   ..\n\
"125 Corridor floor pg mr" = POLYGON\n\
   V1               = ( 70, 114.75 )\n\
   V2               = ( 67, 122.75 )\n\
   V3               = ( 63.5, 133.75 )\n\
   V4               = ( 60, 144 )\n\
   V5               = ( 56.75, 154 )\n\
   V6               = ( 53, 165 )\n\
   V7               = ( 49.75, 164 )\n\
   V8               = ( 50.25, 159.5 )\n\
   V9               = ( 50.2928, 159.368 )\n\
   V10              = ( 53.75, 160.5 )\n\
   V11              = ( 72, 105.5 )\n\
   V12              = ( 68.4747, 104.325 )\n\
   V13              = ( 68.5, 104.25 )\n\
   V14              = ( 71.75, 98.25 )\n\
   V15              = ( 75, 99.75 )\n\
   ..\n\
"125 Room pg mr" = POLYGON\n\
   V1               = ( 39.9769, 156.113 )\n\
   V2               = ( 43.7617, 145.102 )\n\
   V3               = ( 53.75, 148.75 )\n\
   V4               = ( 50.25, 159.5 )\n\
   ..\n\
"125 Room slab pg mr" = POLYGON\n\
   V1               = ( 39.9769, 156.113 )\n\
   V2               = ( 43.7617, 145.102 )\n\
   V3               = ( 53.75, 148.75 )\n\
   V4               = ( 50.25, 159.5 )\n\
   ..\n\
"126 Room pg mr" = POLYGON\n\
   V1               = ( 73.4703, 148.759 )\n\
   V2               = ( 60, 144 )\n\
   V3               = ( 63.5, 133.75 )\n\
   V4               = ( 76.8528, 138.573 )\n\
   ..\n\
"126 Room floor pg mr" = POLYGON\n\
   V1               = ( 73.4703, 148.759 )\n\
   V2               = ( 60, 144 )\n\
   V3               = ( 63.5, 133.75 )\n\
   V4               = ( 76.8528, 138.573 )\n\
   ..\n\
"127 Room pg mr" = POLYGON\n\
   V1               = ( 53.75, 148.75 )\n\
   V2               = ( 43.7617, 145.102 )\n\
   V3               = ( 47.7374, 133.537 )\n\
   V4               = ( 57.75, 137 )\n\
   ..\n\
"127 Room slab pg mr" = POLYGON\n\
   V1               = ( 57.75, 137 )\n\
   V2               = ( 53.75, 148.75 )\n\
   V3               = ( 43.7617, 145.102 )\n\
   V4               = ( 47.7374, 133.537 )\n\
   ..\n\
"128 Bathroom pg mr" = POLYGON\n\
   V1               = ( 76.8528, 138.573 )\n\
   V2               = ( 63.5, 133.75 )\n\
   V3               = ( 67, 122.75 )\n\
   V4               = ( 80.5911, 127.315 )\n\
   ..\n\
"128 Bathroom floor pg mr" = POLYGON\n\
   V1               = ( 76.8528, 138.573 )\n\
   V2               = ( 63.5, 133.75 )\n\
   V3               = ( 67, 122.75 )\n\
   V4               = ( 80.5911, 127.315 )\n\
   ..\n\
"129 Room pg mr" = POLYGON\n\
   V1               = ( 57.75, 137 )\n\
   V2               = ( 47.7374, 133.537 )\n\
   V3               = ( 53.2781, 117.418 )\n\
   V4               = ( 63, 120.5 )\n\
   ..\n\
"129 Room slab pg mr" = POLYGON\n\
   V1               = ( 63, 120.5 )\n\
   V2               = ( 57.75, 137 )\n\
   V3               = ( 47.7374, 133.537 )\n\
   V4               = ( 53.2781, 117.418 )\n\
   ..\n\
"130 Bathroom pg mr" = POLYGON\n\
   V1               = ( 80.5911, 127.315 )\n\
   V2               = ( 67, 122.75 )\n\
   V3               = ( 70, 114.75 )\n\
   V4               = ( 83.3336, 119.056 )\n\
   ..\n\
"130 Bathroom floor pg mr" = POLYGON\n\
   V1               = ( 80.5911, 127.315 )\n\
   V2               = ( 67, 122.75 )\n\
   V3               = ( 70, 114.75 )\n\
   V4               = ( 83.3336, 119.056 )\n\
   ..\n\
"131 Room pg mr" = POLYGON\n\
   V1               = ( 63, 120.5 )\n\
   V2               = ( 53.2781, 117.418 )\n\
   V3               = ( 58.75, 101.5 )\n\
   V4               = ( 68.5, 104.25 )\n\
   ..\n\
"131 Room slab pg mr" = POLYGON\n\
   V1               = ( 63, 120.5 )\n\
   V2               = ( 53.2781, 117.418 )\n\
   V3               = ( 58.75, 101.5 )\n\
   V4               = ( 66.875, 103.792 )\n\
   V5               = ( 68.4747, 104.325 )\n\
   ..\n\
"131 Room floor pg mr" = POLYGON\n\
   V1               = ( 68.4747, 104.325 )\n\
   V2               = ( 66.8751, 103.792 )\n\
   V3               = ( 68.5, 104.25 )\n\
   ..\n\
"132 Room pg mr" = POLYGON\n\
   V1               = ( 83.3336, 119.056 )\n\
   V2               = ( 70, 114.75 )\n\
   V3               = ( 75, 99.75 )\n\
   V4               = ( 88.25, 104.25 )\n\
   ..\n\
"132 Room floor pg mr" = POLYGON\n\
   V1               = ( 83.3336, 119.056 )\n\
   V2               = ( 70, 114.75 )\n\
   V3               = ( 75, 99.75 )\n\
   V4               = ( 88.25, 104.25 )\n\
   ..\n\
"142 Room pg mr" = POLYGON\n\
   V1               = ( 52.5379, 201.449 )\n\
   V2               = ( 39, 197 )\n\
   V3               = ( 43, 184.75 )\n\
   V4               = ( 56.75, 189 )\n\
   ..\n\
"142 Room floor pg mr" = POLYGON\n\
   V1               = ( 52.5379, 201.449 )\n\
   V2               = ( 39, 197 )\n\
   V3               = ( 43, 184.75 )\n\
   V4               = ( 56.75, 189 )\n\
   ..\n\
"143 Room pg mr" = POLYGON\n\
   V1               = ( 33.25, 199.5 )\n\
   V2               = ( 23.0847, 196.064 )\n\
   V3               = ( 26.841, 184.748 )\n\
   V4               = ( 37, 188.5 )\n\
   ..\n\
"143 Room slab pg mr" = POLYGON\n\
   V1               = ( 33.25, 199.5 )\n\
   V2               = ( 23.0847, 196.064 )\n\
   V3               = ( 26.841, 184.748 )\n\
   V4               = ( 37, 188.5 )\n\
   ..\n\
"144 Room pg mr" = POLYGON\n\
   V1               = ( 49.2085, 211.289 )\n\
   V2               = ( 35.5, 206.75 )\n\
   V3               = ( 39, 197 )\n\
   V4               = ( 52.5379, 201.449 )\n\
   ..\n\
"144 Room floor pg mr" = POLYGON\n\
   V1               = ( 49.2085, 211.289 )\n\
   V2               = ( 35.5, 206.75 )\n\
   V3               = ( 39, 197 )\n\
   V4               = ( 52.5379, 201.449 )\n\
   ..\n\
"145 Room pg mr" = POLYGON\n\
   V1               = ( 29.25, 211.25 )\n\
   V2               = ( 19.3283, 207.38 )\n\
   V3               = ( 23.0847, 196.064 )\n\
   V4               = ( 33.25, 199.5 )\n\
   ..\n\
"145 Room slab pg mr" = POLYGON\n\
   V1               = ( 29.25, 211.25 )\n\
   V2               = ( 19.3283, 207.38 )\n\
   V3               = ( 23.0847, 196.064 )\n\
   V4               = ( 33.25, 199.5 )\n\
   ..\n\
"146 Room pg mr" = POLYGON\n\
   V1               = ( 46.007, 220.752 )\n\
   V2               = ( 32.5, 216.25 )\n\
   V3               = ( 35.5, 206.75 )\n\
   V4               = ( 49.2085, 211.289 )\n\
   ..\n\
"146 Room floor pg mr" = POLYGON\n\
   V1               = ( 46.007, 220.752 )\n\
   V2               = ( 32.5, 216.25 )\n\
   V3               = ( 35.5, 206.75 )\n\
   V4               = ( 49.2085, 211.289 )\n\
   ..\n\
"147 Room pg mr" = POLYGON\n\
   V1               = ( 24, 227 )\n\
   V2               = ( 13.8849, 223.778 )\n\
   V3               = ( 19.3283, 207.38 )\n\
   V4               = ( 29.25, 211.25 )\n\
   ..\n\
"147 Room slab pg mr" = POLYGON\n\
   V1               = ( 24, 227 )\n\
   V2               = ( 13.8849, 223.778 )\n\
   V3               = ( 19.3283, 207.38 )\n\
   V4               = ( 29.25, 211.25 )\n\
   ..\n\
"148 Bathroom pg mr" = POLYGON\n\
   V1               = ( 41.952, 232.736 )\n\
   V2               = ( 28.5, 228 )\n\
   V3               = ( 32.5, 216.25 )\n\
   V4               = ( 46.007, 220.752 )\n\
   ..\n\
"148 Bathroom floor pg mr" = POLYGON\n\
   V1               = ( 41.952, 232.736 )\n\
   V2               = ( 28.5, 228 )\n\
   V3               = ( 32.5, 216.25 )\n\
   V4               = ( 46.007, 220.752 )\n\
   ..\n\
"149 Room pg mr" = POLYGON\n\
   V1               = ( 18.5, 243.5 )\n\
   V2               = ( 8.5, 240 )\n\
   V3               = ( 13.8849, 223.778 )\n\
   V4               = ( 24, 227 )\n\
   ..\n\
"149 Room slab pg mr" = POLYGON\n\
   V1               = ( 18.5, 243.5 )\n\
   V2               = ( 8.5, 240 )\n\
   V3               = ( 13.8849, 223.778 )\n\
   V4               = ( 24, 227 )\n\
   ..\n\
"150 Room pg mr" = POLYGON\n\
   V1               = ( 38.1126, 244.084 )\n\
   V2               = ( 24.75, 239.75 )\n\
   V3               = ( 28.5, 228 )\n\
   V4               = ( 41.952, 232.736 )\n\
   ..\n\
"150 Room floor pg mr" = POLYGON\n\
   V1               = ( 38.1126, 244.084 )\n\
   V2               = ( 24.75, 239.75 )\n\
   V3               = ( 28.5, 228 )\n\
   V4               = ( 41.952, 232.736 )\n\
   ..\n\
"152 Room pg mr" = POLYGON\n\
   V1               = ( 34.25, 255.5 )\n\
   V2               = ( 20.7334, 250.807 )\n\
   V3               = ( 24.75, 239.75 )\n\
   V4               = ( 38.1126, 244.084 )\n\
   ..\n\
"152 Room floor pg mr" = POLYGON\n\
   V1               = ( 34.25, 255.5 )\n\
   V2               = ( 20.7334, 250.807 )\n\
   V3               = ( 24.75, 239.75 )\n\
   V4               = ( 38.1126, 244.084 )\n\
   ..\n\
"153 Corridor pg mr" = POLYGON\n\
   V1               = ( 39, 197 )\n\
   V2               = ( 35.5, 206.75 )\n\
   V3               = ( 32.5, 216.25 )\n\
   V4               = ( 28.5, 228 )\n\
   V5               = ( 24.75, 239.75 )\n\
   V6               = ( 20.7334, 250.807 )\n\
   V7               = ( 16.25, 249.25 )\n\
   V8               = ( 18.5, 243.5 )\n\
   V9               = ( 24, 227 )\n\
   V10              = ( 29.25, 211.25 )\n\
   V11              = ( 33.25, 199.5 )\n\
   V12              = ( 37, 188.5 )\n\
   V13              = ( 26.841, 184.748 )\n\
   V14              = ( 28.5, 179.75 )\n\
   V15              = ( 43, 184.75 )\n\
   ..\n\
"153 Corridor slab pg mr" = POLYGON\n\
   V1               = ( 39, 197 )\n\
   V2               = ( 35.5, 206.75 )\n\
   V3               = ( 32.5, 216.25 )\n\
   V4               = ( 28.5, 228 )\n\
   V5               = ( 24.75, 239.75 )\n\
   V6               = ( 20.7334, 250.807 )\n\
   V7               = ( 16.25, 249.25 )\n\
   V8               = ( 18.5, 243.5 )\n\
   V9               = ( 24, 227 )\n\
   V10              = ( 29.25, 211.25 )\n\
   V11              = ( 33.25, 199.5 )\n\
   V12              = ( 37, 188.5 )\n\
   V13              = ( 26.841, 184.748 )\n\
   V14              = ( 28.5, 179.75 )\n\
   V15              = ( 43, 184.75 )\n\
   ..\n\
"Level 2 pg mr" = POLYGON\n\
   V1               = ( 92, 105.25 )\n\
   V2               = ( 88.25, 104.25 )\n\
   V3               = ( 66.5, 169.75 )\n\
   V4               = ( 70.5, 171 )\n\
   V5               = ( 63.75, 191.25 )\n\
   V6               = ( 56.75, 189 )\n\
   V7               = ( 34.25, 255.5 )\n\
   V8               = ( 16.25, 249.25 )\n\
   V9               = ( 15.5, 251 )\n\
   V10              = ( 3, 246.5 )\n\
   V11              = ( 5.5, 239 )\n\
   V12              = ( 8.5, 240 )\n\
   V13              = ( 28.5, 179.75 )\n\
   V14              = ( 22, 177.25 )\n\
   V15              = ( 29.75, 153.75 )\n\
   V16              = ( 39.5, 157.5 )\n\
   V17              = ( 58.75, 101.5 )\n\
   V18              = ( 48.25, 98 )\n\
   V19              = ( 57.5, 71.5 )\n\
   V20              = ( 64, 73.25 )\n\
   V21              = ( 84.25, 13.5 )\n\
   V22              = ( 81.5, 12 )\n\
   V23              = ( 83.75, 4.5 )\n\
   V24              = ( 96.5, 8.75 )\n\
   V25              = ( 96, 10.25 )\n\
   V26              = ( 114, 16.5 )\n\
   V27              = ( 91.75, 82.25 )\n\
   V28              = ( 99, 85 )\n\
   ..\n\
"2-EL1 Elev pg mr" = POLYGON\n\
   V1               = ( 37.5, 164.5 )\n\
   V2               = ( 27.4048, 160.861 )\n\
   V3               = ( 29.75, 153.75 )\n\
   V4               = ( 39.5, 157.5 )\n\
   ..\n\
"2-EL1 Elev floor pg mr" = POLYGON\n\
   V1               = ( 37.5, 164.5 )\n\
   V2               = ( 27.4048, 160.861 )\n\
   V3               = ( 29.75, 153.75 )\n\
   V4               = ( 39.5, 157.5 )\n\
   ..\n\
"2-ST1 Stair 1 pg mr" = POLYGON\n\
   V1               = ( 96, 10.25 )\n\
   V2               = ( 94.25, 16.25 )\n\
   V3               = ( 84.25, 13.5 )\n\
   V4               = ( 81.5, 12 )\n\
   V5               = ( 83.75, 4.5 )\n\
   V6               = ( 96.5, 8.75 )\n\
   ..\n\
"2-ST1 Stair 1 floor pg mr" = POLYGON\n\
   V1               = ( 96, 10.25 )\n\
   V2               = ( 94.25, 16.25 )\n\
   V3               = ( 84.25, 13.5 )\n\
   V4               = ( 81.5, 12 )\n\
   V5               = ( 83.75, 4.5 )\n\
   V6               = ( 96.5, 8.75 )\n\
   ..\n\
"2-ST2 Stair 2 pg mr" = POLYGON\n\
   V1               = ( 69.75, 84.25 )\n\
   V2               = ( 62, 82.75 )\n\
   V3               = ( 54.5958, 79.8201 )\n\
   V4               = ( 57.5, 71.5 )\n\
   V5               = ( 64, 73.25 )\n\
   V6               = ( 72.5, 76.25 )\n\
   ..\n\
"2-ST2 Stair 2 floor pg mr" = POLYGON\n\
   V1               = ( 69.75, 84.25 )\n\
   V2               = ( 62, 82.75 )\n\
   V3               = ( 54.5958, 79.8201 )\n\
   V4               = ( 57.5, 71.5 )\n\
   V5               = ( 64, 73.25 )\n\
   V6               = ( 72.5, 76.25 )\n\
   ..\n\
"2-ST3 Stair 3 pg mr" = POLYGON\n\
   V1               = ( 37, 182.75 )\n\
   V2               = ( 28.5, 179.75 )\n\
   V3               = ( 22, 177.25 )\n\
   V4               = ( 24.8334, 168.658 )\n\
   V5               = ( 40.25, 173.75 )\n\
   ..\n\
"2-ST3 Stair 3 floor pg mr" = POLYGON\n\
   V1               = ( 37, 182.75 )\n\
   V2               = ( 28.5, 179.75 )\n\
   V3               = ( 22, 177.25 )\n\
   V4               = ( 24.8334, 168.658 )\n\
   V5               = ( 40.25, 173.75 )\n\
   ..\n\
"2-ST4 Stair 4 pg mr" = POLYGON\n\
   V1               = ( 16.25, 249.25 )\n\
   V2               = ( 15.5, 251 )\n\
   V3               = ( 3, 246.5 )\n\
   V4               = ( 5.5, 239 )\n\
   V5               = ( 8.5, 240 )\n\
   V6               = ( 18.25, 243.75 )\n\
   ..\n\
"2-ST4 Stair 4 floor pg mr" = POLYGON\n\
   V1               = ( 16.25, 249.25 )\n\
   V2               = ( 15.5, 251 )\n\
   V3               = ( 3, 246.5 )\n\
   V4               = ( 5.5, 239 )\n\
   V5               = ( 8.5, 240 )\n\
   V6               = ( 18.25, 243.75 )\n\
   ..\n\
"200 CRE pg mr" = POLYGON\n\
   V1               = ( 92, 105.25 )\n\
   V2               = ( 88.25, 104.25 )\n\
   V3               = ( 74.75, 99.75 )\n\
   V4               = ( 66, 96.75 )\n\
   V5               = ( 69.75, 84.25 )\n\
   V6               = ( 75.5, 86.25 )\n\
   V7               = ( 78.25, 77.75 )\n\
   V8               = ( 91.75, 82.25 )\n\
   V9               = ( 99, 85 )\n\
   ..\n\
"200 CRE floor pg mr" = POLYGON\n\
   V1               = ( 92, 105.25 )\n\
   V2               = ( 88.25, 104.25 )\n\
   V3               = ( 74.75, 99.75 )\n\
   V4               = ( 66, 96.75 )\n\
   V5               = ( 69.75, 84.25 )\n\
   V6               = ( 75.5, 86.25 )\n\
   V7               = ( 78.25, 77.75 )\n\
   V8               = ( 91.75, 82.25 )\n\
   V9               = ( 99, 85 )\n\
   ..\n\
"200B Storage pg mr" = POLYGON\n\
   V1               = ( 75.5, 86.25 )\n\
   V2               = ( 69.75, 84.25 )\n\
   V3               = ( 72.5, 76.25 )\n\
   V4               = ( 78.25, 77.75 )\n\
   ..\n\
"200B Storage floor pg mr" = POLYGON\n\
   V1               = ( 75.5, 86.25 )\n\
   V2               = ( 69.75, 84.25 )\n\
   V3               = ( 72.5, 76.25 )\n\
   V4               = ( 78.25, 77.75 )\n\
   ..\n\
"201 Corridor pg mr" = POLYGON\n\
   V1               = ( 66, 96.75 )\n\
   V2               = ( 74.75, 99.75 )\n\
   V3               = ( 68.25, 104.25 )\n\
   V4               = ( 61.25, 102 )\n\
   V5               = ( 63.5, 95.75 )\n\
   V6               = ( 62, 82.75 )\n\
   V7               = ( 69.75, 84.25 )\n\
   ..\n\
"201 Corridor floor pg mr" = POLYGON\n\
   V1               = ( 66, 96.75 )\n\
   V2               = ( 74.75, 99.75 )\n\
   V3               = ( 68.25, 104.25 )\n\
   V4               = ( 61.25, 102 )\n\
   V5               = ( 63.5, 95.75 )\n\
   V6               = ( 62, 82.75 )\n\
   V7               = ( 69.75, 84.25 )\n\
   ..\n\
"201A Lounge pg mr" = POLYGON\n\
   V1               = ( 63.5, 95.75 )\n\
   V2               = ( 61.25, 102 )\n\
   V3               = ( 58.75, 101.5 )\n\
   V4               = ( 48.25, 98 )\n\
   V5               = ( 54.5958, 79.8201 )\n\
   V6               = ( 62, 82.75 )\n\
   ..\n\
"201A Lounge floor pg mr" = POLYGON\n\
   V1               = ( 63.5, 95.75 )\n\
   V2               = ( 61.25, 102 )\n\
   V3               = ( 58.75, 101.5 )\n\
   V4               = ( 48.25, 98 )\n\
   V5               = ( 54.5958, 79.8201 )\n\
   V6               = ( 62, 82.75 )\n\
   ..\n\
"202 Room pg mr" = POLYGON\n\
   V1               = ( 91.75, 82.25 )\n\
   V2               = ( 78.25, 77.75 )\n\
   V3               = ( 82.5, 66 )\n\
   V4               = ( 95.6281, 70.7899 )\n\
   ..\n\
"202 Room floor pg mr" = POLYGON\n\
   V1               = ( 91.75, 82.25 )\n\
   V2               = ( 78.25, 77.75 )\n\
   V3               = ( 82.5, 66 )\n\
   V4               = ( 95.6281, 70.7899 )\n\
   ..\n\
"203 Room pg mr" = POLYGON\n\
   V1               = ( 75.75, 71.75 )\n\
   V2               = ( 65.7013, 68.2301 )\n\
   V3               = ( 69.435, 57.2134 )\n\
   V4               = ( 79.25, 60.75 )\n\
   ..\n\
"203 Room floor pg mr" = POLYGON\n\
   V1               = ( 75.75, 71.75 )\n\
   V2               = ( 65.7013, 68.2301 )\n\
   V3               = ( 69.435, 57.2134 )\n\
   V4               = ( 79.25, 60.75 )\n\
   ..\n\
"204 Room pg mr" = POLYGON\n\
   V1               = ( 95.6281, 70.7899 )\n\
   V2               = ( 82.5, 66 )\n\
   V3               = ( 85.75, 56.25 )\n\
   V4               = ( 99.0564, 60.6591 )\n\
   ..\n\
"204 Room floor pg mr" = POLYGON\n\
   V1               = ( 95.6281, 70.7899 )\n\
   V2               = ( 82.5, 66 )\n\
   V3               = ( 85.75, 56.25 )\n\
   V4               = ( 99.0564, 60.6591 )\n\
   ..\n\
"206 Room pg mr" = POLYGON\n\
   V1               = ( 99.0564, 60.6591 )\n\
   V2               = ( 85.75, 56.25 )\n\
   V3               = ( 89, 46 )\n\
   V4               = ( 102.443, 50.6529 )\n\
   ..\n\
"206 Room floor pg mr" = POLYGON\n\
   V1               = ( 99.0564, 60.6591 )\n\
   V2               = ( 85.75, 56.25 )\n\
   V3               = ( 89, 46 )\n\
   V4               = ( 102.443, 50.6529 )\n\
   ..\n\
"207 Room pg mr" = POLYGON\n\
   V1               = ( 79.25, 60.75 )\n\
   V2               = ( 69.435, 57.2134 )\n\
   V3               = ( 73.2999, 45.8097 )\n\
   V4               = ( 83.25, 49 )\n\
   ..\n\
"207 Room floor pg mr" = POLYGON\n\
   V1               = ( 79.25, 60.75 )\n\
   V2               = ( 69.435, 57.2134 )\n\
   V3               = ( 73.2999, 45.8097 )\n\
   V4               = ( 83.25, 49 )\n\
   ..\n\
"208 Bathroom pg mr" = POLYGON\n\
   V1               = ( 102.443, 50.6529 )\n\
   V2               = ( 89, 46 )\n\
   V3               = ( 93, 34.75 )\n\
   V4               = ( 106.243, 39.422 )\n\
   ..\n\
"208 Bathroom floor pg mr" = POLYGON\n\
   V1               = ( 102.443, 50.6529 )\n\
   V2               = ( 89, 46 )\n\
   V3               = ( 93, 34.75 )\n\
   V4               = ( 106.243, 39.422 )\n\
   ..\n\
"209 Room pg mr" = POLYGON\n\
   V1               = ( 83.25, 49 )\n\
   V2               = ( 73.2999, 45.8097 )\n\
   V3               = ( 78.759, 29.7017 )\n\
   V4               = ( 88.75, 32.75 )\n\
   ..\n\
"209 Room floor pg mr" = POLYGON\n\
   V1               = ( 83.25, 49 )\n\
   V2               = ( 73.2999, 45.8097 )\n\
   V3               = ( 78.759, 29.7017 )\n\
   V4               = ( 88.75, 32.75 )\n\
   ..\n\
"210 Room pg mr" = POLYGON\n\
   V1               = ( 106.243, 39.422 )\n\
   V2               = ( 93, 34.75 )\n\
   V3               = ( 96.75, 23.25 )\n\
   V4               = ( 110.17, 27.8175 )\n\
   ..\n\
"210 Room floor pg mr" = POLYGON\n\
   V1               = ( 106.243, 39.422 )\n\
   V2               = ( 93, 34.75 )\n\
   V3               = ( 96.75, 23.25 )\n\
   V4               = ( 110.17, 27.8175 )\n\
   ..\n\
"211 Room pg mr" = POLYGON\n\
   V1               = ( 88.75, 32.75 )\n\
   V2               = ( 78.759, 29.7017 )\n\
   V3               = ( 84.25, 13.5 )\n\
   V4               = ( 94.25, 16.25 )\n\
   ..\n\
"211 Room floor pg mr" = POLYGON\n\
   V1               = ( 88.75, 32.75 )\n\
   V2               = ( 78.759, 29.7017 )\n\
   V3               = ( 84.25, 13.5 )\n\
   V4               = ( 94.25, 16.25 )\n\
   ..\n\
"212 Room pg mr" = POLYGON\n\
   V1               = ( 110.17, 27.8175 )\n\
   V2               = ( 96.75, 23.25 )\n\
   V3               = ( 100.582, 11.841 )\n\
   V4               = ( 114, 16.5 )\n\
   ..\n\
"212 Room floor pg mr" = POLYGON\n\
   V1               = ( 110.17, 27.8175 )\n\
   V2               = ( 96.75, 23.25 )\n\
   V3               = ( 100.582, 11.841 )\n\
   V4               = ( 114, 16.5 )\n\
   ..\n\
"213 Corridor pg mr" = POLYGON\n\
   V1               = ( 96.75, 23.25 )\n\
   V2               = ( 93, 34.75 )\n\
   V3               = ( 89, 46 )\n\
   V4               = ( 85.75, 56.25 )\n\
   V5               = ( 83.25, 49 )\n\
   V6               = ( 88.75, 32.75 )\n\
   V7               = ( 94.25, 16.25 )\n\
   V8               = ( 96, 10.25 )\n\
   V9               = ( 100.582, 11.841 )\n\
   ..\n\
"213 Corridor floor pg mr" = POLYGON\n\
   V1               = ( 96.75, 23.25 )\n\
   V2               = ( 93, 34.75 )\n\
   V3               = ( 89, 46 )\n\
   V4               = ( 85.75, 56.25 )\n\
   V5               = ( 83.25, 49 )\n\
   V6               = ( 88.75, 32.75 )\n\
   V7               = ( 94.25, 16.25 )\n\
   V8               = ( 96, 10.25 )\n\
   V9               = ( 100.582, 11.841 )\n\
   ..\n\
"214 Corridor pg mr" = POLYGON\n\
   V1               = ( 82.5, 66 )\n\
   V2               = ( 78.25, 77.75 )\n\
   V3               = ( 72.5, 76.25 )\n\
   V4               = ( 64, 73.25 )\n\
   V5               = ( 65.7013, 68.2301 )\n\
   V6               = ( 75.75, 71.75 )\n\
   V7               = ( 79.25, 60.75 )\n\
   V8               = ( 83.25, 49 )\n\
   V9               = ( 85.75, 56.25 )\n\
   ..\n\
"214 Corridor floor pg mr" = POLYGON\n\
   V1               = ( 82.5, 66 )\n\
   V2               = ( 78.25, 77.75 )\n\
   V3               = ( 72.5, 76.25 )\n\
   V4               = ( 64, 73.25 )\n\
   V5               = ( 65.7013, 68.2301 )\n\
   V6               = ( 75.75, 71.75 )\n\
   V7               = ( 79.25, 60.75 )\n\
   V8               = ( 83.25, 49 )\n\
   V9               = ( 85.75, 56.25 )\n\
   ..\n\
"221 Corridor pg mr" = POLYGON\n\
   V1               = ( 49.5, 164 )\n\
   V2               = ( 45.5, 176 )\n\
   V3               = ( 40.25, 173.75 )\n\
   V4               = ( 24.8334, 168.658 )\n\
   V5               = ( 27.4048, 160.861 )\n\
   V6               = ( 37.5, 164.5 )\n\
   V7               = ( 39.5, 157.5 )\n\
   V8               = ( 40.1064, 155.736 )\n\
   V9               = ( 49.75, 159.5 )\n\
   ..\n\
"221 Corridor floor pg mr" = POLYGON\n\
   V1               = ( 49.5, 164 )\n\
   V2               = ( 45.5, 176 )\n\
   V3               = ( 40.25, 173.75 )\n\
   V4               = ( 24.8334, 168.658 )\n\
   V5               = ( 27.4048, 160.861 )\n\
   V6               = ( 37.5, 164.5 )\n\
   V7               = ( 39.5, 157.5 )\n\
   V8               = ( 40.1064, 155.736 )\n\
   V9               = ( 49.75, 159.5 )\n\
   ..\n\
"221A IT pg mr" = POLYGON\n\
   V1               = ( 42.5, 184.75 )\n\
   V2               = ( 37, 182.75 )\n\
   V3               = ( 40.25, 173.75 )\n\
   V4               = ( 45.5, 176 )\n\
   ..\n\
"221A IT floor pg mr" = POLYGON\n\
   V1               = ( 42.5, 184.75 )\n\
   V2               = ( 37, 182.75 )\n\
   V3               = ( 40.25, 173.75 )\n\
   V4               = ( 45.5, 176 )\n\
   ..\n\
"222 Room pg mr" = POLYGON\n\
   V1               = ( 66.5, 169.75 )\n\
   V2               = ( 52.75, 165.25 )\n\
   V3               = ( 56.75, 154 )\n\
   V4               = ( 70.2005, 158.606 )\n\
   ..\n\
"222 Room floor pg mr" = POLYGON\n\
   V1               = ( 66.5, 169.75 )\n\
   V2               = ( 52.75, 165.25 )\n\
   V3               = ( 56.75, 154 )\n\
   V4               = ( 70.2005, 158.606 )\n\
   ..\n\
"223 Room pg mr" = POLYGON\n\
   V1               = ( 49.75, 159.5 )\n\
   V2               = ( 40.1064, 155.736 )\n\
   V3               = ( 43.7673, 145.086 )\n\
   V4               = ( 53.5, 148.5 )\n\
   ..\n\
"223 Room floor pg mr" = POLYGON\n\
   V1               = ( 49.75, 159.5 )\n\
   V2               = ( 40.1064, 155.736 )\n\
   V3               = ( 43.7673, 145.086 )\n\
   V4               = ( 53.5, 148.5 )\n\
   ..\n\
"224 Room pg mr" = POLYGON\n\
   V1               = ( 70.2005, 158.606 )\n\
   V2               = ( 56.75, 154 )\n\
   V3               = ( 60, 144 )\n\
   V4               = ( 73.5188, 148.613 )\n\
   ..\n\
"224 Room floor pg mr" = POLYGON\n\
   V1               = ( 70.2005, 158.606 )\n\
   V2               = ( 56.75, 154 )\n\
   V3               = ( 60, 144 )\n\
   V4               = ( 73.5188, 148.613 )\n\
   ..\n\
"225 Corridor pg mr" = POLYGON\n\
   V1               = ( 71, 111.25 )\n\
   V2               = ( 67, 122.75 )\n\
   V3               = ( 63.25, 133.5 )\n\
   V4               = ( 60, 144 )\n\
   V5               = ( 56.75, 154 )\n\
   V6               = ( 52.75, 165.25 )\n\
   V7               = ( 49.5, 164 )\n\
   V8               = ( 49.75, 159.5 )\n\
   V9               = ( 53.5, 148.5 )\n\
   V10              = ( 57.25, 136.75 )\n\
   V11              = ( 62.75, 120.75 )\n\
   V12              = ( 68.25, 104.25 )\n\
   V13              = ( 74.75, 99.75 )\n\
   ..\n\
"225 Corridor floor pg mr" = POLYGON\n\
   V1               = ( 71, 111.25 )\n\
   V2               = ( 67, 122.75 )\n\
   V3               = ( 63.25, 133.5 )\n\
   V4               = ( 60, 144 )\n\
   V5               = ( 56.75, 154 )\n\
   V6               = ( 52.75, 165.25 )\n\
   V7               = ( 49.5, 164 )\n\
   V8               = ( 49.75, 159.5 )\n\
   V9               = ( 53.5, 148.5 )\n\
   V10              = ( 57.25, 136.75 )\n\
   V11              = ( 62.75, 120.75 )\n\
   V12              = ( 68.25, 104.25 )\n\
   V13              = ( 74.75, 99.75 )\n\
   ..\n\
"226 Room pg mr" = POLYGON\n\
   V1               = ( 73.5188, 148.613 )\n\
   V2               = ( 60, 144 )\n\
   V3               = ( 63.25, 133.5 )\n\
   V4               = ( 76.8646, 138.537 )\n\
   ..\n\
"226 Room floor pg mr" = POLYGON\n\
   V1               = ( 73.5188, 148.613 )\n\
   V2               = ( 60, 144 )\n\
   V3               = ( 63.25, 133.5 )\n\
   V4               = ( 76.8646, 138.537 )\n\
   ..\n\
"227 Room pg mr" = POLYGON\n\
   V1               = ( 53.5, 148.5 )\n\
   V2               = ( 43.7673, 145.086 )\n\
   V3               = ( 47.6883, 133.679 )\n\
   V4               = ( 57.25, 136.75 )\n\
   ..\n\
"227 Room floor pg mr" = POLYGON\n\
   V1               = ( 53.5, 148.5 )\n\
   V2               = ( 43.7673, 145.086 )\n\
   V3               = ( 47.6883, 133.679 )\n\
   V4               = ( 57.25, 136.75 )\n\
   ..\n\
"228 Bathroom pg mr" = POLYGON\n\
   V1               = ( 76.8646, 138.537 )\n\
   V2               = ( 63.25, 133.5 )\n\
   V3               = ( 67, 122.75 )\n\
   V4               = ( 80.5968, 127.297 )\n\
   ..\n\
"228 Bathroom floor pg mr" = POLYGON\n\
   V1               = ( 76.8646, 138.537 )\n\
   V2               = ( 63.25, 133.5 )\n\
   V3               = ( 67, 122.75 )\n\
   V4               = ( 80.5968, 127.297 )\n\
   ..\n\
"229 Room pg mr" = POLYGON\n\
   V1               = ( 57.25, 136.75 )\n\
   V2               = ( 47.6883, 133.679 )\n\
   V3               = ( 53.1816, 117.699 )\n\
   V4               = ( 62.75, 120.75 )\n\
   ..\n\
"229 Room floor pg mr" = POLYGON\n\
   V1               = ( 57.25, 136.75 )\n\
   V2               = ( 47.6883, 133.679 )\n\
   V3               = ( 53.1816, 117.699 )\n\
   V4               = ( 62.75, 120.75 )\n\
   ..\n\
"230 Room pg mr" = POLYGON\n\
   V1               = ( 80.5968, 127.297 )\n\
   V2               = ( 67, 122.75 )\n\
   V3               = ( 71, 111.25 )\n\
   V4               = ( 84.4877, 115.58 )\n\
   ..\n\
"230 Room floor pg mr" = POLYGON\n\
   V1               = ( 80.5968, 127.297 )\n\
   V2               = ( 67, 122.75 )\n\
   V3               = ( 71, 111.25 )\n\
   V4               = ( 84.4877, 115.58 )\n\
   ..\n\
"231 Room pg mr" = POLYGON\n\
   V1               = ( 62.75, 120.75 )\n\
   V2               = ( 53.1816, 117.699 )\n\
   V3               = ( 58.75, 101.5 )\n\
   V4               = ( 61.25, 102 )\n\
   V5               = ( 68.25, 104.25 )\n\
   ..\n\
"231 Room floor pg mr" = POLYGON\n\
   V1               = ( 62.75, 120.75 )\n\
   V2               = ( 53.1816, 117.699 )\n\
   V3               = ( 58.75, 101.5 )\n\
   V4               = ( 61.25, 102 )\n\
   V5               = ( 68.25, 104.25 )\n\
   ..\n\
"232 Room pg mr" = POLYGON\n\
   V1               = ( 84.4877, 115.58 )\n\
   V2               = ( 71, 111.25 )\n\
   V3               = ( 74.75, 99.75 )\n\
   V4               = ( 88.25, 104.25 )\n\
   ..\n\
"232 Room floor pg mr" = POLYGON\n\
   V1               = ( 84.4877, 115.58 )\n\
   V2               = ( 71, 111.25 )\n\
   V3               = ( 74.75, 99.75 )\n\
   V4               = ( 88.25, 104.25 )\n\
   ..\n\
"240 Room pg mr" = POLYGON\n\
   V1               = ( 63.75, 191.25 )\n\
   V2               = ( 56.75, 189 )\n\
   V3               = ( 42.5, 184.75 )\n\
   V4               = ( 45.5, 176 )\n\
   V5               = ( 49.5, 164 )\n\
   V6               = ( 52.75, 165.25 )\n\
   V7               = ( 66.5, 169.75 )\n\
   V8               = ( 70.5, 171 )\n\
   ..\n\
"240 Room floor pg mr" = POLYGON\n\
   V1               = ( 63.75, 191.25 )\n\
   V2               = ( 56.75, 189 )\n\
   V3               = ( 42.5, 184.75 )\n\
   V4               = ( 45.5, 176 )\n\
   V5               = ( 49.5, 164 )\n\
   V6               = ( 52.75, 165.25 )\n\
   V7               = ( 66.5, 169.75 )\n\
   V8               = ( 70.5, 171 )\n\
   ..\n\
"242 Room pg mr" = POLYGON\n\
   V1               = ( 52.4866, 201.601 )\n\
   V2               = ( 38.75, 197 )\n\
   V3               = ( 42.5, 184.75 )\n\
   V4               = ( 56.75, 189 )\n\
   ..\n\
"242 Room floor pg mr" = POLYGON\n\
   V1               = ( 52.4866, 201.601 )\n\
   V2               = ( 38.75, 197 )\n\
   V3               = ( 42.5, 184.75 )\n\
   V4               = ( 56.75, 189 )\n\
   ..\n\
"243 Room pg mr" = POLYGON\n\
   V1               = ( 33, 199.5 )\n\
   V2               = ( 23.0979, 196.024 )\n\
   V3               = ( 26.7738, 184.95 )\n\
   V4               = ( 36.75, 188.5 )\n\
   ..\n\
"243 Room floor pg mr" = POLYGON\n\
   V1               = ( 33, 199.5 )\n\
   V2               = ( 23.0979, 196.024 )\n\
   V3               = ( 26.7738, 184.95 )\n\
   V4               = ( 36.75, 188.5 )\n\
   ..\n\
"244 Room pg mr" = POLYGON\n\
   V1               = ( 49.0813, 211.665 )\n\
   V2               = ( 35.25, 207 )\n\
   V3               = ( 38.75, 197 )\n\
   V4               = ( 52.4866, 201.601 )\n\
   ..\n\
"244 Room floor pg mr" = POLYGON\n\
   V1               = ( 49.0813, 211.665 )\n\
   V2               = ( 35.25, 207 )\n\
   V3               = ( 38.75, 197 )\n\
   V4               = ( 52.4866, 201.601 )\n\
   ..\n\
"245 Room pg mr" = POLYGON\n\
   V1               = ( 29.25, 211 )\n\
   V2               = ( 19.222, 207.7 )\n\
   V3               = ( 23.0979, 196.024 )\n\
   V4               = ( 33, 199.5 )\n\
   ..\n\
"245 Room floor pg mr" = POLYGON\n\
   V1               = ( 29.25, 211 )\n\
   V2               = ( 19.222, 207.7 )\n\
   V3               = ( 23.0979, 196.024 )\n\
   V4               = ( 33, 199.5 )\n\
   ..\n\
"246 Room pg mr" = POLYGON\n\
   V1               = ( 45.774, 221.44 )\n\
   V2               = ( 32, 217 )\n\
   V3               = ( 35.25, 207 )\n\
   V4               = ( 49.0813, 211.665 )\n\
   ..\n\
"246 Room floor pg mr" = POLYGON\n\
   V1               = ( 45.774, 221.44 )\n\
   V2               = ( 32, 217 )\n\
   V3               = ( 35.25, 207 )\n\
   V4               = ( 49.0813, 211.665 )\n\
   ..\n\
"247 Room pg mr" = POLYGON\n\
   V1               = ( 23.75, 227.25 )\n\
   V2               = ( 13.8703, 223.822 )\n\
   V3               = ( 19.222, 207.7 )\n\
   V4               = ( 29.25, 211 )\n\
   ..\n\
"247 Room floor pg mr" = POLYGON\n\
   V1               = ( 23.75, 227.25 )\n\
   V2               = ( 13.8703, 223.822 )\n\
   V3               = ( 19.222, 207.7 )\n\
   V4               = ( 29.25, 211 )\n\
   ..\n\
"248 Bathroom pg mr" = POLYGON\n\
   V1               = ( 41.9489, 232.745 )\n\
   V2               = ( 28.5, 228.25 )\n\
   V3               = ( 32, 217 )\n\
   V4               = ( 45.774, 221.44 )\n\
   ..\n\
"248 Bathroom floor pg mr" = POLYGON\n\
   V1               = ( 41.9489, 232.745 )\n\
   V2               = ( 28.5, 228.25 )\n\
   V3               = ( 32, 217 )\n\
   V4               = ( 45.774, 221.44 )\n\
   ..\n\
"249 Room pg mr" = POLYGON\n\
   V1               = ( 18.25, 243.75 )\n\
   V2               = ( 8.5, 240 )\n\
   V3               = ( 13.8703, 223.822 )\n\
   V4               = ( 23.75, 227.25 )\n\
   ..\n\
"249 Room floor pg mr" = POLYGON\n\
   V1               = ( 18.25, 243.75 )\n\
   V2               = ( 8.5, 240 )\n\
   V3               = ( 13.8703, 223.822 )\n\
   V4               = ( 23.75, 227.25 )\n\
   ..\n\
"250 Room pg mr" = POLYGON\n\
   V1               = ( 38.0332, 244.318 )\n\
   V2               = ( 24.5, 239.5 )\n\
   V3               = ( 28.5, 228.25 )\n\
   V4               = ( 41.9489, 232.745 )\n\
   ..\n\
"250 Room floor pg mr" = POLYGON\n\
   V1               = ( 38.0332, 244.318 )\n\
   V2               = ( 24.5, 239.5 )\n\
   V3               = ( 28.5, 228.25 )\n\
   V4               = ( 41.9489, 232.745 )\n\
   ..\n\
"251 Corridor pg mr" = POLYGON\n\
   V1               = ( 28.5, 228.25 )\n\
   V2               = ( 24.5, 239.5 )\n\
   V3               = ( 20.6958, 250.794 )\n\
   V4               = ( 16.25, 249.25 )\n\
   V5               = ( 18.25, 243.75 )\n\
   V6               = ( 23.75, 227.25 )\n\
   V7               = ( 29.25, 211 )\n\
   V8               = ( 32, 217 )\n\
   ..\n\
"251 Corridor floor pg mr" = POLYGON\n\
   V1               = ( 28.5, 228.25 )\n\
   V2               = ( 24.5, 239.5 )\n\
   V3               = ( 20.6958, 250.794 )\n\
   V4               = ( 16.25, 249.25 )\n\
   V5               = ( 18.25, 243.75 )\n\
   V6               = ( 23.75, 227.25 )\n\
   V7               = ( 29.25, 211 )\n\
   V8               = ( 32, 217 )\n\
   ..\n\
"252 Room pg mr" = POLYGON\n\
   V1               = ( 34.25, 255.5 )\n\
   V2               = ( 20.6958, 250.794 )\n\
   V3               = ( 24.5, 239.5 )\n\
   V4               = ( 38.0332, 244.318 )\n\
   ..\n\
"252 Room floor pg mr" = POLYGON\n\
   V1               = ( 34.25, 255.5 )\n\
   V2               = ( 20.6958, 250.794 )\n\
   V3               = ( 24.5, 239.5 )\n\
   V4               = ( 38.0332, 244.318 )\n\
   ..\n\
"253 Corridor pg mr" = POLYGON\n\
   V1               = ( 38.75, 197 )\n\
   V2               = ( 35.25, 207 )\n\
   V3               = ( 32, 217 )\n\
   V4               = ( 29.25, 211 )\n\
   V5               = ( 33, 199.5 )\n\
   V6               = ( 36.75, 188.5 )\n\
   V7               = ( 26.7738, 184.95 )\n\
   V8               = ( 28.5, 179.75 )\n\
   V9               = ( 37, 182.75 )\n\
   V10              = ( 42.5, 184.75 )\n\
   ..\n\
"253 Corridor floor pg mr" = POLYGON\n\
   V1               = ( 38.75, 197 )\n\
   V2               = ( 35.25, 207 )\n\
   V3               = ( 32, 217 )\n\
   V4               = ( 29.25, 211 )\n\
   V5               = ( 33, 199.5 )\n\
   V6               = ( 36.75, 188.5 )\n\
   V7               = ( 26.7738, 184.95 )\n\
   V8               = ( 28.5, 179.75 )\n\
   V9               = ( 37, 182.75 )\n\
   V10              = ( 42.5, 184.75 )\n\
   ..\n\
"Level 3 pg mr" = POLYGON\n\
   V1               = ( 92, 105.25 )\n\
   V2               = ( 88.25, 104.25 )\n\
   V3               = ( 66.5, 169.75 )\n\
   V4               = ( 70.5, 171 )\n\
   V5               = ( 63.75, 191.25 )\n\
   V6               = ( 56.75, 189 )\n\
   V7               = ( 34.25, 255.5 )\n\
   V8               = ( 16.25, 249.25 )\n\
   V9               = ( 15.5, 251 )\n\
   V10              = ( 3, 246.5 )\n\
   V11              = ( 5.5, 239 )\n\
   V12              = ( 8.5, 240 )\n\
   V13              = ( 28.5, 179.75 )\n\
   V14              = ( 22, 177.25 )\n\
   V15              = ( 29.75, 153.75 )\n\
   V16              = ( 39.5, 157.5 )\n\
   V17              = ( 58.75, 101.5 )\n\
   V18              = ( 48.25, 98 )\n\
   V19              = ( 57.5, 71.5 )\n\
   V20              = ( 64, 73.25 )\n\
   V21              = ( 84.25, 13.5 )\n\
   V22              = ( 81.5, 12 )\n\
   V23              = ( 83.75, 4.5 )\n\
   V24              = ( 96.5, 8.75 )\n\
   V25              = ( 96, 10.25 )\n\
   V26              = ( 114, 16.5 )\n\
   V27              = ( 91.75, 82.25 )\n\
   V28              = ( 99, 85 )\n\
   ..\n\
"3-EL Elev pg mr" = POLYGON\n\
   V1               = ( 37.75, 164.25 )\n\
   V2               = ( 27.4073, 160.854 )\n\
   V3               = ( 29.75, 153.75 )\n\
   V4               = ( 39.5, 157.5 )\n\
   ..\n\
"3-EL Elev floor pg mr" = POLYGON\n\
   V1               = ( 37.75, 164.25 )\n\
   V2               = ( 27.4073, 160.854 )\n\
   V3               = ( 29.75, 153.75 )\n\
   V4               = ( 39.5, 157.5 )\n\
   ..\n\
"3-ST1 Stair 1 pg mr" = POLYGON\n\
   V1               = ( 96, 10.25 )\n\
   V2               = ( 94.25, 16 )\n\
   V3               = ( 84.25, 13.5 )\n\
   V4               = ( 81.5, 12 )\n\
   V5               = ( 83.75, 4.5 )\n\
   V6               = ( 96.5, 8.75 )\n\
   ..\n\
"3-ST1 Stair 1 floor pg mr" = POLYGON\n\
   V1               = ( 96, 10.25 )\n\
   V2               = ( 94.25, 16 )\n\
   V3               = ( 84.25, 13.5 )\n\
   V4               = ( 81.5, 12 )\n\
   V5               = ( 83.75, 4.5 )\n\
   V6               = ( 96.5, 8.75 )\n\
   ..\n\
"3-ST2 Stair 2 pg mr" = POLYGON\n\
   V1               = ( 69.5, 85.25 )\n\
   V2               = ( 54.5661, 79.9052 )\n\
   V3               = ( 57.5, 71.5 )\n\
   V4               = ( 64, 73.25 )\n\
   V5               = ( 72.5, 76 )\n\
   ..\n\
"3-ST2 Stair 2 floor pg mr" = POLYGON\n\
   V1               = ( 69.5, 85.25 )\n\
   V2               = ( 54.5661, 79.9052 )\n\
   V3               = ( 57.5, 71.5 )\n\
   V4               = ( 64, 73.25 )\n\
   V5               = ( 72.5, 76 )\n\
   ..\n\
"3-ST3 Stair 3 pg mr" = POLYGON\n\
   V1               = ( 37, 182.75 )\n\
   V2               = ( 28.5, 179.75 )\n\
   V3               = ( 22, 177.25 )\n\
   V4               = ( 24.7954, 168.774 )\n\
   V5               = ( 35, 172.25 )\n\
   V6               = ( 40, 174 )\n\
   ..\n\
"3-ST3 Stair 3 floor pg mr" = POLYGON\n\
   V1               = ( 37, 182.75 )\n\
   V2               = ( 28.5, 179.75 )\n\
   V3               = ( 22, 177.25 )\n\
   V4               = ( 24.7954, 168.774 )\n\
   V5               = ( 35, 172.25 )\n\
   V6               = ( 40, 174 )\n\
   ..\n\
"3-ST4 Stair 4 pg mr" = POLYGON\n\
   V1               = ( 16.25, 249.25 )\n\
   V2               = ( 15.5, 251 )\n\
   V3               = ( 3, 246.5 )\n\
   V4               = ( 5.5, 239 )\n\
   V5               = ( 8.5, 240 )\n\
   V6               = ( 18, 243.75 )\n\
   ..\n\
"3-ST4 Stair 4 floor pg mr" = POLYGON\n\
   V1               = ( 16.25, 249.25 )\n\
   V2               = ( 15.5, 251 )\n\
   V3               = ( 3, 246.5 )\n\
   V4               = ( 5.5, 239 )\n\
   V5               = ( 8.5, 240 )\n\
   V6               = ( 18, 243.75 )\n\
   ..\n\
"300A CRE pg mr" = POLYGON\n\
   V1               = ( 82, 88.25 )\n\
   V2               = ( 84.5, 89.25 )\n\
   V3               = ( 83.75, 92 )\n\
   V4               = ( 76.5, 89.75 )\n\
   V5               = ( 73.25, 99.25 )\n\
   V6               = ( 67.25, 97.25 )\n\
   V7               = ( 71.25, 86 )\n\
   V8               = ( 69.5, 85.25 )\n\
   V9               = ( 72.5, 76 )\n\
   V10              = ( 78.25, 78.25 )\n\
   V11              = ( 84.75, 80.25 )\n\
   ..\n\
"300A CRE floor pg mr" = POLYGON\n\
   V1               = ( 82, 88.25 )\n\
   V2               = ( 84.5, 89.25 )\n\
   V3               = ( 83.75, 92 )\n\
   V4               = ( 76.5, 89.75 )\n\
   V5               = ( 73.25, 99.25 )\n\
   V6               = ( 67.25, 97.25 )\n\
   V7               = ( 71.25, 86 )\n\
   V8               = ( 69.5, 85.25 )\n\
   V9               = ( 72.5, 76 )\n\
   V10              = ( 78.25, 78.25 )\n\
   V11              = ( 84.75, 80.25 )\n\
   ..\n\
"300B CRE pg mr" = POLYGON\n\
   V1               = ( 95.2443, 95.8647 )\n\
   V2               = ( 83.75, 92 )\n\
   V3               = ( 84.5, 89.25 )\n\
   V4               = ( 82, 88.25 )\n\
   V5               = ( 84.75, 80.25 )\n\
   V6               = ( 91.75, 82.25 )\n\
   V7               = ( 99, 85 )\n\
   ..\n\
"300B CRE floor pg mr" = POLYGON\n\
   V1               = ( 95.2443, 95.8647 )\n\
   V2               = ( 83.75, 92 )\n\
   V3               = ( 84.5, 89.25 )\n\
   V4               = ( 82, 88.25 )\n\
   V5               = ( 84.75, 80.25 )\n\
   V6               = ( 91.75, 82.25 )\n\
   V7               = ( 99, 85 )\n\
   ..\n\
"300C CRE pg mr" = POLYGON\n\
   V1               = ( 92, 105.25 )\n\
   V2               = ( 88.25, 104.25 )\n\
   V3               = ( 74.75, 99.75 )\n\
   V4               = ( 73.25, 99.25 )\n\
   V5               = ( 76.5, 89.75 )\n\
   V6               = ( 83.75, 92 )\n\
   V7               = ( 95.2443, 95.8647 )\n\
   ..\n\
"300C CRE floor pg mr" = POLYGON\n\
   V1               = ( 92, 105.25 )\n\
   V2               = ( 88.25, 104.25 )\n\
   V3               = ( 74.75, 99.75 )\n\
   V4               = ( 73.25, 99.25 )\n\
   V5               = ( 76.5, 89.75 )\n\
   V6               = ( 83.75, 92 )\n\
   V7               = ( 95.2443, 95.8647 )\n\
   ..\n\
"301 Lounge pg mr" = POLYGON\n\
   V1               = ( 67.25, 97.25 )\n\
   V2               = ( 73.25, 99.25 )\n\
   V3               = ( 68, 104.25 )\n\
   V4               = ( 58.75, 101.5 )\n\
   V5               = ( 48.25, 98 )\n\
   V6               = ( 54.5661, 79.9052 )\n\
   V7               = ( 69.5, 85.25 )\n\
   V8               = ( 71.25, 86 )\n\
   ..\n\
"301 Lounge floor pg mr" = POLYGON\n\
   V1               = ( 67.25, 97.25 )\n\
   V2               = ( 73.25, 99.25 )\n\
   V3               = ( 68, 104.25 )\n\
   V4               = ( 58.75, 101.5 )\n\
   V5               = ( 48.25, 98 )\n\
   V6               = ( 54.5661, 79.9052 )\n\
   V7               = ( 69.5, 85.25 )\n\
   V8               = ( 71.25, 86 )\n\
   ..\n\
"302 Room pg mr" = POLYGON\n\
   V1               = ( 91.75, 82.25 )\n\
   V2               = ( 84.75, 80.25 )\n\
   V3               = ( 78.25, 78.25 )\n\
   V4               = ( 82.5, 66 )\n\
   V5               = ( 95.7045, 70.5642 )\n\
   ..\n\
"302 Room floor pg mr" = POLYGON\n\
   V1               = ( 91.75, 82.25 )\n\
   V2               = ( 84.75, 80.25 )\n\
   V3               = ( 78.25, 78.25 )\n\
   V4               = ( 82.5, 66 )\n\
   V5               = ( 95.7045, 70.5642 )\n\
   ..\n\
"303 Room pg mr" = POLYGON\n\
   V1               = ( 75.75, 71.5 )\n\
   V2               = ( 65.8241, 67.8677 )\n\
   V3               = ( 69.5051, 57.0064 )\n\
   V4               = ( 79.5, 60.5 )\n\
   ..\n\
"303 Room floor pg mr" = POLYGON\n\
   V1               = ( 75.75, 71.5 )\n\
   V2               = ( 65.8241, 67.8677 )\n\
   V3               = ( 69.5051, 57.0064 )\n\
   V4               = ( 79.5, 60.5 )\n\
   ..\n\
"304 Room pg mr" = POLYGON\n\
   V1               = ( 95.7045, 70.5642 )\n\
   V2               = ( 82.5, 66 )\n\
   V3               = ( 85.75, 56.25 )\n\
   V4               = ( 98.9665, 60.9248 )\n\
   ..\n\
"304 Room floor pg mr" = POLYGON\n\
   V1               = ( 95.7045, 70.5642 )\n\
   V2               = ( 82.5, 66 )\n\
   V3               = ( 85.75, 56.25 )\n\
   V4               = ( 98.9665, 60.9248 )\n\
   ..\n\
"306 Room pg mr" = POLYGON\n\
   V1               = ( 98.9665, 60.9248 )\n\
   V2               = ( 85.75, 56.25 )\n\
   V3               = ( 89, 46 )\n\
   V4               = ( 102.428, 50.6964 )\n\
   ..\n\
"306 Room floor pg mr" = POLYGON\n\
   V1               = ( 98.9665, 60.9248 )\n\
   V2               = ( 85.75, 56.25 )\n\
   V3               = ( 89, 46 )\n\
   V4               = ( 102.428, 50.6964 )\n\
   ..\n\
"307 Room pg mr" = POLYGON\n\
   V1               = ( 79.5, 60.5 )\n\
   V2               = ( 69.5051, 57.0064 )\n\
   V3               = ( 73.3469, 45.6709 )\n\
   V4               = ( 83, 48.75 )\n\
   ..\n\
"307 Room floor pg mr" = POLYGON\n\
   V1               = ( 79.5, 60.5 )\n\
   V2               = ( 69.5051, 57.0064 )\n\
   V3               = ( 73.3469, 45.6709 )\n\
   V4               = ( 83, 48.75 )\n\
   ..\n\
"308 Bathroom pg mr" = POLYGON\n\
   V1               = ( 102.428, 50.6964 )\n\
   V2               = ( 89, 46 )\n\
   V3               = ( 92.75, 34.75 )\n\
   V4               = ( 106.307, 39.232 )\n\
   ..\n\
"308 Bathroom floor pg mr" = POLYGON\n\
   V1               = ( 102.428, 50.6964 )\n\
   V2               = ( 89, 46 )\n\
   V3               = ( 92.75, 34.75 )\n\
   V4               = ( 106.307, 39.232 )\n\
   ..\n\
"309 Room pg mr" = POLYGON\n\
   V1               = ( 83, 48.75 )\n\
   V2               = ( 73.3469, 45.6709 )\n\
   V3               = ( 78.8552, 29.4181 )\n\
   V4               = ( 88.75, 32.5 )\n\
   ..\n\
"309 Room floor pg mr" = POLYGON\n\
   V1               = ( 83, 48.75 )\n\
   V2               = ( 73.3469, 45.6709 )\n\
   V3               = ( 78.8552, 29.4181 )\n\
   V4               = ( 88.75, 32.5 )\n\
   ..\n\
"310 Room pg mr" = POLYGON\n\
   V1               = ( 106.307, 39.232 )\n\
   V2               = ( 92.75, 34.75 )\n\
   V3               = ( 96.75, 23.25 )\n\
   V4               = ( 110.187, 27.7674 )\n\
   ..\n\
"310 Room floor pg mr" = POLYGON\n\
   V1               = ( 106.307, 39.232 )\n\
   V2               = ( 92.75, 34.75 )\n\
   V3               = ( 96.75, 23.25 )\n\
   V4               = ( 110.187, 27.7674 )\n\
   ..\n\
"311 Room pg mr" = POLYGON\n\
   V1               = ( 88.75, 32.5 )\n\
   V2               = ( 78.8552, 29.4181 )\n\
   V3               = ( 84.25, 13.5 )\n\
   V4               = ( 94.25, 16 )\n\
   ..\n\
"311 Room floor pg mr" = POLYGON\n\
   V1               = ( 88.75, 32.5 )\n\
   V2               = ( 78.8552, 29.4181 )\n\
   V3               = ( 84.25, 13.5 )\n\
   V4               = ( 94.25, 16 )\n\
   ..\n\
"312 Room pg mr" = POLYGON\n\
   V1               = ( 110.187, 27.7674 )\n\
   V2               = ( 96.75, 23.25 )\n\
   V3               = ( 100.435, 11.7898 )\n\
   V4               = ( 114, 16.5 )\n\
   ..\n\
"312 Room floor pg mr" = POLYGON\n\
   V1               = ( 110.187, 27.7674 )\n\
   V2               = ( 96.75, 23.25 )\n\
   V3               = ( 100.435, 11.7898 )\n\
   V4               = ( 114, 16.5 )\n\
   ..\n\
"313 Corridor pg mr" = POLYGON\n\
   V1               = ( 96.75, 23.25 )\n\
   V2               = ( 92.75, 34.75 )\n\
   V3               = ( 89, 46 )\n\
   V4               = ( 85.75, 56.25 )\n\
   V5               = ( 83, 48.75 )\n\
   V6               = ( 88.75, 32.5 )\n\
   V7               = ( 94.25, 16 )\n\
   V8               = ( 96, 10.25 )\n\
   V9               = ( 100.435, 11.7898 )\n\
   ..\n\
"313 Corridor floor pg mr" = POLYGON\n\
   V1               = ( 96.75, 23.25 )\n\
   V2               = ( 92.75, 34.75 )\n\
   V3               = ( 89, 46 )\n\
   V4               = ( 85.75, 56.25 )\n\
   V5               = ( 83, 48.75 )\n\
   V6               = ( 88.75, 32.5 )\n\
   V7               = ( 94.25, 16 )\n\
   V8               = ( 96, 10.25 )\n\
   V9               = ( 100.435, 11.7898 )\n\
   ..\n\
"314 Corridor pg mr" = POLYGON\n\
   V1               = ( 82.5, 66 )\n\
   V2               = ( 78.25, 78.25 )\n\
   V3               = ( 72.5, 76 )\n\
   V4               = ( 64, 73.25 )\n\
   V5               = ( 65.8241, 67.8677 )\n\
   V6               = ( 75.75, 71.5 )\n\
   V7               = ( 79.5, 60.5 )\n\
   V8               = ( 83, 48.75 )\n\
   V9               = ( 85.75, 56.25 )\n\
   ..\n\
"314 Corridor floor pg mr" = POLYGON\n\
   V1               = ( 82.5, 66 )\n\
   V2               = ( 78.25, 78.25 )\n\
   V3               = ( 72.5, 76 )\n\
   V4               = ( 64, 73.25 )\n\
   V5               = ( 65.8241, 67.8677 )\n\
   V6               = ( 75.75, 71.5 )\n\
   V7               = ( 79.5, 60.5 )\n\
   V8               = ( 83, 48.75 )\n\
   V9               = ( 85.75, 56.25 )\n\
   ..\n\
"321 Corridor pg mr" = POLYGON\n\
   V1               = ( 49.25, 164 )\n\
   V2               = ( 45.5, 175.75 )\n\
   V3               = ( 40, 174 )\n\
   V4               = ( 35, 172.25 )\n\
   V5               = ( 37.75, 164.25 )\n\
   V6               = ( 39.5, 157.5 )\n\
   V7               = ( 40.0056, 156.029 )\n\
   V8               = ( 49.75, 159.5 )\n\
   ..\n\
"321 Corridor floor pg mr" = POLYGON\n\
   V1               = ( 49.25, 164 )\n\
   V2               = ( 45.5, 175.75 )\n\
   V3               = ( 40, 174 )\n\
   V4               = ( 35, 172.25 )\n\
   V5               = ( 37.75, 164.25 )\n\
   V6               = ( 39.5, 157.5 )\n\
   V7               = ( 40.0056, 156.029 )\n\
   V8               = ( 49.75, 159.5 )\n\
   ..\n\
"321A IT pg mr" = POLYGON\n\
   V1               = ( 42.75, 184.75 )\n\
   V2               = ( 37, 182.75 )\n\
   V3               = ( 40, 174 )\n\
   V4               = ( 45.5, 175.75 )\n\
   ..\n\
"321A IT floor pg mr" = POLYGON\n\
   V1               = ( 42.75, 184.75 )\n\
   V2               = ( 37, 182.75 )\n\
   V3               = ( 40, 174 )\n\
   V4               = ( 45.5, 175.75 )\n\
   ..\n\
"321B Elev Lobby pg mr" = POLYGON\n\
   V1               = ( 35, 172.25 )\n\
   V2               = ( 24.7954, 168.774 )\n\
   V3               = ( 27.4073, 160.854 )\n\
   V4               = ( 37.75, 164.25 )\n\
   ..\n\
"321B Elev Lobby floor pg mr" = POLYGON\n\
   V1               = ( 35, 172.25 )\n\
   V2               = ( 24.7954, 168.774 )\n\
   V3               = ( 27.4073, 160.854 )\n\
   V4               = ( 37.75, 164.25 )\n\
   ..\n\
"322 Room pg mr" = POLYGON\n\
   V1               = ( 66.5, 169.75 )\n\
   V2               = ( 52.5, 165.25 )\n\
   V3               = ( 56.5, 153.75 )\n\
   V4               = ( 70.23, 158.517 )\n\
   ..\n\
"322 Room floor pg mr" = POLYGON\n\
   V1               = ( 66.5, 169.75 )\n\
   V2               = ( 52.5, 165.25 )\n\
   V3               = ( 56.5, 153.75 )\n\
   V4               = ( 70.23, 158.517 )\n\
   ..\n\
"323 Room pg mr" = POLYGON\n\
   V1               = ( 49.75, 159.5 )\n\
   V2               = ( 40.0056, 156.029 )\n\
   V3               = ( 43.7398, 145.166 )\n\
   V4               = ( 53.5, 148.5 )\n\
   ..\n\
"323 Room floor pg mr" = POLYGON\n\
   V1               = ( 49.75, 159.5 )\n\
   V2               = ( 40.0056, 156.029 )\n\
   V3               = ( 43.7398, 145.166 )\n\
   V4               = ( 53.5, 148.5 )\n\
   ..\n\
"324 Room pg mr" = POLYGON\n\
   V1               = ( 70.23, 158.517 )\n\
   V2               = ( 56.5, 153.75 )\n\
   V3               = ( 60, 144 )\n\
   V4               = ( 73.5026, 148.662 )\n\
   ..\n\
"324 Room floor pg mr" = POLYGON\n\
   V1               = ( 70.23, 158.517 )\n\
   V2               = ( 56.5, 153.75 )\n\
   V3               = ( 60, 144 )\n\
   V4               = ( 73.5026, 148.662 )\n\
   ..\n\
"325 Corridor pg mr" = POLYGON\n\
   V1               = ( 69.5, 114.75 )\n\
   V2               = ( 67, 122.75 )\n\
   V3               = ( 63.25, 133.75 )\n\
   V4               = ( 60, 144 )\n\
   V5               = ( 56.5, 153.75 )\n\
   V6               = ( 52.5, 165.25 )\n\
   V7               = ( 49.25, 164 )\n\
   V8               = ( 49.75, 159.5 )\n\
   V9               = ( 53.5, 148.5 )\n\
   V10              = ( 57.5, 136.75 )\n\
   V11              = ( 62.5, 120.75 )\n\
   V12              = ( 68, 104.25 )\n\
   V13              = ( 73.25, 99.25 )\n\
   V14              = ( 74.75, 99.75 )\n\
   ..\n\
"325 Corridor floor pg mr" = POLYGON\n\
   V1               = ( 69.5, 114.75 )\n\
   V2               = ( 67, 122.75 )\n\
   V3               = ( 63.25, 133.75 )\n\
   V4               = ( 60, 144 )\n\
   V5               = ( 56.5, 153.75 )\n\
   V6               = ( 52.5, 165.25 )\n\
   V7               = ( 49.25, 164 )\n\
   V8               = ( 49.75, 159.5 )\n\
   V9               = ( 53.5, 148.5 )\n\
   V10              = ( 57.5, 136.75 )\n\
   V11              = ( 62.5, 120.75 )\n\
   V12              = ( 68, 104.25 )\n\
   V13              = ( 73.25, 99.25 )\n\
   V14              = ( 74.75, 99.75 )\n\
   ..\n\
"326 Room pg mr" = POLYGON\n\
   V1               = ( 73.5026, 148.662 )\n\
   V2               = ( 60, 144 )\n\
   V3               = ( 63.25, 133.75 )\n\
   V4               = ( 76.9398, 138.311 )\n\
   ..\n\
"326 Room floor pg mr" = POLYGON\n\
   V1               = ( 73.5026, 148.662 )\n\
   V2               = ( 60, 144 )\n\
   V3               = ( 63.25, 133.75 )\n\
   V4               = ( 76.9398, 138.311 )\n\
   ..\n\
"327 Room pg mr" = POLYGON\n\
   V1               = ( 53.5, 148.5 )\n\
   V2               = ( 43.7398, 145.166 )\n\
   V3               = ( 47.7938, 133.373 )\n\
   V4               = ( 57.5, 136.75 )\n\
   ..\n\
"327 Room floor pg mr" = POLYGON\n\
   V1               = ( 53.5, 148.5 )\n\
   V2               = ( 43.7398, 145.166 )\n\
   V3               = ( 47.7938, 133.373 )\n\
   V4               = ( 57.5, 136.75 )\n\
   ..\n\
"328 Bathroom pg mr" = POLYGON\n\
   V1               = ( 76.9398, 138.311 )\n\
   V2               = ( 63.25, 133.75 )\n\
   V3               = ( 67, 122.75 )\n\
   V4               = ( 80.5852, 127.333 )\n\
   ..\n\
"328 Bathroom floor pg mr" = POLYGON\n\
   V1               = ( 76.9398, 138.311 )\n\
   V2               = ( 63.25, 133.75 )\n\
   V3               = ( 67, 122.75 )\n\
   V4               = ( 80.5852, 127.333 )\n\
   ..\n\
"329 Room pg mr" = POLYGON\n\
   V1               = ( 57.5, 136.75 )\n\
   V2               = ( 47.7938, 133.373 )\n\
   V3               = ( 53.223, 117.579 )\n\
   V4               = ( 62.5, 120.75 )\n\
   ..\n\
"329 Room floor pg mr" = POLYGON\n\
   V1               = ( 57.5, 136.75 )\n\
   V2               = ( 47.7938, 133.373 )\n\
   V3               = ( 53.223, 117.579 )\n\
   V4               = ( 62.5, 120.75 )\n\
   ..\n\
"330 Bathroom pg mr" = POLYGON\n\
   V1               = ( 80.5852, 127.333 )\n\
   V2               = ( 67, 122.75 )\n\
   V3               = ( 69.5, 114.75 )\n\
   V4               = ( 83.2703, 119.246 )\n\
   ..\n\
"330 Bathroom floor pg mr" = POLYGON\n\
   V1               = ( 80.5852, 127.333 )\n\
   V2               = ( 67, 122.75 )\n\
   V3               = ( 69.5, 114.75 )\n\
   V4               = ( 83.2703, 119.246 )\n\
   ..\n\
"331 Room pg mr" = POLYGON\n\
   V1               = ( 62.5, 120.75 )\n\
   V2               = ( 53.223, 117.579 )\n\
   V3               = ( 58.75, 101.5 )\n\
   V4               = ( 68, 104.25 )\n\
   ..\n\
"331 Room floor pg mr" = POLYGON\n\
   V1               = ( 62.5, 120.75 )\n\
   V2               = ( 53.223, 117.579 )\n\
   V3               = ( 58.75, 101.5 )\n\
   V4               = ( 68, 104.25 )\n\
   ..\n\
"332 Room pg mr" = POLYGON\n\
   V1               = ( 83.2703, 119.246 )\n\
   V2               = ( 69.5, 114.75 )\n\
   V3               = ( 74.75, 99.75 )\n\
   V4               = ( 88.25, 104.25 )\n\
   ..\n\
"332 Room floor pg mr" = POLYGON\n\
   V1               = ( 83.2703, 119.246 )\n\
   V2               = ( 69.5, 114.75 )\n\
   V3               = ( 74.75, 99.75 )\n\
   V4               = ( 88.25, 104.25 )\n\
   ..\n\
"340 Lounge pg mr" = POLYGON\n\
   V1               = ( 63.75, 191.25 )\n\
   V2               = ( 56.75, 189 )\n\
   V3               = ( 42.75, 184.75 )\n\
   V4               = ( 45.5, 175.75 )\n\
   V5               = ( 49.25, 164 )\n\
   V6               = ( 52.5, 165.25 )\n\
   V7               = ( 66.5, 169.75 )\n\
   V8               = ( 70.5, 171 )\n\
   ..\n\
"340 Lounge floor pg mr" = POLYGON\n\
   V1               = ( 63.75, 191.25 )\n\
   V2               = ( 56.75, 189 )\n\
   V3               = ( 42.75, 184.75 )\n\
   V4               = ( 45.5, 175.75 )\n\
   V5               = ( 49.25, 164 )\n\
   V6               = ( 52.5, 165.25 )\n\
   V7               = ( 66.5, 169.75 )\n\
   V8               = ( 70.5, 171 )\n\
   ..\n\
"342 Room pg mr" = POLYGON\n\
   V1               = ( 52.4476, 201.716 )\n\
   V2               = ( 39, 197 )\n\
   V3               = ( 42.75, 184.75 )\n\
   V4               = ( 56.75, 189 )\n\
   ..\n\
"342 Room floor pg mr" = POLYGON\n\
   V1               = ( 52.4476, 201.716 )\n\
   V2               = ( 39, 197 )\n\
   V3               = ( 42.75, 184.75 )\n\
   V4               = ( 56.75, 189 )\n\
   ..\n\
"343 Room pg mr" = POLYGON\n\
   V1               = ( 33, 199.5 )\n\
   V2               = ( 23.074, 196.096 )\n\
   V3               = ( 26.7943, 184.889 )\n\
   V4               = ( 36.5, 188.25 )\n\
   ..\n\
"343 Room floor pg mr" = POLYGON\n\
   V1               = ( 33, 199.5 )\n\
   V2               = ( 23.074, 196.096 )\n\
   V3               = ( 26.7943, 184.889 )\n\
   V4               = ( 36.5, 188.25 )\n\
   ..\n\
"344 Room pg mr" = POLYGON\n\
   V1               = ( 49.1931, 211.335 )\n\
   V2               = ( 35.5, 206.75 )\n\
   V3               = ( 39, 197 )\n\
   V4               = ( 52.4476, 201.716 )\n\
   ..\n\
"344 Room floor pg mr" = POLYGON\n\
   V1               = ( 49.1931, 211.335 )\n\
   V2               = ( 35.5, 206.75 )\n\
   V3               = ( 39, 197 )\n\
   V4               = ( 52.4476, 201.716 )\n\
   ..\n\
"345 Room pg mr" = POLYGON\n\
   V1               = ( 29, 210.75 )\n\
   V2               = ( 19.2843, 207.512 )\n\
   V3               = ( 23.074, 196.096 )\n\
   V4               = ( 33, 199.5 )\n\
   ..\n\
"345 Room floor pg mr" = POLYGON\n\
   V1               = ( 29, 210.75 )\n\
   V2               = ( 19.2843, 207.512 )\n\
   V3               = ( 23.074, 196.096 )\n\
   V4               = ( 33, 199.5 )\n\
   ..\n\
"346 Room pg mr" = POLYGON\n\
   V1               = ( 45.762, 221.476 )\n\
   V2               = ( 32, 216.75 )\n\
   V3               = ( 35.5, 206.75 )\n\
   V4               = ( 49.1931, 211.335 )\n\
   ..\n\
"346 Room floor pg mr" = POLYGON\n\
   V1               = ( 45.762, 221.476 )\n\
   V2               = ( 32, 216.75 )\n\
   V3               = ( 35.5, 206.75 )\n\
   V4               = ( 49.1931, 211.335 )\n\
   ..\n\
"347 Room pg mr" = POLYGON\n\
   V1               = ( 23.75, 227.25 )\n\
   V2               = ( 13.8904, 223.761 )\n\
   V3               = ( 19.2843, 207.512 )\n\
   V4               = ( 29, 210.75 )\n\
   ..\n\
"347 Room floor pg mr" = POLYGON\n\
   V1               = ( 23.75, 227.25 )\n\
   V2               = ( 13.8904, 223.761 )\n\
   V3               = ( 19.2843, 207.512 )\n\
   V4               = ( 29, 210.75 )\n\
   ..\n\
"348 Bathroom pg mr" = POLYGON\n\
   V1               = ( 41.9902, 232.623 )\n\
   V2               = ( 28.25, 228 )\n\
   V3               = ( 32, 216.75 )\n\
   V4               = ( 45.762, 221.476 )\n\
   ..\n\
"348 Bathroom floor pg mr" = POLYGON\n\
   V1               = ( 41.9902, 232.623 )\n\
   V2               = ( 28.25, 228 )\n\
   V3               = ( 32, 216.75 )\n\
   V4               = ( 45.762, 221.476 )\n\
   ..\n\
"349 Room pg mr" = POLYGON\n\
   V1               = ( 18, 243.75 )\n\
   V2               = ( 8.5, 240 )\n\
   V3               = ( 13.8904, 223.761 )\n\
   V4               = ( 23.75, 227.25 )\n\
   ..\n\
"349 Room floor pg mr" = POLYGON\n\
   V1               = ( 18, 243.75 )\n\
   V2               = ( 8.5, 240 )\n\
   V3               = ( 13.8904, 223.761 )\n\
   V4               = ( 23.75, 227.25 )\n\
   ..\n\
"350 Room pg mr" = POLYGON\n\
   V1               = ( 38.0261, 244.339 )\n\
   V2               = ( 24.5, 239.25 )\n\
   V3               = ( 28.25, 228 )\n\
   V4               = ( 41.9902, 232.623 )\n\
   ..\n\
"350 Room floor pg mr" = POLYGON\n\
   V1               = ( 38.0261, 244.339 )\n\
   V2               = ( 24.5, 239.25 )\n\
   V3               = ( 28.25, 228 )\n\
   V4               = ( 41.9902, 232.623 )\n\
   ..\n\
"351 Corridor pg mr" = POLYGON\n\
   V1               = ( 28.25, 228 )\n\
   V2               = ( 24.5, 239.25 )\n\
   V3               = ( 20.7259, 250.804 )\n\
   V4               = ( 16.25, 249.25 )\n\
   V5               = ( 18, 243.75 )\n\
   V6               = ( 23.75, 227.25 )\n\
   V7               = ( 29, 210.75 )\n\
   V8               = ( 32, 216.75 )\n\
   ..\n\
"351 Corridor floor pg mr" = POLYGON\n\
   V1               = ( 28.25, 228 )\n\
   V2               = ( 24.5, 239.25 )\n\
   V3               = ( 20.7259, 250.804 )\n\
   V4               = ( 16.25, 249.25 )\n\
   V5               = ( 18, 243.75 )\n\
   V6               = ( 23.75, 227.25 )\n\
   V7               = ( 29, 210.75 )\n\
   V8               = ( 32, 216.75 )\n\
   ..\n\
"352 Room pg mr" = POLYGON\n\
   V1               = ( 34.25, 255.5 )\n\
   V2               = ( 20.7259, 250.804 )\n\
   V3               = ( 24.5, 239.25 )\n\
   V4               = ( 38.0261, 244.339 )\n\
   ..\n\
"352 Room floor pg mr" = POLYGON\n\
   V1               = ( 34.25, 255.5 )\n\
   V2               = ( 20.7259, 250.804 )\n\
   V3               = ( 24.5, 239.25 )\n\
   V4               = ( 38.0261, 244.339 )\n\
   ..\n\
"353 Corridor pg mr" = POLYGON\n\
   V1               = ( 39, 197 )\n\
   V2               = ( 35.5, 206.75 )\n\
   V3               = ( 32, 216.75 )\n\
   V4               = ( 29, 210.75 )\n\
   V5               = ( 33, 199.5 )\n\
   V6               = ( 36.5, 188.25 )\n\
   V7               = ( 26.7943, 184.889 )\n\
   V8               = ( 28.5, 179.75 )\n\
   V9               = ( 37, 182.75 )\n\
   V10              = ( 42.75, 184.75 )\n\
   ..\n\
"353 Corridor floor pg mr" = POLYGON\n\
   V1               = ( 39, 197 )\n\
   V2               = ( 35.5, 206.75 )\n\
   V3               = ( 32, 216.75 )\n\
   V4               = ( 29, 210.75 )\n\
   V5               = ( 33, 199.5 )\n\
   V6               = ( 36.5, 188.25 )\n\
   V7               = ( 26.7943, 184.889 )\n\
   V8               = ( 28.5, 179.75 )\n\
   V9               = ( 37, 182.75 )\n\
   V10              = ( 42.75, 184.75 )\n\
   ..\n\
"Level 4 pg mr" = POLYGON\n\
   V1               = ( 91.75, 82.25 )\n\
   V2               = ( 99, 85 )\n\
   V3               = ( 92, 105.25 )\n\
   V4               = ( 88.25, 104.25 )\n\
   V5               = ( 66.5, 169.75 )\n\
   V6               = ( 70.5, 171 )\n\
   V7               = ( 63.75, 191.25 )\n\
   V8               = ( 56.75, 189 )\n\
   V9               = ( 34.25, 255.5 )\n\
   V10              = ( 16.25, 249.25 )\n\
   V11              = ( 15.5, 251 )\n\
   V12              = ( 3, 246.5 )\n\
   V13              = ( 5.5, 239 )\n\
   V14              = ( 8.5, 240 )\n\
   V15              = ( 28.5, 179.75 )\n\
   V16              = ( 22, 177.25 )\n\
   V17              = ( 29.75, 153.75 )\n\
   V18              = ( 39.5, 157.5 )\n\
   V19              = ( 58.75, 101.5 )\n\
   V20              = ( 48.25, 98 )\n\
   V21              = ( 57.5, 71.5 )\n\
   V22              = ( 64, 73.25 )\n\
   V23              = ( 84.25, 13.5 )\n\
   V24              = ( 81.5, 12 )\n\
   V25              = ( 83.75, 4.5 )\n\
   V26              = ( 96.5, 8.75 )\n\
   V27              = ( 96, 10.25 )\n\
   V28              = ( 114, 16.5 )\n\
   ..\n\
"4-EL Elev pg mr" = POLYGON\n\
   V1               = ( 37.5, 164.5 )\n\
   V2               = ( 27.4015, 160.871 )\n\
   V3               = ( 29.75, 153.75 )\n\
   V4               = ( 39.5, 157.5 )\n\
   ..\n\
"4-EL Elev floor pg mr" = POLYGON\n\
   V1               = ( 37.5, 164.5 )\n\
   V2               = ( 27.4015, 160.871 )\n\
   V3               = ( 29.75, 153.75 )\n\
   V4               = ( 39.5, 157.5 )\n\
   ..\n\
"4-ST1 Stair 1 pg mr" = POLYGON\n\
   V1               = ( 96, 10.25 )\n\
   V2               = ( 94, 16.5 )\n\
   V3               = ( 84.25, 13.5 )\n\
   V4               = ( 81.5, 12 )\n\
   V5               = ( 83.75, 4.5 )\n\
   V6               = ( 96.5, 8.75 )\n\
   ..\n\
"4-ST1 Stair 1 floor pg mr" = POLYGON\n\
   V1               = ( 96, 10.25 )\n\
   V2               = ( 94, 16.5 )\n\
   V3               = ( 84.25, 13.5 )\n\
   V4               = ( 81.5, 12 )\n\
   V5               = ( 83.75, 4.5 )\n\
   V6               = ( 96.5, 8.75 )\n\
   ..\n\
"4-ST2 Stair 2 pg mr" = POLYGON\n\
   V1               = ( 69.25, 85.25 )\n\
   V2               = ( 63.5, 83.25 )\n\
   V3               = ( 54.5829, 79.8572 )\n\
   V4               = ( 57.5, 71.5 )\n\
   V5               = ( 64, 73.25 )\n\
   V6               = ( 72.5, 76 )\n\
   ..\n\
"4-ST2 Stair 2 floor pg mr" = POLYGON\n\
   V1               = ( 69.25, 85.25 )\n\
   V2               = ( 63.5, 83.25 )\n\
   V3               = ( 54.5829, 79.8572 )\n\
   V4               = ( 57.5, 71.5 )\n\
   V5               = ( 64, 73.25 )\n\
   V6               = ( 72.5, 76 )\n\
   ..\n\
"4-ST3 Stair 3 pg mr" = POLYGON\n\
   V1               = ( 37, 182.75 )\n\
   V2               = ( 28.5, 179.75 )\n\
   V3               = ( 22, 177.25 )\n\
   V4               = ( 24.7868, 168.8 )\n\
   V5               = ( 39.75, 173.75 )\n\
   ..\n\
"4-ST3 Stair 3 floor pg mr" = POLYGON\n\
   V1               = ( 37, 182.75 )\n\
   V2               = ( 28.5, 179.75 )\n\
   V3               = ( 22, 177.25 )\n\
   V4               = ( 24.7868, 168.8 )\n\
   V5               = ( 39.75, 173.75 )\n\
   ..\n\
"4-ST4 Stair 4 pg mr" = POLYGON\n\
   V1               = ( 16.25, 249.25 )\n\
   V2               = ( 15.5, 251 )\n\
   V3               = ( 3, 246.5 )\n\
   V4               = ( 5.5, 239 )\n\
   V5               = ( 8.5, 240 )\n\
   V6               = ( 18, 243.5 )\n\
   ..\n\
"4-ST4 Stair 4 floor pg mr" = POLYGON\n\
   V1               = ( 16.25, 249.25 )\n\
   V2               = ( 15.5, 251 )\n\
   V3               = ( 3, 246.5 )\n\
   V4               = ( 5.5, 239 )\n\
   V5               = ( 8.5, 240 )\n\
   V6               = ( 18, 243.5 )\n\
   ..\n\
"400 Lounge pg mr" = POLYGON\n\
   V1               = ( 92, 105.25 )\n\
   V2               = ( 88.25, 104.25 )\n\
   V3               = ( 74.75, 99.5 )\n\
   V4               = ( 71.25, 98.5 )\n\
   V5               = ( 75, 87.25 )\n\
   V6               = ( 78, 78.25 )\n\
   V7               = ( 91.75, 82.25 )\n\
   V8               = ( 99, 85 )\n\
   ..\n\
"400 Lounge floor pg mr" = POLYGON\n\
   V1               = ( 92, 105.25 )\n\
   V2               = ( 88.25, 104.25 )\n\
   V3               = ( 74.75, 99.5 )\n\
   V4               = ( 71.25, 98.5 )\n\
   V5               = ( 75, 87.25 )\n\
   V6               = ( 78, 78.25 )\n\
   V7               = ( 91.75, 82.25 )\n\
   V8               = ( 99, 85 )\n\
   ..\n\
"401 Corridor pg mr" = POLYGON\n\
   V1               = ( 71.25, 98.5 )\n\
   V2               = ( 74.75, 99.5 )\n\
   V3               = ( 71, 111 )\n\
   V4               = ( 67, 122.75 )\n\
   V5               = ( 63.25, 134 )\n\
   V6               = ( 59.75, 144 )\n\
   V7               = ( 57.5, 136.75 )\n\
   V8               = ( 62.75, 120.75 )\n\
   V9               = ( 68.25, 104.25 )\n\
   V10              = ( 62.5, 102.5 )\n\
   V11              = ( 65, 96 )\n\
   V12              = ( 63.5, 83.25 )\n\
   V13              = ( 69.25, 85.25 )\n\
   V14              = ( 75, 87.25 )\n\
   ..\n\
"401 Corridor floor pg mr" = POLYGON\n\
   V1               = ( 71.25, 98.5 )\n\
   V2               = ( 74.75, 99.5 )\n\
   V3               = ( 71, 111 )\n\
   V4               = ( 67, 122.75 )\n\
   V5               = ( 63.25, 134 )\n\
   V6               = ( 59.75, 144 )\n\
   V7               = ( 57.5, 136.75 )\n\
   V8               = ( 62.75, 120.75 )\n\
   V9               = ( 68.25, 104.25 )\n\
   V10              = ( 62.5, 102.5 )\n\
   V11              = ( 65, 96 )\n\
   V12              = ( 63.5, 83.25 )\n\
   V13              = ( 69.25, 85.25 )\n\
   V14              = ( 75, 87.25 )\n\
   ..\n\
"401A Janitor pg mr" = POLYGON\n\
   V1               = ( 75, 87.25 )\n\
   V2               = ( 69.25, 85.25 )\n\
   V3               = ( 72.5, 76 )\n\
   V4               = ( 78, 78.25 )\n\
   ..\n\
"401A Janitor floor pg mr" = POLYGON\n\
   V1               = ( 75, 87.25 )\n\
   V2               = ( 69.25, 85.25 )\n\
   V3               = ( 72.5, 76 )\n\
   V4               = ( 78, 78.25 )\n\
   ..\n\
"401B Lounge pg mr" = POLYGON\n\
   V1               = ( 65, 96 )\n\
   V2               = ( 62.5, 102.5 )\n\
   V3               = ( 58.75, 101.5 )\n\
   V4               = ( 48.25, 98 )\n\
   V5               = ( 54.5829, 79.8572 )\n\
   V6               = ( 63.5, 83.25 )\n\
   ..\n\
"401B Lounge floor pg mr" = POLYGON\n\
   V1               = ( 65, 96 )\n\
   V2               = ( 62.5, 102.5 )\n\
   V3               = ( 58.75, 101.5 )\n\
   V4               = ( 48.25, 98 )\n\
   V5               = ( 54.5829, 79.8572 )\n\
   V6               = ( 63.5, 83.25 )\n\
   ..\n\
"402 Room pg mr" = POLYGON\n\
   V1               = ( 91.75, 82.25 )\n\
   V2               = ( 78, 78.25 )\n\
   V3               = ( 82, 66 )\n\
   V4               = ( 95.7028, 70.5693 )\n\
   ..\n\
"402 Room floor pg mr" = POLYGON\n\
   V1               = ( 91.75, 82.25 )\n\
   V2               = ( 78, 78.25 )\n\
   V3               = ( 82, 66 )\n\
   V4               = ( 95.7028, 70.5693 )\n\
   ..\n\
"403 Room pg mr" = POLYGON\n\
   V1               = ( 75.25, 71.5 )\n\
   V2               = ( 65.708, 68.2104 )\n\
   V3               = ( 69.4607, 57.1375 )\n\
   V4               = ( 79.25, 60.5 )\n\
   ..\n\
"403 Room floor pg mr" = POLYGON\n\
   V1               = ( 75.25, 71.5 )\n\
   V2               = ( 65.708, 68.2104 )\n\
   V3               = ( 69.4607, 57.1375 )\n\
   V4               = ( 79.25, 60.5 )\n\
   ..\n\
"404 Room pg mr" = POLYGON\n\
   V1               = ( 95.7028, 70.5693 )\n\
   V2               = ( 82, 66 )\n\
   V3               = ( 85.5, 56.25 )\n\
   V4               = ( 99.0155, 60.78 )\n\
   ..\n\
"404 Room floor pg mr" = POLYGON\n\
   V1               = ( 95.7028, 70.5693 )\n\
   V2               = ( 82, 66 )\n\
   V3               = ( 85.5, 56.25 )\n\
   V4               = ( 99.0155, 60.78 )\n\
   ..\n\
"406 Room pg mr" = POLYGON\n\
   V1               = ( 99.0155, 60.78 )\n\
   V2               = ( 85.5, 56.25 )\n\
   V3               = ( 88.75, 45.75 )\n\
   V4               = ( 102.435, 50.6755 )\n\
   ..\n\
"406 Room floor pg mr" = POLYGON\n\
   V1               = ( 99.0155, 60.78 )\n\
   V2               = ( 85.5, 56.25 )\n\
   V3               = ( 88.75, 45.75 )\n\
   V4               = ( 102.435, 50.6755 )\n\
   ..\n\
"407 Room pg mr" = POLYGON\n\
   V1               = ( 79.25, 60.5 )\n\
   V2               = ( 69.4607, 57.1375 )\n\
   V3               = ( 73.3265, 45.731 )\n\
   V4               = ( 83, 49 )\n\
   ..\n\
"407 Room floor pg mr" = POLYGON\n\
   V1               = ( 79.25, 60.5 )\n\
   V2               = ( 69.4607, 57.1375 )\n\
   V3               = ( 73.3265, 45.731 )\n\
   V4               = ( 83, 49 )\n\
   ..\n\
"408 Bathroom pg mr" = POLYGON\n\
   V1               = ( 102.435, 50.6755 )\n\
   V2               = ( 88.75, 45.75 )\n\
   V3               = ( 92.75, 34.5 )\n\
   V4               = ( 106.293, 39.2733 )\n\
   ..\n\
"408 Bathroom floor pg mr" = POLYGON\n\
   V1               = ( 102.435, 50.6755 )\n\
   V2               = ( 88.75, 45.75 )\n\
   V3               = ( 92.75, 34.5 )\n\
   V4               = ( 106.293, 39.2733 )\n\
   ..\n\
"409 Room pg mr" = POLYGON\n\
   V1               = ( 83, 49 )\n\
   V2               = ( 73.3265, 45.731 )\n\
   V3               = ( 78.8863, 29.3262 )\n\
   V4               = ( 88.5, 32.75 )\n\
   ..\n\
"409 Room floor pg mr" = POLYGON\n\
   V1               = ( 83, 49 )\n\
   V2               = ( 73.3265, 45.731 )\n\
   V3               = ( 78.8863, 29.3262 )\n\
   V4               = ( 88.5, 32.75 )\n\
   ..\n\
"410 Room pg mr" = POLYGON\n\
   V1               = ( 106.293, 39.2733 )\n\
   V2               = ( 92.75, 34.5 )\n\
   V3               = ( 96.5, 23.25 )\n\
   V4               = ( 110.202, 27.7228 )\n\
   ..\n\
"410 Room floor pg mr" = POLYGON\n\
   V1               = ( 106.293, 39.2733 )\n\
   V2               = ( 92.75, 34.5 )\n\
   V3               = ( 96.5, 23.25 )\n\
   V4               = ( 110.202, 27.7228 )\n\
   ..\n\
"411 Room pg mr" = POLYGON\n\
   V1               = ( 88.5, 32.75 )\n\
   V2               = ( 78.8863, 29.3262 )\n\
   V3               = ( 84.25, 13.5 )\n\
   V4               = ( 94, 16.5 )\n\
   ..\n\
"411 Room floor pg mr" = POLYGON\n\
   V1               = ( 88.5, 32.75 )\n\
   V2               = ( 78.8863, 29.3262 )\n\
   V3               = ( 84.25, 13.5 )\n\
   V4               = ( 94, 16.5 )\n\
   ..\n\
"412 Room pg mr" = POLYGON\n\
   V1               = ( 110.202, 27.7228 )\n\
   V2               = ( 96.5, 23.25 )\n\
   V3               = ( 100.412, 11.7818 )\n\
   V4               = ( 114, 16.5 )\n\
   ..\n\
"412 Room floor pg mr" = POLYGON\n\
   V1               = ( 110.202, 27.7228 )\n\
   V2               = ( 96.5, 23.25 )\n\
   V3               = ( 100.412, 11.7818 )\n\
   V4               = ( 114, 16.5 )\n\
   ..\n\
"413 Corridor pg mr" = POLYGON\n\
   V1               = ( 96.5, 23.25 )\n\
   V2               = ( 92.75, 34.5 )\n\
   V3               = ( 88.75, 45.75 )\n\
   V4               = ( 85.5, 56.25 )\n\
   V5               = ( 83, 49 )\n\
   V6               = ( 88.5, 32.75 )\n\
   V7               = ( 94, 16.5 )\n\
   V8               = ( 96, 10.25 )\n\
   V9               = ( 100.412, 11.7818 )\n\
   ..\n\
"413 Corridor floor pg mr" = POLYGON\n\
   V1               = ( 96.5, 23.25 )\n\
   V2               = ( 92.75, 34.5 )\n\
   V3               = ( 88.75, 45.75 )\n\
   V4               = ( 85.5, 56.25 )\n\
   V5               = ( 83, 49 )\n\
   V6               = ( 88.5, 32.75 )\n\
   V7               = ( 94, 16.5 )\n\
   V8               = ( 96, 10.25 )\n\
   V9               = ( 100.412, 11.7818 )\n\
   ..\n\
"414 Corridor pg mr" = POLYGON\n\
   V1               = ( 82, 66 )\n\
   V2               = ( 78, 78.25 )\n\
   V3               = ( 72.5, 76 )\n\
   V4               = ( 64, 73.25 )\n\
   V5               = ( 65.708, 68.2104 )\n\
   V6               = ( 75.25, 71.5 )\n\
   V7               = ( 79.25, 60.5 )\n\
   V8               = ( 83, 49 )\n\
   V9               = ( 85.5, 56.25 )\n\
   ..\n\
"414 Corridor floor pg mr" = POLYGON\n\
   V1               = ( 82, 66 )\n\
   V2               = ( 78, 78.25 )\n\
   V3               = ( 72.5, 76 )\n\
   V4               = ( 64, 73.25 )\n\
   V5               = ( 65.708, 68.2104 )\n\
   V6               = ( 75.25, 71.5 )\n\
   V7               = ( 79.25, 60.5 )\n\
   V8               = ( 83, 49 )\n\
   V9               = ( 85.5, 56.25 )\n\
   ..\n\
"421 Corridor pg mr" = POLYGON\n\
   V1               = ( 56.5, 153.75 )\n\
   V2               = ( 52.75, 165.5 )\n\
   V3               = ( 49.25, 164.25 )\n\
   V4               = ( 45.5, 175.5 )\n\
   V5               = ( 39.75, 173.75 )\n\
   V6               = ( 24.7868, 168.8 )\n\
   V7               = ( 27.4015, 160.871 )\n\
   V8               = ( 37.5, 164.5 )\n\
   V9               = ( 39.5, 157.5 )\n\
   V10              = ( 40.0759, 155.825 )\n\
   V11              = ( 49.75, 159.25 )\n\
   V12              = ( 53.5, 148.5 )\n\
   V13              = ( 57.5, 136.75 )\n\
   V14              = ( 59.75, 144 )\n\
   ..\n\
"421 Corridor floor pg mr" = POLYGON\n\
   V1               = ( 56.5, 153.75 )\n\
   V2               = ( 52.75, 165.5 )\n\
   V3               = ( 49.25, 164.25 )\n\
   V4               = ( 45.5, 175.5 )\n\
   V5               = ( 39.75, 173.75 )\n\
   V6               = ( 24.7868, 168.8 )\n\
   V7               = ( 27.4015, 160.871 )\n\
   V8               = ( 37.5, 164.5 )\n\
   V9               = ( 39.5, 157.5 )\n\
   V10              = ( 40.0759, 155.825 )\n\
   V11              = ( 49.75, 159.25 )\n\
   V12              = ( 53.5, 148.5 )\n\
   V13              = ( 57.5, 136.75 )\n\
   V14              = ( 59.75, 144 )\n\
   ..\n\
"421A IT pg mr" = POLYGON\n\
   V1               = ( 42.75, 184.75 )\n\
   V2               = ( 37, 182.75 )\n\
   V3               = ( 39.75, 173.75 )\n\
   V4               = ( 45.5, 175.5 )\n\
   ..\n\
"421A IT floor pg mr" = POLYGON\n\
   V1               = ( 42.75, 184.75 )\n\
   V2               = ( 37, 182.75 )\n\
   V3               = ( 39.75, 173.75 )\n\
   V4               = ( 45.5, 175.5 )\n\
   ..\n\
"422 Room pg mr" = POLYGON\n\
   V1               = ( 66.5, 169.75 )\n\
   V2               = ( 52.75, 165.5 )\n\
   V3               = ( 56.5, 153.75 )\n\
   V4               = ( 70.2854, 158.35 )\n\
   ..\n\
"422 Room floor pg mr" = POLYGON\n\
   V1               = ( 66.5, 169.75 )\n\
   V2               = ( 52.75, 165.5 )\n\
   V3               = ( 56.5, 153.75 )\n\
   V4               = ( 70.2854, 158.35 )\n\
   ..\n\
"423 Room pg mr" = POLYGON\n\
   V1               = ( 49.75, 159.25 )\n\
   V2               = ( 40.0759, 155.825 )\n\
   V3               = ( 43.8195, 144.934 )\n\
   V4               = ( 53.5, 148.5 )\n\
   ..\n\
"423 Room floor pg mr" = POLYGON\n\
   V1               = ( 49.75, 159.25 )\n\
   V2               = ( 40.0759, 155.825 )\n\
   V3               = ( 43.8195, 144.934 )\n\
   V4               = ( 53.5, 148.5 )\n\
   ..\n\
"424 Room pg mr" = POLYGON\n\
   V1               = ( 70.2854, 158.35 )\n\
   V2               = ( 56.5, 153.75 )\n\
   V3               = ( 59.75, 144 )\n\
   V4               = ( 73.5077, 148.646 )\n\
   ..\n\
"424 Room floor pg mr" = POLYGON\n\
   V1               = ( 70.2854, 158.35 )\n\
   V2               = ( 56.5, 153.75 )\n\
   V3               = ( 59.75, 144 )\n\
   V4               = ( 73.5077, 148.646 )\n\
   ..\n\
"426 Room pg mr" = POLYGON\n\
   V1               = ( 73.5077, 148.646 )\n\
   V2               = ( 59.75, 144 )\n\
   V3               = ( 63.25, 134 )\n\
   V4               = ( 76.8224, 138.664 )\n\
   ..\n\
"426 Room floor pg mr" = POLYGON\n\
   V1               = ( 73.5077, 148.646 )\n\
   V2               = ( 59.75, 144 )\n\
   V3               = ( 63.25, 134 )\n\
   V4               = ( 76.8224, 138.664 )\n\
   ..\n\
"427 Room pg mr" = POLYGON\n\
   V1               = ( 53.5, 148.5 )\n\
   V2               = ( 43.8195, 144.934 )\n\
   V3               = ( 47.7859, 133.396 )\n\
   V4               = ( 57.5, 136.75 )\n\
   ..\n\
"427 Room floor pg mr" = POLYGON\n\
   V1               = ( 53.5, 148.5 )\n\
   V2               = ( 43.8195, 144.934 )\n\
   V3               = ( 47.7859, 133.396 )\n\
   V4               = ( 57.5, 136.75 )\n\
   ..\n\
"428 Bathroom pg mr" = POLYGON\n\
   V1               = ( 76.8224, 138.664 )\n\
   V2               = ( 63.25, 134 )\n\
   V3               = ( 67, 122.75 )\n\
   V4               = ( 80.6239, 127.216 )\n\
   ..\n\
"428 Bathroom floor pg mr" = POLYGON\n\
   V1               = ( 76.8224, 138.664 )\n\
   V2               = ( 63.25, 134 )\n\
   V3               = ( 67, 122.75 )\n\
   V4               = ( 80.6239, 127.216 )\n\
   ..\n\
"429 Room pg mr" = POLYGON\n\
   V1               = ( 57.5, 136.75 )\n\
   V2               = ( 47.7859, 133.396 )\n\
   V3               = ( 53.2134, 117.606 )\n\
   V4               = ( 62.75, 120.75 )\n\
   ..\n\
"429 Room floor pg mr" = POLYGON\n\
   V1               = ( 57.5, 136.75 )\n\
   V2               = ( 47.7859, 133.396 )\n\
   V3               = ( 53.2134, 117.606 )\n\
   V4               = ( 62.75, 120.75 )\n\
   ..\n\
"430 Room pg mr" = POLYGON\n\
   V1               = ( 80.6239, 127.216 )\n\
   V2               = ( 67, 122.75 )\n\
   V3               = ( 71, 111 )\n\
   V4               = ( 84.3822, 115.898 )\n\
   ..\n\
"430 Room floor pg mr" = POLYGON\n\
   V1               = ( 80.6239, 127.216 )\n\
   V2               = ( 67, 122.75 )\n\
   V3               = ( 71, 111 )\n\
   V4               = ( 84.3822, 115.898 )\n\
   ..\n\
"431 Room pg mr" = POLYGON\n\
   V1               = ( 62.75, 120.75 )\n\
   V2               = ( 53.2134, 117.606 )\n\
   V3               = ( 58.75, 101.5 )\n\
   V4               = ( 62.5, 102.5 )\n\
   V5               = ( 68.25, 104.25 )\n\
   ..\n\
"431 Room floor pg mr" = POLYGON\n\
   V1               = ( 62.75, 120.75 )\n\
   V2               = ( 53.2134, 117.606 )\n\
   V3               = ( 58.75, 101.5 )\n\
   V4               = ( 62.5, 102.5 )\n\
   V5               = ( 68.25, 104.25 )\n\
   ..\n\
"432 Room pg mr" = POLYGON\n\
   V1               = ( 84.3822, 115.898 )\n\
   V2               = ( 71, 111 )\n\
   V3               = ( 74.75, 99.5 )\n\
   V4               = ( 88.25, 104.25 )\n\
   ..\n\
"432 Room floor pg mr" = POLYGON\n\
   V1               = ( 84.3822, 115.898 )\n\
   V2               = ( 71, 111 )\n\
   V3               = ( 74.75, 99.5 )\n\
   V4               = ( 88.25, 104.25 )\n\
   ..\n\
"440 Room pg mr" = POLYGON\n\
   V1               = ( 63.75, 191.25 )\n\
   V2               = ( 56.75, 189 )\n\
   V3               = ( 42.75, 184.75 )\n\
   V4               = ( 45.5, 175.5 )\n\
   V5               = ( 49.25, 164.25 )\n\
   V6               = ( 52.75, 165.5 )\n\
   V7               = ( 66.5, 169.75 )\n\
   V8               = ( 70.5, 171 )\n\
   ..\n\
"440 Room floor pg mr" = POLYGON\n\
   V1               = ( 63.75, 191.25 )\n\
   V2               = ( 56.75, 189 )\n\
   V3               = ( 42.75, 184.75 )\n\
   V4               = ( 45.5, 175.5 )\n\
   V5               = ( 49.25, 164.25 )\n\
   V6               = ( 52.75, 165.5 )\n\
   V7               = ( 66.5, 169.75 )\n\
   V8               = ( 70.5, 171 )\n\
   ..\n\
"442 Room pg mr" = POLYGON\n\
   V1               = ( 52.4915, 201.586 )\n\
   V2               = ( 38.75, 197 )\n\
   V3               = ( 42.75, 184.75 )\n\
   V4               = ( 56.75, 189 )\n\
   ..\n\
"442 Room floor pg mr" = POLYGON\n\
   V1               = ( 52.4915, 201.586 )\n\
   V2               = ( 38.75, 197 )\n\
   V3               = ( 42.75, 184.75 )\n\
   V4               = ( 56.75, 189 )\n\
   ..\n\
"443 Room pg mr" = POLYGON\n\
   V1               = ( 33, 199.25 )\n\
   V2               = ( 23.0753, 196.092 )\n\
   V3               = ( 26.7833, 184.922 )\n\
   V4               = ( 36.5, 188.25 )\n\
   ..\n\
"443 Room floor pg mr" = POLYGON\n\
   V1               = ( 33, 199.25 )\n\
   V2               = ( 23.0753, 196.092 )\n\
   V3               = ( 26.7833, 184.922 )\n\
   V4               = ( 36.5, 188.25 )\n\
   ..\n\
"444 Room pg mr" = POLYGON\n\
   V1               = ( 49.1256, 211.534 )\n\
   V2               = ( 35.25, 206.75 )\n\
   V3               = ( 38.75, 197 )\n\
   V4               = ( 52.4915, 201.586 )\n\
   ..\n\
"444 Room floor pg mr" = POLYGON\n\
   V1               = ( 49.1256, 211.534 )\n\
   V2               = ( 35.25, 206.75 )\n\
   V3               = ( 38.75, 197 )\n\
   V4               = ( 52.4915, 201.586 )\n\
   ..\n\
"445 Room pg mr" = POLYGON\n\
   V1               = ( 29, 210.75 )\n\
   V2               = ( 19.2196, 207.707 )\n\
   V3               = ( 23.0753, 196.092 )\n\
   V4               = ( 33, 199.25 )\n\
   ..\n\
"445 Room floor pg mr" = POLYGON\n\
   V1               = ( 29, 210.75 )\n\
   V2               = ( 19.2196, 207.707 )\n\
   V3               = ( 23.0753, 196.092 )\n\
   V4               = ( 33, 199.25 )\n\
   ..\n\
"446 Room pg mr" = POLYGON\n\
   V1               = ( 45.7845, 221.409 )\n\
   V2               = ( 32, 216.5 )\n\
   V3               = ( 35.25, 206.75 )\n\
   V4               = ( 49.1256, 211.534 )\n\
   ..\n\
"446 Room floor pg mr" = POLYGON\n\
   V1               = ( 45.7845, 221.409 )\n\
   V2               = ( 32, 216.5 )\n\
   V3               = ( 35.25, 206.75 )\n\
   V4               = ( 49.1256, 211.534 )\n\
   ..\n\
"447 Room pg mr" = POLYGON\n\
   V1               = ( 23.75, 227.25 )\n\
   V2               = ( 13.8795, 223.794 )\n\
   V3               = ( 19.2196, 207.707 )\n\
   V4               = ( 29, 210.75 )\n\
   ..\n\
"447 Room floor pg mr" = POLYGON\n\
   V1               = ( 23.75, 227.25 )\n\
   V2               = ( 13.8795, 223.794 )\n\
   V3               = ( 19.2196, 207.707 )\n\
   V4               = ( 29, 210.75 )\n\
   ..\n\
"448 Bathroom pg mr" = POLYGON\n\
   V1               = ( 42.0315, 232.501 )\n\
   V2               = ( 28.25, 228 )\n\
   V3               = ( 32, 216.5 )\n\
   V4               = ( 45.7845, 221.409 )\n\
   ..\n\
"448 Bathroom floor pg mr" = POLYGON\n\
   V1               = ( 42.0315, 232.501 )\n\
   V2               = ( 28.25, 228 )\n\
   V3               = ( 32, 216.5 )\n\
   V4               = ( 45.7845, 221.409 )\n\
   ..\n\
"449 Room pg mr" = POLYGON\n\
   V1               = ( 18, 243.5 )\n\
   V2               = ( 8.5, 240 )\n\
   V3               = ( 13.8795, 223.794 )\n\
   V4               = ( 23.75, 227.25 )\n\
   ..\n\
"449 Room floor pg mr" = POLYGON\n\
   V1               = ( 18, 243.5 )\n\
   V2               = ( 8.5, 240 )\n\
   V3               = ( 13.8795, 223.794 )\n\
   V4               = ( 23.75, 227.25 )\n\
   ..\n\
"450 Room pg mr" = POLYGON\n\
   V1               = ( 38.0849, 244.166 )\n\
   V2               = ( 24.25, 239.5 )\n\
   V3               = ( 28.25, 228 )\n\
   V4               = ( 42.0315, 232.501 )\n\
   ..\n\
"450 Room floor pg mr" = POLYGON\n\
   V1               = ( 38.0849, 244.166 )\n\
   V2               = ( 24.25, 239.5 )\n\
   V3               = ( 28.25, 228 )\n\
   V4               = ( 42.0315, 232.501 )\n\
   ..\n\
"451 Corridor pg mr" = POLYGON\n\
   V1               = ( 28.25, 228 )\n\
   V2               = ( 24.25, 239.5 )\n\
   V3               = ( 20.4225, 250.699 )\n\
   V4               = ( 16.25, 249.25 )\n\
   V5               = ( 18, 243.5 )\n\
   V6               = ( 23.75, 227.25 )\n\
   V7               = ( 29, 210.75 )\n\
   V8               = ( 32, 216.5 )\n\
   ..\n\
"451 Corridor floor pg mr" = POLYGON\n\
   V1               = ( 28.25, 228 )\n\
   V2               = ( 24.25, 239.5 )\n\
   V3               = ( 20.4225, 250.699 )\n\
   V4               = ( 16.25, 249.25 )\n\
   V5               = ( 18, 243.5 )\n\
   V6               = ( 23.75, 227.25 )\n\
   V7               = ( 29, 210.75 )\n\
   V8               = ( 32, 216.5 )\n\
   ..\n\
"452 Room pg mr" = POLYGON\n\
   V1               = ( 34.25, 255.5 )\n\
   V2               = ( 20.4225, 250.699 )\n\
   V3               = ( 24.25, 239.5 )\n\
   V4               = ( 38.0849, 244.166 )\n\
   ..\n\
"452 Room floor pg mr" = POLYGON\n\
   V1               = ( 34.25, 255.5 )\n\
   V2               = ( 20.4225, 250.699 )\n\
   V3               = ( 24.25, 239.5 )\n\
   V4               = ( 38.0849, 244.166 )\n\
   ..\n\
"453 Corridor pg mr" = POLYGON\n\
   V1               = ( 38.75, 197 )\n\
   V2               = ( 35.25, 206.75 )\n\
   V3               = ( 32, 216.5 )\n\
   V4               = ( 29, 210.75 )\n\
   V5               = ( 33, 199.25 )\n\
   V6               = ( 36.5, 188.25 )\n\
   V7               = ( 26.7833, 184.922 )\n\
   V8               = ( 28.5, 179.75 )\n\
   V9               = ( 37, 182.75 )\n\
   V10              = ( 42.75, 184.75 )\n\
   ..\n\
"453 Corridor floor pg mr" = POLYGON\n\
   V1               = ( 38.75, 197 )\n\
   V2               = ( 35.25, 206.75 )\n\
   V3               = ( 32, 216.5 )\n\
   V4               = ( 29, 210.75 )\n\
   V5               = ( 33, 199.25 )\n\
   V6               = ( 36.5, 188.25 )\n\
   V7               = ( 26.7833, 184.922 )\n\
   V8               = ( 28.5, 179.75 )\n\
   V9               = ( 37, 182.75 )\n\
   V10              = ( 42.75, 184.75 )\n\
   ..\n\
"Level 5 pg mr" = POLYGON\n\
   V1               = ( 91.75, 82.25 )\n\
   V2               = ( 99, 85 )\n\
   V3               = ( 92, 105.25 )\n\
   V4               = ( 88.25, 104.25 )\n\
   V5               = ( 66.5, 169.75 )\n\
   V6               = ( 70.5, 171 )\n\
   V7               = ( 63.75, 191.25 )\n\
   V8               = ( 56.75, 189 )\n\
   V9               = ( 34.25, 255.5 )\n\
   V10              = ( 16.25, 249.25 )\n\
   V11              = ( 15.5, 251 )\n\
   V12              = ( 3, 246.5 )\n\
   V13              = ( 5.5, 239 )\n\
   V14              = ( 8.5, 240 )\n\
   V15              = ( 28.5, 179.75 )\n\
   V16              = ( 22, 177.25 )\n\
   V17              = ( 29.75, 153.75 )\n\
   V18              = ( 39.5, 157.5 )\n\
   V19              = ( 58.75, 101.5 )\n\
   V20              = ( 48.25, 98 )\n\
   V21              = ( 57.5, 71.5 )\n\
   V22              = ( 64, 73.25 )\n\
   V23              = ( 84.25, 13.5 )\n\
   V24              = ( 81.5, 12 )\n\
   V25              = ( 83.75, 4.5 )\n\
   V26              = ( 96.5, 8.75 )\n\
   V27              = ( 96, 10.25 )\n\
   V28              = ( 114, 16.5 )\n\
   ..\n\
"5-EL Elev pg mr" = POLYGON\n\
   V1               = ( 37.75, 164 )\n\
   V2               = ( 27.4872, 160.611 )\n\
   V3               = ( 29.75, 153.75 )\n\
   V4               = ( 39.5, 157.5 )\n\
   ..\n\
"5-EL Elev roof pg mr" = POLYGON\n\
   V1               = ( 37.75, 164 )\n\
   V2               = ( 27.4872, 160.611 )\n\
   V3               = ( 29.75, 153.75 )\n\
   V4               = ( 39.5, 157.5 )\n\
   ..\n\
"5-EL Elev floor pg mr" = POLYGON\n\
   V1               = ( 37.75, 164 )\n\
   V2               = ( 27.4872, 160.611 )\n\
   V3               = ( 29.75, 153.75 )\n\
   V4               = ( 39.5, 157.5 )\n\
   ..\n\
"5-ST1 Stair 1 pg mr" = POLYGON\n\
   V1               = ( 96, 10.25 )\n\
   V2               = ( 94.25, 16 )\n\
   V3               = ( 84.25, 13.5 )\n\
   V4               = ( 81.5, 12 )\n\
   V5               = ( 83.75, 4.5 )\n\
   V6               = ( 96.5, 8.75 )\n\
   ..\n\
"5-ST1 Stair 1 roof pg mr" = POLYGON\n\
   V1               = ( 96, 10.25 )\n\
   V2               = ( 94.25, 16 )\n\
   V3               = ( 84.25, 13.5 )\n\
   V4               = ( 81.5, 12 )\n\
   V5               = ( 83.75, 4.5 )\n\
   V6               = ( 96.5, 8.75 )\n\
   ..\n\
"5-ST1 Stair 1 floor pg mr" = POLYGON\n\
   V1               = ( 96, 10.25 )\n\
   V2               = ( 94.25, 16 )\n\
   V3               = ( 84.25, 13.5 )\n\
   V4               = ( 81.5, 12 )\n\
   V5               = ( 83.75, 4.5 )\n\
   V6               = ( 96.5, 8.75 )\n\
   ..\n\
"5-ST2 Stair 2 pg mr" = POLYGON\n\
   V1               = ( 69.25, 85 )\n\
   V2               = ( 63.5, 83 )\n\
   V3               = ( 54.563, 79.914 )\n\
   V4               = ( 57.5, 71.5 )\n\
   V5               = ( 64, 73.25 )\n\
   V6               = ( 72.5, 75.5 )\n\
   ..\n\
"5-ST2 Stair 2 roof pg mr" = POLYGON\n\
   V1               = ( 69.25, 85 )\n\
   V2               = ( 63.5, 83 )\n\
   V3               = ( 54.563, 79.914 )\n\
   V4               = ( 57.5, 71.5 )\n\
   V5               = ( 64, 73.25 )\n\
   V6               = ( 72.5, 75.5 )\n\
   ..\n\
"5-ST2 Stair 2 floor pg mr" = POLYGON\n\
   V1               = ( 69.25, 85 )\n\
   V2               = ( 63.5, 83 )\n\
   V3               = ( 54.563, 79.914 )\n\
   V4               = ( 57.5, 71.5 )\n\
   V5               = ( 64, 73.25 )\n\
   V6               = ( 72.5, 75.5 )\n\
   ..\n\
"5-ST3 Stair 3 pg mr" = POLYGON\n\
   V1               = ( 37, 182.5 )\n\
   V2               = ( 28.5, 179.75 )\n\
   V3               = ( 22, 177.25 )\n\
   V4               = ( 24.9206, 168.394 )\n\
   V5               = ( 39.75, 173.5 )\n\
   ..\n\
"5-ST3 Stair 3 roof pg mr" = POLYGON\n\
   V1               = ( 37, 182.5 )\n\
   V2               = ( 28.5, 179.75 )\n\
   V3               = ( 22, 177.25 )\n\
   V4               = ( 24.9206, 168.394 )\n\
   V5               = ( 39.75, 173.5 )\n\
   ..\n\
"5-ST3 Stair 3 floor pg mr" = POLYGON\n\
   V1               = ( 37, 182.5 )\n\
   V2               = ( 28.5, 179.75 )\n\
   V3               = ( 22, 177.25 )\n\
   V4               = ( 24.9206, 168.394 )\n\
   V5               = ( 39.75, 173.5 )\n\
   ..\n\
"5-ST4 Stair 4 pg mr" = POLYGON\n\
   V1               = ( 16.25, 249.25 )\n\
   V2               = ( 15.5, 251 )\n\
   V3               = ( 3, 246.5 )\n\
   V4               = ( 5.5, 239 )\n\
   V5               = ( 8.5, 240 )\n\
   V6               = ( 18.5, 243.5 )\n\
   ..\n\
"5-ST4 Stair 4 roof pg mr" = POLYGON\n\
   V1               = ( 16.25, 249.25 )\n\
   V2               = ( 15.5, 251 )\n\
   V3               = ( 3, 246.5 )\n\
   V4               = ( 5.5, 239 )\n\
   V5               = ( 8.5, 240 )\n\
   V6               = ( 18.5, 243.5 )\n\
   ..\n\
"5-ST4 Stair 4 floor pg mr" = POLYGON\n\
   V1               = ( 16.25, 249.25 )\n\
   V2               = ( 15.5, 251 )\n\
   V3               = ( 3, 246.5 )\n\
   V4               = ( 5.5, 239 )\n\
   V5               = ( 8.5, 240 )\n\
   V6               = ( 18.5, 243.5 )\n\
   ..\n\
"500 Lounge pg mr" = POLYGON\n\
   V1               = ( 92, 105.25 )\n\
   V2               = ( 88.25, 104.25 )\n\
   V3               = ( 75, 99 )\n\
   V4               = ( 71.5, 98 )\n\
   V5               = ( 75, 87 )\n\
   V6               = ( 78.5, 77.5 )\n\
   V7               = ( 91.75, 82.25 )\n\
   V8               = ( 99, 85 )\n\
   ..\n\
"500 Lounge roof pg mr" = POLYGON\n\
   V1               = ( 92, 105.25 )\n\
   V2               = ( 88.25, 104.25 )\n\
   V3               = ( 75, 99 )\n\
   V4               = ( 71.5, 98 )\n\
   V5               = ( 75, 87 )\n\
   V6               = ( 78.5, 77.5 )\n\
   V7               = ( 91.75, 82.25 )\n\
   V8               = ( 99, 85 )\n\
   ..\n\
"500 Lounge floor pg mr" = POLYGON\n\
   V1               = ( 92, 105.25 )\n\
   V2               = ( 88.25, 104.25 )\n\
   V3               = ( 75, 99 )\n\
   V4               = ( 71.5, 98 )\n\
   V5               = ( 75, 87 )\n\
   V6               = ( 78.5, 77.5 )\n\
   V7               = ( 91.75, 82.25 )\n\
   V8               = ( 99, 85 )\n\
   ..\n\
"501 Corridor pg mr" = POLYGON\n\
   V1               = ( 71.5, 98 )\n\
   V2               = ( 75, 99 )\n\
   V3               = ( 71, 111 )\n\
   V4               = ( 67.25, 122.25 )\n\
   V5               = ( 63.25, 133.5 )\n\
   V6               = ( 60, 143.5 )\n\
   V7               = ( 57.5, 136.5 )\n\
   V8               = ( 62.75, 120.5 )\n\
   V9               = ( 68.25, 104.25 )\n\
   V10              = ( 62.75, 102.25 )\n\
   V11              = ( 65.25, 96.25 )\n\
   V12              = ( 63.5, 83 )\n\
   V13              = ( 69.25, 85 )\n\
   V14              = ( 75, 87 )\n\
   ..\n\
"501 Corridor roof pg mr" = POLYGON\n\
   V1               = ( 71.5, 98 )\n\
   V2               = ( 75, 99 )\n\
   V3               = ( 71, 111 )\n\
   V4               = ( 67.25, 122.25 )\n\
   V5               = ( 63.25, 133.5 )\n\
   V6               = ( 60, 143.5 )\n\
   V7               = ( 57.5, 136.5 )\n\
   V8               = ( 62.75, 120.5 )\n\
   V9               = ( 68.25, 104.25 )\n\
   V10              = ( 62.75, 102.25 )\n\
   V11              = ( 65.25, 96.25 )\n\
   V12              = ( 63.5, 83 )\n\
   V13              = ( 69.25, 85 )\n\
   V14              = ( 75, 87 )\n\
   ..\n\
"501 Corridor floor pg mr" = POLYGON\n\
   V1               = ( 71.5, 98 )\n\
   V2               = ( 75, 99 )\n\
   V3               = ( 71, 111 )\n\
   V4               = ( 67.25, 122.25 )\n\
   V5               = ( 63.25, 133.5 )\n\
   V6               = ( 60, 143.5 )\n\
   V7               = ( 57.5, 136.5 )\n\
   V8               = ( 62.75, 120.5 )\n\
   V9               = ( 68.25, 104.25 )\n\
   V10              = ( 62.75, 102.25 )\n\
   V11              = ( 65.25, 96.25 )\n\
   V12              = ( 63.5, 83 )\n\
   V13              = ( 69.25, 85 )\n\
   V14              = ( 75, 87 )\n\
   ..\n\
"501A Janitor pg mr" = POLYGON\n\
   V1               = ( 75, 87 )\n\
   V2               = ( 69.25, 85 )\n\
   V3               = ( 72.5, 75.5 )\n\
   V4               = ( 78.5, 77.5 )\n\
   ..\n\
"501A Janitor roof pg mr" = POLYGON\n\
   V1               = ( 75, 87 )\n\
   V2               = ( 69.25, 85 )\n\
   V3               = ( 72.5, 75.5 )\n\
   V4               = ( 78.5, 77.5 )\n\
   ..\n\
"501A Janitor floor pg mr" = POLYGON\n\
   V1               = ( 75, 87 )\n\
   V2               = ( 69.25, 85 )\n\
   V3               = ( 72.5, 75.5 )\n\
   V4               = ( 78.5, 77.5 )\n\
   ..\n\
"501B Lounge pg mr" = POLYGON\n\
   V1               = ( 65.25, 96.25 )\n\
   V2               = ( 62.75, 102.25 )\n\
   V3               = ( 58.75, 101.5 )\n\
   V4               = ( 48.25, 98 )\n\
   V5               = ( 54.563, 79.914 )\n\
   V6               = ( 63.5, 83 )\n\
   ..\n\
"501B Lounge roof pg mr" = POLYGON\n\
   V1               = ( 65.25, 96.25 )\n\
   V2               = ( 62.75, 102.25 )\n\
   V3               = ( 58.75, 101.5 )\n\
   V4               = ( 48.25, 98 )\n\
   V5               = ( 54.563, 79.914 )\n\
   V6               = ( 63.5, 83 )\n\
   ..\n\
"501B Lounge floor pg mr" = POLYGON\n\
   V1               = ( 65.25, 96.25 )\n\
   V2               = ( 62.75, 102.25 )\n\
   V3               = ( 58.75, 101.5 )\n\
   V4               = ( 48.25, 98 )\n\
   V5               = ( 54.563, 79.914 )\n\
   V6               = ( 63.5, 83 )\n\
   ..\n\
"502 Room pg mr" = POLYGON\n\
   V1               = ( 91.75, 82.25 )\n\
   V2               = ( 78.5, 77.5 )\n\
   V3               = ( 82.75, 65.75 )\n\
   V4               = ( 95.6927, 70.5992 )\n\
   ..\n\
"502 Room roof pg mr" = POLYGON\n\
   V1               = ( 91.75, 82.25 )\n\
   V2               = ( 78.5, 77.5 )\n\
   V3               = ( 82.75, 65.75 )\n\
   V4               = ( 95.6927, 70.5992 )\n\
   ..\n\
"502 Room floor pg mr" = POLYGON\n\
   V1               = ( 91.75, 82.25 )\n\
   V2               = ( 78.5, 77.5 )\n\
   V3               = ( 82.75, 65.75 )\n\
   V4               = ( 95.6927, 70.5992 )\n\
   ..\n\
"503 Room pg mr" = POLYGON\n\
   V1               = ( 75.75, 71.25 )\n\
   V2               = ( 65.8156, 67.8929 )\n\
   V3               = ( 69.5026, 57.0139 )\n\
   V4               = ( 79.5, 60.25 )\n\
   ..\n\
"503 Room roof pg mr" = POLYGON\n\
   V1               = ( 75.75, 71.25 )\n\
   V2               = ( 65.8156, 67.8929 )\n\
   V3               = ( 69.5026, 57.0139 )\n\
   V4               = ( 79.5, 60.25 )\n\
   ..\n\
"503 Room floor pg mr" = POLYGON\n\
   V1               = ( 75.75, 71.25 )\n\
   V2               = ( 65.8156, 67.8929 )\n\
   V3               = ( 69.5026, 57.0139 )\n\
   V4               = ( 79.5, 60.25 )\n\
   ..\n\
"504 Room pg mr" = POLYGON\n\
   V1               = ( 95.6927, 70.5992 )\n\
   V2               = ( 82.75, 65.75 )\n\
   V3               = ( 85.75, 56 )\n\
   V4               = ( 99.167, 60.3323 )\n\
   ..\n\
"504 Room roof pg mr" = POLYGON\n\
   V1               = ( 95.6927, 70.5992 )\n\
   V2               = ( 82.75, 65.75 )\n\
   V3               = ( 85.75, 56 )\n\
   V4               = ( 99.167, 60.3323 )\n\
   ..\n\
"504 Room floor pg mr" = POLYGON\n\
   V1               = ( 95.6927, 70.5992 )\n\
   V2               = ( 82.75, 65.75 )\n\
   V3               = ( 85.75, 56 )\n\
   V4               = ( 99.167, 60.3323 )\n\
   ..\n\
"506 Room pg mr" = POLYGON\n\
   V1               = ( 99.167, 60.3323 )\n\
   V2               = ( 85.75, 56 )\n\
   V3               = ( 89.25, 45.5 )\n\
   V4               = ( 102.563, 50.2961 )\n\
   ..\n\
"506 Room roof pg mr" = POLYGON\n\
   V1               = ( 99.167, 60.3323 )\n\
   V2               = ( 85.75, 56 )\n\
   V3               = ( 89.25, 45.5 )\n\
   V4               = ( 102.563, 50.2961 )\n\
   ..\n\
"506 Room floor pg mr" = POLYGON\n\
   V1               = ( 99.167, 60.3323 )\n\
   V2               = ( 85.75, 56 )\n\
   V3               = ( 89.25, 45.5 )\n\
   V4               = ( 102.563, 50.2961 )\n\
   ..\n\
"507 Room pg mr" = POLYGON\n\
   V1               = ( 79.5, 60.25 )\n\
   V2               = ( 69.5026, 57.0139 )\n\
   V3               = ( 73.4892, 45.2511 )\n\
   V4               = ( 83.25, 48.5 )\n\
   ..\n\
"507 Room roof pg mr" = POLYGON\n\
   V1               = ( 79.5, 60.25 )\n\
   V2               = ( 69.5026, 57.0139 )\n\
   V3               = ( 73.4892, 45.2511 )\n\
   V4               = ( 83.25, 48.5 )\n\
   ..\n\
"507 Room floor pg mr" = POLYGON\n\
   V1               = ( 79.5, 60.25 )\n\
   V2               = ( 69.5026, 57.0139 )\n\
   V3               = ( 73.4892, 45.2511 )\n\
   V4               = ( 83.25, 48.5 )\n\
   ..\n\
"508 Bathroom pg mr" = POLYGON\n\
   V1               = ( 102.563, 50.2961 )\n\
   V2               = ( 89.25, 45.5 )\n\
   V3               = ( 93, 34.5 )\n\
   V4               = ( 106.393, 38.9795 )\n\
   ..\n\
"508 Bathroom roof pg mr" = POLYGON\n\
   V1               = ( 102.563, 50.2961 )\n\
   V2               = ( 89.25, 45.5 )\n\
   V3               = ( 93, 34.5 )\n\
   V4               = ( 106.393, 38.9795 )\n\
   ..\n\
"508 Bathroom floor pg mr" = POLYGON\n\
   V1               = ( 102.563, 50.2961 )\n\
   V2               = ( 89.25, 45.5 )\n\
   V3               = ( 93, 34.5 )\n\
   V4               = ( 106.393, 38.9795 )\n\
   ..\n\
"509 Room pg mr" = POLYGON\n\
   V1               = ( 83.25, 48.5 )\n\
   V2               = ( 73.4892, 45.2511 )\n\
   V3               = ( 78.9329, 29.1887 )\n\
   V4               = ( 88.75, 32.5 )\n\
   ..\n\
"509 Room roof pg mr" = POLYGON\n\
   V1               = ( 83.25, 48.5 )\n\
   V2               = ( 73.4892, 45.2511 )\n\
   V3               = ( 78.9329, 29.1887 )\n\
   V4               = ( 88.75, 32.5 )\n\
   ..\n\
"509 Room floor pg mr" = POLYGON\n\
   V1               = ( 83.25, 48.5 )\n\
   V2               = ( 73.4892, 45.2511 )\n\
   V3               = ( 78.9329, 29.1887 )\n\
   V4               = ( 88.75, 32.5 )\n\
   ..\n\
"510 Room pg mr" = POLYGON\n\
   V1               = ( 106.393, 38.9795 )\n\
   V2               = ( 93, 34.5 )\n\
   V3               = ( 96.75, 22.75 )\n\
   V4               = ( 110.257, 27.5607 )\n\
   ..\n\
"510 Room roof pg mr" = POLYGON\n\
   V1               = ( 106.393, 38.9795 )\n\
   V2               = ( 93, 34.5 )\n\
   V3               = ( 96.75, 22.75 )\n\
   V4               = ( 110.257, 27.5607 )\n\
   ..\n\
"510 Room floor pg mr" = POLYGON\n\
   V1               = ( 106.393, 38.9795 )\n\
   V2               = ( 93, 34.5 )\n\
   V3               = ( 96.75, 22.75 )\n\
   V4               = ( 110.257, 27.5607 )\n\
   ..\n\
"511 Room pg mr" = POLYGON\n\
   V1               = ( 88.75, 32.5 )\n\
   V2               = ( 78.9329, 29.1887 )\n\
   V3               = ( 84.25, 13.5 )\n\
   V4               = ( 94.25, 16 )\n\
   ..\n\
"511 Room roof pg mr" = POLYGON\n\
   V1               = ( 88.75, 32.5 )\n\
   V2               = ( 78.9329, 29.1887 )\n\
   V3               = ( 84.25, 13.5 )\n\
   V4               = ( 94.25, 16 )\n\
   ..\n\
"511 Room floor pg mr" = POLYGON\n\
   V1               = ( 88.75, 32.5 )\n\
   V2               = ( 78.9329, 29.1887 )\n\
   V3               = ( 84.25, 13.5 )\n\
   V4               = ( 94.25, 16 )\n\
   ..\n\
"512 Room pg mr" = POLYGON\n\
   V1               = ( 110.257, 27.5607 )\n\
   V2               = ( 96.75, 22.75 )\n\
   V3               = ( 100.4, 11.7779 )\n\
   V4               = ( 114, 16.5 )\n\
   ..\n\
"512 Room roof pg mr" = POLYGON\n\
   V1               = ( 110.257, 27.5607 )\n\
   V2               = ( 96.75, 22.75 )\n\
   V3               = ( 100.4, 11.7779 )\n\
   V4               = ( 114, 16.5 )\n\
   ..\n\
"512 Room floor pg mr" = POLYGON\n\
   V1               = ( 110.257, 27.5607 )\n\
   V2               = ( 96.75, 22.75 )\n\
   V3               = ( 100.4, 11.7779 )\n\
   V4               = ( 114, 16.5 )\n\
   ..\n\
"513 Corridor pg mr" = POLYGON\n\
   V1               = ( 96.75, 22.75 )\n\
   V2               = ( 93, 34.5 )\n\
   V3               = ( 89.25, 45.5 )\n\
   V4               = ( 85.75, 56 )\n\
   V5               = ( 83.25, 48.5 )\n\
   V6               = ( 88.75, 32.5 )\n\
   V7               = ( 94.25, 16 )\n\
   V8               = ( 96, 10.25 )\n\
   V9               = ( 100.4, 11.7779 )\n\
   ..\n\
"513 Corridor roof pg mr" = POLYGON\n\
   V1               = ( 96.75, 22.75 )\n\
   V2               = ( 93, 34.5 )\n\
   V3               = ( 89.25, 45.5 )\n\
   V4               = ( 85.75, 56 )\n\
   V5               = ( 83.25, 48.5 )\n\
   V6               = ( 88.75, 32.5 )\n\
   V7               = ( 94.25, 16 )\n\
   V8               = ( 96, 10.25 )\n\
   V9               = ( 100.4, 11.7779 )\n\
   ..\n\
"513 Corridor floor pg mr" = POLYGON\n\
   V1               = ( 96.75, 22.75 )\n\
   V2               = ( 93, 34.5 )\n\
   V3               = ( 89.25, 45.5 )\n\
   V4               = ( 85.75, 56 )\n\
   V5               = ( 83.25, 48.5 )\n\
   V6               = ( 88.75, 32.5 )\n\
   V7               = ( 94.25, 16 )\n\
   V8               = ( 96, 10.25 )\n\
   V9               = ( 100.4, 11.7779 )\n\
   ..\n\
"514 Corridor pg mr" = POLYGON\n\
   V1               = ( 82.75, 65.75 )\n\
   V2               = ( 78.5, 77.5 )\n\
   V3               = ( 72.5, 75.5 )\n\
   V4               = ( 64, 73.25 )\n\
   V5               = ( 65.8156, 67.8929 )\n\
   V6               = ( 75.75, 71.25 )\n\
   V7               = ( 79.5, 60.25 )\n\
   V8               = ( 83.25, 48.5 )\n\
   V9               = ( 85.75, 56 )\n\
   ..\n\
"514 Corridor roof pg mr" = POLYGON\n\
   V1               = ( 82.75, 65.75 )\n\
   V2               = ( 78.5, 77.5 )\n\
   V3               = ( 72.5, 75.5 )\n\
   V4               = ( 64, 73.25 )\n\
   V5               = ( 65.8156, 67.8929 )\n\
   V6               = ( 75.75, 71.25 )\n\
   V7               = ( 79.5, 60.25 )\n\
   V8               = ( 83.25, 48.5 )\n\
   V9               = ( 85.75, 56 )\n\
   ..\n\
"514 Corridor floor pg mr" = POLYGON\n\
   V1               = ( 82.75, 65.75 )\n\
   V2               = ( 78.5, 77.5 )\n\
   V3               = ( 72.5, 75.5 )\n\
   V4               = ( 64, 73.25 )\n\
   V5               = ( 65.8156, 67.8929 )\n\
   V6               = ( 75.75, 71.25 )\n\
   V7               = ( 79.5, 60.25 )\n\
   V8               = ( 83.25, 48.5 )\n\
   V9               = ( 85.75, 56 )\n\
   ..\n\
"521 Corridor pg mr" = POLYGON\n\
   V1               = ( 56.5, 153.5 )\n\
   V2               = ( 52.75, 165 )\n\
   V3               = ( 49.5, 164 )\n\
   V4               = ( 45.5, 175.5 )\n\
   V5               = ( 39.75, 173.5 )\n\
   V6               = ( 24.9206, 168.394 )\n\
   V7               = ( 27.4872, 160.611 )\n\
   V8               = ( 37.75, 164 )\n\
   V9               = ( 39.5, 157.5 )\n\
   V10              = ( 40.1344, 155.654 )\n\
   V11              = ( 49.75, 159.25 )\n\
   V12              = ( 53.75, 148.25 )\n\
   V13              = ( 57.5, 136.5 )\n\
   V14              = ( 60, 143.5 )\n\
   ..\n\
"521 Corridor roof pg mr" = POLYGON\n\
   V1               = ( 56.5, 153.5 )\n\
   V2               = ( 52.75, 165 )\n\
   V3               = ( 49.5, 164 )\n\
   V4               = ( 45.5, 175.5 )\n\
   V5               = ( 39.75, 173.5 )\n\
   V6               = ( 24.9206, 168.394 )\n\
   V7               = ( 27.4872, 160.611 )\n\
   V8               = ( 37.75, 164 )\n\
   V9               = ( 39.5, 157.5 )\n\
   V10              = ( 40.1344, 155.654 )\n\
   V11              = ( 49.75, 159.25 )\n\
   V12              = ( 53.75, 148.25 )\n\
   V13              = ( 57.5, 136.5 )\n\
   V14              = ( 60, 143.5 )\n\
   ..\n\
"521 Corridor floor pg mr" = POLYGON\n\
   V1               = ( 56.5, 153.5 )\n\
   V2               = ( 52.75, 165 )\n\
   V3               = ( 49.5, 164 )\n\
   V4               = ( 45.5, 175.5 )\n\
   V5               = ( 39.75, 173.5 )\n\
   V6               = ( 24.9206, 168.394 )\n\
   V7               = ( 27.4872, 160.611 )\n\
   V8               = ( 37.75, 164 )\n\
   V9               = ( 39.5, 157.5 )\n\
   V10              = ( 40.1344, 155.654 )\n\
   V11              = ( 49.75, 159.25 )\n\
   V12              = ( 53.75, 148.25 )\n\
   V13              = ( 57.5, 136.5 )\n\
   V14              = ( 60, 143.5 )\n\
   ..\n\
"521A IT pg mr" = POLYGON\n\
   V1               = ( 42.5, 184.5 )\n\
   V2               = ( 37, 182.5 )\n\
   V3               = ( 39.75, 173.5 )\n\
   V4               = ( 45.5, 175.5 )\n\
   ..\n\
"521A IT roof pg mr" = POLYGON\n\
   V1               = ( 42.5, 184.5 )\n\
   V2               = ( 37, 182.5 )\n\
   V3               = ( 39.75, 173.5 )\n\
   V4               = ( 45.5, 175.5 )\n\
   ..\n\
"521A IT floor pg mr" = POLYGON\n\
   V1               = ( 42.5, 184.5 )\n\
   V2               = ( 37, 182.5 )\n\
   V3               = ( 39.75, 173.5 )\n\
   V4               = ( 45.5, 175.5 )\n\
   ..\n\
"522 Room pg mr" = POLYGON\n\
   V1               = ( 66.5, 169.75 )\n\
   V2               = ( 52.75, 165 )\n\
   V3               = ( 56.5, 153.5 )\n\
   V4               = ( 70.3491, 158.158 )\n\
   ..\n\
"522 Room roof pg mr" = POLYGON\n\
   V1               = ( 66.5, 169.75 )\n\
   V2               = ( 52.75, 165 )\n\
   V3               = ( 56.5, 153.5 )\n\
   V4               = ( 70.3491, 158.158 )\n\
   ..\n\
"522 Room floor pg mr" = POLYGON\n\
   V1               = ( 66.5, 169.75 )\n\
   V2               = ( 52.75, 165 )\n\
   V3               = ( 56.5, 153.5 )\n\
   V4               = ( 70.3491, 158.158 )\n\
   ..\n\
"523 Room pg mr" = POLYGON\n\
   V1               = ( 49.75, 159.25 )\n\
   V2               = ( 40.1344, 155.654 )\n\
   V3               = ( 43.8377, 144.881 )\n\
   V4               = ( 53.75, 148.25 )\n\
   ..\n\
"523 Room roof pg mr" = POLYGON\n\
   V1               = ( 49.75, 159.25 )\n\
   V2               = ( 40.1344, 155.654 )\n\
   V3               = ( 43.8377, 144.881 )\n\
   V4               = ( 53.75, 148.25 )\n\
   ..\n\
"523 Room floor pg mr" = POLYGON\n\
   V1               = ( 49.75, 159.25 )\n\
   V2               = ( 40.1344, 155.654 )\n\
   V3               = ( 43.8377, 144.881 )\n\
   V4               = ( 53.75, 148.25 )\n\
   ..\n\
"524 Room pg mr" = POLYGON\n\
   V1               = ( 70.3491, 158.158 )\n\
   V2               = ( 56.5, 153.5 )\n\
   V3               = ( 60, 143.5 )\n\
   V4               = ( 73.5822, 148.422 )\n\
   ..\n\
"524 Room roof pg mr" = POLYGON\n\
   V1               = ( 70.3491, 158.158 )\n\
   V2               = ( 56.5, 153.5 )\n\
   V3               = ( 60, 143.5 )\n\
   V4               = ( 73.5822, 148.422 )\n\
   ..\n\
"524 Room floor pg mr" = POLYGON\n\
   V1               = ( 70.3491, 158.158 )\n\
   V2               = ( 56.5, 153.5 )\n\
   V3               = ( 60, 143.5 )\n\
   V4               = ( 73.5822, 148.422 )\n\
   ..\n\
"526 Room pg mr" = POLYGON\n\
   V1               = ( 73.5822, 148.422 )\n\
   V2               = ( 60, 143.5 )\n\
   V3               = ( 63.25, 133.5 )\n\
   V4               = ( 76.9175, 138.378 )\n\
   ..\n\
"526 Room roof pg mr" = POLYGON\n\
   V1               = ( 73.5822, 148.422 )\n\
   V2               = ( 60, 143.5 )\n\
   V3               = ( 63.25, 133.5 )\n\
   V4               = ( 76.9175, 138.378 )\n\
   ..\n\
"526 Room floor pg mr" = POLYGON\n\
   V1               = ( 73.5822, 148.422 )\n\
   V2               = ( 60, 143.5 )\n\
   V3               = ( 63.25, 133.5 )\n\
   V4               = ( 76.9175, 138.378 )\n\
   ..\n\
"527 Room pg mr" = POLYGON\n\
   V1               = ( 53.75, 148.25 )\n\
   V2               = ( 43.8377, 144.881 )\n\
   V3               = ( 47.8663, 133.162 )\n\
   V4               = ( 57.5, 136.5 )\n\
   ..\n\
"527 Room roof pg mr" = POLYGON\n\
   V1               = ( 53.75, 148.25 )\n\
   V2               = ( 43.8377, 144.881 )\n\
   V3               = ( 47.8663, 133.162 )\n\
   V4               = ( 57.5, 136.5 )\n\
   ..\n\
"527 Room floor pg mr" = POLYGON\n\
   V1               = ( 53.75, 148.25 )\n\
   V2               = ( 43.8377, 144.881 )\n\
   V3               = ( 47.8663, 133.162 )\n\
   V4               = ( 57.5, 136.5 )\n\
   ..\n\
"528 Bathroom pg mr" = POLYGON\n\
   V1               = ( 76.9175, 138.378 )\n\
   V2               = ( 63.25, 133.5 )\n\
   V3               = ( 67.25, 122.25 )\n\
   V4               = ( 80.6441, 127.155 )\n\
   ..\n\
"528 Bathroom roof pg mr" = POLYGON\n\
   V1               = ( 76.9175, 138.378 )\n\
   V2               = ( 63.25, 133.5 )\n\
   V3               = ( 67.25, 122.25 )\n\
   V4               = ( 80.6441, 127.155 )\n\
   ..\n\
"528 Bathroom floor pg mr" = POLYGON\n\
   V1               = ( 76.9175, 138.378 )\n\
   V2               = ( 63.25, 133.5 )\n\
   V3               = ( 67.25, 122.25 )\n\
   V4               = ( 80.6441, 127.155 )\n\
   ..\n\
"529 Room pg mr" = POLYGON\n\
   V1               = ( 57.5, 136.5 )\n\
   V2               = ( 47.8663, 133.162 )\n\
   V3               = ( 53.3326, 117.26 )\n\
   V4               = ( 62.75, 120.5 )\n\
   ..\n\
"529 Room roof pg mr" = POLYGON\n\
   V1               = ( 57.5, 136.5 )\n\
   V2               = ( 47.8663, 133.162 )\n\
   V3               = ( 53.3326, 117.26 )\n\
   V4               = ( 62.75, 120.5 )\n\
   ..\n\
"529 Room floor pg mr" = POLYGON\n\
   V1               = ( 57.5, 136.5 )\n\
   V2               = ( 47.8663, 133.162 )\n\
   V3               = ( 53.3326, 117.26 )\n\
   V4               = ( 62.75, 120.5 )\n\
   ..\n\
"530 Room pg mr" = POLYGON\n\
   V1               = ( 80.6441, 127.155 )\n\
   V2               = ( 67.25, 122.25 )\n\
   V3               = ( 71, 111 )\n\
   V4               = ( 84.4983, 115.548 )\n\
   ..\n\
"530 Room roof pg mr" = POLYGON\n\
   V1               = ( 80.6441, 127.155 )\n\
   V2               = ( 67.25, 122.25 )\n\
   V3               = ( 71, 111 )\n\
   V4               = ( 84.4983, 115.548 )\n\
   ..\n\
"530 Room floor pg mr" = POLYGON\n\
   V1               = ( 80.6441, 127.155 )\n\
   V2               = ( 67.25, 122.25 )\n\
   V3               = ( 71, 111 )\n\
   V4               = ( 84.4983, 115.548 )\n\
   ..\n\
"531 Room pg mr" = POLYGON\n\
   V1               = ( 62.75, 120.5 )\n\
   V2               = ( 53.3326, 117.26 )\n\
   V3               = ( 58.75, 101.5 )\n\
   V4               = ( 62.75, 102.25 )\n\
   V5               = ( 68.25, 104.25 )\n\
   ..\n\
"531 Room roof pg mr" = POLYGON\n\
   V1               = ( 62.75, 120.5 )\n\
   V2               = ( 53.3326, 117.26 )\n\
   V3               = ( 58.75, 101.5 )\n\
   V4               = ( 62.75, 102.25 )\n\
   V5               = ( 68.25, 104.25 )\n\
   ..\n\
"531 Room floor pg mr" = POLYGON\n\
   V1               = ( 62.75, 120.5 )\n\
   V2               = ( 53.3326, 117.26 )\n\
   V3               = ( 58.75, 101.5 )\n\
   V4               = ( 62.75, 102.25 )\n\
   V5               = ( 68.25, 104.25 )\n\
   ..\n\
"531 Corridor pg mr" = POLYGON\n\
   V1               = ( 28.25, 227.75 )\n\
   V2               = ( 24.5, 239.25 )\n\
   V3               = ( 20.8775, 250.857 )\n\
   V4               = ( 16.25, 249.25 )\n\
   V5               = ( 18.5, 243.5 )\n\
   V6               = ( 23.75, 226.75 )\n\
   V7               = ( 29, 210.5 )\n\
   V8               = ( 32.25, 216.5 )\n\
   ..\n\
"531 Corridor roof pg mr" = POLYGON\n\
   V1               = ( 28.25, 227.75 )\n\
   V2               = ( 24.5, 239.25 )\n\
   V3               = ( 20.8775, 250.857 )\n\
   V4               = ( 16.25, 249.25 )\n\
   V5               = ( 18.5, 243.5 )\n\
   V6               = ( 23.75, 226.75 )\n\
   V7               = ( 29, 210.5 )\n\
   V8               = ( 32.25, 216.5 )\n\
   ..\n\
"531 Corridor floor pg mr" = POLYGON\n\
   V1               = ( 28.25, 227.75 )\n\
   V2               = ( 24.5, 239.25 )\n\
   V3               = ( 20.8775, 250.857 )\n\
   V4               = ( 16.25, 249.25 )\n\
   V5               = ( 18.5, 243.5 )\n\
   V6               = ( 23.75, 226.75 )\n\
   V7               = ( 29, 210.5 )\n\
   V8               = ( 32.25, 216.5 )\n\
   ..\n\
"532 Room pg mr" = POLYGON\n\
   V1               = ( 84.4983, 115.548 )\n\
   V2               = ( 71, 111 )\n\
   V3               = ( 75, 99 )\n\
   V4               = ( 88.25, 104.25 )\n\
   ..\n\
"532 Room roof pg mr" = POLYGON\n\
   V1               = ( 84.4983, 115.548 )\n\
   V2               = ( 71, 111 )\n\
   V3               = ( 75, 99 )\n\
   V4               = ( 88.25, 104.25 )\n\
   ..\n\
"532 Room floor pg mr" = POLYGON\n\
   V1               = ( 84.4983, 115.548 )\n\
   V2               = ( 71, 111 )\n\
   V3               = ( 75, 99 )\n\
   V4               = ( 88.25, 104.25 )\n\
   ..\n\
"540 Lounge pg mr" = POLYGON\n\
   V1               = ( 63.75, 191.25 )\n\
   V2               = ( 56.75, 189 )\n\
   V3               = ( 42.5, 184.5 )\n\
   V4               = ( 45.5, 175.5 )\n\
   V5               = ( 49.5, 164 )\n\
   V6               = ( 52.75, 165 )\n\
   V7               = ( 66.5, 169.75 )\n\
   V8               = ( 70.5, 171 )\n\
   ..\n\
"540 Lounge roof pg mr" = POLYGON\n\
   V1               = ( 63.75, 191.25 )\n\
   V2               = ( 56.75, 189 )\n\
   V3               = ( 42.5, 184.5 )\n\
   V4               = ( 45.5, 175.5 )\n\
   V5               = ( 49.5, 164 )\n\
   V6               = ( 52.75, 165 )\n\
   V7               = ( 66.5, 169.75 )\n\
   V8               = ( 70.5, 171 )\n\
   ..\n\
"540 Lounge floor pg mr" = POLYGON\n\
   V1               = ( 63.75, 191.25 )\n\
   V2               = ( 56.75, 189 )\n\
   V3               = ( 42.5, 184.5 )\n\
   V4               = ( 45.5, 175.5 )\n\
   V5               = ( 49.5, 164 )\n\
   V6               = ( 52.75, 165 )\n\
   V7               = ( 66.5, 169.75 )\n\
   V8               = ( 70.5, 171 )\n\
   ..\n\
"540 Room pg mr" = POLYGON\n\
   V1               = ( 52.4731, 201.641 )\n\
   V2               = ( 38.75, 196.5 )\n\
   V3               = ( 42.5, 184.5 )\n\
   V4               = ( 56.75, 189 )\n\
   ..\n\
"540 Room roof pg mr" = POLYGON\n\
   V1               = ( 52.4731, 201.641 )\n\
   V2               = ( 38.75, 196.5 )\n\
   V3               = ( 42.5, 184.5 )\n\
   V4               = ( 56.75, 189 )\n\
   ..\n\
"540 Room floor pg mr" = POLYGON\n\
   V1               = ( 52.4731, 201.641 )\n\
   V2               = ( 38.75, 196.5 )\n\
   V3               = ( 42.5, 184.5 )\n\
   V4               = ( 56.75, 189 )\n\
   ..\n\
"543 Room pg mr" = POLYGON\n\
   V1               = ( 33, 199.25 )\n\
   V2               = ( 23.1597, 195.838 )\n\
   V3               = ( 26.879, 184.633 )\n\
   V4               = ( 37, 188 )\n\
   ..\n\
"543 Room roof pg mr" = POLYGON\n\
   V1               = ( 33, 199.25 )\n\
   V2               = ( 23.1597, 195.838 )\n\
   V3               = ( 26.879, 184.633 )\n\
   V4               = ( 37, 188 )\n\
   ..\n\
"543 Room floor pg mr" = POLYGON\n\
   V1               = ( 33, 199.25 )\n\
   V2               = ( 23.1597, 195.838 )\n\
   V3               = ( 26.879, 184.633 )\n\
   V4               = ( 37, 188 )\n\
   ..\n\
"544 Room pg mr" = POLYGON\n\
   V1               = ( 49.2668, 211.117 )\n\
   V2               = ( 35.5, 206.5 )\n\
   V3               = ( 38.75, 196.5 )\n\
   V4               = ( 52.4731, 201.641 )\n\
   ..\n\
"544 Room roof pg mr" = POLYGON\n\
   V1               = ( 49.2668, 211.117 )\n\
   V2               = ( 35.5, 206.5 )\n\
   V3               = ( 38.75, 196.5 )\n\
   V4               = ( 52.4731, 201.641 )\n\
   ..\n\
"544 Room floor pg mr" = POLYGON\n\
   V1               = ( 49.2668, 211.117 )\n\
   V2               = ( 35.5, 206.5 )\n\
   V3               = ( 38.75, 196.5 )\n\
   V4               = ( 52.4731, 201.641 )\n\
   ..\n\
"545 Room pg mr" = POLYGON\n\
   V1               = ( 29, 210.5 )\n\
   V2               = ( 19.3167, 207.415 )\n\
   V3               = ( 23.1597, 195.838 )\n\
   V4               = ( 33, 199.25 )\n\
   ..\n\
"545 Room roof pg mr" = POLYGON\n\
   V1               = ( 29, 210.5 )\n\
   V2               = ( 19.3167, 207.415 )\n\
   V3               = ( 23.1597, 195.838 )\n\
   V4               = ( 33, 199.25 )\n\
   ..\n\
"545 Room floor pg mr" = POLYGON\n\
   V1               = ( 29, 210.5 )\n\
   V2               = ( 19.3167, 207.415 )\n\
   V3               = ( 23.1597, 195.838 )\n\
   V4               = ( 33, 199.25 )\n\
   ..\n\
"546 Room pg mr" = POLYGON\n\
   V1               = ( 45.8487, 221.219 )\n\
   V2               = ( 32.25, 216.5 )\n\
   V3               = ( 35.5, 206.5 )\n\
   V4               = ( 49.2668, 211.117 )\n\
   ..\n\
"546 Room roof pg mr" = POLYGON\n\
   V1               = ( 45.8487, 221.219 )\n\
   V2               = ( 32.25, 216.5 )\n\
   V3               = ( 35.5, 206.5 )\n\
   V4               = ( 49.2668, 211.117 )\n\
   ..\n\
"546 Room floor pg mr" = POLYGON\n\
   V1               = ( 45.8487, 221.219 )\n\
   V2               = ( 32.25, 216.5 )\n\
   V3               = ( 35.5, 206.5 )\n\
   V4               = ( 49.2668, 211.117 )\n\
   ..\n\
"547 Room pg mr" = POLYGON\n\
   V1               = ( 23.75, 226.75 )\n\
   V2               = ( 13.9659, 223.534 )\n\
   V3               = ( 19.3167, 207.415 )\n\
   V4               = ( 29, 210.5 )\n\
   ..\n\
"547 Room roof pg mr" = POLYGON\n\
   V1               = ( 23.75, 226.75 )\n\
   V2               = ( 13.9659, 223.534 )\n\
   V3               = ( 19.3167, 207.415 )\n\
   V4               = ( 29, 210.5 )\n\
   ..\n\
"547 Room floor pg mr" = POLYGON\n\
   V1               = ( 23.75, 226.75 )\n\
   V2               = ( 13.9659, 223.534 )\n\
   V3               = ( 19.3167, 207.415 )\n\
   V4               = ( 29, 210.5 )\n\
   ..\n\
"548 Bathroom pg mr" = POLYGON\n\
   V1               = ( 42.0621, 232.411 )\n\
   V2               = ( 28.25, 227.75 )\n\
   V3               = ( 32.25, 216.5 )\n\
   V4               = ( 45.8487, 221.219 )\n\
   ..\n\
"548 Bathroom roof pg mr" = POLYGON\n\
   V1               = ( 42.0621, 232.411 )\n\
   V2               = ( 28.25, 227.75 )\n\
   V3               = ( 32.25, 216.5 )\n\
   V4               = ( 45.8487, 221.219 )\n\
   ..\n\
"548 Bathroom floor pg mr" = POLYGON\n\
   V1               = ( 42.0621, 232.411 )\n\
   V2               = ( 28.25, 227.75 )\n\
   V3               = ( 32.25, 216.5 )\n\
   V4               = ( 45.8487, 221.219 )\n\
   ..\n\
"549 Room pg mr" = POLYGON\n\
   V1               = ( 18.5, 243.5 )\n\
   V2               = ( 8.5, 240 )\n\
   V3               = ( 13.9659, 223.534 )\n\
   V4               = ( 23.75, 226.75 )\n\
   ..\n\
"549 Room roof pg mr" = POLYGON\n\
   V1               = ( 18.5, 243.5 )\n\
   V2               = ( 8.5, 240 )\n\
   V3               = ( 13.9659, 223.534 )\n\
   V4               = ( 23.75, 226.75 )\n\
   ..\n\
"549 Room floor pg mr" = POLYGON\n\
   V1               = ( 18.5, 243.5 )\n\
   V2               = ( 8.5, 240 )\n\
   V3               = ( 13.9659, 223.534 )\n\
   V4               = ( 23.75, 226.75 )\n\
   ..\n\
"550 Room pg mr" = POLYGON\n\
   V1               = ( 38.2207, 243.764 )\n\
   V2               = ( 24.5, 239.25 )\n\
   V3               = ( 28.25, 227.75 )\n\
   V4               = ( 42.0621, 232.411 )\n\
   ..\n\
"550 Room roof pg mr" = POLYGON\n\
   V1               = ( 38.2207, 243.764 )\n\
   V2               = ( 24.5, 239.25 )\n\
   V3               = ( 28.25, 227.75 )\n\
   V4               = ( 42.0621, 232.411 )\n\
   ..\n\
"550 Room floor pg mr" = POLYGON\n\
   V1               = ( 38.2207, 243.764 )\n\
   V2               = ( 24.5, 239.25 )\n\
   V3               = ( 28.25, 227.75 )\n\
   V4               = ( 42.0621, 232.411 )\n\
   ..\n\
"552 Room pg mr" = POLYGON\n\
   V1               = ( 34.25, 255.5 )\n\
   V2               = ( 20.8775, 250.857 )\n\
   V3               = ( 24.5, 239.25 )\n\
   V4               = ( 38.2207, 243.764 )\n\
   ..\n\
"552 Room roof pg mr" = POLYGON\n\
   V1               = ( 34.25, 255.5 )\n\
   V2               = ( 20.8775, 250.857 )\n\
   V3               = ( 24.5, 239.25 )\n\
   V4               = ( 38.2207, 243.764 )\n\
   ..\n\
"552 Room floor pg mr" = POLYGON\n\
   V1               = ( 34.25, 255.5 )\n\
   V2               = ( 20.8775, 250.857 )\n\
   V3               = ( 24.5, 239.25 )\n\
   V4               = ( 38.2207, 243.764 )\n\
   ..\n\
"553 Corridor pg mr" = POLYGON\n\
   V1               = ( 38.75, 196.5 )\n\
   V2               = ( 35.5, 206.5 )\n\
   V3               = ( 32.25, 216.5 )\n\
   V4               = ( 29, 210.5 )\n\
   V5               = ( 33, 199.25 )\n\
   V6               = ( 37, 188 )\n\
   V7               = ( 26.879, 184.633 )\n\
   V8               = ( 28.5, 179.75 )\n\
   V9               = ( 37, 182.5 )\n\
   V10              = ( 42.5, 184.5 )\n\
   ..\n\
"553 Corridor roof pg mr" = POLYGON\n\
   V1               = ( 38.75, 196.5 )\n\
   V2               = ( 35.5, 206.5 )\n\
   V3               = ( 32.25, 216.5 )\n\
   V4               = ( 29, 210.5 )\n\
   V5               = ( 33, 199.25 )\n\
   V6               = ( 37, 188 )\n\
   V7               = ( 26.879, 184.633 )\n\
   V8               = ( 28.5, 179.75 )\n\
   V9               = ( 37, 182.5 )\n\
   V10              = ( 42.5, 184.5 )\n\
   ..\n\
"553 Corridor floor pg mr" = POLYGON\n\
   V1               = ( 38.75, 196.5 )\n\
   V2               = ( 35.5, 206.5 )\n\
   V3               = ( 32.25, 216.5 )\n\
   V4               = ( 29, 210.5 )\n\
   V5               = ( 33, 199.25 )\n\
   V6               = ( 37, 188 )\n\
   V7               = ( 26.879, 184.633 )\n\
   V8               = ( 28.5, 179.75 )\n\
   V9               = ( 37, 182.5 )\n\
   V10              = ( 42.5, 184.5 )\n\
   ..\n\
\n\
\n\
$ ---------------------------------------------------------\n\
$              Wall Parameters\n\
$ ---------------------------------------------------------\n\
\n\
\n\
\n\
$ ---------------------------------------------------------\n\
$              Fixed and Building Shades\n\
$ ---------------------------------------------------------\n\
\n\
\n\
\n\
\n\
$ ---------------------------------------------------------\n\
$              Misc Cost Related Objects\n\
$ ---------------------------------------------------------\n\
\n\
\n\
\n\
"BASELINE 1" = BASELINE\n\
   ..\n\
\n\
\n\
$ *********************************************************\n\
$ **                                                     **\n\
$ **      Floors / Spaces / Walls / Windows / Doors      **\n\
$ **                                                     **\n\
$ *********************************************************\n\
\n\
SET-DEFAULT FOR EXTERIOR-WALL\n\
   CONSTRUCTION     = "metal curt-wall 3in insul constr"\n\
   ..\n\
\n\
SET-DEFAULT FOR WINDOW\n\
   GLASS-TYPE       = "Solarban 70XL"\n\
   ..\n\
\n\
SET-DEFAULT FOR INTERIOR-WALL\n\
   CONSTRUCTION     = "frame wall 0.75in gyp constr"\n\
   ..\n\
\n\
SET-DEFAULT FOR UNDERGROUND-WALL\n\
   CONSTRUCTION     = "ug wall constr"\n\
   ..\n\
\n\
"Basement" = FLOOR\n\
   Z                = 0\n\
   POLYGON          = "Basement pg"\n\
   SHAPE            = POLYGON\n\
   FLOOR-HEIGHT     = 8.75\n\
   SPACE-HEIGHT     = 8\n\
   C-DIAGRAM-DATA   = *Detailed UI DiagData*\n\
   ..\n\
"0-EL1 Elevator 1" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = UNCONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office1"\n\
   LIGHTING-SCHEDUL = ( "Office1" )\n\
   EQUIP-SCHEDULE   = ( "Office1" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "0-EL1 Elevator 1 pg"\n\
   C-SUB-AREA       = ( 76.2 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"0-EL1 Elevator 1 x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V1\n\
   ..\n\
"0-EL1 Elevator 1 x-wall 2" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"0-EL1 Elevator 1 - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "0-EL1 Elevator 1 pg"\n\
   ..\n\
"0-EL1 Elevator 1 i-wall 3" = INTERIOR-WALL\n\
   NEXT-TO          = "023A Corridor"\n\
   LOCATION         = SPACE-V5\n\
   ..\n\
"0-EL1 Elevator 1 - ug flr" = UNDERGROUND-WALL\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "0-EL1 Elevator 1 slab pg mr"\n\
   ..\n\
"0-ST2 Stair 2" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = UNCONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office5"\n\
   LIGHTING-SCHEDUL = ( "Office5" )\n\
   EQUIP-SCHEDULE   = ( "Office5" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "0-ST2 Stair 2 pg"\n\
   C-SUB-AREA       = ( 148.5 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"0-ST2 Stair 2 x-wall 1" = EXTERIOR-WALL\n\
   Z                = 8\n\
   HEIGHT           = 0.75\n\
   LOCATION         = SPACE-V1\n\
   ..\n\
"0-ST2 Stair 2 x-wall 2" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"0-ST2 Stair 2 x-wall 3" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V3\n\
   ..\n\
"0-ST2 Stair 2 x-wall 4" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"0-ST2 Stair 2 - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "0-ST2 Stair 2 pg"\n\
   ..\n\
"0-ST2 Stair 2 - ug flr" = UNDERGROUND-WALL\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "0-ST2 Stair 2 slab pg mr"\n\
   ..\n\
"0-ST2 Stair 2 ug-wall 1" = UNDERGROUND-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8\n\
   LOCATION         = SPACE-V1\n\
   ..\n\
"0-ST3 Stair 3" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = UNCONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office4"\n\
   LIGHTING-SCHEDUL = ( "Office4" )\n\
   EQUIP-SCHEDULE   = ( "Office4" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "0-ST3 Stair 3 pg"\n\
   C-SUB-AREA       = ( 146.335 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"0-ST3 Stair 3 x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"0-ST3 Stair 3 x-wall 2" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V3\n\
   ..\n\
"0-ST3 Stair 3 x-wall 3" = EXTERIOR-WALL\n\
   Z                = 8\n\
   HEIGHT           = 0.75\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"0-ST3 Stair 3 - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "0-ST3 Stair 3 pg"\n\
   ..\n\
"0-ST3 Stair 3 - ug flr" = UNDERGROUND-WALL\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "0-ST3 Stair 3 slab pg mr"\n\
   ..\n\
"0-ST3 Stair 3 ug-wall 3" = UNDERGROUND-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"020 Elev Lobby" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office1"\n\
   LIGHTING-SCHEDUL = ( "Office1" )\n\
   EQUIP-SCHEDULE   = ( "Office1" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "020 Elev Lobby pg"\n\
   C-SUB-AREA       = ( 162.715 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"020 Elev Lobby x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"020 Elev Lobby - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "020 Elev Lobby pg"\n\
   ..\n\
"020 Elev Lobby i-wall 1" = INTERIOR-WALL\n\
   NEXT-TO          = "023A Corridor"\n\
   LOCATION         = SPACE-V1\n\
   ..\n\
"020 Elev Lobby i-wall 2" = INTERIOR-WALL\n\
   NEXT-TO          = "0-EL1 Elevator 1"\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"020 Elev Lobby i-wall 3" = INTERIOR-WALL\n\
   NEXT-TO          = "0-EL1 Elevator 1"\n\
   LOCATION         = SPACE-V3\n\
   ..\n\
"020 Elev Lobby i-wall 4" = INTERIOR-WALL\n\
   NEXT-TO          = "0-ST3 Stair 3"\n\
   LOCATION         = SPACE-V5\n\
   ..\n\
"020 Elev Lobby i-wall 5" = INTERIOR-WALL\n\
   NEXT-TO          = "021 Pottery"\n\
   LOCATION         = SPACE-V6\n\
   ..\n\
"020 Elev Lobby - ug flr" = UNDERGROUND-WALL\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "020 Elev Lobby slab pg mr"\n\
   ..\n\
"021 Pottery" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office3"\n\
   LIGHTING-SCHEDUL = ( "Office3" )\n\
   EQUIP-SCHEDULE   = ( "Office3" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "021 Pottery pg"\n\
   C-SUB-AREA       = ( 543.447 )\n\
   C-OCC-TYPE       = ( 35 )\n\
   ..\n\
"021 Pottery x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V1\n\
   ..\n\
"021 Pottery window 1" = WINDOW\n\
   X                = 0.257712\n\
   Y                = 0\n\
   HEIGHT           = 8\n\
   WIDTH            = 3.43143\n\
   ..\n\
"021 Pottery x-wall 2" = EXTERIOR-WALL\n\
   Z                = 8\n\
   HEIGHT           = 0.75\n\
   LOCATION         = SPACE-V7\n\
   ..\n\
"021 Pottery x-wall 3" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V8\n\
   ..\n\
"021 Pottery x-wall 4" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V9\n\
   ..\n\
"021 Pottery window 2" = WINDOW\n\
   X                = 0.450748\n\
   Y                = 0\n\
   HEIGHT           = 8\n\
   WIDTH            = 6.47536\n\
   ..\n\
"021 Pottery x-wall 5" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V10\n\
   ..\n\
"021 Pottery window 3" = WINDOW\n\
   X                = 0.311292\n\
   Y                = 0\n\
   HEIGHT           = 8\n\
   WIDTH            = 20.4183\n\
   ..\n\
"021 Pottery - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "021 Pottery pg"\n\
   ..\n\
"021 Pottery i-wall 1" = INTERIOR-WALL\n\
   NEXT-TO          = "022 Equip"\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"021 Pottery i-wall 2" = INTERIOR-WALL\n\
   NEXT-TO          = "023A Corridor"\n\
   LOCATION         = SPACE-V3\n\
   ..\n\
"021 Pottery - ug flr" = UNDERGROUND-WALL\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "021 Pottery slab pg mr"\n\
   ..\n\
"021 Pottery ug-wall 2" = UNDERGROUND-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8\n\
   LOCATION         = SPACE-V7\n\
   ..\n\
"021A Storage" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = UNCONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office1"\n\
   LIGHTING-SCHEDUL = ( "Office1" )\n\
   EQUIP-SCHEDULE   = ( "Office1" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "021A Storage pg"\n\
   C-SUB-AREA       = ( 47.125 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"021A Storage x-wall 1" = EXTERIOR-WALL\n\
   Z                = 8\n\
   HEIGHT           = 0.75\n\
   LOCATION         = SPACE-V3\n\
   ..\n\
"021A Storage - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "021A Storage pg"\n\
   ..\n\
"021A Storage i-wall 1" = INTERIOR-WALL\n\
   NEXT-TO          = "021 Pottery"\n\
   LOCATION         = SPACE-V1\n\
   ..\n\
"021A Storage i-wall 2" = INTERIOR-WALL\n\
   NEXT-TO          = "0-ST3 Stair 3"\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"021A Storage i-wall 3" = INTERIOR-WALL\n\
   NEXT-TO          = "021 Pottery"\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"021A Storage - ug flr" = UNDERGROUND-WALL\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "021A Storage slab pg mr"\n\
   ..\n\
"021A Storage ug-wall 1" = UNDERGROUND-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8\n\
   LOCATION         = SPACE-V3\n\
   ..\n\
"022 Equip" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office4"\n\
   LIGHTING-SCHEDUL = ( "Office4" )\n\
   EQUIP-SCHEDULE   = ( "Office4" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "022 Equip pg"\n\
   C-SUB-AREA       = ( 107.109 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"022 Equip x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"022 Equip - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "022 Equip pg"\n\
   ..\n\
"022 Equip i-wall 2" = INTERIOR-WALL\n\
   NEXT-TO          = "023A Corridor"\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"022 Equip - ug flr" = UNDERGROUND-WALL\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "022 Equip slab pg mr"\n\
   ..\n\
"023A Corridor" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office1"\n\
   LIGHTING-SCHEDUL = ( "Office1" )\n\
   EQUIP-SCHEDULE   = ( "Office1" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "023A Corridor pg"\n\
   C-SUB-AREA       = ( 547.419 )\n\
   C-OCC-TYPE       = ( 35 )\n\
   ..\n\
"023A Corridor x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"023A Corridor x-wall 2" = EXTERIOR-WALL\n\
   Z                = 8\n\
   HEIGHT           = 0.75\n\
   LOCATION         = SPACE-V3\n\
   ..\n\
"023A Corridor x-wall 3" = EXTERIOR-WALL\n\
   Z                = 8\n\
   HEIGHT           = 0.75\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"023A Corridor x-wall 4" = EXTERIOR-WALL\n\
   Z                = 8\n\
   HEIGHT           = 0.75\n\
   LOCATION         = SPACE-V5\n\
   ..\n\
"023A Corridor x-wall 5" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V6\n\
   ..\n\
"023A Corridor - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "023A Corridor pg"\n\
   ..\n\
"023A Corridor i-wall 1" = INTERIOR-WALL\n\
   NEXT-TO          = "0-ST2 Stair 2"\n\
   LOCATION         = SPACE-V1\n\
   ..\n\
"023A Corridor - ug flr" = UNDERGROUND-WALL\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "023A Corridor slab pg mr"\n\
   ..\n\
"023A Corridor ug-wall 2" = UNDERGROUND-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8\n\
   LOCATION         = SPACE-V3\n\
   ..\n\
"023A Corridor ug-wall 3" = UNDERGROUND-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"023A Corridor ug-wall 4" = UNDERGROUND-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8\n\
   LOCATION         = SPACE-V5\n\
   ..\n\
"024 Laundry 2" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office1"\n\
   LIGHTING-SCHEDUL = ( "Office1" )\n\
   EQUIP-SCHEDULE   = ( "Office1" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "024 Laundry 2 pg"\n\
   C-SUB-AREA       = ( 133.837 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"024 Laundry 2 x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"024 Laundry 2 - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "024 Laundry 2 pg"\n\
   ..\n\
"024 Laundry 2 i-wall 1" = INTERIOR-WALL\n\
   NEXT-TO          = "025 Piping"\n\
   LOCATION         = SPACE-V1\n\
   ..\n\
"024 Laundry 2 i-wall 2" = INTERIOR-WALL\n\
   NEXT-TO          = "023A Corridor"\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"024 Laundry 2 i-wall 3" = INTERIOR-WALL\n\
   NEXT-TO          = "022 Equip"\n\
   LOCATION         = SPACE-V3\n\
   ..\n\
"024 Laundry 2 - ug flr" = UNDERGROUND-WALL\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "024 Laundry 2 slab pg mr"\n\
   ..\n\
"025 Piping" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = UNCONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office5"\n\
   LIGHTING-SCHEDUL = ( "Office5" )\n\
   EQUIP-SCHEDULE   = ( "Office5" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "025 Piping pg"\n\
   C-SUB-AREA       = ( 70.2119 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"025 Piping x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"025 Piping - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "025 Piping pg"\n\
   ..\n\
"025 Piping i-wall 1" = INTERIOR-WALL\n\
   NEXT-TO          = "026 Laundry"\n\
   LOCATION         = SPACE-V1\n\
   ..\n\
"025 Piping i-wall 2" = INTERIOR-WALL\n\
   NEXT-TO          = "023A Corridor"\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"025 Piping - ug flr" = UNDERGROUND-WALL\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "025 Piping slab pg mr"\n\
   ..\n\
"026 Laundry" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office2"\n\
   LIGHTING-SCHEDUL = ( "Office2" )\n\
   EQUIP-SCHEDULE   = ( "Office2" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "026 Laundry pg"\n\
   C-SUB-AREA       = ( 211.527 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"026 Laundry x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"026 Laundry window 1" = WINDOW\n\
   X                = 4.69556\n\
   Y                = 2.95\n\
   HEIGHT           = 5\n\
   WIDTH            = 9.9756\n\
   ..\n\
"026 Laundry - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "026 Laundry pg"\n\
   ..\n\
"026 Laundry i-wall 2" = INTERIOR-WALL\n\
   NEXT-TO          = "023A Corridor"\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"026 Laundry - ug flr" = UNDERGROUND-WALL\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "026 Laundry slab pg mr"\n\
   ..\n\
"028 IT" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office3"\n\
   LIGHTING-SCHEDUL = ( "Office3" )\n\
   EQUIP-SCHEDULE   = ( "Office3" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "028 IT pg"\n\
   C-SUB-AREA       = ( 189.326 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"028 IT x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"028 IT - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "028 IT pg"\n\
   ..\n\
"028 IT i-wall 2" = INTERIOR-WALL\n\
   NEXT-TO          = "023A Corridor"\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"028 IT i-wall 3" = INTERIOR-WALL\n\
   NEXT-TO          = "026 Laundry"\n\
   LOCATION         = SPACE-V3\n\
   ..\n\
"028 IT - ug flr" = UNDERGROUND-WALL\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "028 IT slab pg mr"\n\
   ..\n\
"029 Pottery" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office1"\n\
   LIGHTING-SCHEDUL = ( "Office1" )\n\
   EQUIP-SCHEDULE   = ( "Office1" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "029 Pottery pg"\n\
   C-SUB-AREA       = ( 594.469 )\n\
   C-OCC-TYPE       = ( 35 )\n\
   ..\n\
"029 Pottery x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V1\n\
   ..\n\
"029 Pottery window 1" = WINDOW\n\
   X                = 0.571448\n\
   Y                = 0\n\
   HEIGHT           = 8\n\
   WIDTH            = 6.70402\n\
   ..\n\
"029 Pottery x-wall 2" = EXTERIOR-WALL\n\
   Z                = 8\n\
   HEIGHT           = 0.75\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"029 Pottery x-wall 3" = EXTERIOR-WALL\n\
   Z                = 8\n\
   HEIGHT           = 0.75\n\
   LOCATION         = SPACE-V3\n\
   ..\n\
"029 Pottery x-wall 4" = EXTERIOR-WALL\n\
   Z                = 8\n\
   HEIGHT           = 0.75\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"029 Pottery x-wall 5" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V9\n\
   ..\n\
"029 Pottery window 2" = WINDOW\n\
   X                = 0.42738\n\
   Y                = 0\n\
   HEIGHT           = 8\n\
   WIDTH            = 2.87094\n\
   ..\n\
"029 Pottery x-wall 6" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V10\n\
   ..\n\
"029 Pottery window 3" = WINDOW\n\
   X                = 0.450002\n\
   Y                = 0\n\
   HEIGHT           = 8\n\
   WIDTH            = 20.4061\n\
   ..\n\
"029 Pottery - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "029 Pottery pg"\n\
   ..\n\
"029 Pottery i-wall 1" = INTERIOR-WALL\n\
   NEXT-TO          = "0-ST2 Stair 2"\n\
   LOCATION         = SPACE-V5\n\
   ..\n\
"029 Pottery i-wall 2" = INTERIOR-WALL\n\
   NEXT-TO          = "023A Corridor"\n\
   LOCATION         = SPACE-V6\n\
   ..\n\
"029 Pottery i-wall 3" = INTERIOR-WALL\n\
   NEXT-TO          = "023A Corridor"\n\
   LOCATION         = SPACE-V7\n\
   ..\n\
"029 Pottery i-wall 4" = INTERIOR-WALL\n\
   NEXT-TO          = "028 IT"\n\
   LOCATION         = SPACE-V8\n\
   ..\n\
"029 Pottery - ug flr" = UNDERGROUND-WALL\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "029 Pottery slab pg mr"\n\
   ..\n\
"029 Pottery ug-wall 2" = UNDERGROUND-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"029 Pottery ug-wall 3" = UNDERGROUND-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8\n\
   LOCATION         = SPACE-V3\n\
   ..\n\
"029 Pottery ug-wall 4" = UNDERGROUND-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"034 Storage" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = UNCONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office1"\n\
   LIGHTING-SCHEDUL = ( "Office1" )\n\
   EQUIP-SCHEDULE   = ( "Office1" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "034 Storage pg"\n\
   C-SUB-AREA       = ( 497.93 )\n\
   C-OCC-TYPE       = ( 35 )\n\
   ..\n\
"034 Storage x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V1\n\
   ..\n\
"034 Storage window 1" = WINDOW\n\
   X                = 0.450748\n\
   Y                = 0\n\
   HEIGHT           = 8\n\
   WIDTH            = 6.47536\n\
   ..\n\
"034 Storage x-wall 2" = EXTERIOR-WALL\n\
   Z                = 8\n\
   HEIGHT           = 0.75\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"034 Storage x-wall 3" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V3\n\
   ..\n\
"034 Storage x-wall 4" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"034 Storage x-wall 5" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V5\n\
   ..\n\
"034 Storage - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "034 Storage pg"\n\
   ..\n\
"034 Storage - ug flr" = UNDERGROUND-WALL\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "034 Storage slab pg mr"\n\
   ..\n\
"034 Storage ug-wall 2" = UNDERGROUND-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"Level 1" = FLOOR\n\
   Z                = 8.75\n\
   POLYGON          = "Level 1 pg"\n\
   SHAPE            = POLYGON\n\
   FLOOR-HEIGHT     = 8.75\n\
   SPACE-HEIGHT     = 8\n\
   C-DIAGRAM-DATA   = *Detailed UI DiagData*\n\
   ..\n\
"1-21 Potter Upper" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office1"\n\
   LIGHTING-SCHEDUL = ( "Office1" )\n\
   EQUIP-SCHEDULE   = ( "Office1" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "1-21 Potter Upper pg"\n\
   C-SUB-AREA       = ( 472.969 )\n\
   C-OCC-TYPE       = ( 35 )\n\
   ..\n\
"1-21 Potter Upper x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V1\n\
   ..\n\
"1-21 Potter Upper window 1" = WINDOW\n\
   X                = 0.467503\n\
   Y                = 0\n\
   HEIGHT           = 8\n\
   WIDTH            = 3.37504\n\
   ..\n\
"1-21 Potter Upper x-wall 2" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V7\n\
   ..\n\
"1-21 Potter Upper window 2" = WINDOW\n\
   X                = 0.318215\n\
   Y                = 0\n\
   HEIGHT           = 8\n\
   WIDTH            = 6.38294\n\
   ..\n\
"1-21 Potter Upper x-wall 3" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V8\n\
   ..\n\
"1-21 Potter Upper window 3" = WINDOW\n\
   X                = 0.348639\n\
   Y                = 0\n\
   HEIGHT           = 8\n\
   WIDTH            = 20.2405\n\
   ..\n\
"1-21 Potter Upper - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "1-21 Potter Upper floor pg mr"\n\
   ..\n\
"1-21 Potter Upper - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "1-21 Potter Upper pg"\n\
   ..\n\
"1-21 Potter Upper i-wall 3" = INTERIOR-WALL\n\
   NEXT-TO          = "121 Corridor"\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"1-21 Potter Upper i-wall 4" = INTERIOR-WALL\n\
   NEXT-TO          = "1-ST3 Stair 3"\n\
   LOCATION         = SPACE-V5\n\
   ..\n\
"1-29 Pottery Upper" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office4"\n\
   LIGHTING-SCHEDUL = ( "Office4" )\n\
   EQUIP-SCHEDULE   = ( "Office4" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "1-29 Pottery Upper pg"\n\
   C-SUB-AREA       = ( 468.937 )\n\
   C-OCC-TYPE       = ( 35 )\n\
   ..\n\
"1-29 Pottery Upper x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V1\n\
   ..\n\
"1-29 Pottery Upper window 1" = WINDOW\n\
   X                = 0.377888\n\
   Y                = 0\n\
   HEIGHT           = 8\n\
   WIDTH            = 7.01026\n\
   ..\n\
"1-29 Pottery Upper x-wall 2" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V7\n\
   ..\n\
"1-29 Pottery Upper window 2" = WINDOW\n\
   X                = 0.254032\n\
   Y                = 0\n\
   HEIGHT           = 8\n\
   WIDTH            = 3.21806\n\
   ..\n\
"1-29 Pottery Upper x-wall 3" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V8\n\
   ..\n\
"1-29 Pottery Upper window 3" = WINDOW\n\
   X                = 0.320489\n\
   Y                = 0\n\
   HEIGHT           = 8\n\
   WIDTH            = 20.7232\n\
   ..\n\
"1-29 Pottery Upper - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "1-29 Pottery Upper floor pg mr"\n\
   ..\n\
"1-29 Pottery Upper - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "1-29 Pottery Upper pg"\n\
   ..\n\
"1-EL Elev" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = UNCONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office1"\n\
   LIGHTING-SCHEDUL = ( "Office1" )\n\
   EQUIP-SCHEDULE   = ( "Office1" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "1-EL Elev pg"\n\
   C-SUB-AREA       = ( 76.5791 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"1-EL Elev x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V1\n\
   ..\n\
"1-EL Elev x-wall 2" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"1-EL Elev - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "1-EL Elev floor pg mr"\n\
   ..\n\
"1-EL Elev - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "1-EL Elev pg"\n\
   ..\n\
"1-ST1 Stair 1" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = UNCONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office4"\n\
   LIGHTING-SCHEDUL = ( "Office4" )\n\
   EQUIP-SCHEDULE   = ( "Office4" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "1-ST1 Stair 1 pg"\n\
   C-SUB-AREA       = ( 111 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"1-ST1 Stair 1 x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V1\n\
   ..\n\
"1-ST1 Stair 1 x-wall 2" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"1-ST1 Stair 1 x-wall 3" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V3\n\
   ..\n\
"1-ST1 Stair 1 x-wall 4" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V6\n\
   ..\n\
"1-ST1 Stair 1 - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "1-ST1 Stair 1 pg"\n\
   ..\n\
"1-ST1 Stair 1 i-wall 1" = INTERIOR-WALL\n\
   NEXT-TO          = "111 Room"\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"1-ST1 Stair 1 i-wall 2" = INTERIOR-WALL\n\
   NEXT-TO          = "113 Corridor"\n\
   LOCATION         = SPACE-V5\n\
   ..\n\
"1-ST1 Stair 1 - ug flr" = UNDERGROUND-WALL\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "1-ST1 Stair 1 slab pg mr"\n\
   ..\n\
"1-ST2 Stair 2" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office3"\n\
   LIGHTING-SCHEDUL = ( "Office3" )\n\
   EQUIP-SCHEDULE   = ( "Office3" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "1-ST2 Stair 2 pg"\n\
   C-SUB-AREA       = ( 205.598 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"1-ST2 Stair 2 x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"1-ST2 Stair 2 window 1" = WINDOW\n\
   X                = 0.363726\n\
   Y                = 0\n\
   HEIGHT           = 8\n\
   WIDTH            = 6.0794\n\
   ..\n\
"1-ST2 Stair 2 x-wall 2" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V3\n\
   ..\n\
"1-ST2 Stair 2 window 2" = WINDOW\n\
   X                = 0.809246\n\
   Y                = 0\n\
   HEIGHT           = 8\n\
   WIDTH            = 8.0006\n\
   ..\n\
"1-ST2 Stair 2 - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "1-ST2 Stair 2 floor pg mr"\n\
   ..\n\
"1-ST2 Stair 2 - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "1-ST2 Stair 2 pg"\n\
   ..\n\
"1-ST2 Stair 2 i-wall 1" = INTERIOR-WALL\n\
   NEXT-TO          = "114 Corridor"\n\
   LOCATION         = SPACE-V1\n\
   ..\n\
"1-ST2 Stair 2 i-wall 3" = INTERIOR-WALL\n\
   NEXT-TO          = "1-29 Pottery Upper"\n\
   LOCATION         = SPACE-V5\n\
   ..\n\
"1-ST3 Stair 3" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = UNCONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office2"\n\
   LIGHTING-SCHEDUL = ( "Office2" )\n\
   EQUIP-SCHEDULE   = ( "Office2" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "1-ST3 Stair 3 pg"\n\
   C-SUB-AREA       = ( 209.004 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"1-ST3 Stair 3 x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V3\n\
   ..\n\
"1-ST3 Stair 3 window 1" = WINDOW\n\
   X                = 0.255788\n\
   Y                = 0\n\
   HEIGHT           = 8\n\
   WIDTH            = 7.86391\n\
   ..\n\
"1-ST3 Stair 3 x-wall 2" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"1-ST3 Stair 3 window 2" = WINDOW\n\
   X                = 0.602982\n\
   Y                = 0\n\
   HEIGHT           = 8\n\
   WIDTH            = 5.18036\n\
   ..\n\
"1-ST3 Stair 3 - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "1-ST3 Stair 3 floor pg mr"\n\
   ..\n\
"1-ST3 Stair 3 - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "1-ST3 Stair 3 pg"\n\
   ..\n\
"1-ST3 Stair 3 i-wall 2" = INTERIOR-WALL\n\
   NEXT-TO          = "121A Elev Lobby"\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"1-ST4 Stair 4" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = UNCONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office2"\n\
   LIGHTING-SCHEDUL = ( "Office2" )\n\
   EQUIP-SCHEDULE   = ( "Office2" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "1-ST4 Stair 4 pg"\n\
   C-SUB-AREA       = ( 108.438 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"1-ST4 Stair 4 x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"1-ST4 Stair 4 x-wall 2" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V3\n\
   ..\n\
"1-ST4 Stair 4 x-wall 3" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"1-ST4 Stair 4 x-wall 4" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V5\n\
   ..\n\
"1-ST4 Stair 4 - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "1-ST4 Stair 4 pg"\n\
   ..\n\
"1-ST4 Stair 4 i-wall 1" = INTERIOR-WALL\n\
   NEXT-TO          = "149 Room"\n\
   LOCATION         = SPACE-V1\n\
   ..\n\
"1-ST4 Stair 4 - ug flr" = UNDERGROUND-WALL\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "1-ST4 Stair 4 slab pg mr"\n\
   ..\n\
"101 Lounge" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office5"\n\
   LIGHTING-SCHEDUL = ( "Office5" )\n\
   EQUIP-SCHEDULE   = ( "Office5" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "101 Lounge pg"\n\
   C-SUB-AREA       = ( 416.871 )\n\
   C-OCC-TYPE       = ( 35 )\n\
   ..\n\
"101 Lounge x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"101 Lounge window 1" = WINDOW\n\
   X                = 0\n\
   Y                = 0\n\
   HEIGHT           = 8\n\
   WIDTH            = 18.8064\n\
   ..\n\
"101 Lounge x-wall 2" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V3\n\
   ..\n\
"101 Lounge window 2" = WINDOW\n\
   X                = 0.319403\n\
   Y                = 0\n\
   HEIGHT           = 8\n\
   WIDTH            = 10.1002\n\
   ..\n\
"101 Lounge - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "101 Lounge floor pg mr"\n\
   ..\n\
"101 Lounge - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "101 Lounge pg"\n\
   ..\n\
"101 Lounge i-wall 1" = INTERIOR-WALL\n\
   NEXT-TO          = "1-ST2 Stair 2"\n\
   LOCATION         = SPACE-V1\n\
   ..\n\
"101 Lounge i-wall 2" = INTERIOR-WALL\n\
   NEXT-TO          = "131 Room"\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"101 Lounge i-wall 4" = INTERIOR-WALL\n\
   NEXT-TO          = "1-29 Pottery Upper"\n\
   LOCATION         = SPACE-V6\n\
   ..\n\
"102 Room" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office3"\n\
   LIGHTING-SCHEDUL = ( "Office3" )\n\
   EQUIP-SCHEDULE   = ( "Office3" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "102 Room pg"\n\
   C-SUB-AREA       = ( 174.513 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"102 Room x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"102 Room window 1" = WINDOW\n\
   X                = 7.29901\n\
   Y                = 2.95\n\
   HEIGHT           = 5\n\
   WIDTH            = 3.84957\n\
   ..\n\
"102 Room - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "102 Room pg"\n\
   ..\n\
"102 Room i-wall 2" = INTERIOR-WALL\n\
   NEXT-TO          = "114 Corridor"\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"102 Room i-wall 3" = INTERIOR-WALL\n\
   NEXT-TO          = "1-29 Pottery Upper"\n\
   LOCATION         = SPACE-V3\n\
   ..\n\
"102 Room - ug flr" = UNDERGROUND-WALL\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "102 Room slab pg mr"\n\
   ..\n\
"104 Room" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office1"\n\
   LIGHTING-SCHEDUL = ( "Office1" )\n\
   EQUIP-SCHEDULE   = ( "Office1" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "104 Room pg"\n\
   C-SUB-AREA       = ( 144.539 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"104 Room x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"104 Room window 1" = WINDOW\n\
   X                = 7.04754\n\
   Y                = 2.95\n\
   HEIGHT           = 5\n\
   WIDTH            = 3.39284\n\
   ..\n\
"104 Room - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "104 Room pg"\n\
   ..\n\
"104 Room i-wall 1" = INTERIOR-WALL\n\
   NEXT-TO          = "106 Room"\n\
   LOCATION         = SPACE-V1\n\
   ..\n\
"104 Room i-wall 2" = INTERIOR-WALL\n\
   NEXT-TO          = "114 Corridor"\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"104 Room i-wall 3" = INTERIOR-WALL\n\
   NEXT-TO          = "102 Room"\n\
   LOCATION         = SPACE-V3\n\
   ..\n\
"104 Room - ug flr" = UNDERGROUND-WALL\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "104 Room slab pg mr"\n\
   ..\n\
"105 Room" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office5"\n\
   LIGHTING-SCHEDUL = ( "Office5" )\n\
   EQUIP-SCHEDULE   = ( "Office5" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "105 Room pg"\n\
   C-SUB-AREA       = ( 126.09 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"105 Room x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"105 Room window 1" = WINDOW\n\
   X                = 0.0665093\n\
   Y                = 0\n\
   HEIGHT           = 8\n\
   WIDTH            = 8.0643\n\
   ..\n\
"105 Room - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "105 Room pg"\n\
   ..\n\
"105 Room i-wall 1" = INTERIOR-WALL\n\
   NEXT-TO          = "107 Room"\n\
   LOCATION         = SPACE-V1\n\
   ..\n\
"105 Room i-wall 2" = INTERIOR-WALL\n\
   NEXT-TO          = "114 Corridor"\n\
   LOCATION         = SPACE-V3\n\
   ..\n\
"105 Room i-wall 3" = INTERIOR-WALL\n\
   NEXT-TO          = "114 Corridor"\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"105 Room - ug flr" = UNDERGROUND-WALL\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "105 Room slab pg mr"\n\
   ..\n\
"106 Room" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office3"\n\
   LIGHTING-SCHEDUL = ( "Office3" )\n\
   EQUIP-SCHEDULE   = ( "Office3" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "106 Room pg"\n\
   C-SUB-AREA       = ( 151.153 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"106 Room x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"106 Room window 1" = WINDOW\n\
   X                = 0\n\
   Y                = 2.95\n\
   HEIGHT           = 5\n\
   WIDTH            = 3.7278\n\
   ..\n\
"106 Room - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "106 Room pg"\n\
   ..\n\
"106 Room i-wall 1" = INTERIOR-WALL\n\
   NEXT-TO          = "108 Bathroom"\n\
   LOCATION         = SPACE-V1\n\
   ..\n\
"106 Room i-wall 2" = INTERIOR-WALL\n\
   NEXT-TO          = "113 Corridor"\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"106 Room - ug flr" = UNDERGROUND-WALL\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "106 Room slab pg mr"\n\
   ..\n\
"107 Room" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office1"\n\
   LIGHTING-SCHEDUL = ( "Office1" )\n\
   EQUIP-SCHEDULE   = ( "Office1" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "107 Room pg"\n\
   C-SUB-AREA       = ( 128.748 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"107 Room x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"107 Room window 1" = WINDOW\n\
   X                = 1.17242\n\
   Y                = 2.95\n\
   HEIGHT           = 5\n\
   WIDTH            = 3.96683\n\
   ..\n\
"107 Room - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "107 Room pg"\n\
   ..\n\
"107 Room i-wall 1" = INTERIOR-WALL\n\
   NEXT-TO          = "109 Room"\n\
   LOCATION         = SPACE-V1\n\
   ..\n\
"107 Room i-wall 3" = INTERIOR-WALL\n\
   NEXT-TO          = "114 Corridor"\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"107 Room - ug flr" = UNDERGROUND-WALL\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "107 Room slab pg mr"\n\
   ..\n\
"108 Bathroom" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office2"\n\
   LIGHTING-SCHEDUL = ( "Office2" )\n\
   EQUIP-SCHEDULE   = ( "Office2" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "108 Bathroom pg"\n\
   C-SUB-AREA       = ( 162.172 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"108 Bathroom x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"108 Bathroom - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "108 Bathroom pg"\n\
   ..\n\
"108 Bathroom - ug flr" = UNDERGROUND-WALL\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "108 Bathroom slab pg mr"\n\
   ..\n\
"109 Room" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office4"\n\
   LIGHTING-SCHEDUL = ( "Office4" )\n\
   EQUIP-SCHEDULE   = ( "Office4" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "109 Room pg"\n\
   C-SUB-AREA       = ( 180.127 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"109 Room x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"109 Room window 1" = WINDOW\n\
   X                = 0\n\
   Y                = 2.95\n\
   HEIGHT           = 5\n\
   WIDTH            = 3.51696\n\
   ..\n\
"109 Room - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "109 Room pg"\n\
   ..\n\
"109 Room - ug flr" = UNDERGROUND-WALL\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "109 Room slab pg mr"\n\
   ..\n\
"110 Room" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office5"\n\
   LIGHTING-SCHEDUL = ( "Office5" )\n\
   EQUIP-SCHEDULE   = ( "Office5" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "110 Room pg"\n\
   C-SUB-AREA       = ( 172.724 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"110 Room x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"110 Room window 1" = WINDOW\n\
   X                = 8.68129\n\
   Y                = 2.95\n\
   HEIGHT           = 5\n\
   WIDTH            = 3.66905\n\
   ..\n\
"110 Room - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "110 Room pg"\n\
   ..\n\
"110 Room i-wall 2" = INTERIOR-WALL\n\
   NEXT-TO          = "113 Corridor"\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"110 Room i-wall 3" = INTERIOR-WALL\n\
   NEXT-TO          = "108 Bathroom"\n\
   LOCATION         = SPACE-V3\n\
   ..\n\
"110 Room - ug flr" = UNDERGROUND-WALL\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "110 Room slab pg mr"\n\
   ..\n\
"111 Room" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office3"\n\
   LIGHTING-SCHEDUL = ( "Office3" )\n\
   EQUIP-SCHEDULE   = ( "Office3" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "111 Room pg"\n\
   C-SUB-AREA       = ( 184.214 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"111 Room x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"111 Room window 1" = WINDOW\n\
   X                = 13.339\n\
   Y                = 2.95\n\
   HEIGHT           = 5\n\
   WIDTH            = 3.50143\n\
   ..\n\
"111 Room - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "111 Room pg"\n\
   ..\n\
"111 Room i-wall 2" = INTERIOR-WALL\n\
   NEXT-TO          = "109 Room"\n\
   LOCATION         = SPACE-V3\n\
   ..\n\
"111 Room i-wall 3" = INTERIOR-WALL\n\
   NEXT-TO          = "113 Corridor"\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"111 Room - ug flr" = UNDERGROUND-WALL\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "111 Room slab pg mr"\n\
   ..\n\
"112 Room" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office4"\n\
   LIGHTING-SCHEDUL = ( "Office4" )\n\
   EQUIP-SCHEDULE   = ( "Office4" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "112 Room pg"\n\
   C-SUB-AREA       = ( 165.643 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"112 Room x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V1\n\
   ..\n\
"112 Room x-wall 2" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"112 Room window 1" = WINDOW\n\
   X                = 0\n\
   Y                = 2.95\n\
   HEIGHT           = 5\n\
   WIDTH            = 3.50603\n\
   ..\n\
"112 Room - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "112 Room pg"\n\
   ..\n\
"112 Room i-wall 1" = INTERIOR-WALL\n\
   NEXT-TO          = "113 Corridor"\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"112 Room i-wall 2" = INTERIOR-WALL\n\
   NEXT-TO          = "110 Room"\n\
   LOCATION         = SPACE-V3\n\
   ..\n\
"112 Room - ug flr" = UNDERGROUND-WALL\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "112 Room slab pg mr"\n\
   ..\n\
"113 Corridor" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office4"\n\
   LIGHTING-SCHEDUL = ( "Office4" )\n\
   EQUIP-SCHEDULE   = ( "Office4" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "113 Corridor pg"\n\
   C-SUB-AREA       = ( 197.32 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"113 Corridor x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V1\n\
   ..\n\
"113 Corridor window 1" = WINDOW\n\
   X                = 0.364407\n\
   Y                = 2.95\n\
   HEIGHT           = 5\n\
   WIDTH            = 3.75484\n\
   ..\n\
"113 Corridor - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "113 Corridor pg"\n\
   ..\n\
"113 Corridor i-wall 3" = INTERIOR-WALL\n\
   NEXT-TO          = "109 Room"\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"113 Corridor i-wall 4" = INTERIOR-WALL\n\
   NEXT-TO          = "114 Corridor"\n\
   LOCATION         = SPACE-V5\n\
   ..\n\
"113 Corridor i-wall 6" = INTERIOR-WALL\n\
   NEXT-TO          = "108 Bathroom"\n\
   LOCATION         = SPACE-V7\n\
   ..\n\
"113 Corridor - ug flr" = UNDERGROUND-WALL\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "113 Corridor slab pg mr"\n\
   ..\n\
"114 Corridor" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office3"\n\
   LIGHTING-SCHEDUL = ( "Office3" )\n\
   EQUIP-SCHEDULE   = ( "Office3" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "114 Corridor pg"\n\
   C-SUB-AREA       = ( 177.383 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"114 Corridor x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V5\n\
   ..\n\
"114 Corridor window 1" = WINDOW\n\
   X                = 1.11645\n\
   Y                = 2.95\n\
   HEIGHT           = 5\n\
   WIDTH            = 3.09002\n\
   ..\n\
"114 Corridor - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "114 Corridor pg"\n\
   ..\n\
"114 Corridor - ug flr" = UNDERGROUND-WALL\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "114 Corridor slab pg mr"\n\
   ..\n\
"121 Corridor" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office1"\n\
   LIGHTING-SCHEDUL = ( "Office1" )\n\
   EQUIP-SCHEDULE   = ( "Office1" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "121 Corridor pg"\n\
   C-SUB-AREA       = ( 186.466 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"121 Corridor x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V7\n\
   ..\n\
"121 Corridor - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "121 Corridor floor pg mr"\n\
   ..\n\
"121 Corridor - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "121 Corridor pg"\n\
   ..\n\
"121 Corridor i-wall 1" = INTERIOR-WALL\n\
   NEXT-TO          = "1-EL Elev"\n\
   LOCATION         = SPACE-V1\n\
   ..\n\
"121 Corridor i-wall 2" = INTERIOR-WALL\n\
   NEXT-TO          = "121A Elev Lobby"\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"121 Corridor i-wall 3" = INTERIOR-WALL\n\
   NEXT-TO          = "1-ST3 Stair 3"\n\
   LOCATION         = SPACE-V3\n\
   ..\n\
"121A Elev Lobby" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = UNCONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office3"\n\
   LIGHTING-SCHEDUL = ( "Office3" )\n\
   EQUIP-SCHEDULE   = ( "Office3" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "121A Elev Lobby pg"\n\
   C-SUB-AREA       = ( 90.1352 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"121A Elev Lobby x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"121A Elev Lobby window 1" = WINDOW\n\
   X                = 0.272981\n\
   Y                = 0\n\
   HEIGHT           = 8\n\
   WIDTH            = 7.75627\n\
   ..\n\
"121A Elev Lobby - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "121A Elev Lobby floor pg mr"\n\
   ..\n\
"121A Elev Lobby - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "121A Elev Lobby pg"\n\
   ..\n\
"121A Elev Lobby i-wall 1" = INTERIOR-WALL\n\
   NEXT-TO          = "1-EL Elev"\n\
   LOCATION         = SPACE-V1\n\
   ..\n\
"122 Room" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office4"\n\
   LIGHTING-SCHEDUL = ( "Office4" )\n\
   EQUIP-SCHEDULE   = ( "Office4" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "122 Room pg"\n\
   C-SUB-AREA       = ( 166.752 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"122 Room x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"122 Room window 1" = WINDOW\n\
   X                = 6.38017\n\
   Y                = 2.95\n\
   HEIGHT           = 5\n\
   WIDTH            = 4.31991\n\
   ..\n\
"122 Room - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "122 Room floor pg mr"\n\
   ..\n\
"122 Room - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "122 Room pg"\n\
   ..\n\
"122 Room i-wall 1" = INTERIOR-WALL\n\
   NEXT-TO          = "124 Room"\n\
   LOCATION         = SPACE-V1\n\
   ..\n\
"122 Room i-wall 3" = INTERIOR-WALL\n\
   NEXT-TO          = "1-21 Potter Upper"\n\
   LOCATION         = SPACE-V3\n\
   ..\n\
"124 Room" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office4"\n\
   LIGHTING-SCHEDUL = ( "Office4" )\n\
   EQUIP-SCHEDULE   = ( "Office4" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "124 Room pg"\n\
   C-SUB-AREA       = ( 148.71 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"124 Room x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"124 Room window 1" = WINDOW\n\
   X                = 6.908\n\
   Y                = 2.95\n\
   HEIGHT           = 5\n\
   WIDTH            = 3.44955\n\
   ..\n\
"124 Room - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "124 Room floor pg mr"\n\
   ..\n\
"124 Room - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "124 Room pg"\n\
   ..\n\
"125 Corridor" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office5"\n\
   LIGHTING-SCHEDUL = ( "Office5" )\n\
   EQUIP-SCHEDULE   = ( "Office5" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "125 Corridor pg"\n\
   C-SUB-AREA       = ( 307.813 )\n\
   C-OCC-TYPE       = ( 35 )\n\
   ..\n\
"125 Corridor - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "125 Corridor floor pg mr"\n\
   ..\n\
"125 Corridor - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "125 Corridor pg"\n\
   ..\n\
"125 Corridor i-wall 1" = INTERIOR-WALL\n\
   NEXT-TO          = "1-29 Pottery Upper"\n\
   LOCATION         = SPACE-V1\n\
   ..\n\
"125 Corridor i-wall 2" = INTERIOR-WALL\n\
   NEXT-TO          = "101 Lounge"\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"125 Corridor i-wall 3" = INTERIOR-WALL\n\
   NEXT-TO          = "131 Room"\n\
   LOCATION         = SPACE-V3\n\
   ..\n\
"125 Corridor i-wall 4" = INTERIOR-WALL\n\
   NEXT-TO          = "129 Room"\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"125 Corridor i-wall 5" = INTERIOR-WALL\n\
   NEXT-TO          = "127 Room"\n\
   LOCATION         = SPACE-V5\n\
   ..\n\
"125 Corridor i-wall 6" = INTERIOR-WALL\n\
   NEXT-TO          = "125 Room"\n\
   LOCATION         = SPACE-V6\n\
   ..\n\
"125 Corridor i-wall 7" = INTERIOR-WALL\n\
   NEXT-TO          = "121 Corridor"\n\
   LOCATION         = SPACE-V7\n\
   ..\n\
"125 Corridor i-wall 8" = INTERIOR-WALL\n\
   NEXT-TO          = "1-21 Potter Upper"\n\
   LOCATION         = SPACE-V8\n\
   ..\n\
"125 Corridor i-wall 9" = INTERIOR-WALL\n\
   NEXT-TO          = "122 Room"\n\
   LOCATION         = SPACE-V9\n\
   ..\n\
"125 Corridor i-wall 10" = INTERIOR-WALL\n\
   NEXT-TO          = "124 Room"\n\
   LOCATION         = SPACE-V10\n\
   ..\n\
"125 Corridor i-wall 12" = INTERIOR-WALL\n\
   NEXT-TO          = "128 Bathroom"\n\
   LOCATION         = SPACE-V12\n\
   ..\n\
"125 Corridor i-wall 13" = INTERIOR-WALL\n\
   NEXT-TO          = "130 Bathroom"\n\
   LOCATION         = SPACE-V13\n\
   ..\n\
"125 Corridor i-wall 14" = INTERIOR-WALL\n\
   NEXT-TO          = "132 Room"\n\
   LOCATION         = SPACE-V14\n\
   ..\n\
"125 Corridor - ug flr" = UNDERGROUND-WALL\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "125 Corridor slab pg mr"\n\
   ..\n\
"125 Room" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office1"\n\
   LIGHTING-SCHEDUL = ( "Office1" )\n\
   EQUIP-SCHEDULE   = ( "Office1" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 99.9999\n\
   POLYGON          = "125 Room pg"\n\
   C-SUB-AREA       = ( 123.035 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"125 Room x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V3\n\
   ..\n\
"125 Room window 1" = WINDOW\n\
   X                = 1.51391\n\
   Y                = 0\n\
   HEIGHT           = 8\n\
   WIDTH            = 7.2612\n\
   ..\n\
"125 Room - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "125 Room pg"\n\
   ..\n\
"125 Room i-wall 2" = INTERIOR-WALL\n\
   NEXT-TO          = "127 Room"\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"125 Room i-wall 3" = INTERIOR-WALL\n\
   NEXT-TO          = "121 Corridor"\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"125 Room - ug flr" = UNDERGROUND-WALL\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "125 Room slab pg mr"\n\
   ..\n\
"126 Room" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office1"\n\
   LIGHTING-SCHEDUL = ( "Office1" )\n\
   EQUIP-SCHEDULE   = ( "Office1" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "126 Room pg"\n\
   C-SUB-AREA       = ( 153.53 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"126 Room x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"126 Room window 1" = WINDOW\n\
   X                = 0\n\
   Y                = 2.95\n\
   HEIGHT           = 5\n\
   WIDTH            = 3.7879\n\
   ..\n\
"126 Room - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "126 Room floor pg mr"\n\
   ..\n\
"126 Room - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "126 Room pg"\n\
   ..\n\
"126 Room i-wall 1" = INTERIOR-WALL\n\
   NEXT-TO          = "128 Bathroom"\n\
   LOCATION         = SPACE-V1\n\
   ..\n\
"126 Room i-wall 2" = INTERIOR-WALL\n\
   NEXT-TO          = "125 Corridor"\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"126 Room i-wall 3" = INTERIOR-WALL\n\
   NEXT-TO          = "124 Room"\n\
   LOCATION         = SPACE-V3\n\
   ..\n\
"127 Room" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office2"\n\
   LIGHTING-SCHEDUL = ( "Office2" )\n\
   EQUIP-SCHEDULE   = ( "Office2" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "127 Room pg"\n\
   C-SUB-AREA       = ( 130.762 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"127 Room x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"127 Room window 1" = WINDOW\n\
   X                = 1.1849\n\
   Y                = 2.95\n\
   HEIGHT           = 5\n\
   WIDTH            = 4.28545\n\
   ..\n\
"127 Room - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "127 Room pg"\n\
   ..\n\
"127 Room - ug flr" = UNDERGROUND-WALL\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "127 Room slab pg mr"\n\
   ..\n\
"128 Bathroom" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office4"\n\
   LIGHTING-SCHEDUL = ( "Office4" )\n\
   EQUIP-SCHEDULE   = ( "Office4" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "128 Bathroom pg"\n\
   C-SUB-AREA       = ( 166.915 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"128 Bathroom x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"128 Bathroom - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "128 Bathroom floor pg mr"\n\
   ..\n\
"128 Bathroom - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "128 Bathroom pg"\n\
   ..\n\
"128 Bathroom i-wall 1" = INTERIOR-WALL\n\
   NEXT-TO          = "130 Bathroom"\n\
   LOCATION         = SPACE-V1\n\
   ..\n\
"129 Room" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office1"\n\
   LIGHTING-SCHEDUL = ( "Office1" )\n\
   EQUIP-SCHEDULE   = ( "Office1" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "129 Room pg"\n\
   C-SUB-AREA       = ( 178.583 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"129 Room x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"129 Room window 1" = WINDOW\n\
   X                = 0\n\
   Y                = 2.95\n\
   HEIGHT           = 5\n\
   WIDTH            = 3.56604\n\
   ..\n\
"129 Room - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "129 Room pg"\n\
   ..\n\
"129 Room i-wall 2" = INTERIOR-WALL\n\
   NEXT-TO          = "127 Room"\n\
   LOCATION         = SPACE-V3\n\
   ..\n\
"129 Room - ug flr" = UNDERGROUND-WALL\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "129 Room slab pg mr"\n\
   ..\n\
"130 Bathroom" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office4"\n\
   LIGHTING-SCHEDUL = ( "Office4" )\n\
   EQUIP-SCHEDULE   = ( "Office4" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "130 Bathroom pg"\n\
   C-SUB-AREA       = ( 122.175 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"130 Bathroom x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"130 Bathroom - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "130 Bathroom floor pg mr"\n\
   ..\n\
"130 Bathroom - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "130 Bathroom pg"\n\
   ..\n\
"131 Room" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office1"\n\
   LIGHTING-SCHEDUL = ( "Office1" )\n\
   EQUIP-SCHEDULE   = ( "Office1" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "131 Room pg"\n\
   C-SUB-AREA       = ( 172.591 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"131 Room x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"131 Room window 1" = WINDOW\n\
   X                = 13.4509\n\
   Y                = 2.95\n\
   HEIGHT           = 5\n\
   WIDTH            = 3.38173\n\
   ..\n\
"131 Room - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "131 Room floor pg mr"\n\
   ..\n\
"131 Room - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "131 Room pg"\n\
   ..\n\
"131 Room i-wall 2" = INTERIOR-WALL\n\
   NEXT-TO          = "129 Room"\n\
   LOCATION         = SPACE-V3\n\
   ..\n\
"131 Room - ug flr" = UNDERGROUND-WALL\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "131 Room slab pg mr"\n\
   ..\n\
"132 Room" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office1"\n\
   LIGHTING-SCHEDUL = ( "Office1" )\n\
   EQUIP-SCHEDULE   = ( "Office1" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "132 Room pg"\n\
   C-SUB-AREA       = ( 219.917 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"132 Room x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"132 Room window 1" = WINDOW\n\
   X                = 0.189079\n\
   Y                = 2.95\n\
   HEIGHT           = 5\n\
   WIDTH            = 7.31578\n\
   ..\n\
"132 Room - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "132 Room floor pg mr"\n\
   ..\n\
"132 Room - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "132 Room pg"\n\
   ..\n\
"132 Room i-wall 1" = INTERIOR-WALL\n\
   NEXT-TO          = "1-29 Pottery Upper"\n\
   LOCATION         = SPACE-V1\n\
   ..\n\
"132 Room i-wall 3" = INTERIOR-WALL\n\
   NEXT-TO          = "130 Bathroom"\n\
   LOCATION         = SPACE-V3\n\
   ..\n\
"142 Room" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office1"\n\
   LIGHTING-SCHEDUL = ( "Office1" )\n\
   EQUIP-SCHEDULE   = ( "Office1" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "142 Room pg"\n\
   C-SUB-AREA       = ( 186.356 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"142 Room x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"142 Room window 1" = WINDOW\n\
   X                = 0.999535\n\
   Y                = 2.95\n\
   HEIGHT           = 5\n\
   WIDTH            = 4.33062\n\
   ..\n\
"142 Room - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "142 Room floor pg mr"\n\
   ..\n\
"142 Room - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "142 Room pg"\n\
   ..\n\
"142 Room i-wall 1" = INTERIOR-WALL\n\
   NEXT-TO          = "1-21 Potter Upper"\n\
   LOCATION         = SPACE-V1\n\
   ..\n\
"142 Room i-wall 3" = INTERIOR-WALL\n\
   NEXT-TO          = "144 Room"\n\
   LOCATION         = SPACE-V3\n\
   ..\n\
"143 Room" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office4"\n\
   LIGHTING-SCHEDUL = ( "Office4" )\n\
   EQUIP-SCHEDULE   = ( "Office4" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "143 Room pg"\n\
   C-SUB-AREA       = ( 126.879 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"143 Room x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"143 Room window 1" = WINDOW\n\
   X                = 3.77104\n\
   Y                = 0\n\
   HEIGHT           = 8\n\
   WIDTH            = 7.79689\n\
   ..\n\
"143 Room - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "143 Room pg"\n\
   ..\n\
"143 Room i-wall 2" = INTERIOR-WALL\n\
   NEXT-TO          = "145 Room"\n\
   LOCATION         = SPACE-V3\n\
   ..\n\
"143 Room - ug flr" = UNDERGROUND-WALL\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "143 Room slab pg mr"\n\
   ..\n\
"144 Room" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office5"\n\
   LIGHTING-SCHEDUL = ( "Office5" )\n\
   EQUIP-SCHEDULE   = ( "Office5" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "144 Room pg"\n\
   C-SUB-AREA       = ( 148.786 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"144 Room x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"144 Room window 1" = WINDOW\n\
   X                = 0\n\
   Y                = 2.95\n\
   HEIGHT           = 5\n\
   WIDTH            = 3.75941\n\
   ..\n\
"144 Room - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "144 Room floor pg mr"\n\
   ..\n\
"144 Room - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "144 Room pg"\n\
   ..\n\
"145 Room" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office3"\n\
   LIGHTING-SCHEDUL = ( "Office3" )\n\
   EQUIP-SCHEDULE   = ( "Office3" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "145 Room pg"\n\
   C-SUB-AREA       = ( 130.001 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"145 Room x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"145 Room window 1" = WINDOW\n\
   X                = 7.07591\n\
   Y                = 2.95\n\
   HEIGHT           = 5\n\
   WIDTH            = 4.08234\n\
   ..\n\
"145 Room - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "145 Room pg"\n\
   ..\n\
"145 Room i-wall 2" = INTERIOR-WALL\n\
   NEXT-TO          = "147 Room"\n\
   LOCATION         = SPACE-V3\n\
   ..\n\
"145 Room - ug flr" = UNDERGROUND-WALL\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "145 Room slab pg mr"\n\
   ..\n\
"146 Room" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office2"\n\
   LIGHTING-SCHEDUL = ( "Office2" )\n\
   EQUIP-SCHEDULE   = ( "Office2" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "146 Room pg"\n\
   C-SUB-AREA       = ( 143.034 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"146 Room x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"146 Room window 1" = WINDOW\n\
   X                = 6.61027\n\
   Y                = 2.95\n\
   HEIGHT           = 5\n\
   WIDTH            = 3.37901\n\
   ..\n\
"146 Room - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "146 Room floor pg mr"\n\
   ..\n\
"146 Room - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "146 Room pg"\n\
   ..\n\
"146 Room i-wall 1" = INTERIOR-WALL\n\
   NEXT-TO          = "144 Room"\n\
   LOCATION         = SPACE-V1\n\
   ..\n\
"147 Room" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office5"\n\
   LIGHTING-SCHEDUL = ( "Office5" )\n\
   EQUIP-SCHEDULE   = ( "Office5" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "147 Room pg"\n\
   C-SUB-AREA       = ( 179.998 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"147 Room x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"147 Room window 1" = WINDOW\n\
   X                = 13.7225\n\
   Y                = 2.95\n\
   HEIGHT           = 5\n\
   WIDTH            = 3.55571\n\
   ..\n\
"147 Room - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "147 Room pg"\n\
   ..\n\
"147 Room i-wall 2" = INTERIOR-WALL\n\
   NEXT-TO          = "149 Room"\n\
   LOCATION         = SPACE-V3\n\
   ..\n\
"147 Room - ug flr" = UNDERGROUND-WALL\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "147 Room slab pg mr"\n\
   ..\n\
"148 Bathroom" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office2"\n\
   LIGHTING-SCHEDUL = ( "Office2" )\n\
   EQUIP-SCHEDULE   = ( "Office2" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "148 Bathroom pg"\n\
   C-SUB-AREA       = ( 178.569 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"148 Bathroom x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"148 Bathroom - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "148 Bathroom floor pg mr"\n\
   ..\n\
"148 Bathroom - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "148 Bathroom pg"\n\
   ..\n\
"148 Bathroom i-wall 1" = INTERIOR-WALL\n\
   NEXT-TO          = "146 Room"\n\
   LOCATION         = SPACE-V1\n\
   ..\n\
"148 Bathroom i-wall 3" = INTERIOR-WALL\n\
   NEXT-TO          = "150 Room"\n\
   LOCATION         = SPACE-V3\n\
   ..\n\
"149 Room" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office2"\n\
   LIGHTING-SCHEDUL = ( "Office2" )\n\
   EQUIP-SCHEDULE   = ( "Office2" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "149 Room pg"\n\
   C-SUB-AREA       = ( 182.844 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"149 Room x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"149 Room window 1" = WINDOW\n\
   X                = 0\n\
   Y                = 2.95\n\
   HEIGHT           = 5\n\
   WIDTH            = 3.89886\n\
   ..\n\
"149 Room - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "149 Room pg"\n\
   ..\n\
"149 Room - ug flr" = UNDERGROUND-WALL\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "149 Room slab pg mr"\n\
   ..\n\
"150 Room" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office4"\n\
   LIGHTING-SCHEDUL = ( "Office4" )\n\
   EQUIP-SCHEDULE   = ( "Office4" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "150 Room pg"\n\
   C-SUB-AREA       = ( 172.048 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"150 Room x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"150 Room window 1" = WINDOW\n\
   X                = 0\n\
   Y                = 2.95\n\
   HEIGHT           = 5\n\
   WIDTH            = 3.6134\n\
   ..\n\
"150 Room - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "150 Room floor pg mr"\n\
   ..\n\
"150 Room - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "150 Room pg"\n\
   ..\n\
"152 Room" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office2"\n\
   LIGHTING-SCHEDUL = ( "Office2" )\n\
   EQUIP-SCHEDULE   = ( "Office2" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "152 Room pg"\n\
   C-SUB-AREA       = ( 168.794 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"152 Room x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V3\n\
   ..\n\
"152 Room x-wall 2" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"152 Room window 1" = WINDOW\n\
   X                = 8.52859\n\
   Y                = 2.95\n\
   HEIGHT           = 5\n\
   WIDTH            = 3.52316\n\
   ..\n\
"152 Room - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "152 Room floor pg mr"\n\
   ..\n\
"152 Room - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "152 Room pg"\n\
   ..\n\
"152 Room i-wall 1" = INTERIOR-WALL\n\
   NEXT-TO          = "150 Room"\n\
   LOCATION         = SPACE-V1\n\
   ..\n\
"153 Corridor" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office3"\n\
   LIGHTING-SCHEDUL = ( "Office3" )\n\
   EQUIP-SCHEDULE   = ( "Office3" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "153 Corridor pg"\n\
   C-SUB-AREA       = ( 379.567 )\n\
   C-OCC-TYPE       = ( 35 )\n\
   ..\n\
"153 Corridor x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"153 Corridor window 1" = WINDOW\n\
   X                = 1.32318\n\
   Y                = 2.95\n\
   HEIGHT           = 5\n\
   WIDTH            = 3.59751\n\
   ..\n\
"153 Corridor x-wall 2" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V9\n\
   ..\n\
"153 Corridor window 2" = WINDOW\n\
   X                = 0.496596\n\
   Y                = 2.95\n\
   HEIGHT           = 5\n\
   WIDTH            = 4.10155\n\
   ..\n\
"153 Corridor - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "153 Corridor pg"\n\
   ..\n\
"153 Corridor i-wall 1" = INTERIOR-WALL\n\
   NEXT-TO          = "1-ST3 Stair 3"\n\
   LOCATION         = SPACE-V1\n\
   ..\n\
"153 Corridor i-wall 2" = INTERIOR-WALL\n\
   NEXT-TO          = "143 Room"\n\
   LOCATION         = SPACE-V3\n\
   ..\n\
"153 Corridor i-wall 3" = INTERIOR-WALL\n\
   NEXT-TO          = "143 Room"\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"153 Corridor i-wall 4" = INTERIOR-WALL\n\
   NEXT-TO          = "145 Room"\n\
   LOCATION         = SPACE-V5\n\
   ..\n\
"153 Corridor i-wall 5" = INTERIOR-WALL\n\
   NEXT-TO          = "147 Room"\n\
   LOCATION         = SPACE-V6\n\
   ..\n\
"153 Corridor i-wall 6" = INTERIOR-WALL\n\
   NEXT-TO          = "149 Room"\n\
   LOCATION         = SPACE-V7\n\
   ..\n\
"153 Corridor i-wall 7" = INTERIOR-WALL\n\
   NEXT-TO          = "1-ST4 Stair 4"\n\
   LOCATION         = SPACE-V8\n\
   ..\n\
"153 Corridor i-wall 8" = INTERIOR-WALL\n\
   NEXT-TO          = "152 Room"\n\
   LOCATION         = SPACE-V10\n\
   ..\n\
"153 Corridor i-wall 9" = INTERIOR-WALL\n\
   NEXT-TO          = "150 Room"\n\
   LOCATION         = SPACE-V11\n\
   ..\n\
"153 Corridor i-wall 10" = INTERIOR-WALL\n\
   NEXT-TO          = "148 Bathroom"\n\
   LOCATION         = SPACE-V12\n\
   ..\n\
"153 Corridor i-wall 11" = INTERIOR-WALL\n\
   NEXT-TO          = "146 Room"\n\
   LOCATION         = SPACE-V13\n\
   ..\n\
"153 Corridor i-wall 12" = INTERIOR-WALL\n\
   NEXT-TO          = "144 Room"\n\
   LOCATION         = SPACE-V14\n\
   ..\n\
"153 Corridor i-wall 13" = INTERIOR-WALL\n\
   NEXT-TO          = "142 Room"\n\
   LOCATION         = SPACE-V15\n\
   ..\n\
"153 Corridor - ug flr" = UNDERGROUND-WALL\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "153 Corridor slab pg mr"\n\
   ..\n\
"Level 2" = FLOOR\n\
   Z                = 17.5\n\
   POLYGON          = "Level 2 pg"\n\
   SHAPE            = POLYGON\n\
   FLOOR-HEIGHT     = 8.75\n\
   SPACE-HEIGHT     = 8\n\
   C-DIAGRAM-DATA   = *Detailed UI DiagData*\n\
   ..\n\
"2-EL1 Elev" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = UNCONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office2"\n\
   LIGHTING-SCHEDUL = ( "Office2" )\n\
   EQUIP-SCHEDULE   = ( "Office2" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "2-EL1 Elev pg"\n\
   C-SUB-AREA       = ( 78.0371 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"2-EL1 Elev x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V1\n\
   ..\n\
"2-EL1 Elev x-wall 2" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"2-EL1 Elev - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "2-EL1 Elev floor pg mr"\n\
   ..\n\
"2-EL1 Elev - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "2-EL1 Elev pg"\n\
   ..\n\
"2-EL1 Elev i-wall 1" = INTERIOR-WALL\n\
   NEXT-TO          = "221 Corridor"\n\
   LOCATION         = SPACE-V3\n\
   ..\n\
"2-EL1 Elev i-wall 2" = INTERIOR-WALL\n\
   NEXT-TO          = "221 Corridor"\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"2-ST1 Stair 1" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = UNCONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office5"\n\
   LIGHTING-SCHEDUL = ( "Office5" )\n\
   EQUIP-SCHEDULE   = ( "Office5" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "2-ST1 Stair 1 pg"\n\
   C-SUB-AREA       = ( 108.719 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"2-ST1 Stair 1 x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V1\n\
   ..\n\
"2-ST1 Stair 1 x-wall 2" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"2-ST1 Stair 1 x-wall 3" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V3\n\
   ..\n\
"2-ST1 Stair 1 x-wall 4" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V6\n\
   ..\n\
"2-ST1 Stair 1 - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "2-ST1 Stair 1 floor pg mr"\n\
   ..\n\
"2-ST1 Stair 1 - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "2-ST1 Stair 1 pg"\n\
   ..\n\
"2-ST1 Stair 1 i-wall 2" = INTERIOR-WALL\n\
   NEXT-TO          = "213 Corridor"\n\
   LOCATION         = SPACE-V5\n\
   ..\n\
"2-ST2 Stair 2" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = UNCONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office2"\n\
   LIGHTING-SCHEDUL = ( "Office2" )\n\
   EQUIP-SCHEDULE   = ( "Office2" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "2-ST2 Stair 2 pg"\n\
   C-SUB-AREA       = ( 144.119 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"2-ST2 Stair 2 x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"2-ST2 Stair 2 window 1" = WINDOW\n\
   X                = 0.447046\n\
   Y                = 0\n\
   HEIGHT           = 8\n\
   WIDTH            = 5.90248\n\
   ..\n\
"2-ST2 Stair 2 x-wall 2" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V3\n\
   ..\n\
"2-ST2 Stair 2 window 2" = WINDOW\n\
   X                = 0.515818\n\
   Y                = 0\n\
   HEIGHT           = 8\n\
   WIDTH            = 8.29658\n\
   ..\n\
"2-ST2 Stair 2 - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "2-ST2 Stair 2 floor pg mr"\n\
   ..\n\
"2-ST2 Stair 2 - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "2-ST2 Stair 2 pg"\n\
   ..\n\
"2-ST2 Stair 2 i-wall 1" = INTERIOR-WALL\n\
   NEXT-TO          = "214 Corridor"\n\
   LOCATION         = SPACE-V1\n\
   ..\n\
"2-ST2 Stair 2 i-wall 3" = INTERIOR-WALL\n\
   NEXT-TO          = "201 Corridor"\n\
   LOCATION         = SPACE-V5\n\
   ..\n\
"2-ST3 Stair 3" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = UNCONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office2"\n\
   LIGHTING-SCHEDUL = ( "Office2" )\n\
   EQUIP-SCHEDULE   = ( "Office2" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "2-ST3 Stair 3 pg"\n\
   C-SUB-AREA       = ( 150.753 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"2-ST3 Stair 3 x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"2-ST3 Stair 3 window 1" = WINDOW\n\
   X                = 0\n\
   Y                = 0\n\
   HEIGHT           = 8\n\
   WIDTH            = 8.41771\n\
   ..\n\
"2-ST3 Stair 3 x-wall 2" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V3\n\
   ..\n\
"2-ST3 Stair 3 window 2" = WINDOW\n\
   X                = 0.348083\n\
   Y                = 0\n\
   HEIGHT           = 8\n\
   WIDTH            = 6.12712\n\
   ..\n\
"2-ST3 Stair 3 - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "2-ST3 Stair 3 floor pg mr"\n\
   ..\n\
"2-ST3 Stair 3 - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "2-ST3 Stair 3 pg"\n\
   ..\n\
"2-ST3 Stair 3 i-wall 1" = INTERIOR-WALL\n\
   NEXT-TO          = "221 Corridor"\n\
   LOCATION         = SPACE-V1\n\
   ..\n\
"2-ST3 Stair 3 i-wall 2" = INTERIOR-WALL\n\
   NEXT-TO          = "253 Corridor"\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"2-ST3 Stair 3 i-wall 3" = INTERIOR-WALL\n\
   NEXT-TO          = "221A IT"\n\
   LOCATION         = SPACE-V5\n\
   ..\n\
"2-ST4 Stair 4" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = UNCONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office5"\n\
   LIGHTING-SCHEDUL = ( "Office5" )\n\
   EQUIP-SCHEDULE   = ( "Office5" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "2-ST4 Stair 4 pg"\n\
   C-SUB-AREA       = ( 106.313 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"2-ST4 Stair 4 x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"2-ST4 Stair 4 x-wall 2" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V3\n\
   ..\n\
"2-ST4 Stair 4 x-wall 3" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"2-ST4 Stair 4 x-wall 4" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V5\n\
   ..\n\
"2-ST4 Stair 4 - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "2-ST4 Stair 4 floor pg mr"\n\
   ..\n\
"2-ST4 Stair 4 - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "2-ST4 Stair 4 pg"\n\
   ..\n\
"2-ST4 Stair 4 i-wall 1" = INTERIOR-WALL\n\
   NEXT-TO          = "249 Room"\n\
   LOCATION         = SPACE-V1\n\
   ..\n\
"2-ST4 Stair 4 i-wall 2" = INTERIOR-WALL\n\
   NEXT-TO          = "251 Corridor"\n\
   LOCATION         = SPACE-V6\n\
   ..\n\
"200 CRE" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office2"\n\
   LIGHTING-SCHEDUL = ( "Office2" )\n\
   EQUIP-SCHEDULE   = ( "Office2" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "200 CRE pg"\n\
   C-SUB-AREA       = ( 554.031 )\n\
   C-OCC-TYPE       = ( 35 )\n\
   ..\n\
"200 CRE x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V1\n\
   ..\n\
"200 CRE x-wall 2" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V8\n\
   ..\n\
"200 CRE x-wall 3" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V9\n\
   ..\n\
"200 CRE window 1" = WINDOW\n\
   X                = 10.8699\n\
   Y                = 2.95\n\
   HEIGHT           = 5\n\
   WIDTH            = 9.93339\n\
   ..\n\
"200 CRE window 2" = WINDOW\n\
   X                = 0.370108\n\
   Y                = 0\n\
   HEIGHT           = 8\n\
   WIDTH            = 9.62127\n\
   ..\n\
"200 CRE - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "200 CRE floor pg mr"\n\
   ..\n\
"200 CRE - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "200 CRE pg"\n\
   ..\n\
"200 CRE i-wall 4" = INTERIOR-WALL\n\
   NEXT-TO          = "201 Corridor"\n\
   LOCATION         = SPACE-V5\n\
   ..\n\
"200 CRE i-wall 5" = INTERIOR-WALL\n\
   NEXT-TO          = "201 Corridor"\n\
   LOCATION         = SPACE-V6\n\
   ..\n\
"200 CRE i-wall 6" = INTERIOR-WALL\n\
   NEXT-TO          = "232 Room"\n\
   LOCATION         = SPACE-V7\n\
   ..\n\
"200B Storage" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = UNCONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office4"\n\
   LIGHTING-SCHEDUL = ( "Office4" )\n\
   EQUIP-SCHEDULE   = ( "Office4" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "200B Storage pg"\n\
   C-SUB-AREA       = ( 52.25 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"200B Storage - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "200B Storage floor pg mr"\n\
   ..\n\
"200B Storage - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "200B Storage pg"\n\
   ..\n\
"200B Storage i-wall 1" = INTERIOR-WALL\n\
   NEXT-TO          = "214 Corridor"\n\
   LOCATION         = SPACE-V1\n\
   ..\n\
"200B Storage i-wall 2" = INTERIOR-WALL\n\
   NEXT-TO          = "2-ST2 Stair 2"\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"200B Storage i-wall 3" = INTERIOR-WALL\n\
   NEXT-TO          = "200 CRE"\n\
   LOCATION         = SPACE-V3\n\
   ..\n\
"200B Storage i-wall 4" = INTERIOR-WALL\n\
   NEXT-TO          = "200 CRE"\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"201 Corridor" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office1"\n\
   LIGHTING-SCHEDUL = ( "Office1" )\n\
   EQUIP-SCHEDULE   = ( "Office1" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "201 Corridor pg"\n\
   C-SUB-AREA       = ( 128.844 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"201 Corridor - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "201 Corridor floor pg mr"\n\
   ..\n\
"201 Corridor - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "201 Corridor pg"\n\
   ..\n\
"201 Corridor i-wall 4" = INTERIOR-WALL\n\
   NEXT-TO          = "231 Room"\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"201A Lounge" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office1"\n\
   LIGHTING-SCHEDUL = ( "Office1" )\n\
   EQUIP-SCHEDULE   = ( "Office1" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "201A Lounge pg"\n\
   C-SUB-AREA       = ( 224.287 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"201A Lounge x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"201A Lounge window 1" = WINDOW\n\
   X                = 0\n\
   Y                = 0\n\
   HEIGHT           = 8\n\
   WIDTH            = 18.6156\n\
   ..\n\
"201A Lounge x-wall 2" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V3\n\
   ..\n\
"201A Lounge window 2" = WINDOW\n\
   X                = 0.221578\n\
   Y                = 0\n\
   HEIGHT           = 8\n\
   WIDTH            = 10.2499\n\
   ..\n\
"201A Lounge - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "201A Lounge floor pg mr"\n\
   ..\n\
"201A Lounge - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "201A Lounge pg"\n\
   ..\n\
"201A Lounge i-wall 1" = INTERIOR-WALL\n\
   NEXT-TO          = "2-ST2 Stair 2"\n\
   LOCATION         = SPACE-V1\n\
   ..\n\
"201A Lounge i-wall 2" = INTERIOR-WALL\n\
   NEXT-TO          = "231 Room"\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"201A Lounge i-wall 3" = INTERIOR-WALL\n\
   NEXT-TO          = "201 Corridor"\n\
   LOCATION         = SPACE-V5\n\
   ..\n\
"201A Lounge i-wall 4" = INTERIOR-WALL\n\
   NEXT-TO          = "201 Corridor"\n\
   LOCATION         = SPACE-V6\n\
   ..\n\
"202 Room" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office4"\n\
   LIGHTING-SCHEDUL = ( "Office4" )\n\
   EQUIP-SCHEDULE   = ( "Office4" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "202 Room pg"\n\
   C-SUB-AREA       = ( 173.388 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"202 Room x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"202 Room window 1" = WINDOW\n\
   X                = 7.29757\n\
   Y                = 2.95\n\
   HEIGHT           = 5\n\
   WIDTH            = 3.99637\n\
   ..\n\
"202 Room - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "202 Room floor pg mr"\n\
   ..\n\
"202 Room - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "202 Room pg"\n\
   ..\n\
"202 Room i-wall 1" = INTERIOR-WALL\n\
   NEXT-TO          = "204 Room"\n\
   LOCATION         = SPACE-V1\n\
   ..\n\
"202 Room i-wall 2" = INTERIOR-WALL\n\
   NEXT-TO          = "214 Corridor"\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"202 Room i-wall 3" = INTERIOR-WALL\n\
   NEXT-TO          = "200 CRE"\n\
   LOCATION         = SPACE-V3\n\
   ..\n\
"203 Room" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office4"\n\
   LIGHTING-SCHEDUL = ( "Office4" )\n\
   EQUIP-SCHEDULE   = ( "Office4" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "203 Room pg"\n\
   C-SUB-AREA       = ( 122.094 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"203 Room x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"203 Room window 1" = WINDOW\n\
   X                = 0.35709\n\
   Y                = 0\n\
   HEIGHT           = 8\n\
   WIDTH            = 7.83762\n\
   ..\n\
"203 Room - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "203 Room floor pg mr"\n\
   ..\n\
"203 Room - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "203 Room pg"\n\
   ..\n\
"203 Room i-wall 2" = INTERIOR-WALL\n\
   NEXT-TO          = "214 Corridor"\n\
   LOCATION         = SPACE-V3\n\
   ..\n\
"203 Room i-wall 3" = INTERIOR-WALL\n\
   NEXT-TO          = "214 Corridor"\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"204 Room" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office1"\n\
   LIGHTING-SCHEDUL = ( "Office1" )\n\
   EQUIP-SCHEDULE   = ( "Office1" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "204 Room pg"\n\
   C-SUB-AREA       = ( 146.743 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"204 Room x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"204 Room window 1" = WINDOW\n\
   X                = 7.17205\n\
   Y                = 2.95\n\
   HEIGHT           = 5\n\
   WIDTH            = 3.52309\n\
   ..\n\
"204 Room - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "204 Room floor pg mr"\n\
   ..\n\
"204 Room - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "204 Room pg"\n\
   ..\n\
"204 Room i-wall 2" = INTERIOR-WALL\n\
   NEXT-TO          = "214 Corridor"\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"206 Room" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office5"\n\
   LIGHTING-SCHEDUL = ( "Office5" )\n\
   EQUIP-SCHEDULE   = ( "Office5" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "206 Room pg"\n\
   C-SUB-AREA       = ( 150.493 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"206 Room x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"206 Room window 1" = WINDOW\n\
   X                = 0\n\
   Y                = 2.95\n\
   HEIGHT           = 5\n\
   WIDTH            = 3.46716\n\
   ..\n\
"206 Room - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "206 Room floor pg mr"\n\
   ..\n\
"206 Room - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "206 Room pg"\n\
   ..\n\
"206 Room i-wall 1" = INTERIOR-WALL\n\
   NEXT-TO          = "208 Bathroom"\n\
   LOCATION         = SPACE-V1\n\
   ..\n\
"206 Room i-wall 2" = INTERIOR-WALL\n\
   NEXT-TO          = "213 Corridor"\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"206 Room i-wall 3" = INTERIOR-WALL\n\
   NEXT-TO          = "204 Room"\n\
   LOCATION         = SPACE-V3\n\
   ..\n\
"207 Room" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office4"\n\
   LIGHTING-SCHEDUL = ( "Office4" )\n\
   EQUIP-SCHEDULE   = ( "Office4" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "207 Room pg"\n\
   C-SUB-AREA       = ( 127.636 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"207 Room x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"207 Room window 1" = WINDOW\n\
   X                = 1.09107\n\
   Y                = 2.95\n\
   HEIGHT           = 5\n\
   WIDTH            = 3.82307\n\
   ..\n\
"207 Room - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "207 Room floor pg mr"\n\
   ..\n\
"207 Room - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "207 Room pg"\n\
   ..\n\
"207 Room i-wall 1" = INTERIOR-WALL\n\
   NEXT-TO          = "209 Room"\n\
   LOCATION         = SPACE-V1\n\
   ..\n\
"207 Room i-wall 2" = INTERIOR-WALL\n\
   NEXT-TO          = "203 Room"\n\
   LOCATION         = SPACE-V3\n\
   ..\n\
"207 Room i-wall 3" = INTERIOR-WALL\n\
   NEXT-TO          = "214 Corridor"\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"208 Bathroom" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office4"\n\
   LIGHTING-SCHEDUL = ( "Office4" )\n\
   EQUIP-SCHEDULE   = ( "Office4" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "208 Bathroom pg"\n\
   C-SUB-AREA       = ( 168.165 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"208 Bathroom x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"208 Bathroom - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "208 Bathroom floor pg mr"\n\
   ..\n\
"208 Bathroom - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "208 Bathroom pg"\n\
   ..\n\
"208 Bathroom i-wall 2" = INTERIOR-WALL\n\
   NEXT-TO          = "213 Corridor"\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"209 Room" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office5"\n\
   LIGHTING-SCHEDUL = ( "Office5" )\n\
   EQUIP-SCHEDULE   = ( "Office5" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "209 Room pg"\n\
   C-SUB-AREA       = ( 178.406 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"209 Room x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"209 Room window 1" = WINDOW\n\
   X                = 0\n\
   Y                = 2.95\n\
   HEIGHT           = 5\n\
   WIDTH            = 3.39656\n\
   ..\n\
"209 Room - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "209 Room floor pg mr"\n\
   ..\n\
"209 Room - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "209 Room pg"\n\
   ..\n\
"209 Room i-wall 3" = INTERIOR-WALL\n\
   NEXT-TO          = "213 Corridor"\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"210 Room" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office2"\n\
   LIGHTING-SCHEDUL = ( "Office2" )\n\
   EQUIP-SCHEDULE   = ( "Office2" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "210 Room pg"\n\
   C-SUB-AREA       = ( 171.743 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"210 Room x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"210 Room window 1" = WINDOW\n\
   X                = 8.74089\n\
   Y                = 2.95\n\
   HEIGHT           = 5\n\
   WIDTH            = 3.51004\n\
   ..\n\
"210 Room - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "210 Room floor pg mr"\n\
   ..\n\
"210 Room - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "210 Room pg"\n\
   ..\n\
"210 Room i-wall 1" = INTERIOR-WALL\n\
   NEXT-TO          = "212 Room"\n\
   LOCATION         = SPACE-V1\n\
   ..\n\
"210 Room i-wall 2" = INTERIOR-WALL\n\
   NEXT-TO          = "213 Corridor"\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"210 Room i-wall 3" = INTERIOR-WALL\n\
   NEXT-TO          = "208 Bathroom"\n\
   LOCATION         = SPACE-V3\n\
   ..\n\
"211 Room" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office2"\n\
   LIGHTING-SCHEDUL = ( "Office2" )\n\
   EQUIP-SCHEDULE   = ( "Office2" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "211 Room pg"\n\
   C-SUB-AREA       = ( 179.367 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"211 Room x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"211 Room window 1" = WINDOW\n\
   X                = 13.4776\n\
   Y                = 2.95\n\
   HEIGHT           = 5\n\
   WIDTH            = 3.62933\n\
   ..\n\
"211 Room - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "211 Room floor pg mr"\n\
   ..\n\
"211 Room - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "211 Room pg"\n\
   ..\n\
"211 Room i-wall 1" = INTERIOR-WALL\n\
   NEXT-TO          = "2-ST1 Stair 1"\n\
   LOCATION         = SPACE-V1\n\
   ..\n\
"211 Room i-wall 2" = INTERIOR-WALL\n\
   NEXT-TO          = "209 Room"\n\
   LOCATION         = SPACE-V3\n\
   ..\n\
"211 Room i-wall 3" = INTERIOR-WALL\n\
   NEXT-TO          = "213 Corridor"\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"212 Room" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office5"\n\
   LIGHTING-SCHEDUL = ( "Office5" )\n\
   EQUIP-SCHEDULE   = ( "Office5" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "212 Room pg"\n\
   C-SUB-AREA       = ( 170.158 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"212 Room x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V1\n\
   ..\n\
"212 Room x-wall 2" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"212 Room window 1" = WINDOW\n\
   X                = 0\n\
   Y                = 2.95\n\
   HEIGHT           = 5\n\
   WIDTH            = 3.45782\n\
   ..\n\
"212 Room - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "212 Room floor pg mr"\n\
   ..\n\
"212 Room - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "212 Room pg"\n\
   ..\n\
"212 Room i-wall 1" = INTERIOR-WALL\n\
   NEXT-TO          = "213 Corridor"\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"213 Corridor" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office4"\n\
   LIGHTING-SCHEDUL = ( "Office4" )\n\
   EQUIP-SCHEDULE   = ( "Office4" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "213 Corridor pg"\n\
   C-SUB-AREA       = ( 201.842 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"213 Corridor x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V1\n\
   ..\n\
"213 Corridor window 1" = WINDOW\n\
   X                = 0.526475\n\
   Y                = 2.95\n\
   HEIGHT           = 5\n\
   WIDTH            = 3.95294\n\
   ..\n\
"213 Corridor - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "213 Corridor floor pg mr"\n\
   ..\n\
"213 Corridor - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "213 Corridor pg"\n\
   ..\n\
"213 Corridor i-wall 4" = INTERIOR-WALL\n\
   NEXT-TO          = "214 Corridor"\n\
   LOCATION         = SPACE-V5\n\
   ..\n\
"214 Corridor" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office5"\n\
   LIGHTING-SCHEDUL = ( "Office5" )\n\
   EQUIP-SCHEDULE   = ( "Office5" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "214 Corridor pg"\n\
   C-SUB-AREA       = ( 175.653 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"214 Corridor x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V5\n\
   ..\n\
"214 Corridor window 1" = WINDOW\n\
   X                = 1.10169\n\
   Y                = 2.95\n\
   HEIGHT           = 5\n\
   WIDTH            = 3.22294\n\
   ..\n\
"214 Corridor - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "214 Corridor floor pg mr"\n\
   ..\n\
"214 Corridor - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "214 Corridor pg"\n\
   ..\n\
"221 Corridor" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office1"\n\
   LIGHTING-SCHEDUL = ( "Office1" )\n\
   EQUIP-SCHEDULE   = ( "Office1" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "221 Corridor pg"\n\
   C-SUB-AREA       = ( 274.982 )\n\
   C-OCC-TYPE       = ( 35 )\n\
   ..\n\
"221 Corridor x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"221 Corridor x-wall 2" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V5\n\
   ..\n\
"221 Corridor window 1" = WINDOW\n\
   X                = 0.387638\n\
   Y                = 0\n\
   HEIGHT           = 8\n\
   WIDTH            = 7.82243\n\
   ..\n\
"221 Corridor - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "221 Corridor floor pg mr"\n\
   ..\n\
"221 Corridor - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "221 Corridor pg"\n\
   ..\n\
"221 Corridor i-wall 5" = INTERIOR-WALL\n\
   NEXT-TO          = "221A IT"\n\
   LOCATION         = SPACE-V7\n\
   ..\n\
"221A IT" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office4"\n\
   LIGHTING-SCHEDUL = ( "Office4" )\n\
   EQUIP-SCHEDULE   = ( "Office4" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "221A IT pg"\n\
   C-SUB-AREA       = ( 54.3438 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"221A IT - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "221A IT floor pg mr"\n\
   ..\n\
"221A IT - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "221A IT pg"\n\
   ..\n\
"222 Room" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office4"\n\
   LIGHTING-SCHEDUL = ( "Office4" )\n\
   EQUIP-SCHEDULE   = ( "Office4" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "222 Room pg"\n\
   C-SUB-AREA       = ( 169.812 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"222 Room x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"222 Room window 1" = WINDOW\n\
   X                = 6.50307\n\
   Y                = 2.95\n\
   HEIGHT           = 5\n\
   WIDTH            = 4.01709\n\
   ..\n\
"222 Room - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "222 Room floor pg mr"\n\
   ..\n\
"222 Room - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "222 Room pg"\n\
   ..\n\
"222 Room i-wall 1" = INTERIOR-WALL\n\
   NEXT-TO          = "224 Room"\n\
   LOCATION         = SPACE-V1\n\
   ..\n\
"223 Room" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office2"\n\
   LIGHTING-SCHEDUL = ( "Office2" )\n\
   EQUIP-SCHEDULE   = ( "Office2" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "223 Room pg"\n\
   C-SUB-AREA       = ( 118.172 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"223 Room x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"223 Room window 1" = WINDOW\n\
   X                = 0.473087\n\
   Y                = 0\n\
   HEIGHT           = 8\n\
   WIDTH            = 7.82057\n\
   ..\n\
"223 Room - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "223 Room floor pg mr"\n\
   ..\n\
"223 Room - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "223 Room pg"\n\
   ..\n\
"223 Room i-wall 2" = INTERIOR-WALL\n\
   NEXT-TO          = "221 Corridor"\n\
   LOCATION         = SPACE-V3\n\
   ..\n\
"224 Room" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office5"\n\
   LIGHTING-SCHEDUL = ( "Office5" )\n\
   EQUIP-SCHEDULE   = ( "Office5" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "224 Room pg"\n\
   C-SUB-AREA       = ( 149.939 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"224 Room x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"224 Room window 1" = WINDOW\n\
   X                = 6.95363\n\
   Y                = 2.95\n\
   HEIGHT           = 5\n\
   WIDTH            = 3.57601\n\
   ..\n\
"224 Room - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "224 Room floor pg mr"\n\
   ..\n\
"224 Room - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "224 Room pg"\n\
   ..\n\
"225 Corridor" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office5"\n\
   LIGHTING-SCHEDUL = ( "Office5" )\n\
   EQUIP-SCHEDULE   = ( "Office5" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "225 Corridor pg"\n\
   C-SUB-AREA       = ( 310.156 )\n\
   C-OCC-TYPE       = ( 35 )\n\
   ..\n\
"225 Corridor - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "225 Corridor floor pg mr"\n\
   ..\n\
"225 Corridor - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "225 Corridor pg"\n\
   ..\n\
"225 Corridor i-wall 1" = INTERIOR-WALL\n\
   NEXT-TO          = "201 Corridor"\n\
   LOCATION         = SPACE-V1\n\
   ..\n\
"225 Corridor i-wall 2" = INTERIOR-WALL\n\
   NEXT-TO          = "231 Room"\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"225 Corridor i-wall 3" = INTERIOR-WALL\n\
   NEXT-TO          = "229 Room"\n\
   LOCATION         = SPACE-V3\n\
   ..\n\
"225 Corridor i-wall 5" = INTERIOR-WALL\n\
   NEXT-TO          = "223 Room"\n\
   LOCATION         = SPACE-V5\n\
   ..\n\
"225 Corridor i-wall 6" = INTERIOR-WALL\n\
   NEXT-TO          = "221 Corridor"\n\
   LOCATION         = SPACE-V6\n\
   ..\n\
"225 Corridor i-wall 7" = INTERIOR-WALL\n\
   NEXT-TO          = "240 Room"\n\
   LOCATION         = SPACE-V7\n\
   ..\n\
"225 Corridor i-wall 8" = INTERIOR-WALL\n\
   NEXT-TO          = "222 Room"\n\
   LOCATION         = SPACE-V8\n\
   ..\n\
"225 Corridor i-wall 9" = INTERIOR-WALL\n\
   NEXT-TO          = "224 Room"\n\
   LOCATION         = SPACE-V9\n\
   ..\n\
"225 Corridor i-wall 10" = INTERIOR-WALL\n\
   NEXT-TO          = "226 Room"\n\
   LOCATION         = SPACE-V10\n\
   ..\n\
"225 Corridor i-wall 11" = INTERIOR-WALL\n\
   NEXT-TO          = "228 Bathroom"\n\
   LOCATION         = SPACE-V11\n\
   ..\n\
"225 Corridor i-wall 12" = INTERIOR-WALL\n\
   NEXT-TO          = "230 Room"\n\
   LOCATION         = SPACE-V12\n\
   ..\n\
"225 Corridor i-wall 13" = INTERIOR-WALL\n\
   NEXT-TO          = "232 Room"\n\
   LOCATION         = SPACE-V13\n\
   ..\n\
"226 Room" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office4"\n\
   LIGHTING-SCHEDUL = ( "Office4" )\n\
   EQUIP-SCHEDULE   = ( "Office4" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "226 Room pg"\n\
   C-SUB-AREA       = ( 155.485 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"226 Room x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"226 Room window 1" = WINDOW\n\
   X                = 0\n\
   Y                = 2.95\n\
   HEIGHT           = 5\n\
   WIDTH            = 3.44894\n\
   ..\n\
"226 Room - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "226 Room floor pg mr"\n\
   ..\n\
"226 Room - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "226 Room pg"\n\
   ..\n\
"226 Room i-wall 3" = INTERIOR-WALL\n\
   NEXT-TO          = "224 Room"\n\
   LOCATION         = SPACE-V3\n\
   ..\n\
"227 Room" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office5"\n\
   LIGHTING-SCHEDUL = ( "Office5" )\n\
   EQUIP-SCHEDULE   = ( "Office5" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "227 Room pg"\n\
   C-SUB-AREA       = ( 124.135 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"227 Room x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"227 Room window 1" = WINDOW\n\
   X                = 1.27789\n\
   Y                = 2.95\n\
   HEIGHT           = 5\n\
   WIDTH            = 3.8426\n\
   ..\n\
"227 Room - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "227 Room floor pg mr"\n\
   ..\n\
"227 Room - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "227 Room pg"\n\
   ..\n\
"227 Room i-wall 1" = INTERIOR-WALL\n\
   NEXT-TO          = "229 Room"\n\
   LOCATION         = SPACE-V1\n\
   ..\n\
"227 Room i-wall 2" = INTERIOR-WALL\n\
   NEXT-TO          = "223 Room"\n\
   LOCATION         = SPACE-V3\n\
   ..\n\
"227 Room i-wall 3" = INTERIOR-WALL\n\
   NEXT-TO          = "225 Corridor"\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"228 Bathroom" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office1"\n\
   LIGHTING-SCHEDUL = ( "Office1" )\n\
   EQUIP-SCHEDULE   = ( "Office1" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "228 Bathroom pg"\n\
   C-SUB-AREA       = ( 167.521 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"228 Bathroom x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"228 Bathroom - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "228 Bathroom floor pg mr"\n\
   ..\n\
"228 Bathroom - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "228 Bathroom pg"\n\
   ..\n\
"228 Bathroom i-wall 1" = INTERIOR-WALL\n\
   NEXT-TO          = "230 Room"\n\
   LOCATION         = SPACE-V1\n\
   ..\n\
"228 Bathroom i-wall 3" = INTERIOR-WALL\n\
   NEXT-TO          = "226 Room"\n\
   LOCATION         = SPACE-V3\n\
   ..\n\
"229 Room" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office1"\n\
   LIGHTING-SCHEDUL = ( "Office1" )\n\
   EQUIP-SCHEDULE   = ( "Office1" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "229 Room pg"\n\
   C-SUB-AREA       = ( 169.77 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"229 Room x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"229 Room window 1" = WINDOW\n\
   X                = 0\n\
   Y                = 2.95\n\
   HEIGHT           = 5\n\
   WIDTH            = 3.29359\n\
   ..\n\
"229 Room - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "229 Room floor pg mr"\n\
   ..\n\
"229 Room - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "229 Room pg"\n\
   ..\n\
"230 Room" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office1"\n\
   LIGHTING-SCHEDUL = ( "Office1" )\n\
   EQUIP-SCHEDULE   = ( "Office1" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "230 Room pg"\n\
   C-SUB-AREA       = ( 174.72 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"230 Room x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"230 Room window 1" = WINDOW\n\
   X                = 8.54037\n\
   Y                = 2.95\n\
   HEIGHT           = 5\n\
   WIDTH            = 3.80594\n\
   ..\n\
"230 Room - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "230 Room floor pg mr"\n\
   ..\n\
"230 Room - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "230 Room pg"\n\
   ..\n\
"231 Room" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office2"\n\
   LIGHTING-SCHEDUL = ( "Office2" )\n\
   EQUIP-SCHEDULE   = ( "Office2" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "231 Room pg"\n\
   C-SUB-AREA       = ( 172.994 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"231 Room x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V3\n\
   ..\n\
"231 Room window 1" = WINDOW\n\
   X                = 13.4475\n\
   Y                = 2.95\n\
   HEIGHT           = 5\n\
   WIDTH            = 3.68196\n\
   ..\n\
"231 Room - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "231 Room floor pg mr"\n\
   ..\n\
"231 Room - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "231 Room pg"\n\
   ..\n\
"231 Room i-wall 3" = INTERIOR-WALL\n\
   NEXT-TO          = "229 Room"\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"232 Room" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office4"\n\
   LIGHTING-SCHEDUL = ( "Office4" )\n\
   EQUIP-SCHEDULE   = ( "Office4" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "232 Room pg"\n\
   C-SUB-AREA       = ( 170.617 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"232 Room x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"232 Room window 1" = WINDOW\n\
   X                = 0\n\
   Y                = 2.95\n\
   HEIGHT           = 5\n\
   WIDTH            = 3.33503\n\
   ..\n\
"232 Room - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "232 Room floor pg mr"\n\
   ..\n\
"232 Room - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "232 Room pg"\n\
   ..\n\
"232 Room i-wall 3" = INTERIOR-WALL\n\
   NEXT-TO          = "230 Room"\n\
   LOCATION         = SPACE-V3\n\
   ..\n\
"240 Room" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office2"\n\
   LIGHTING-SCHEDUL = ( "Office2" )\n\
   EQUIP-SCHEDULE   = ( "Office2" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "240 Room pg"\n\
   C-SUB-AREA       = ( 475.656 )\n\
   C-OCC-TYPE       = ( 35 )\n\
   ..\n\
"240 Room x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V1\n\
   ..\n\
"240 Room x-wall 2" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V7\n\
   ..\n\
"240 Room x-wall 3" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V8\n\
   ..\n\
"240 Room window 1" = WINDOW\n\
   X                = 10.8053\n\
   Y                = 0\n\
   HEIGHT           = 8\n\
   WIDTH            = 10.0255\n\
   ..\n\
"240 Room window 2" = WINDOW\n\
   X                = 0.348383\n\
   Y                = 2.95\n\
   HEIGHT           = 5\n\
   WIDTH            = 9.62839\n\
   ..\n\
"240 Room - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "240 Room floor pg mr"\n\
   ..\n\
"240 Room - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "240 Room pg"\n\
   ..\n\
"240 Room i-wall 1" = INTERIOR-WALL\n\
   NEXT-TO          = "222 Room"\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"240 Room i-wall 3" = INTERIOR-WALL\n\
   NEXT-TO          = "221 Corridor"\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"240 Room i-wall 4" = INTERIOR-WALL\n\
   NEXT-TO          = "221A IT"\n\
   LOCATION         = SPACE-V5\n\
   ..\n\
"240 Room i-wall 5" = INTERIOR-WALL\n\
   NEXT-TO          = "242 Room"\n\
   LOCATION         = SPACE-V6\n\
   ..\n\
"242 Room" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office2"\n\
   LIGHTING-SCHEDUL = ( "Office2" )\n\
   EQUIP-SCHEDULE   = ( "Office2" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "242 Room pg"\n\
   C-SUB-AREA       = ( 191.603 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"242 Room x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"242 Room window 1" = WINDOW\n\
   X                = 1.12474\n\
   Y                = 2.95\n\
   HEIGHT           = 5\n\
   WIDTH            = 3.96113\n\
   ..\n\
"242 Room - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "242 Room floor pg mr"\n\
   ..\n\
"242 Room - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "242 Room pg"\n\
   ..\n\
"242 Room i-wall 2" = INTERIOR-WALL\n\
   NEXT-TO          = "253 Corridor"\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"243 Room" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office5"\n\
   LIGHTING-SCHEDUL = ( "Office5" )\n\
   EQUIP-SCHEDULE   = ( "Office5" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "243 Room pg"\n\
   C-SUB-AREA       = ( 122.74 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"243 Room x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"243 Room window 1" = WINDOW\n\
   X                = 3.59747\n\
   Y                = 0\n\
   HEIGHT           = 8\n\
   WIDTH            = 7.95765\n\
   ..\n\
"243 Room - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "243 Room floor pg mr"\n\
   ..\n\
"243 Room - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "243 Room pg"\n\
   ..\n\
"243 Room i-wall 1" = INTERIOR-WALL\n\
   NEXT-TO          = "253 Corridor"\n\
   LOCATION         = SPACE-V1\n\
   ..\n\
"243 Room i-wall 2" = INTERIOR-WALL\n\
   NEXT-TO          = "245 Room"\n\
   LOCATION         = SPACE-V3\n\
   ..\n\
"243 Room i-wall 3" = INTERIOR-WALL\n\
   NEXT-TO          = "253 Corridor"\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"244 Room" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office3"\n\
   LIGHTING-SCHEDUL = ( "Office3" )\n\
   EQUIP-SCHEDULE   = ( "Office3" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "244 Room pg"\n\
   C-SUB-AREA       = ( 154.28 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"244 Room x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"244 Room window 1" = WINDOW\n\
   X                = 0\n\
   Y                = 2.95\n\
   HEIGHT           = 5\n\
   WIDTH            = 3.57784\n\
   ..\n\
"244 Room - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "244 Room floor pg mr"\n\
   ..\n\
"244 Room - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "244 Room pg"\n\
   ..\n\
"244 Room i-wall 1" = INTERIOR-WALL\n\
   NEXT-TO          = "242 Room"\n\
   LOCATION         = SPACE-V1\n\
   ..\n\
"244 Room i-wall 2" = INTERIOR-WALL\n\
   NEXT-TO          = "253 Corridor"\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"244 Room i-wall 3" = INTERIOR-WALL\n\
   NEXT-TO          = "246 Room"\n\
   LOCATION         = SPACE-V3\n\
   ..\n\
"245 Room" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office4"\n\
   LIGHTING-SCHEDUL = ( "Office4" )\n\
   EQUIP-SCHEDULE   = ( "Office4" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "245 Room pg"\n\
   C-SUB-AREA       = ( 128.395 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"245 Room x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"245 Room window 1" = WINDOW\n\
   X                = 7.07267\n\
   Y                = 2.95\n\
   HEIGHT           = 5\n\
   WIDTH            = 4.04455\n\
   ..\n\
"245 Room - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "245 Room floor pg mr"\n\
   ..\n\
"245 Room - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "245 Room pg"\n\
   ..\n\
"245 Room i-wall 2" = INTERIOR-WALL\n\
   NEXT-TO          = "247 Room"\n\
   LOCATION         = SPACE-V3\n\
   ..\n\
"245 Room i-wall 3" = INTERIOR-WALL\n\
   NEXT-TO          = "253 Corridor"\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"246 Room" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office2"\n\
   LIGHTING-SCHEDUL = ( "Office2" )\n\
   EQUIP-SCHEDULE   = ( "Office2" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "246 Room pg"\n\
   C-SUB-AREA       = ( 151.401 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"246 Room x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"246 Room window 1" = WINDOW\n\
   X                = 7.08092\n\
   Y                = 2.95\n\
   HEIGHT           = 5\n\
   WIDTH            = 3.23842\n\
   ..\n\
"246 Room - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "246 Room floor pg mr"\n\
   ..\n\
"246 Room - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "246 Room pg"\n\
   ..\n\
"246 Room i-wall 2" = INTERIOR-WALL\n\
   NEXT-TO          = "253 Corridor"\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"247 Room" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office1"\n\
   LIGHTING-SCHEDUL = ( "Office1" )\n\
   EQUIP-SCHEDULE   = ( "Office1" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "247 Room pg"\n\
   C-SUB-AREA       = ( 179.366 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"247 Room x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"247 Room window 1" = WINDOW\n\
   X                = 13.5283\n\
   Y                = 2.95\n\
   HEIGHT           = 5\n\
   WIDTH            = 3.45865\n\
   ..\n\
"247 Room - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "247 Room floor pg mr"\n\
   ..\n\
"247 Room - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "247 Room pg"\n\
   ..\n\
"247 Room i-wall 3" = INTERIOR-WALL\n\
   NEXT-TO          = "251 Corridor"\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"248 Bathroom" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office4"\n\
   LIGHTING-SCHEDUL = ( "Office4" )\n\
   EQUIP-SCHEDULE   = ( "Office4" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "248 Bathroom pg"\n\
   C-SUB-AREA       = ( 169.868 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"248 Bathroom x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"248 Bathroom - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "248 Bathroom floor pg mr"\n\
   ..\n\
"248 Bathroom - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "248 Bathroom pg"\n\
   ..\n\
"248 Bathroom i-wall 1" = INTERIOR-WALL\n\
   NEXT-TO          = "246 Room"\n\
   LOCATION         = SPACE-V1\n\
   ..\n\
"248 Bathroom i-wall 2" = INTERIOR-WALL\n\
   NEXT-TO          = "251 Corridor"\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"248 Bathroom i-wall 3" = INTERIOR-WALL\n\
   NEXT-TO          = "250 Room"\n\
   LOCATION         = SPACE-V3\n\
   ..\n\
"249 Room" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office2"\n\
   LIGHTING-SCHEDUL = ( "Office2" )\n\
   EQUIP-SCHEDULE   = ( "Office2" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "249 Room pg"\n\
   C-SUB-AREA       = ( 179.872 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"249 Room x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"249 Room window 1" = WINDOW\n\
   X                = 0\n\
   Y                = 2.95\n\
   HEIGHT           = 5\n\
   WIDTH            = 3.4293\n\
   ..\n\
"249 Room - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "249 Room floor pg mr"\n\
   ..\n\
"249 Room - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "249 Room pg"\n\
   ..\n\
"249 Room i-wall 1" = INTERIOR-WALL\n\
   NEXT-TO          = "247 Room"\n\
   LOCATION         = SPACE-V1\n\
   ..\n\
"249 Room i-wall 3" = INTERIOR-WALL\n\
   NEXT-TO          = "251 Corridor"\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"250 Room" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office2"\n\
   LIGHTING-SCHEDUL = ( "Office2" )\n\
   EQUIP-SCHEDULE   = ( "Office2" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "250 Room pg"\n\
   C-SUB-AREA       = ( 172.385 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"250 Room x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"250 Room window 1" = WINDOW\n\
   X                = 0\n\
   Y                = 2.95\n\
   HEIGHT           = 5\n\
   WIDTH            = 3.63843\n\
   ..\n\
"250 Room - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "250 Room floor pg mr"\n\
   ..\n\
"250 Room - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "250 Room pg"\n\
   ..\n\
"250 Room i-wall 2" = INTERIOR-WALL\n\
   NEXT-TO          = "251 Corridor"\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"251 Corridor" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office5"\n\
   LIGHTING-SCHEDUL = ( "Office5" )\n\
   EQUIP-SCHEDULE   = ( "Office5" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "251 Corridor pg"\n\
   C-SUB-AREA       = ( 176.885 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"251 Corridor x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V5\n\
   ..\n\
"251 Corridor window 1" = WINDOW\n\
   X                = 0.461947\n\
   Y                = 2.95\n\
   HEIGHT           = 5\n\
   WIDTH            = 4.10823\n\
   ..\n\
"251 Corridor - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "251 Corridor floor pg mr"\n\
   ..\n\
"251 Corridor - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "251 Corridor pg"\n\
   ..\n\
"252 Room" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office5"\n\
   LIGHTING-SCHEDUL = ( "Office5" )\n\
   EQUIP-SCHEDULE   = ( "Office5" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "252 Room pg"\n\
   C-SUB-AREA       = ( 170.266 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"252 Room x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V3\n\
   ..\n\
"252 Room x-wall 2" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"252 Room window 1" = WINDOW\n\
   X                = 8.44096\n\
   Y                = 2.95\n\
   HEIGHT           = 5\n\
   WIDTH            = 3.3632\n\
   ..\n\
"252 Room - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "252 Room floor pg mr"\n\
   ..\n\
"252 Room - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "252 Room pg"\n\
   ..\n\
"252 Room i-wall 1" = INTERIOR-WALL\n\
   NEXT-TO          = "250 Room"\n\
   LOCATION         = SPACE-V1\n\
   ..\n\
"252 Room i-wall 2" = INTERIOR-WALL\n\
   NEXT-TO          = "251 Corridor"\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"253 Corridor" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office1"\n\
   LIGHTING-SCHEDUL = ( "Office1" )\n\
   EQUIP-SCHEDULE   = ( "Office1" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "253 Corridor pg"\n\
   C-SUB-AREA       = ( 199.877 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"253 Corridor x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V3\n\
   ..\n\
"253 Corridor window 1" = WINDOW\n\
   X                = 1.02034\n\
   Y                = 2.95\n\
   HEIGHT           = 5\n\
   WIDTH            = 3.75705\n\
   ..\n\
"253 Corridor - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "253 Corridor floor pg mr"\n\
   ..\n\
"253 Corridor - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "253 Corridor pg"\n\
   ..\n\
"253 Corridor i-wall 1" = INTERIOR-WALL\n\
   NEXT-TO          = "221A IT"\n\
   LOCATION         = SPACE-V1\n\
   ..\n\
"253 Corridor i-wall 6" = INTERIOR-WALL\n\
   NEXT-TO          = "251 Corridor"\n\
   LOCATION         = SPACE-V7\n\
   ..\n\
"Level 3" = FLOOR\n\
   Z                = 26.25\n\
   POLYGON          = "Level 3 pg"\n\
   SHAPE            = POLYGON\n\
   FLOOR-HEIGHT     = 8.75\n\
   SPACE-HEIGHT     = 8\n\
   C-DIAGRAM-DATA   = *Detailed UI DiagData*\n\
   ..\n\
"3-EL Elev" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = UNCONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office1"\n\
   LIGHTING-SCHEDUL = ( "Office1" )\n\
   EQUIP-SCHEDULE   = ( "Office1" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "3-EL Elev pg"\n\
   C-SUB-AREA       = ( 76.9011 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"3-EL Elev x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V1\n\
   ..\n\
"3-EL Elev x-wall 2" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"3-EL Elev - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "3-EL Elev floor pg mr"\n\
   ..\n\
"3-EL Elev - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "3-EL Elev pg"\n\
   ..\n\
"3-ST1 Stair 1" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = UNCONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office4"\n\
   LIGHTING-SCHEDUL = ( "Office4" )\n\
   EQUIP-SCHEDULE   = ( "Office4" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "3-ST1 Stair 1 pg"\n\
   C-SUB-AREA       = ( 107.25 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"3-ST1 Stair 1 x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V1\n\
   ..\n\
"3-ST1 Stair 1 x-wall 2" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"3-ST1 Stair 1 x-wall 3" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V3\n\
   ..\n\
"3-ST1 Stair 1 x-wall 4" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V6\n\
   ..\n\
"3-ST1 Stair 1 - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "3-ST1 Stair 1 floor pg mr"\n\
   ..\n\
"3-ST1 Stair 1 - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "3-ST1 Stair 1 pg"\n\
   ..\n\
"3-ST1 Stair 1 i-wall 1" = INTERIOR-WALL\n\
   NEXT-TO          = "311 Room"\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"3-ST2 Stair 2" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office3"\n\
   LIGHTING-SCHEDUL = ( "Office3" )\n\
   EQUIP-SCHEDULE   = ( "Office3" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "3-ST2 Stair 2 pg"\n\
   C-SUB-AREA       = ( 148.227 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"3-ST2 Stair 2 x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"3-ST2 Stair 2 window 1" = WINDOW\n\
   X                = 0.437479\n\
   Y                = 0\n\
   HEIGHT           = 8\n\
   WIDTH            = 5.80199\n\
   ..\n\
"3-ST2 Stair 2 x-wall 2" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V3\n\
   ..\n\
"3-ST2 Stair 2 window 2" = WINDOW\n\
   X                = 0.489126\n\
   Y                = 0\n\
   HEIGHT           = 8\n\
   WIDTH            = 8.41341\n\
   ..\n\
"3-ST2 Stair 2 - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "3-ST2 Stair 2 floor pg mr"\n\
   ..\n\
"3-ST2 Stair 2 - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "3-ST2 Stair 2 pg"\n\
   ..\n\
"3-ST2 Stair 2 i-wall 1" = INTERIOR-WALL\n\
   NEXT-TO          = "314 Corridor"\n\
   LOCATION         = SPACE-V1\n\
   ..\n\
"3-ST2 Stair 2 i-wall 2" = INTERIOR-WALL\n\
   NEXT-TO          = "301 Lounge"\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"3-ST2 Stair 2 i-wall 3" = INTERIOR-WALL\n\
   NEXT-TO          = "300A CRE"\n\
   LOCATION         = SPACE-V5\n\
   ..\n\
"3-ST3 Stair 3" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = UNCONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office1"\n\
   LIGHTING-SCHEDUL = ( "Office1" )\n\
   EQUIP-SCHEDULE   = ( "Office1" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "3-ST3 Stair 3 pg"\n\
   C-SUB-AREA       = ( 146.733 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"3-ST3 Stair 3 x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V3\n\
   ..\n\
"3-ST3 Stair 3 window 1" = WINDOW\n\
   X                = 0\n\
   Y                = 0\n\
   HEIGHT           = 8\n\
   WIDTH            = 8.37305\n\
   ..\n\
"3-ST3 Stair 3 x-wall 2" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"3-ST3 Stair 3 window 2" = WINDOW\n\
   X                = 0.35229\n\
   Y                = 0\n\
   HEIGHT           = 8\n\
   WIDTH            = 6.19684\n\
   ..\n\
"3-ST3 Stair 3 - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "3-ST3 Stair 3 floor pg mr"\n\
   ..\n\
"3-ST3 Stair 3 - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "3-ST3 Stair 3 pg"\n\
   ..\n\
"3-ST4 Stair 4" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = UNCONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office3"\n\
   LIGHTING-SCHEDUL = ( "Office3" )\n\
   EQUIP-SCHEDULE   = ( "Office3" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 99.9999\n\
   POLYGON          = "3-ST4 Stair 4 pg"\n\
   C-SUB-AREA       = ( 105.156 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"3-ST4 Stair 4 x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"3-ST4 Stair 4 x-wall 2" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V3\n\
   ..\n\
"3-ST4 Stair 4 x-wall 3" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"3-ST4 Stair 4 x-wall 4" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V5\n\
   ..\n\
"3-ST4 Stair 4 - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "3-ST4 Stair 4 floor pg mr"\n\
   ..\n\
"3-ST4 Stair 4 - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "3-ST4 Stair 4 pg"\n\
   ..\n\
"3-ST4 Stair 4 i-wall 1" = INTERIOR-WALL\n\
   NEXT-TO          = "349 Room"\n\
   LOCATION         = SPACE-V1\n\
   ..\n\
"3-ST4 Stair 4 i-wall 2" = INTERIOR-WALL\n\
   NEXT-TO          = "351 Corridor"\n\
   LOCATION         = SPACE-V6\n\
   ..\n\
"300A CRE" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office3"\n\
   LIGHTING-SCHEDUL = ( "Office3" )\n\
   EQUIP-SCHEDULE   = ( "Office3" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "300A CRE pg"\n\
   C-SUB-AREA       = ( 216.125 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"300A CRE - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "300A CRE floor pg mr"\n\
   ..\n\
"300A CRE - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "300A CRE pg"\n\
   ..\n\
"300A CRE i-wall 7" = INTERIOR-WALL\n\
   NEXT-TO          = "300C CRE"\n\
   LOCATION         = SPACE-V7\n\
   ..\n\
"300A CRE i-wall 8" = INTERIOR-WALL\n\
   NEXT-TO          = "300C CRE"\n\
   LOCATION         = SPACE-V8\n\
   ..\n\
"300B CRE" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office1"\n\
   LIGHTING-SCHEDUL = ( "Office1" )\n\
   EQUIP-SCHEDULE   = ( "Office1" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "300B CRE pg"\n\
   C-SUB-AREA       = ( 166.51 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"300B CRE x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V1\n\
   ..\n\
"300B CRE x-wall 2" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V7\n\
   ..\n\
"300B CRE window 1" = WINDOW\n\
   X                = 0.761172\n\
   Y                = 2.95\n\
   HEIGHT           = 5\n\
   WIDTH            = 10.4402\n\
   ..\n\
"300B CRE - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "300B CRE floor pg mr"\n\
   ..\n\
"300B CRE - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "300B CRE pg"\n\
   ..\n\
"300B CRE i-wall 1" = INTERIOR-WALL\n\
   NEXT-TO          = "302 Room"\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"300B CRE i-wall 2" = INTERIOR-WALL\n\
   NEXT-TO          = "300A CRE"\n\
   LOCATION         = SPACE-V3\n\
   ..\n\
"300B CRE i-wall 3" = INTERIOR-WALL\n\
   NEXT-TO          = "300A CRE"\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"300B CRE i-wall 4" = INTERIOR-WALL\n\
   NEXT-TO          = "300A CRE"\n\
   LOCATION         = SPACE-V5\n\
   ..\n\
"300B CRE i-wall 5" = INTERIOR-WALL\n\
   NEXT-TO          = "300C CRE"\n\
   LOCATION         = SPACE-V6\n\
   ..\n\
"300C CRE" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office1"\n\
   LIGHTING-SCHEDUL = ( "Office1" )\n\
   EQUIP-SCHEDULE   = ( "Office1" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "300C CRE pg"\n\
   C-SUB-AREA       = ( 199.646 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"300C CRE x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V6\n\
   ..\n\
"300C CRE x-wall 2" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V7\n\
   ..\n\
"300C CRE window 1" = WINDOW\n\
   X                = 2.23409\n\
   Y                = 2.95\n\
   HEIGHT           = 5\n\
   WIDTH            = 7.46028\n\
   ..\n\
"300C CRE - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "300C CRE floor pg mr"\n\
   ..\n\
"300C CRE - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "300C CRE pg"\n\
   ..\n\
"301 Lounge" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office4"\n\
   LIGHTING-SCHEDUL = ( "Office4" )\n\
   EQUIP-SCHEDULE   = ( "Office4" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "301 Lounge pg"\n\
   C-SUB-AREA       = ( 365.273 )\n\
   C-OCC-TYPE       = ( 35 )\n\
   ..\n\
"301 Lounge x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V3\n\
   ..\n\
"301 Lounge window 1" = WINDOW\n\
   X                = 0\n\
   Y                = 0\n\
   HEIGHT           = 8\n\
   WIDTH            = 18.5754\n\
   ..\n\
"301 Lounge x-wall 2" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"301 Lounge window 2" = WINDOW\n\
   X                = 0.531895\n\
   Y                = 0\n\
   HEIGHT           = 8\n\
   WIDTH            = 10.0211\n\
   ..\n\
"301 Lounge - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "301 Lounge floor pg mr"\n\
   ..\n\
"301 Lounge - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "301 Lounge pg"\n\
   ..\n\
"301 Lounge i-wall 1" = INTERIOR-WALL\n\
   NEXT-TO          = "300A CRE"\n\
   LOCATION         = SPACE-V1\n\
   ..\n\
"301 Lounge i-wall 3" = INTERIOR-WALL\n\
   NEXT-TO          = "331 Room"\n\
   LOCATION         = SPACE-V5\n\
   ..\n\
"301 Lounge i-wall 4" = INTERIOR-WALL\n\
   NEXT-TO          = "325 Corridor"\n\
   LOCATION         = SPACE-V6\n\
   ..\n\
"301 Lounge i-wall 5" = INTERIOR-WALL\n\
   NEXT-TO          = "300A CRE"\n\
   LOCATION         = SPACE-V7\n\
   ..\n\
"301 Lounge i-wall 6" = INTERIOR-WALL\n\
   NEXT-TO          = "300A CRE"\n\
   LOCATION         = SPACE-V8\n\
   ..\n\
"302 Room" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office5"\n\
   LIGHTING-SCHEDUL = ( "Office5" )\n\
   EQUIP-SCHEDULE   = ( "Office5" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "302 Room pg"\n\
   C-SUB-AREA       = ( 177.864 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"302 Room x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V5\n\
   ..\n\
"302 Room window 1" = WINDOW\n\
   X                = 7.40715\n\
   Y                = 2.95\n\
   HEIGHT           = 5\n\
   WIDTH            = 3.81585\n\
   ..\n\
"302 Room - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "302 Room floor pg mr"\n\
   ..\n\
"302 Room - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "302 Room pg"\n\
   ..\n\
"302 Room i-wall 1" = INTERIOR-WALL\n\
   NEXT-TO          = "304 Room"\n\
   LOCATION         = SPACE-V1\n\
   ..\n\
"302 Room i-wall 3" = INTERIOR-WALL\n\
   NEXT-TO          = "300A CRE"\n\
   LOCATION         = SPACE-V3\n\
   ..\n\
"303 Room" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office2"\n\
   LIGHTING-SCHEDUL = ( "Office2" )\n\
   EQUIP-SCHEDULE   = ( "Office2" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "303 Room pg"\n\
   C-SUB-AREA       = ( 122.111 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"303 Room x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"303 Room window 1" = WINDOW\n\
   X                = 0.622852\n\
   Y                = 0\n\
   HEIGHT           = 8\n\
   WIDTH            = 7.75326\n\
   ..\n\
"303 Room - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "303 Room floor pg mr"\n\
   ..\n\
"303 Room - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "303 Room pg"\n\
   ..\n\
"303 Room i-wall 1" = INTERIOR-WALL\n\
   NEXT-TO          = "307 Room"\n\
   LOCATION         = SPACE-V1\n\
   ..\n\
"303 Room i-wall 2" = INTERIOR-WALL\n\
   NEXT-TO          = "314 Corridor"\n\
   LOCATION         = SPACE-V3\n\
   ..\n\
"303 Room i-wall 3" = INTERIOR-WALL\n\
   NEXT-TO          = "314 Corridor"\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"304 Room" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office2"\n\
   LIGHTING-SCHEDUL = ( "Office2" )\n\
   EQUIP-SCHEDULE   = ( "Office2" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "304 Room pg"\n\
   C-SUB-AREA       = ( 143.114 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"304 Room x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"304 Room window 1" = WINDOW\n\
   X                = 7.09244\n\
   Y                = 2.95\n\
   HEIGHT           = 5\n\
   WIDTH            = 3.08404\n\
   ..\n\
"304 Room - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "304 Room floor pg mr"\n\
   ..\n\
"304 Room - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "304 Room pg"\n\
   ..\n\
"306 Room" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office4"\n\
   LIGHTING-SCHEDUL = ( "Office4" )\n\
   EQUIP-SCHEDULE   = ( "Office4" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "306 Room pg"\n\
   C-SUB-AREA       = ( 152.132 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"306 Room x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"306 Room window 1" = WINDOW\n\
   X                = 0\n\
   Y                = 2.95\n\
   HEIGHT           = 5\n\
   WIDTH            = 3.82345\n\
   ..\n\
"306 Room - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "306 Room floor pg mr"\n\
   ..\n\
"306 Room - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "306 Room pg"\n\
   ..\n\
"306 Room i-wall 1" = INTERIOR-WALL\n\
   NEXT-TO          = "308 Bathroom"\n\
   LOCATION         = SPACE-V1\n\
   ..\n\
"306 Room i-wall 2" = INTERIOR-WALL\n\
   NEXT-TO          = "313 Corridor"\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"306 Room i-wall 3" = INTERIOR-WALL\n\
   NEXT-TO          = "304 Room"\n\
   LOCATION         = SPACE-V3\n\
   ..\n\
"307 Room" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office5"\n\
   LIGHTING-SCHEDUL = ( "Office5" )\n\
   EQUIP-SCHEDULE   = ( "Office5" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "307 Room pg"\n\
   C-SUB-AREA       = ( 125.46 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"307 Room x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"307 Room window 1" = WINDOW\n\
   X                = 1.31964\n\
   Y                = 2.95\n\
   HEIGHT           = 5\n\
   WIDTH            = 3.84305\n\
   ..\n\
"307 Room - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "307 Room floor pg mr"\n\
   ..\n\
"307 Room - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "307 Room pg"\n\
   ..\n\
"307 Room i-wall 3" = INTERIOR-WALL\n\
   NEXT-TO          = "314 Corridor"\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"308 Bathroom" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office4"\n\
   LIGHTING-SCHEDUL = ( "Office4" )\n\
   EQUIP-SCHEDULE   = ( "Office4" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "308 Bathroom pg"\n\
   C-SUB-AREA       = ( 170.745 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"308 Bathroom x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"308 Bathroom - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "308 Bathroom floor pg mr"\n\
   ..\n\
"308 Bathroom - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "308 Bathroom pg"\n\
   ..\n\
"309 Room" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office2"\n\
   LIGHTING-SCHEDUL = ( "Office2" )\n\
   EQUIP-SCHEDULE   = ( "Office2" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "309 Room pg"\n\
   C-SUB-AREA       = ( 176.182 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"309 Room x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"309 Room window 1" = WINDOW\n\
   X                = 0\n\
   Y                = 2.95\n\
   HEIGHT           = 5\n\
   WIDTH            = 3.57603\n\
   ..\n\
"309 Room - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "309 Room floor pg mr"\n\
   ..\n\
"309 Room - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "309 Room pg"\n\
   ..\n\
"309 Room i-wall 1" = INTERIOR-WALL\n\
   NEXT-TO          = "311 Room"\n\
   LOCATION         = SPACE-V1\n\
   ..\n\
"309 Room i-wall 2" = INTERIOR-WALL\n\
   NEXT-TO          = "307 Room"\n\
   LOCATION         = SPACE-V3\n\
   ..\n\
"309 Room i-wall 3" = INTERIOR-WALL\n\
   NEXT-TO          = "313 Corridor"\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"310 Room" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office1"\n\
   LIGHTING-SCHEDUL = ( "Office1" )\n\
   EQUIP-SCHEDULE   = ( "Office1" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "310 Room pg"\n\
   C-SUB-AREA       = ( 172.707 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"310 Room x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"310 Room window 1" = WINDOW\n\
   X                = 8.80259\n\
   Y                = 2.95\n\
   HEIGHT           = 5\n\
   WIDTH            = 3.30063\n\
   ..\n\
"310 Room - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "310 Room floor pg mr"\n\
   ..\n\
"310 Room - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "310 Room pg"\n\
   ..\n\
"310 Room i-wall 1" = INTERIOR-WALL\n\
   NEXT-TO          = "312 Room"\n\
   LOCATION         = SPACE-V1\n\
   ..\n\
"310 Room i-wall 2" = INTERIOR-WALL\n\
   NEXT-TO          = "313 Corridor"\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"310 Room i-wall 3" = INTERIOR-WALL\n\
   NEXT-TO          = "308 Bathroom"\n\
   LOCATION         = SPACE-V3\n\
   ..\n\
"311 Room" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office2"\n\
   LIGHTING-SCHEDUL = ( "Office2" )\n\
   EQUIP-SCHEDULE   = ( "Office2" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "311 Room pg"\n\
   C-SUB-AREA       = ( 176.442 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"311 Room x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"311 Room window 1" = WINDOW\n\
   X                = 13.502\n\
   Y                = 2.95\n\
   HEIGHT           = 5\n\
   WIDTH            = 3.30545\n\
   ..\n\
"311 Room - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "311 Room floor pg mr"\n\
   ..\n\
"311 Room - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "311 Room pg"\n\
   ..\n\
"312 Room" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office3"\n\
   LIGHTING-SCHEDUL = ( "Office3" )\n\
   EQUIP-SCHEDULE   = ( "Office3" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "312 Room pg"\n\
   C-SUB-AREA       = ( 170.721 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"312 Room x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V1\n\
   ..\n\
"312 Room x-wall 2" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"312 Room window 1" = WINDOW\n\
   X                = 0\n\
   Y                = 2.95\n\
   HEIGHT           = 5\n\
   WIDTH            = 3.49444\n\
   ..\n\
"312 Room - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "312 Room floor pg mr"\n\
   ..\n\
"312 Room - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "312 Room pg"\n\
   ..\n\
"313 Corridor" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office4"\n\
   LIGHTING-SCHEDUL = ( "Office4" )\n\
   EQUIP-SCHEDULE   = ( "Office4" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "313 Corridor pg"\n\
   C-SUB-AREA       = ( 203.686 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"313 Corridor x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V1\n\
   ..\n\
"313 Corridor window 1" = WINDOW\n\
   X                = 0.492798\n\
   Y                = 2.95\n\
   HEIGHT           = 5\n\
   WIDTH            = 3.84793\n\
   ..\n\
"313 Corridor - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "313 Corridor floor pg mr"\n\
   ..\n\
"313 Corridor - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "313 Corridor pg"\n\
   ..\n\
"313 Corridor i-wall 1" = INTERIOR-WALL\n\
   NEXT-TO          = "3-ST1 Stair 1"\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"313 Corridor i-wall 2" = INTERIOR-WALL\n\
   NEXT-TO          = "311 Room"\n\
   LOCATION         = SPACE-V3\n\
   ..\n\
"313 Corridor i-wall 6" = INTERIOR-WALL\n\
   NEXT-TO          = "308 Bathroom"\n\
   LOCATION         = SPACE-V7\n\
   ..\n\
"313 Corridor i-wall 8" = INTERIOR-WALL\n\
   NEXT-TO          = "312 Room"\n\
   LOCATION         = SPACE-V9\n\
   ..\n\
"314 Corridor" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office3"\n\
   LIGHTING-SCHEDUL = ( "Office3" )\n\
   EQUIP-SCHEDULE   = ( "Office3" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "314 Corridor pg"\n\
   C-SUB-AREA       = ( 179.525 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"314 Corridor x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V5\n\
   ..\n\
"314 Corridor window 1" = WINDOW\n\
   X                = 1.49395\n\
   Y                = 2.95\n\
   HEIGHT           = 5\n\
   WIDTH            = 3.03383\n\
   ..\n\
"314 Corridor - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "314 Corridor floor pg mr"\n\
   ..\n\
"314 Corridor - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "314 Corridor pg"\n\
   ..\n\
"314 Corridor i-wall 1" = INTERIOR-WALL\n\
   NEXT-TO          = "313 Corridor"\n\
   LOCATION         = SPACE-V1\n\
   ..\n\
"314 Corridor i-wall 6" = INTERIOR-WALL\n\
   NEXT-TO          = "300A CRE"\n\
   LOCATION         = SPACE-V7\n\
   ..\n\
"314 Corridor i-wall 7" = INTERIOR-WALL\n\
   NEXT-TO          = "302 Room"\n\
   LOCATION         = SPACE-V8\n\
   ..\n\
"314 Corridor i-wall 8" = INTERIOR-WALL\n\
   NEXT-TO          = "304 Room"\n\
   LOCATION         = SPACE-V9\n\
   ..\n\
"321 Corridor" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office2"\n\
   LIGHTING-SCHEDUL = ( "Office2" )\n\
   EQUIP-SCHEDULE   = ( "Office2" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "321 Corridor pg"\n\
   C-SUB-AREA       = ( 184.544 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"321 Corridor x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"321 Corridor - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "321 Corridor floor pg mr"\n\
   ..\n\
"321 Corridor - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "321 Corridor pg"\n\
   ..\n\
"321 Corridor i-wall 1" = INTERIOR-WALL\n\
   NEXT-TO          = "323 Room"\n\
   LOCATION         = SPACE-V1\n\
   ..\n\
"321 Corridor i-wall 2" = INTERIOR-WALL\n\
   NEXT-TO          = "3-EL Elev"\n\
   LOCATION         = SPACE-V3\n\
   ..\n\
"321 Corridor i-wall 3" = INTERIOR-WALL\n\
   NEXT-TO          = "321B Elev Lobby"\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"321 Corridor i-wall 4" = INTERIOR-WALL\n\
   NEXT-TO          = "3-ST3 Stair 3"\n\
   LOCATION         = SPACE-V5\n\
   ..\n\
"321 Corridor i-wall 5" = INTERIOR-WALL\n\
   NEXT-TO          = "321A IT"\n\
   LOCATION         = SPACE-V6\n\
   ..\n\
"321 Corridor i-wall 6" = INTERIOR-WALL\n\
   NEXT-TO          = "340 Lounge"\n\
   LOCATION         = SPACE-V7\n\
   ..\n\
"321 Corridor i-wall 7" = INTERIOR-WALL\n\
   NEXT-TO          = "325 Corridor"\n\
   LOCATION         = SPACE-V8\n\
   ..\n\
"321A IT" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office2"\n\
   LIGHTING-SCHEDUL = ( "Office2" )\n\
   EQUIP-SCHEDULE   = ( "Office2" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "321A IT pg"\n\
   C-SUB-AREA       = ( 55.3125 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"321A IT - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "321A IT floor pg mr"\n\
   ..\n\
"321A IT - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "321A IT pg"\n\
   ..\n\
"321A IT i-wall 2" = INTERIOR-WALL\n\
   NEXT-TO          = "3-ST3 Stair 3"\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"321A IT i-wall 4" = INTERIOR-WALL\n\
   NEXT-TO          = "340 Lounge"\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"321B Elev Lobby" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = UNCONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office5"\n\
   LIGHTING-SCHEDUL = ( "Office5" )\n\
   EQUIP-SCHEDULE   = ( "Office5" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "321B Elev Lobby pg"\n\
   C-SUB-AREA       = ( 90.9907 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"321B Elev Lobby x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"321B Elev Lobby window 1" = WINDOW\n\
   X                = 0.351256\n\
   Y                = 0\n\
   HEIGHT           = 8\n\
   WIDTH            = 7.98831\n\
   ..\n\
"321B Elev Lobby - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "321B Elev Lobby floor pg mr"\n\
   ..\n\
"321B Elev Lobby - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "321B Elev Lobby pg"\n\
   ..\n\
"321B Elev Lobby i-wall 1" = INTERIOR-WALL\n\
   NEXT-TO          = "3-EL Elev"\n\
   LOCATION         = SPACE-V1\n\
   ..\n\
"321B Elev Lobby i-wall 2" = INTERIOR-WALL\n\
   NEXT-TO          = "3-ST3 Stair 3"\n\
   LOCATION         = SPACE-V3\n\
   ..\n\
"322 Room" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office3"\n\
   LIGHTING-SCHEDUL = ( "Office3" )\n\
   EQUIP-SCHEDULE   = ( "Office3" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "322 Room pg"\n\
   C-SUB-AREA       = ( 175.504 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"322 Room x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"322 Room window 1" = WINDOW\n\
   X                = 6.62476\n\
   Y                = 2.95\n\
   HEIGHT           = 5\n\
   WIDTH            = 3.84671\n\
   ..\n\
"322 Room - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "322 Room floor pg mr"\n\
   ..\n\
"322 Room - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "322 Room pg"\n\
   ..\n\
"322 Room i-wall 1" = INTERIOR-WALL\n\
   NEXT-TO          = "324 Room"\n\
   LOCATION         = SPACE-V1\n\
   ..\n\
"322 Room i-wall 2" = INTERIOR-WALL\n\
   NEXT-TO          = "325 Corridor"\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"322 Room i-wall 3" = INTERIOR-WALL\n\
   NEXT-TO          = "340 Lounge"\n\
   LOCATION         = SPACE-V3\n\
   ..\n\
"323 Room" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office1"\n\
   LIGHTING-SCHEDUL = ( "Office1" )\n\
   EQUIP-SCHEDULE   = ( "Office1" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "323 Room pg"\n\
   C-SUB-AREA       = ( 119.34 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"323 Room x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"323 Room window 1" = WINDOW\n\
   X                = 0.254078\n\
   Y                = 0\n\
   HEIGHT           = 8\n\
   WIDTH            = 7.89405\n\
   ..\n\
"323 Room - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "323 Room floor pg mr"\n\
   ..\n\
"323 Room - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "323 Room pg"\n\
   ..\n\
"324 Room" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office3"\n\
   LIGHTING-SCHEDUL = ( "Office3" )\n\
   EQUIP-SCHEDULE   = ( "Office3" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "324 Room pg"\n\
   C-SUB-AREA       = ( 149.442 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"324 Room x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"324 Room window 1" = WINDOW\n\
   X                = 7.07079\n\
   Y                = 2.95\n\
   HEIGHT           = 5\n\
   WIDTH            = 3.31396\n\
   ..\n\
"324 Room - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "324 Room floor pg mr"\n\
   ..\n\
"324 Room - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "324 Room pg"\n\
   ..\n\
"324 Room i-wall 2" = INTERIOR-WALL\n\
   NEXT-TO          = "325 Corridor"\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"325 Corridor" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office4"\n\
   LIGHTING-SCHEDUL = ( "Office4" )\n\
   EQUIP-SCHEDULE   = ( "Office4" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "325 Corridor pg"\n\
   C-SUB-AREA       = ( 311.5 )\n\
   C-OCC-TYPE       = ( 35 )\n\
   ..\n\
"325 Corridor - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "325 Corridor floor pg mr"\n\
   ..\n\
"325 Corridor - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "325 Corridor pg"\n\
   ..\n\
"325 Corridor i-wall 1" = INTERIOR-WALL\n\
   NEXT-TO          = "300C CRE"\n\
   LOCATION         = SPACE-V1\n\
   ..\n\
"325 Corridor i-wall 3" = INTERIOR-WALL\n\
   NEXT-TO          = "331 Room"\n\
   LOCATION         = SPACE-V3\n\
   ..\n\
"325 Corridor i-wall 6" = INTERIOR-WALL\n\
   NEXT-TO          = "323 Room"\n\
   LOCATION         = SPACE-V6\n\
   ..\n\
"325 Corridor i-wall 8" = INTERIOR-WALL\n\
   NEXT-TO          = "340 Lounge"\n\
   LOCATION         = SPACE-V8\n\
   ..\n\
"325 Corridor i-wall 12" = INTERIOR-WALL\n\
   NEXT-TO          = "328 Bathroom"\n\
   LOCATION         = SPACE-V12\n\
   ..\n\
"325 Corridor i-wall 13" = INTERIOR-WALL\n\
   NEXT-TO          = "330 Bathroom"\n\
   LOCATION         = SPACE-V13\n\
   ..\n\
"325 Corridor i-wall 14" = INTERIOR-WALL\n\
   NEXT-TO          = "332 Room"\n\
   LOCATION         = SPACE-V14\n\
   ..\n\
"326 Room" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office2"\n\
   LIGHTING-SCHEDUL = ( "Office2" )\n\
   EQUIP-SCHEDULE   = ( "Office2" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "326 Room pg"\n\
   C-SUB-AREA       = ( 155.465 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"326 Room x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"326 Room window 1" = WINDOW\n\
   X                = 0\n\
   Y                = 2.95\n\
   HEIGHT           = 5\n\
   WIDTH            = 3.55599\n\
   ..\n\
"326 Room - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "326 Room floor pg mr"\n\
   ..\n\
"326 Room - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "326 Room pg"\n\
   ..\n\
"326 Room i-wall 1" = INTERIOR-WALL\n\
   NEXT-TO          = "328 Bathroom"\n\
   LOCATION         = SPACE-V1\n\
   ..\n\
"326 Room i-wall 2" = INTERIOR-WALL\n\
   NEXT-TO          = "325 Corridor"\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"326 Room i-wall 3" = INTERIOR-WALL\n\
   NEXT-TO          = "324 Room"\n\
   LOCATION         = SPACE-V3\n\
   ..\n\
"327 Room" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office3"\n\
   LIGHTING-SCHEDUL = ( "Office3" )\n\
   EQUIP-SCHEDULE   = ( "Office3" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "327 Room pg"\n\
   C-SUB-AREA       = ( 128.089 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"327 Room x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"327 Room window 1" = WINDOW\n\
   X                = 1.54787\n\
   Y                = 2.95\n\
   HEIGHT           = 5\n\
   WIDTH            = 3.98506\n\
   ..\n\
"327 Room - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "327 Room floor pg mr"\n\
   ..\n\
"327 Room - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "327 Room pg"\n\
   ..\n\
"327 Room i-wall 2" = INTERIOR-WALL\n\
   NEXT-TO          = "323 Room"\n\
   LOCATION         = SPACE-V3\n\
   ..\n\
"327 Room i-wall 3" = INTERIOR-WALL\n\
   NEXT-TO          = "325 Corridor"\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"328 Bathroom" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office2"\n\
   LIGHTING-SCHEDUL = ( "Office2" )\n\
   EQUIP-SCHEDULE   = ( "Office2" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "328 Bathroom pg"\n\
   C-SUB-AREA       = ( 166.768 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"328 Bathroom x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"328 Bathroom - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "328 Bathroom floor pg mr"\n\
   ..\n\
"328 Bathroom - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "328 Bathroom pg"\n\
   ..\n\
"328 Bathroom i-wall 1" = INTERIOR-WALL\n\
   NEXT-TO          = "330 Bathroom"\n\
   LOCATION         = SPACE-V1\n\
   ..\n\
"329 Room" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office2"\n\
   LIGHTING-SCHEDUL = ( "Office2" )\n\
   EQUIP-SCHEDULE   = ( "Office2" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "329 Room pg"\n\
   C-SUB-AREA       = ( 167.964 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"329 Room x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"329 Room window 1" = WINDOW\n\
   X                = 0\n\
   Y                = 2.95\n\
   HEIGHT           = 5\n\
   WIDTH            = 3.43422\n\
   ..\n\
"329 Room - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "329 Room floor pg mr"\n\
   ..\n\
"329 Room - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "329 Room pg"\n\
   ..\n\
"329 Room i-wall 1" = INTERIOR-WALL\n\
   NEXT-TO          = "331 Room"\n\
   LOCATION         = SPACE-V1\n\
   ..\n\
"329 Room i-wall 2" = INTERIOR-WALL\n\
   NEXT-TO          = "327 Room"\n\
   LOCATION         = SPACE-V3\n\
   ..\n\
"329 Room i-wall 3" = INTERIOR-WALL\n\
   NEXT-TO          = "325 Corridor"\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"330 Bathroom" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office3"\n\
   LIGHTING-SCHEDUL = ( "Office3" )\n\
   EQUIP-SCHEDULE   = ( "Office3" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "330 Bathroom pg"\n\
   C-SUB-AREA       = ( 121.78 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"330 Bathroom x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"330 Bathroom - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "330 Bathroom floor pg mr"\n\
   ..\n\
"330 Bathroom - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "330 Bathroom pg"\n\
   ..\n\
"331 Room" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office4"\n\
   LIGHTING-SCHEDUL = ( "Office4" )\n\
   EQUIP-SCHEDULE   = ( "Office4" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "331 Room pg"\n\
   C-SUB-AREA       = ( 167.219 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"331 Room x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"331 Room window 1" = WINDOW\n\
   X                = 13.4802\n\
   Y                = 2.95\n\
   HEIGHT           = 5\n\
   WIDTH            = 3.52171\n\
   ..\n\
"331 Room - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "331 Room floor pg mr"\n\
   ..\n\
"331 Room - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "331 Room pg"\n\
   ..\n\
"332 Room" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office4"\n\
   LIGHTING-SCHEDUL = ( "Office4" )\n\
   EQUIP-SCHEDULE   = ( "Office4" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "332 Room pg"\n\
   C-SUB-AREA       = ( 227.509 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"332 Room x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"332 Room window 1" = WINDOW\n\
   X                = 0.337711\n\
   Y                = 2.95\n\
   HEIGHT           = 5\n\
   WIDTH            = 6.95784\n\
   ..\n\
"332 Room - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "332 Room floor pg mr"\n\
   ..\n\
"332 Room - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "332 Room pg"\n\
   ..\n\
"332 Room i-wall 1" = INTERIOR-WALL\n\
   NEXT-TO          = "300C CRE"\n\
   LOCATION         = SPACE-V1\n\
   ..\n\
"332 Room i-wall 3" = INTERIOR-WALL\n\
   NEXT-TO          = "330 Bathroom"\n\
   LOCATION         = SPACE-V3\n\
   ..\n\
"340 Lounge" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office2"\n\
   LIGHTING-SCHEDUL = ( "Office2" )\n\
   EQUIP-SCHEDULE   = ( "Office2" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "340 Lounge pg"\n\
   C-SUB-AREA       = ( 475.469 )\n\
   C-OCC-TYPE       = ( 35 )\n\
   ..\n\
"340 Lounge x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V1\n\
   ..\n\
"340 Lounge x-wall 2" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V7\n\
   ..\n\
"340 Lounge x-wall 3" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V8\n\
   ..\n\
"340 Lounge window 1" = WINDOW\n\
   X                = 10.8021\n\
   Y                = 2.95\n\
   HEIGHT           = 5\n\
   WIDTH            = 9.90721\n\
   ..\n\
"340 Lounge window 2" = WINDOW\n\
   X                = 0.208823\n\
   Y                = 2.95\n\
   HEIGHT           = 5\n\
   WIDTH            = 9.81793\n\
   ..\n\
"340 Lounge - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "340 Lounge floor pg mr"\n\
   ..\n\
"340 Lounge - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "340 Lounge pg"\n\
   ..\n\
"340 Lounge i-wall 5" = INTERIOR-WALL\n\
   NEXT-TO          = "342 Room"\n\
   LOCATION         = SPACE-V6\n\
   ..\n\
"342 Room" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office1"\n\
   LIGHTING-SCHEDUL = ( "Office1" )\n\
   EQUIP-SCHEDULE   = ( "Office1" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "342 Room pg"\n\
   C-SUB-AREA       = ( 189.364 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"342 Room x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"342 Room window 1" = WINDOW\n\
   X                = 1.39436\n\
   Y                = 2.95\n\
   HEIGHT           = 5\n\
   WIDTH            = 3.7836\n\
   ..\n\
"342 Room - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "342 Room floor pg mr"\n\
   ..\n\
"342 Room - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "342 Room pg"\n\
   ..\n\
"343 Room" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office5"\n\
   LIGHTING-SCHEDUL = ( "Office5" )\n\
   EQUIP-SCHEDULE   = ( "Office5" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "343 Room pg"\n\
   C-SUB-AREA       = ( 122.431 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"343 Room x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"343 Room window 1" = WINDOW\n\
   X                = 3.63089\n\
   Y                = 0\n\
   HEIGHT           = 8\n\
   WIDTH            = 7.90728\n\
   ..\n\
"343 Room - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "343 Room floor pg mr"\n\
   ..\n\
"343 Room - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "343 Room pg"\n\
   ..\n\
"343 Room i-wall 2" = INTERIOR-WALL\n\
   NEXT-TO          = "345 Room"\n\
   LOCATION         = SPACE-V3\n\
   ..\n\
"344 Room" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office4"\n\
   LIGHTING-SCHEDUL = ( "Office4" )\n\
   EQUIP-SCHEDULE   = ( "Office4" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "344 Room pg"\n\
   C-SUB-AREA       = ( 147.127 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"344 Room x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"344 Room window 1" = WINDOW\n\
   X                = 0\n\
   Y                = 2.95\n\
   HEIGHT           = 5\n\
   WIDTH            = 3.30167\n\
   ..\n\
"344 Room - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "344 Room floor pg mr"\n\
   ..\n\
"344 Room - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "344 Room pg"\n\
   ..\n\
"344 Room i-wall 1" = INTERIOR-WALL\n\
   NEXT-TO          = "342 Room"\n\
   LOCATION         = SPACE-V1\n\
   ..\n\
"344 Room i-wall 3" = INTERIOR-WALL\n\
   NEXT-TO          = "346 Room"\n\
   LOCATION         = SPACE-V3\n\
   ..\n\
"345 Room" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office4"\n\
   LIGHTING-SCHEDUL = ( "Office4" )\n\
   EQUIP-SCHEDULE   = ( "Office4" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "345 Room pg"\n\
   C-SUB-AREA       = ( 124.237 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"345 Room x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"345 Room window 1" = WINDOW\n\
   X                = 6.95274\n\
   Y                = 2.95\n\
   HEIGHT           = 5\n\
   WIDTH            = 4.08344\n\
   ..\n\
"345 Room - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "345 Room floor pg mr"\n\
   ..\n\
"345 Room - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "345 Room pg"\n\
   ..\n\
"345 Room i-wall 2" = INTERIOR-WALL\n\
   NEXT-TO          = "347 Room"\n\
   LOCATION         = SPACE-V3\n\
   ..\n\
"346 Room" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office4"\n\
   LIGHTING-SCHEDUL = ( "Office4" )\n\
   EQUIP-SCHEDULE   = ( "Office4" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "346 Room pg"\n\
   C-SUB-AREA       = ( 154.375 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"346 Room x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"346 Room window 1" = WINDOW\n\
   X                = 7.2212\n\
   Y                = 2.95\n\
   HEIGHT           = 5\n\
   WIDTH            = 3.48422\n\
   ..\n\
"346 Room - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "346 Room floor pg mr"\n\
   ..\n\
"346 Room - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "346 Room pg"\n\
   ..\n\
"346 Room i-wall 3" = INTERIOR-WALL\n\
   NEXT-TO          = "348 Bathroom"\n\
   LOCATION         = SPACE-V3\n\
   ..\n\
"347 Room" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office5"\n\
   LIGHTING-SCHEDUL = ( "Office5" )\n\
   EQUIP-SCHEDULE   = ( "Office5" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "347 Room pg"\n\
   C-SUB-AREA       = ( 178.167 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"347 Room x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"347 Room window 1" = WINDOW\n\
   X                = 13.6938\n\
   Y                = 2.95\n\
   HEIGHT           = 5\n\
   WIDTH            = 3.42723\n\
   ..\n\
"347 Room - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "347 Room floor pg mr"\n\
   ..\n\
"347 Room - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "347 Room pg"\n\
   ..\n\
"347 Room i-wall 2" = INTERIOR-WALL\n\
   NEXT-TO          = "349 Room"\n\
   LOCATION         = SPACE-V3\n\
   ..\n\
"347 Room i-wall 3" = INTERIOR-WALL\n\
   NEXT-TO          = "351 Corridor"\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"348 Bathroom" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office3"\n\
   LIGHTING-SCHEDUL = ( "Office3" )\n\
   EQUIP-SCHEDULE   = ( "Office3" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "348 Bathroom pg"\n\
   C-SUB-AREA       = ( 171.577 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"348 Bathroom x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"348 Bathroom - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "348 Bathroom floor pg mr"\n\
   ..\n\
"348 Bathroom - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "348 Bathroom pg"\n\
   ..\n\
"348 Bathroom i-wall 2" = INTERIOR-WALL\n\
   NEXT-TO          = "351 Corridor"\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"348 Bathroom i-wall 3" = INTERIOR-WALL\n\
   NEXT-TO          = "350 Room"\n\
   LOCATION         = SPACE-V3\n\
   ..\n\
"349 Room" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office5"\n\
   LIGHTING-SCHEDUL = ( "Office5" )\n\
   EQUIP-SCHEDULE   = ( "Office5" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "349 Room pg"\n\
   C-SUB-AREA       = ( 178.611 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"349 Room x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"349 Room window 1" = WINDOW\n\
   X                = 0\n\
   Y                = 2.95\n\
   HEIGHT           = 5\n\
   WIDTH            = 3.55067\n\
   ..\n\
"349 Room - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "349 Room floor pg mr"\n\
   ..\n\
"349 Room - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "349 Room pg"\n\
   ..\n\
"350 Room" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office1"\n\
   LIGHTING-SCHEDUL = ( "Office1" )\n\
   EQUIP-SCHEDULE   = ( "Office1" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "350 Room pg"\n\
   C-SUB-AREA       = ( 175.282 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"350 Room x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"350 Room window 1" = WINDOW\n\
   X                = 0\n\
   Y                = 2.95\n\
   HEIGHT           = 5\n\
   WIDTH            = 3.66734\n\
   ..\n\
"350 Room - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "350 Room floor pg mr"\n\
   ..\n\
"350 Room - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "350 Room pg"\n\
   ..\n\
"351 Corridor" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office1"\n\
   LIGHTING-SCHEDUL = ( "Office1" )\n\
   EQUIP-SCHEDULE   = ( "Office1" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "351 Corridor pg"\n\
   C-SUB-AREA       = ( 177.353 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"351 Corridor x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V5\n\
   ..\n\
"351 Corridor window 1" = WINDOW\n\
   X                = 0.35135\n\
   Y                = 2.95\n\
   HEIGHT           = 5\n\
   WIDTH            = 4.08626\n\
   ..\n\
"351 Corridor - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "351 Corridor floor pg mr"\n\
   ..\n\
"351 Corridor - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "351 Corridor pg"\n\
   ..\n\
"351 Corridor i-wall 3" = INTERIOR-WALL\n\
   NEXT-TO          = "349 Room"\n\
   LOCATION         = SPACE-V3\n\
   ..\n\
"351 Corridor i-wall 5" = INTERIOR-WALL\n\
   NEXT-TO          = "352 Room"\n\
   LOCATION         = SPACE-V6\n\
   ..\n\
"351 Corridor i-wall 6" = INTERIOR-WALL\n\
   NEXT-TO          = "350 Room"\n\
   LOCATION         = SPACE-V7\n\
   ..\n\
"352 Room" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office3"\n\
   LIGHTING-SCHEDUL = ( "Office3" )\n\
   EQUIP-SCHEDULE   = ( "Office3" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "352 Room pg"\n\
   C-SUB-AREA       = ( 172.08 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"352 Room x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V3\n\
   ..\n\
"352 Room x-wall 2" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"352 Room window 1" = WINDOW\n\
   X                = 8.53885\n\
   Y                = 2.95\n\
   HEIGHT           = 5\n\
   WIDTH            = 3.24327\n\
   ..\n\
"352 Room - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "352 Room floor pg mr"\n\
   ..\n\
"352 Room - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "352 Room pg"\n\
   ..\n\
"352 Room i-wall 1" = INTERIOR-WALL\n\
   NEXT-TO          = "350 Room"\n\
   LOCATION         = SPACE-V1\n\
   ..\n\
"353 Corridor" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office4"\n\
   LIGHTING-SCHEDUL = ( "Office4" )\n\
   EQUIP-SCHEDULE   = ( "Office4" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "353 Corridor pg"\n\
   C-SUB-AREA       = ( 208.272 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"353 Corridor x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V3\n\
   ..\n\
"353 Corridor window 1" = WINDOW\n\
   X                = 1.48956\n\
   Y                = 2.95\n\
   HEIGHT           = 5\n\
   WIDTH            = 3.32121\n\
   ..\n\
"353 Corridor - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "353 Corridor floor pg mr"\n\
   ..\n\
"353 Corridor - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "353 Corridor pg"\n\
   ..\n\
"353 Corridor i-wall 1" = INTERIOR-WALL\n\
   NEXT-TO          = "321A IT"\n\
   LOCATION         = SPACE-V1\n\
   ..\n\
"353 Corridor i-wall 2" = INTERIOR-WALL\n\
   NEXT-TO          = "3-ST3 Stair 3"\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"353 Corridor i-wall 3" = INTERIOR-WALL\n\
   NEXT-TO          = "343 Room"\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"353 Corridor i-wall 4" = INTERIOR-WALL\n\
   NEXT-TO          = "343 Room"\n\
   LOCATION         = SPACE-V5\n\
   ..\n\
"353 Corridor i-wall 5" = INTERIOR-WALL\n\
   NEXT-TO          = "345 Room"\n\
   LOCATION         = SPACE-V6\n\
   ..\n\
"353 Corridor i-wall 6" = INTERIOR-WALL\n\
   NEXT-TO          = "351 Corridor"\n\
   LOCATION         = SPACE-V7\n\
   ..\n\
"353 Corridor i-wall 7" = INTERIOR-WALL\n\
   NEXT-TO          = "346 Room"\n\
   LOCATION         = SPACE-V8\n\
   ..\n\
"353 Corridor i-wall 8" = INTERIOR-WALL\n\
   NEXT-TO          = "344 Room"\n\
   LOCATION         = SPACE-V9\n\
   ..\n\
"353 Corridor i-wall 9" = INTERIOR-WALL\n\
   NEXT-TO          = "342 Room"\n\
   LOCATION         = SPACE-V10\n\
   ..\n\
"Level 4" = FLOOR\n\
   Z                = 35\n\
   POLYGON          = "Level 4 pg"\n\
   SHAPE            = POLYGON\n\
   FLOOR-HEIGHT     = 8.75\n\
   SPACE-HEIGHT     = 8\n\
   C-DIAGRAM-DATA   = *Detailed UI DiagData*\n\
   ..\n\
"4-EL Elev" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = UNCONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office5"\n\
   LIGHTING-SCHEDUL = ( "Office5" )\n\
   EQUIP-SCHEDULE   = ( "Office5" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "4-EL Elev pg"\n\
   C-SUB-AREA       = ( 78.0925 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"4-EL Elev x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V1\n\
   ..\n\
"4-EL Elev x-wall 2" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"4-EL Elev - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "4-EL Elev floor pg mr"\n\
   ..\n\
"4-EL Elev - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "4-EL Elev pg"\n\
   ..\n\
"4-ST1 Stair 1" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = UNCONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office2"\n\
   LIGHTING-SCHEDUL = ( "Office2" )\n\
   EQUIP-SCHEDULE   = ( "Office2" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 99.9999\n\
   POLYGON          = "4-ST1 Stair 1 pg"\n\
   C-SUB-AREA       = ( 109.781 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"4-ST1 Stair 1 x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V1\n\
   ..\n\
"4-ST1 Stair 1 x-wall 2" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"4-ST1 Stair 1 x-wall 3" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V3\n\
   ..\n\
"4-ST1 Stair 1 x-wall 4" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V6\n\
   ..\n\
"4-ST1 Stair 1 - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "4-ST1 Stair 1 floor pg mr"\n\
   ..\n\
"4-ST1 Stair 1 - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "4-ST1 Stair 1 pg"\n\
   ..\n\
"4-ST1 Stair 1 i-wall 1" = INTERIOR-WALL\n\
   NEXT-TO          = "411 Room"\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"4-ST2 Stair 2" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = UNCONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office4"\n\
   LIGHTING-SCHEDUL = ( "Office4" )\n\
   EQUIP-SCHEDULE   = ( "Office4" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "4-ST2 Stair 2 pg"\n\
   C-SUB-AREA       = ( 148.179 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"4-ST2 Stair 2 x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"4-ST2 Stair 2 window 1" = WINDOW\n\
   X                = 0.577422\n\
   Y                = 0\n\
   HEIGHT           = 8\n\
   WIDTH            = 5.81144\n\
   ..\n\
"4-ST2 Stair 2 x-wall 2" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V3\n\
   ..\n\
"4-ST2 Stair 2 window 2" = WINDOW\n\
   X                = 0.51145\n\
   Y                = 0\n\
   HEIGHT           = 8\n\
   WIDTH            = 8.34022\n\
   ..\n\
"4-ST2 Stair 2 - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "4-ST2 Stair 2 floor pg mr"\n\
   ..\n\
"4-ST2 Stair 2 - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "4-ST2 Stair 2 pg"\n\
   ..\n\
"4-ST2 Stair 2 i-wall 1" = INTERIOR-WALL\n\
   NEXT-TO          = "414 Corridor"\n\
   LOCATION         = SPACE-V1\n\
   ..\n\
"4-ST2 Stair 2 i-wall 2" = INTERIOR-WALL\n\
   NEXT-TO          = "401B Lounge"\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"4-ST2 Stair 2 i-wall 3" = INTERIOR-WALL\n\
   NEXT-TO          = "401 Corridor"\n\
   LOCATION         = SPACE-V5\n\
   ..\n\
"4-ST2 Stair 2 i-wall 4" = INTERIOR-WALL\n\
   NEXT-TO          = "401A Janitor"\n\
   LOCATION         = SPACE-V6\n\
   ..\n\
"4-ST3 Stair 3" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = UNCONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office4"\n\
   LIGHTING-SCHEDUL = ( "Office4" )\n\
   EQUIP-SCHEDULE   = ( "Office4" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "4-ST3 Stair 3 pg"\n\
   C-SUB-AREA       = ( 146.056 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"4-ST3 Stair 3 x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"4-ST3 Stair 3 window 1" = WINDOW\n\
   X                = 0.190491\n\
   Y                = 0\n\
   HEIGHT           = 8\n\
   WIDTH            = 8.08687\n\
   ..\n\
"4-ST3 Stair 3 x-wall 2" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V3\n\
   ..\n\
"4-ST3 Stair 3 window 2" = WINDOW\n\
   X                = 0.31981\n\
   Y                = 0\n\
   HEIGHT           = 8\n\
   WIDTH            = 6.22792\n\
   ..\n\
"4-ST3 Stair 3 - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "4-ST3 Stair 3 floor pg mr"\n\
   ..\n\
"4-ST3 Stair 3 - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "4-ST3 Stair 3 pg"\n\
   ..\n\
"4-ST3 Stair 3 i-wall 1" = INTERIOR-WALL\n\
   NEXT-TO          = "421 Corridor"\n\
   LOCATION         = SPACE-V1\n\
   ..\n\
"4-ST3 Stair 3 i-wall 3" = INTERIOR-WALL\n\
   NEXT-TO          = "421A IT"\n\
   LOCATION         = SPACE-V5\n\
   ..\n\
"4-ST4 Stair 4" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = UNCONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office4"\n\
   LIGHTING-SCHEDUL = ( "Office4" )\n\
   EQUIP-SCHEDULE   = ( "Office4" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "4-ST4 Stair 4 pg"\n\
   C-SUB-AREA       = ( 106.125 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"4-ST4 Stair 4 x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"4-ST4 Stair 4 x-wall 2" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V3\n\
   ..\n\
"4-ST4 Stair 4 x-wall 3" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"4-ST4 Stair 4 x-wall 4" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V5\n\
   ..\n\
"4-ST4 Stair 4 - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "4-ST4 Stair 4 floor pg mr"\n\
   ..\n\
"4-ST4 Stair 4 - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "4-ST4 Stair 4 pg"\n\
   ..\n\
"4-ST4 Stair 4 i-wall 1" = INTERIOR-WALL\n\
   NEXT-TO          = "449 Room"\n\
   LOCATION         = SPACE-V1\n\
   ..\n\
"4-ST4 Stair 4 i-wall 2" = INTERIOR-WALL\n\
   NEXT-TO          = "451 Corridor"\n\
   LOCATION         = SPACE-V6\n\
   ..\n\
"400 Lounge" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office1"\n\
   LIGHTING-SCHEDUL = ( "Office1" )\n\
   EQUIP-SCHEDULE   = ( "Office1" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "400 Lounge pg"\n\
   C-SUB-AREA       = ( 474.25 )\n\
   C-OCC-TYPE       = ( 35 )\n\
   ..\n\
"400 Lounge x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V1\n\
   ..\n\
"400 Lounge x-wall 2" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V7\n\
   ..\n\
"400 Lounge x-wall 3" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V8\n\
   ..\n\
"400 Lounge window 1" = WINDOW\n\
   X                = 0.368517\n\
   Y                = 2.95\n\
   HEIGHT           = 5\n\
   WIDTH            = 9.69524\n\
   ..\n\
"400 Lounge window 2" = WINDOW\n\
   X                = 10.8854\n\
   Y                = 2.95\n\
   HEIGHT           = 5\n\
   WIDTH            = 10.0411\n\
   ..\n\
"400 Lounge - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "400 Lounge floor pg mr"\n\
   ..\n\
"400 Lounge - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "400 Lounge pg"\n\
   ..\n\
"400 Lounge i-wall 1" = INTERIOR-WALL\n\
   NEXT-TO          = "402 Room"\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"401 Corridor" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office5"\n\
   LIGHTING-SCHEDUL = ( "Office5" )\n\
   EQUIP-SCHEDULE   = ( "Office5" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "401 Corridor pg"\n\
   C-SUB-AREA       = ( 353.375 )\n\
   C-OCC-TYPE       = ( 35 )\n\
   ..\n\
"401 Corridor - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "401 Corridor floor pg mr"\n\
   ..\n\
"401 Corridor - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "401 Corridor pg"\n\
   ..\n\
"401 Corridor i-wall 1" = INTERIOR-WALL\n\
   NEXT-TO          = "401A Janitor"\n\
   LOCATION         = SPACE-V1\n\
   ..\n\
"401 Corridor i-wall 7" = INTERIOR-WALL\n\
   NEXT-TO          = "429 Room"\n\
   LOCATION         = SPACE-V7\n\
   ..\n\
"401 Corridor i-wall 9" = INTERIOR-WALL\n\
   NEXT-TO          = "426 Room"\n\
   LOCATION         = SPACE-V9\n\
   ..\n\
"401 Corridor i-wall 13" = INTERIOR-WALL\n\
   NEXT-TO          = "400 Lounge"\n\
   LOCATION         = SPACE-V13\n\
   ..\n\
"401 Corridor i-wall 14" = INTERIOR-WALL\n\
   NEXT-TO          = "400 Lounge"\n\
   LOCATION         = SPACE-V14\n\
   ..\n\
"401A Janitor" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = UNCONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office1"\n\
   LIGHTING-SCHEDUL = ( "Office1" )\n\
   EQUIP-SCHEDULE   = ( "Office1" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "401A Janitor pg"\n\
   C-SUB-AREA       = ( 57.9688 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"401A Janitor - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "401A Janitor floor pg mr"\n\
   ..\n\
"401A Janitor - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "401A Janitor pg"\n\
   ..\n\
"401A Janitor i-wall 1" = INTERIOR-WALL\n\
   NEXT-TO          = "414 Corridor"\n\
   LOCATION         = SPACE-V1\n\
   ..\n\
"401A Janitor i-wall 4" = INTERIOR-WALL\n\
   NEXT-TO          = "400 Lounge"\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"401B Lounge" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office3"\n\
   LIGHTING-SCHEDUL = ( "Office3" )\n\
   EQUIP-SCHEDULE   = ( "Office3" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "401B Lounge pg"\n\
   C-SUB-AREA       = ( 253.166 )\n\
   C-OCC-TYPE       = ( 35 )\n\
   ..\n\
"401B Lounge x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"401B Lounge window 1" = WINDOW\n\
   X                = 0\n\
   Y                = 0\n\
   HEIGHT           = 8\n\
   WIDTH            = 18.3532\n\
   ..\n\
"401B Lounge x-wall 2" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V3\n\
   ..\n\
"401B Lounge window 2" = WINDOW\n\
   X                = 0.360502\n\
   Y                = 0\n\
   HEIGHT           = 8\n\
   WIDTH            = 10.2583\n\
   ..\n\
"401B Lounge - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "401B Lounge floor pg mr"\n\
   ..\n\
"401B Lounge - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "401B Lounge pg"\n\
   ..\n\
"401B Lounge i-wall 2" = INTERIOR-WALL\n\
   NEXT-TO          = "431 Room"\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"401B Lounge i-wall 3" = INTERIOR-WALL\n\
   NEXT-TO          = "401 Corridor"\n\
   LOCATION         = SPACE-V5\n\
   ..\n\
"401B Lounge i-wall 4" = INTERIOR-WALL\n\
   NEXT-TO          = "401 Corridor"\n\
   LOCATION         = SPACE-V6\n\
   ..\n\
"402 Room" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office3"\n\
   LIGHTING-SCHEDUL = ( "Office3" )\n\
   EQUIP-SCHEDULE   = ( "Office3" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "402 Room pg"\n\
   C-SUB-AREA       = ( 181.278 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"402 Room x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"402 Room window 1" = WINDOW\n\
   X                = 7.18101\n\
   Y                = 2.95\n\
   HEIGHT           = 5\n\
   WIDTH            = 3.85799\n\
   ..\n\
"402 Room - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "402 Room floor pg mr"\n\
   ..\n\
"402 Room - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "402 Room pg"\n\
   ..\n\
"403 Room" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office1"\n\
   LIGHTING-SCHEDUL = ( "Office1" )\n\
   EQUIP-SCHEDULE   = ( "Office1" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "403 Room pg"\n\
   C-SUB-AREA       = ( 119.567 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"403 Room x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"403 Room window 1" = WINDOW\n\
   X                = 0.498062\n\
   Y                = 0\n\
   HEIGHT           = 8\n\
   WIDTH            = 7.75895\n\
   ..\n\
"403 Room - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "403 Room floor pg mr"\n\
   ..\n\
"403 Room - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "403 Room pg"\n\
   ..\n\
"403 Room i-wall 2" = INTERIOR-WALL\n\
   NEXT-TO          = "414 Corridor"\n\
   LOCATION         = SPACE-V3\n\
   ..\n\
"403 Room i-wall 3" = INTERIOR-WALL\n\
   NEXT-TO          = "414 Corridor"\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"404 Room" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office4"\n\
   LIGHTING-SCHEDUL = ( "Office4" )\n\
   EQUIP-SCHEDULE   = ( "Office4" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "404 Room pg"\n\
   C-SUB-AREA       = ( 148.455 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"404 Room x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"404 Room window 1" = WINDOW\n\
   X                = 7.01919\n\
   Y                = 2.95\n\
   HEIGHT           = 5\n\
   WIDTH            = 3.31545\n\
   ..\n\
"404 Room - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "404 Room floor pg mr"\n\
   ..\n\
"404 Room - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "404 Room pg"\n\
   ..\n\
"404 Room i-wall 1" = INTERIOR-WALL\n\
   NEXT-TO          = "406 Room"\n\
   LOCATION         = SPACE-V1\n\
   ..\n\
"404 Room i-wall 2" = INTERIOR-WALL\n\
   NEXT-TO          = "414 Corridor"\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"404 Room i-wall 3" = INTERIOR-WALL\n\
   NEXT-TO          = "402 Room"\n\
   LOCATION         = SPACE-V3\n\
   ..\n\
"406 Room" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office2"\n\
   LIGHTING-SCHEDUL = ( "Office2" )\n\
   EQUIP-SCHEDULE   = ( "Office2" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "406 Room pg"\n\
   C-SUB-AREA       = ( 155.879 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"406 Room x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"406 Room window 1" = WINDOW\n\
   X                = 0\n\
   Y                = 2.95\n\
   HEIGHT           = 5\n\
   WIDTH            = 3.66414\n\
   ..\n\
"406 Room - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "406 Room floor pg mr"\n\
   ..\n\
"406 Room - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "406 Room pg"\n\
   ..\n\
"407 Room" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office2"\n\
   LIGHTING-SCHEDUL = ( "Office2" )\n\
   EQUIP-SCHEDULE   = ( "Office2" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "407 Room pg"\n\
   C-SUB-AREA       = ( 124.082 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"407 Room x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"407 Room window 1" = WINDOW\n\
   X                = 1.26419\n\
   Y                = 2.95\n\
   HEIGHT           = 5\n\
   WIDTH            = 3.84706\n\
   ..\n\
"407 Room - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "407 Room floor pg mr"\n\
   ..\n\
"407 Room - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "407 Room pg"\n\
   ..\n\
"407 Room i-wall 2" = INTERIOR-WALL\n\
   NEXT-TO          = "403 Room"\n\
   LOCATION         = SPACE-V3\n\
   ..\n\
"407 Room i-wall 3" = INTERIOR-WALL\n\
   NEXT-TO          = "414 Corridor"\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"408 Bathroom" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office2"\n\
   LIGHTING-SCHEDUL = ( "Office2" )\n\
   EQUIP-SCHEDULE   = ( "Office2" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "408 Bathroom pg"\n\
   C-SUB-AREA       = ( 173.249 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"408 Bathroom x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"408 Bathroom - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "408 Bathroom floor pg mr"\n\
   ..\n\
"408 Bathroom - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "408 Bathroom pg"\n\
   ..\n\
"408 Bathroom i-wall 1" = INTERIOR-WALL\n\
   NEXT-TO          = "410 Room"\n\
   LOCATION         = SPACE-V1\n\
   ..\n\
"408 Bathroom i-wall 2" = INTERIOR-WALL\n\
   NEXT-TO          = "413 Corridor"\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"408 Bathroom i-wall 3" = INTERIOR-WALL\n\
   NEXT-TO          = "406 Room"\n\
   LOCATION         = SPACE-V3\n\
   ..\n\
"409 Room" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office4"\n\
   LIGHTING-SCHEDUL = ( "Office4" )\n\
   EQUIP-SCHEDULE   = ( "Office4" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "409 Room pg"\n\
   C-SUB-AREA       = ( 175.96 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"409 Room x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"409 Room window 1" = WINDOW\n\
   X                = 0\n\
   Y                = 2.95\n\
   HEIGHT           = 5\n\
   WIDTH            = 3.63398\n\
   ..\n\
"409 Room - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "409 Room floor pg mr"\n\
   ..\n\
"409 Room - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "409 Room pg"\n\
   ..\n\
"409 Room i-wall 1" = INTERIOR-WALL\n\
   NEXT-TO          = "411 Room"\n\
   LOCATION         = SPACE-V1\n\
   ..\n\
"409 Room i-wall 2" = INTERIOR-WALL\n\
   NEXT-TO          = "407 Room"\n\
   LOCATION         = SPACE-V3\n\
   ..\n\
"409 Room i-wall 3" = INTERIOR-WALL\n\
   NEXT-TO          = "413 Corridor"\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"410 Room" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office5"\n\
   LIGHTING-SCHEDUL = ( "Office5" )\n\
   EQUIP-SCHEDULE   = ( "Office5" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "410 Room pg"\n\
   C-SUB-AREA       = ( 173.007 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"410 Room x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"410 Room window 1" = WINDOW\n\
   X                = 8.73091\n\
   Y                = 2.95\n\
   HEIGHT           = 5\n\
   WIDTH            = 3.46303\n\
   ..\n\
"410 Room - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "410 Room floor pg mr"\n\
   ..\n\
"410 Room - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "410 Room pg"\n\
   ..\n\
"410 Room i-wall 1" = INTERIOR-WALL\n\
   NEXT-TO          = "412 Room"\n\
   LOCATION         = SPACE-V1\n\
   ..\n\
"410 Room i-wall 2" = INTERIOR-WALL\n\
   NEXT-TO          = "413 Corridor"\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"411 Room" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office5"\n\
   LIGHTING-SCHEDUL = ( "Office5" )\n\
   EQUIP-SCHEDULE   = ( "Office5" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "411 Room pg"\n\
   C-SUB-AREA       = ( 172.725 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"411 Room x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"411 Room window 1" = WINDOW\n\
   X                = 13.4786\n\
   Y                = 2.95\n\
   HEIGHT           = 5\n\
   WIDTH            = 3.23181\n\
   ..\n\
"411 Room - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "411 Room floor pg mr"\n\
   ..\n\
"411 Room - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "411 Room pg"\n\
   ..\n\
"412 Room" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office5"\n\
   LIGHTING-SCHEDUL = ( "Office5" )\n\
   EQUIP-SCHEDULE   = ( "Office5" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "412 Room pg"\n\
   C-SUB-AREA       = ( 172.528 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"412 Room x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V1\n\
   ..\n\
"412 Room x-wall 2" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"412 Room window 1" = WINDOW\n\
   X                = 0\n\
   Y                = 2.95\n\
   HEIGHT           = 5\n\
   WIDTH            = 3.35873\n\
   ..\n\
"412 Room - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "412 Room floor pg mr"\n\
   ..\n\
"412 Room - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "412 Room pg"\n\
   ..\n\
"413 Corridor" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office5"\n\
   LIGHTING-SCHEDUL = ( "Office5" )\n\
   EQUIP-SCHEDULE   = ( "Office5" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "413 Corridor pg"\n\
   C-SUB-AREA       = ( 199.01 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"413 Corridor x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V1\n\
   ..\n\
"413 Corridor window 1" = WINDOW\n\
   X                = 0.990533\n\
   Y                = 2.95\n\
   HEIGHT           = 5\n\
   WIDTH            = 3.28908\n\
   ..\n\
"413 Corridor - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "413 Corridor floor pg mr"\n\
   ..\n\
"413 Corridor - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "413 Corridor pg"\n\
   ..\n\
"413 Corridor i-wall 1" = INTERIOR-WALL\n\
   NEXT-TO          = "4-ST1 Stair 1"\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"413 Corridor i-wall 2" = INTERIOR-WALL\n\
   NEXT-TO          = "411 Room"\n\
   LOCATION         = SPACE-V3\n\
   ..\n\
"413 Corridor i-wall 4" = INTERIOR-WALL\n\
   NEXT-TO          = "414 Corridor"\n\
   LOCATION         = SPACE-V5\n\
   ..\n\
"413 Corridor i-wall 5" = INTERIOR-WALL\n\
   NEXT-TO          = "406 Room"\n\
   LOCATION         = SPACE-V6\n\
   ..\n\
"413 Corridor i-wall 8" = INTERIOR-WALL\n\
   NEXT-TO          = "412 Room"\n\
   LOCATION         = SPACE-V9\n\
   ..\n\
"414 Corridor" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office1"\n\
   LIGHTING-SCHEDUL = ( "Office1" )\n\
   EQUIP-SCHEDULE   = ( "Office1" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "414 Corridor pg"\n\
   C-SUB-AREA       = ( 172.697 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"414 Corridor x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V5\n\
   ..\n\
"414 Corridor window 1" = WINDOW\n\
   X                = 1.12831\n\
   Y                = 2.95\n\
   HEIGHT           = 5\n\
   WIDTH            = 2.90743\n\
   ..\n\
"414 Corridor - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "414 Corridor floor pg mr"\n\
   ..\n\
"414 Corridor - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "414 Corridor pg"\n\
   ..\n\
"414 Corridor i-wall 7" = INTERIOR-WALL\n\
   NEXT-TO          = "402 Room"\n\
   LOCATION         = SPACE-V8\n\
   ..\n\
"421 Corridor" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office3"\n\
   LIGHTING-SCHEDUL = ( "Office3" )\n\
   EQUIP-SCHEDULE   = ( "Office3" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "421 Corridor pg"\n\
   C-SUB-AREA       = ( 389.941 )\n\
   C-OCC-TYPE       = ( 35 )\n\
   ..\n\
"421 Corridor x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V5\n\
   ..\n\
"421 Corridor x-wall 2" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V8\n\
   ..\n\
"421 Corridor window 1" = WINDOW\n\
   X                = 0.305889\n\
   Y                = 0\n\
   HEIGHT           = 8\n\
   WIDTH            = 7.67524\n\
   ..\n\
"421 Corridor - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "421 Corridor floor pg mr"\n\
   ..\n\
"421 Corridor - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "421 Corridor pg"\n\
   ..\n\
"421 Corridor i-wall 1" = INTERIOR-WALL\n\
   NEXT-TO          = "401 Corridor"\n\
   LOCATION         = SPACE-V1\n\
   ..\n\
"421 Corridor i-wall 2" = INTERIOR-WALL\n\
   NEXT-TO          = "427 Room"\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"421 Corridor i-wall 5" = INTERIOR-WALL\n\
   NEXT-TO          = "4-EL Elev"\n\
   LOCATION         = SPACE-V6\n\
   ..\n\
"421 Corridor i-wall 6" = INTERIOR-WALL\n\
   NEXT-TO          = "4-EL Elev"\n\
   LOCATION         = SPACE-V7\n\
   ..\n\
"421 Corridor i-wall 11" = INTERIOR-WALL\n\
   NEXT-TO          = "422 Room"\n\
   LOCATION         = SPACE-V13\n\
   ..\n\
"421 Corridor i-wall 12" = INTERIOR-WALL\n\
   NEXT-TO          = "424 Room"\n\
   LOCATION         = SPACE-V14\n\
   ..\n\
"421A IT" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office1"\n\
   LIGHTING-SCHEDUL = ( "Office1" )\n\
   EQUIP-SCHEDULE   = ( "Office1" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "421A IT pg"\n\
   C-SUB-AREA       = ( 57.625 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"421A IT - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "421A IT floor pg mr"\n\
   ..\n\
"421A IT - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "421A IT pg"\n\
   ..\n\
"421A IT i-wall 1" = INTERIOR-WALL\n\
   NEXT-TO          = "421 Corridor"\n\
   LOCATION         = SPACE-V1\n\
   ..\n\
"421A IT i-wall 4" = INTERIOR-WALL\n\
   NEXT-TO          = "440 Room"\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"422 Room" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office2"\n\
   LIGHTING-SCHEDUL = ( "Office2" )\n\
   EQUIP-SCHEDULE   = ( "Office2" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "422 Room pg"\n\
   C-SUB-AREA       = ( 176.031 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"422 Room x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"422 Room window 1" = WINDOW\n\
   X                = 6.54278\n\
   Y                = 2.95\n\
   HEIGHT           = 5\n\
   WIDTH            = 3.96621\n\
   ..\n\
"422 Room - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "422 Room floor pg mr"\n\
   ..\n\
"422 Room - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "422 Room pg"\n\
   ..\n\
"422 Room i-wall 1" = INTERIOR-WALL\n\
   NEXT-TO          = "424 Room"\n\
   LOCATION         = SPACE-V1\n\
   ..\n\
"423 Room" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office4"\n\
   LIGHTING-SCHEDUL = ( "Office4" )\n\
   EQUIP-SCHEDULE   = ( "Office4" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 99.9999\n\
   POLYGON          = "423 Room pg"\n\
   C-SUB-AREA       = ( 117.808 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"423 Room x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"423 Room window 1" = WINDOW\n\
   X                = 0.641518\n\
   Y                = 0\n\
   HEIGHT           = 8\n\
   WIDTH            = 7.75776\n\
   ..\n\
"423 Room - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "423 Room floor pg mr"\n\
   ..\n\
"423 Room - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "423 Room pg"\n\
   ..\n\
"423 Room i-wall 1" = INTERIOR-WALL\n\
   NEXT-TO          = "427 Room"\n\
   LOCATION         = SPACE-V1\n\
   ..\n\
"423 Room i-wall 2" = INTERIOR-WALL\n\
   NEXT-TO          = "421 Corridor"\n\
   LOCATION         = SPACE-V3\n\
   ..\n\
"423 Room i-wall 3" = INTERIOR-WALL\n\
   NEXT-TO          = "421 Corridor"\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"424 Room" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office3"\n\
   LIGHTING-SCHEDUL = ( "Office3" )\n\
   EQUIP-SCHEDULE   = ( "Office3" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "424 Room pg"\n\
   C-SUB-AREA       = ( 148.917 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"424 Room x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"424 Room window 1" = WINDOW\n\
   X                = 6.71791\n\
   Y                = 2.95\n\
   HEIGHT           = 5\n\
   WIDTH            = 3.50701\n\
   ..\n\
"424 Room - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "424 Room floor pg mr"\n\
   ..\n\
"424 Room - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "424 Room pg"\n\
   ..\n\
"426 Room" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office1"\n\
   LIGHTING-SCHEDUL = ( "Office1" )\n\
   EQUIP-SCHEDULE   = ( "Office1" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "426 Room pg"\n\
   C-SUB-AREA       = ( 152.392 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"426 Room x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"426 Room window 1" = WINDOW\n\
   X                = 0\n\
   Y                = 2.95\n\
   HEIGHT           = 5\n\
   WIDTH            = 3.55241\n\
   ..\n\
"426 Room - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "426 Room floor pg mr"\n\
   ..\n\
"426 Room - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "426 Room pg"\n\
   ..\n\
"426 Room i-wall 3" = INTERIOR-WALL\n\
   NEXT-TO          = "424 Room"\n\
   LOCATION         = SPACE-V3\n\
   ..\n\
"427 Room" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office5"\n\
   LIGHTING-SCHEDUL = ( "Office5" )\n\
   EQUIP-SCHEDULE   = ( "Office5" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "427 Room pg"\n\
   C-SUB-AREA       = ( 126.7 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"427 Room x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"427 Room window 1" = WINDOW\n\
   X                = 1.47055\n\
   Y                = 2.95\n\
   HEIGHT           = 5\n\
   WIDTH            = 4.04069\n\
   ..\n\
"427 Room - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "427 Room floor pg mr"\n\
   ..\n\
"427 Room - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "427 Room pg"\n\
   ..\n\
"427 Room i-wall 1" = INTERIOR-WALL\n\
   NEXT-TO          = "429 Room"\n\
   LOCATION         = SPACE-V1\n\
   ..\n\
"428 Bathroom" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office5"\n\
   LIGHTING-SCHEDUL = ( "Office5" )\n\
   EQUIP-SCHEDULE   = ( "Office5" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "428 Bathroom pg"\n\
   C-SUB-AREA       = ( 171.562 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"428 Bathroom x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"428 Bathroom - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "428 Bathroom floor pg mr"\n\
   ..\n\
"428 Bathroom - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "428 Bathroom pg"\n\
   ..\n\
"428 Bathroom i-wall 2" = INTERIOR-WALL\n\
   NEXT-TO          = "401 Corridor"\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"428 Bathroom i-wall 3" = INTERIOR-WALL\n\
   NEXT-TO          = "426 Room"\n\
   LOCATION         = SPACE-V3\n\
   ..\n\
"429 Room" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office5"\n\
   LIGHTING-SCHEDUL = ( "Office5" )\n\
   EQUIP-SCHEDULE   = ( "Office5" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "429 Room pg"\n\
   C-SUB-AREA       = ( 170.336 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"429 Room x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"429 Room window 1" = WINDOW\n\
   X                = 0\n\
   Y                = 2.95\n\
   HEIGHT           = 5\n\
   WIDTH            = 3.33885\n\
   ..\n\
"429 Room - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "429 Room floor pg mr"\n\
   ..\n\
"429 Room - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "429 Room pg"\n\
   ..\n\
"430 Room" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office5"\n\
   LIGHTING-SCHEDUL = ( "Office5" )\n\
   EQUIP-SCHEDULE   = ( "Office5" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "430 Room pg"\n\
   C-SUB-AREA       = ( 173.908 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"430 Room x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"430 Room window 1" = WINDOW\n\
   X                = 8.65154\n\
   Y                = 2.95\n\
   HEIGHT           = 5\n\
   WIDTH            = 3.27434\n\
   ..\n\
"430 Room - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "430 Room floor pg mr"\n\
   ..\n\
"430 Room - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "430 Room pg"\n\
   ..\n\
"430 Room i-wall 2" = INTERIOR-WALL\n\
   NEXT-TO          = "401 Corridor"\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"430 Room i-wall 3" = INTERIOR-WALL\n\
   NEXT-TO          = "428 Bathroom"\n\
   LOCATION         = SPACE-V3\n\
   ..\n\
"431 Room" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office4"\n\
   LIGHTING-SCHEDUL = ( "Office4" )\n\
   EQUIP-SCHEDULE   = ( "Office4" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "431 Room pg"\n\
   C-SUB-AREA       = ( 171.846 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"431 Room x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V3\n\
   ..\n\
"431 Room window 1" = WINDOW\n\
   X                = 13.3656\n\
   Y                = 2.95\n\
   HEIGHT           = 5\n\
   WIDTH            = 3.66592\n\
   ..\n\
"431 Room - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "431 Room floor pg mr"\n\
   ..\n\
"431 Room - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "431 Room pg"\n\
   ..\n\
"431 Room i-wall 1" = INTERIOR-WALL\n\
   NEXT-TO          = "401 Corridor"\n\
   LOCATION         = SPACE-V1\n\
   ..\n\
"431 Room i-wall 3" = INTERIOR-WALL\n\
   NEXT-TO          = "429 Room"\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"431 Room i-wall 4" = INTERIOR-WALL\n\
   NEXT-TO          = "401 Corridor"\n\
   LOCATION         = SPACE-V5\n\
   ..\n\
"432 Room" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office1"\n\
   LIGHTING-SCHEDUL = ( "Office1" )\n\
   EQUIP-SCHEDULE   = ( "Office1" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "432 Room pg"\n\
   C-SUB-AREA       = ( 173.939 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"432 Room x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"432 Room window 1" = WINDOW\n\
   X                = 0\n\
   Y                = 2.95\n\
   HEIGHT           = 5\n\
   WIDTH            = 3.67158\n\
   ..\n\
"432 Room - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "432 Room floor pg mr"\n\
   ..\n\
"432 Room - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "432 Room pg"\n\
   ..\n\
"432 Room i-wall 1" = INTERIOR-WALL\n\
   NEXT-TO          = "400 Lounge"\n\
   LOCATION         = SPACE-V1\n\
   ..\n\
"432 Room i-wall 2" = INTERIOR-WALL\n\
   NEXT-TO          = "401 Corridor"\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"432 Room i-wall 3" = INTERIOR-WALL\n\
   NEXT-TO          = "430 Room"\n\
   LOCATION         = SPACE-V3\n\
   ..\n\
"440 Room" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office3"\n\
   LIGHTING-SCHEDUL = ( "Office3" )\n\
   EQUIP-SCHEDULE   = ( "Office3" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "440 Room pg"\n\
   C-SUB-AREA       = ( 473.937 )\n\
   C-OCC-TYPE       = ( 35 )\n\
   ..\n\
"440 Room x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V1\n\
   ..\n\
"440 Room x-wall 2" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V7\n\
   ..\n\
"440 Room x-wall 3" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V8\n\
   ..\n\
"440 Room window 1" = WINDOW\n\
   X                = 10.8366\n\
   Y                = 2.95\n\
   HEIGHT           = 5\n\
   WIDTH            = 9.95096\n\
   ..\n\
"440 Room window 2" = WINDOW\n\
   X                = 0.519453\n\
   Y                = 2.95\n\
   HEIGHT           = 5\n\
   WIDTH            = 9.67479\n\
   ..\n\
"440 Room - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "440 Room floor pg mr"\n\
   ..\n\
"440 Room - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "440 Room pg"\n\
   ..\n\
"440 Room i-wall 1" = INTERIOR-WALL\n\
   NEXT-TO          = "422 Room"\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"440 Room i-wall 2" = INTERIOR-WALL\n\
   NEXT-TO          = "421 Corridor"\n\
   LOCATION         = SPACE-V3\n\
   ..\n\
"440 Room i-wall 3" = INTERIOR-WALL\n\
   NEXT-TO          = "421 Corridor"\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"442 Room" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office5"\n\
   LIGHTING-SCHEDUL = ( "Office5" )\n\
   EQUIP-SCHEDULE   = ( "Office5" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "442 Room pg"\n\
   C-SUB-AREA       = ( 190.492 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"442 Room x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"442 Room window 1" = WINDOW\n\
   X                = 1.19503\n\
   Y                = 2.95\n\
   HEIGHT           = 5\n\
   WIDTH            = 3.86066\n\
   ..\n\
"442 Room - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "442 Room floor pg mr"\n\
   ..\n\
"442 Room - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "442 Room pg"\n\
   ..\n\
"442 Room i-wall 1" = INTERIOR-WALL\n\
   NEXT-TO          = "440 Room"\n\
   LOCATION         = SPACE-V1\n\
   ..\n\
"443 Room" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office4"\n\
   LIGHTING-SCHEDUL = ( "Office4" )\n\
   EQUIP-SCHEDULE   = ( "Office4" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "443 Room pg"\n\
   C-SUB-AREA       = ( 120.552 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"443 Room x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"443 Room window 1" = WINDOW\n\
   X                = 3.51657\n\
   Y                = 0\n\
   HEIGHT           = 8\n\
   WIDTH            = 7.93771\n\
   ..\n\
"443 Room - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "443 Room floor pg mr"\n\
   ..\n\
"443 Room - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "443 Room pg"\n\
   ..\n\
"444 Room" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office3"\n\
   LIGHTING-SCHEDUL = ( "Office3" )\n\
   EQUIP-SCHEDULE   = ( "Office3" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "444 Room pg"\n\
   C-SUB-AREA       = ( 152.085 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"444 Room x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"444 Room window 1" = WINDOW\n\
   X                = 0\n\
   Y                = 2.95\n\
   HEIGHT           = 5\n\
   WIDTH            = 3.55152\n\
   ..\n\
"444 Room - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "444 Room floor pg mr"\n\
   ..\n\
"444 Room - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "444 Room pg"\n\
   ..\n\
"444 Room i-wall 1" = INTERIOR-WALL\n\
   NEXT-TO          = "442 Room"\n\
   LOCATION         = SPACE-V1\n\
   ..\n\
"444 Room i-wall 2" = INTERIOR-WALL\n\
   NEXT-TO          = "453 Corridor"\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"444 Room i-wall 3" = INTERIOR-WALL\n\
   NEXT-TO          = "446 Room"\n\
   LOCATION         = SPACE-V3\n\
   ..\n\
"445 Room" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office4"\n\
   LIGHTING-SCHEDUL = ( "Office4" )\n\
   EQUIP-SCHEDULE   = ( "Office4" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "445 Room pg"\n\
   C-SUB-AREA       = ( 126.051 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"445 Room x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"445 Room window 1" = WINDOW\n\
   X                = 6.92083\n\
   Y                = 2.95\n\
   HEIGHT           = 5\n\
   WIDTH            = 4.04616\n\
   ..\n\
"445 Room - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "445 Room floor pg mr"\n\
   ..\n\
"445 Room - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "445 Room pg"\n\
   ..\n\
"445 Room i-wall 1" = INTERIOR-WALL\n\
   NEXT-TO          = "443 Room"\n\
   LOCATION         = SPACE-V1\n\
   ..\n\
"446 Room" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office4"\n\
   LIGHTING-SCHEDUL = ( "Office4" )\n\
   EQUIP-SCHEDULE   = ( "Office4" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "446 Room pg"\n\
   C-SUB-AREA       = ( 151.678 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"446 Room x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"446 Room window 1" = WINDOW\n\
   X                = 7.18312\n\
   Y                = 2.95\n\
   HEIGHT           = 5\n\
   WIDTH            = 3.24149\n\
   ..\n\
"446 Room - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "446 Room floor pg mr"\n\
   ..\n\
"446 Room - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "446 Room pg"\n\
   ..\n\
"447 Room" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office2"\n\
   LIGHTING-SCHEDUL = ( "Office2" )\n\
   EQUIP-SCHEDULE   = ( "Office2" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "447 Room pg"\n\
   C-SUB-AREA       = ( 177.296 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"447 Room x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"447 Room window 1" = WINDOW\n\
   X                = 13.5745\n\
   Y                = 2.95\n\
   HEIGHT           = 5\n\
   WIDTH            = 3.37558\n\
   ..\n\
"447 Room - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "447 Room floor pg mr"\n\
   ..\n\
"447 Room - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "447 Room pg"\n\
   ..\n\
"447 Room i-wall 1" = INTERIOR-WALL\n\
   NEXT-TO          = "445 Room"\n\
   LOCATION         = SPACE-V1\n\
   ..\n\
"447 Room i-wall 3" = INTERIOR-WALL\n\
   NEXT-TO          = "451 Corridor"\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"448 Bathroom" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office1"\n\
   LIGHTING-SCHEDUL = ( "Office1" )\n\
   EQUIP-SCHEDULE   = ( "Office1" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "448 Bathroom pg"\n\
   C-SUB-AREA       = ( 173.346 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"448 Bathroom x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"448 Bathroom - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "448 Bathroom floor pg mr"\n\
   ..\n\
"448 Bathroom - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "448 Bathroom pg"\n\
   ..\n\
"448 Bathroom i-wall 1" = INTERIOR-WALL\n\
   NEXT-TO          = "446 Room"\n\
   LOCATION         = SPACE-V1\n\
   ..\n\
"448 Bathroom i-wall 3" = INTERIOR-WALL\n\
   NEXT-TO          = "450 Room"\n\
   LOCATION         = SPACE-V3\n\
   ..\n\
"449 Room" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office5"\n\
   LIGHTING-SCHEDUL = ( "Office5" )\n\
   EQUIP-SCHEDULE   = ( "Office5" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "449 Room pg"\n\
   C-SUB-AREA       = ( 176.525 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"449 Room x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"449 Room window 1" = WINDOW\n\
   X                = 0\n\
   Y                = 2.95\n\
   HEIGHT           = 5\n\
   WIDTH            = 3.46043\n\
   ..\n\
"449 Room - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "449 Room floor pg mr"\n\
   ..\n\
"449 Room - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "449 Room pg"\n\
   ..\n\
"449 Room i-wall 1" = INTERIOR-WALL\n\
   NEXT-TO          = "447 Room"\n\
   LOCATION         = SPACE-V1\n\
   ..\n\
"449 Room i-wall 3" = INTERIOR-WALL\n\
   NEXT-TO          = "451 Corridor"\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"450 Room" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office2"\n\
   LIGHTING-SCHEDUL = ( "Office2" )\n\
   EQUIP-SCHEDULE   = ( "Office2" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "450 Room pg"\n\
   C-SUB-AREA       = ( 178.142 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"450 Room x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"450 Room window 1" = WINDOW\n\
   X                = 0\n\
   Y                = 2.95\n\
   HEIGHT           = 5\n\
   WIDTH            = 3.47808\n\
   ..\n\
"450 Room - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "450 Room floor pg mr"\n\
   ..\n\
"450 Room - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "450 Room pg"\n\
   ..\n\
"451 Corridor" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office2"\n\
   LIGHTING-SCHEDUL = ( "Office2" )\n\
   EQUIP-SCHEDULE   = ( "Office2" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "451 Corridor pg"\n\
   C-SUB-AREA       = ( 174.386 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"451 Corridor x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V5\n\
   ..\n\
"451 Corridor window 1" = WINDOW\n\
   X                = 0.291617\n\
   Y                = 2.95\n\
   HEIGHT           = 5\n\
   WIDTH            = 3.86007\n\
   ..\n\
"451 Corridor - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "451 Corridor floor pg mr"\n\
   ..\n\
"451 Corridor - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "451 Corridor pg"\n\
   ..\n\
"451 Corridor i-wall 5" = INTERIOR-WALL\n\
   NEXT-TO          = "452 Room"\n\
   LOCATION         = SPACE-V6\n\
   ..\n\
"451 Corridor i-wall 6" = INTERIOR-WALL\n\
   NEXT-TO          = "450 Room"\n\
   LOCATION         = SPACE-V7\n\
   ..\n\
"451 Corridor i-wall 7" = INTERIOR-WALL\n\
   NEXT-TO          = "448 Bathroom"\n\
   LOCATION         = SPACE-V8\n\
   ..\n\
"452 Room" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office3"\n\
   LIGHTING-SCHEDUL = ( "Office3" )\n\
   EQUIP-SCHEDULE   = ( "Office3" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "452 Room pg"\n\
   C-SUB-AREA       = ( 173.964 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"452 Room x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V3\n\
   ..\n\
"452 Room x-wall 2" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"452 Room window 1" = WINDOW\n\
   X                = 8.61188\n\
   Y                = 2.95\n\
   HEIGHT           = 5\n\
   WIDTH            = 3.35351\n\
   ..\n\
"452 Room - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "452 Room floor pg mr"\n\
   ..\n\
"452 Room - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "452 Room pg"\n\
   ..\n\
"452 Room i-wall 1" = INTERIOR-WALL\n\
   NEXT-TO          = "450 Room"\n\
   LOCATION         = SPACE-V1\n\
   ..\n\
"453 Corridor" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office5"\n\
   LIGHTING-SCHEDUL = ( "Office5" )\n\
   EQUIP-SCHEDULE   = ( "Office5" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "453 Corridor pg"\n\
   C-SUB-AREA       = ( 203.389 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"453 Corridor x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V3\n\
   ..\n\
"453 Corridor window 1" = WINDOW\n\
   X                = 1.24985\n\
   Y                = 2.95\n\
   HEIGHT           = 5\n\
   WIDTH            = 3.69485\n\
   ..\n\
"453 Corridor - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "453 Corridor floor pg mr"\n\
   ..\n\
"453 Corridor - clng" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = TOP\n\
   POLYGON          = "453 Corridor pg"\n\
   ..\n\
"453 Corridor i-wall 1" = INTERIOR-WALL\n\
   NEXT-TO          = "421A IT"\n\
   LOCATION         = SPACE-V1\n\
   ..\n\
"453 Corridor i-wall 2" = INTERIOR-WALL\n\
   NEXT-TO          = "4-ST3 Stair 3"\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"453 Corridor i-wall 3" = INTERIOR-WALL\n\
   NEXT-TO          = "443 Room"\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"453 Corridor i-wall 4" = INTERIOR-WALL\n\
   NEXT-TO          = "443 Room"\n\
   LOCATION         = SPACE-V5\n\
   ..\n\
"453 Corridor i-wall 5" = INTERIOR-WALL\n\
   NEXT-TO          = "445 Room"\n\
   LOCATION         = SPACE-V6\n\
   ..\n\
"453 Corridor i-wall 6" = INTERIOR-WALL\n\
   NEXT-TO          = "451 Corridor"\n\
   LOCATION         = SPACE-V7\n\
   ..\n\
"453 Corridor i-wall 7" = INTERIOR-WALL\n\
   NEXT-TO          = "446 Room"\n\
   LOCATION         = SPACE-V8\n\
   ..\n\
"453 Corridor i-wall 9" = INTERIOR-WALL\n\
   NEXT-TO          = "442 Room"\n\
   LOCATION         = SPACE-V10\n\
   ..\n\
"Level 5" = FLOOR\n\
   Z                = 43.75\n\
   POLYGON          = "Level 5 pg"\n\
   SHAPE            = POLYGON\n\
   FLOOR-HEIGHT     = 8.75\n\
   SPACE-HEIGHT     = 8\n\
   C-DIAGRAM-DATA   = *Detailed UI DiagData*\n\
   ..\n\
"5-EL Elev" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = UNCONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office2"\n\
   LIGHTING-SCHEDUL = ( "Office2" )\n\
   EQUIP-SCHEDULE   = ( "Office2" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "5-EL Elev pg"\n\
   C-SUB-AREA       = ( 74.011 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"5-EL Elev - roof" = EXTERIOR-WALL\n\
   CONSTRUCTION     = "roof constr"\n\
   LOCATION         = TOP\n\
   POLYGON          = "5-EL Elev roof pg"\n\
   ..\n\
"5-EL Elev x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V1\n\
   ..\n\
"5-EL Elev x-wall 2" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"5-EL Elev - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "5-EL Elev floor pg mr"\n\
   ..\n\
"5-ST1 Stair 1" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = UNCONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office3"\n\
   LIGHTING-SCHEDUL = ( "Office3" )\n\
   EQUIP-SCHEDULE   = ( "Office3" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "5-ST1 Stair 1 pg"\n\
   C-SUB-AREA       = ( 107.25 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"5-ST1 Stair 1 - roof" = EXTERIOR-WALL\n\
   CONSTRUCTION     = "roof constr"\n\
   LOCATION         = TOP\n\
   POLYGON          = "5-ST1 Stair 1 roof pg"\n\
   ..\n\
"5-ST1 Stair 1 x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V1\n\
   ..\n\
"5-ST1 Stair 1 x-wall 2" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"5-ST1 Stair 1 x-wall 3" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V3\n\
   ..\n\
"5-ST1 Stair 1 x-wall 4" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V6\n\
   ..\n\
"5-ST1 Stair 1 - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "5-ST1 Stair 1 floor pg mr"\n\
   ..\n\
"5-ST2 Stair 2" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = UNCONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office2"\n\
   LIGHTING-SCHEDUL = ( "Office2" )\n\
   EQUIP-SCHEDULE   = ( "Office2" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "5-ST2 Stair 2 pg"\n\
   C-SUB-AREA       = ( 146.817 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"5-ST2 Stair 2 - roof" = EXTERIOR-WALL\n\
   CONSTRUCTION     = "roof constr"\n\
   LOCATION         = TOP\n\
   POLYGON          = "5-ST2 Stair 2 roof pg"\n\
   ..\n\
"5-ST2 Stair 2 x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"5-ST2 Stair 2 window 1" = WINDOW\n\
   X                = 1.16579\n\
   Y                = 0\n\
   HEIGHT           = 8\n\
   WIDTH            = 5.06246\n\
   ..\n\
"5-ST2 Stair 2 x-wall 2" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V3\n\
   ..\n\
"5-ST2 Stair 2 window 2" = WINDOW\n\
   X                = 0.751907\n\
   Y                = 0\n\
   HEIGHT           = 8\n\
   WIDTH            = 8.15996\n\
   ..\n\
"5-ST2 Stair 2 - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "5-ST2 Stair 2 floor pg mr"\n\
   ..\n\
"5-ST2 Stair 2 i-wall 3" = INTERIOR-WALL\n\
   NEXT-TO          = "501 Corridor"\n\
   LOCATION         = SPACE-V5\n\
   ..\n\
"5-ST2 Stair 2 i-wall 4" = INTERIOR-WALL\n\
   NEXT-TO          = "501A Janitor"\n\
   LOCATION         = SPACE-V6\n\
   ..\n\
"5-ST3 Stair 3" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = UNCONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office3"\n\
   LIGHTING-SCHEDUL = ( "Office3" )\n\
   EQUIP-SCHEDULE   = ( "Office3" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "5-ST3 Stair 3 pg"\n\
   C-SUB-AREA       = ( 149.526 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"5-ST3 Stair 3 - roof" = EXTERIOR-WALL\n\
   CONSTRUCTION     = "roof constr"\n\
   LOCATION         = TOP\n\
   POLYGON          = "5-ST3 Stair 3 roof pg"\n\
   ..\n\
"5-ST3 Stair 3 x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"5-ST3 Stair 3 window 1" = WINDOW\n\
   X                = 0.365587\n\
   Y                = 0\n\
   HEIGHT           = 8\n\
   WIDTH            = 8.25598\n\
   ..\n\
"5-ST3 Stair 3 x-wall 2" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V3\n\
   ..\n\
"5-ST3 Stair 3 window 2" = WINDOW\n\
   X                = 0.521994\n\
   Y                = 0\n\
   HEIGHT           = 8\n\
   WIDTH            = 5.99587\n\
   ..\n\
"5-ST3 Stair 3 - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "5-ST3 Stair 3 floor pg mr"\n\
   ..\n\
"5-ST3 Stair 3 i-wall 3" = INTERIOR-WALL\n\
   NEXT-TO          = "521A IT"\n\
   LOCATION         = SPACE-V5\n\
   ..\n\
"5-ST4 Stair 4" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = UNCONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office2"\n\
   LIGHTING-SCHEDUL = ( "Office2" )\n\
   EQUIP-SCHEDULE   = ( "Office2" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "5-ST4 Stair 4 pg"\n\
   C-SUB-AREA       = ( 108.438 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"5-ST4 Stair 4 - roof" = EXTERIOR-WALL\n\
   CONSTRUCTION     = "roof constr"\n\
   LOCATION         = TOP\n\
   POLYGON          = "5-ST4 Stair 4 roof pg"\n\
   ..\n\
"5-ST4 Stair 4 x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"5-ST4 Stair 4 x-wall 2" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V3\n\
   ..\n\
"5-ST4 Stair 4 x-wall 3" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"5-ST4 Stair 4 x-wall 4" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V5\n\
   ..\n\
"5-ST4 Stair 4 - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "5-ST4 Stair 4 floor pg mr"\n\
   ..\n\
"5-ST4 Stair 4 i-wall 2" = INTERIOR-WALL\n\
   NEXT-TO          = "531 Corridor"\n\
   LOCATION         = SPACE-V6\n\
   ..\n\
"500 Lounge" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office2"\n\
   LIGHTING-SCHEDUL = ( "Office2" )\n\
   EQUIP-SCHEDULE   = ( "Office2" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "500 Lounge pg"\n\
   C-SUB-AREA       = ( 473.719 )\n\
   C-OCC-TYPE       = ( 35 )\n\
   ..\n\
"500 Lounge - roof" = EXTERIOR-WALL\n\
   CONSTRUCTION     = "roof constr"\n\
   LOCATION         = TOP\n\
   POLYGON          = "500 Lounge roof pg"\n\
   ..\n\
"500 Lounge x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V1\n\
   ..\n\
"500 Lounge window 1" = WINDOW\n\
   X                = 0.636193\n\
   Y                = 0\n\
   HEIGHT           = 8\n\
   WIDTH            = 6.63195\n\
   ..\n\
"500 Lounge x-wall 2" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V7\n\
   ..\n\
"500 Lounge window 2" = WINDOW\n\
   X                = 0.508163\n\
   Y                = 0\n\
   HEIGHT           = 8\n\
   WIDTH            = 3.02538\n\
   ..\n\
"500 Lounge x-wall 3" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V8\n\
   ..\n\
"500 Lounge window 3" = WINDOW\n\
   X                = 0.356873\n\
   Y                = 0\n\
   HEIGHT           = 8\n\
   WIDTH            = 20.5679\n\
   ..\n\
"500 Lounge - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "500 Lounge floor pg mr"\n\
   ..\n\
"500 Lounge i-wall 1" = INTERIOR-WALL\n\
   NEXT-TO          = "502 Room"\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"500 Lounge i-wall 2" = INTERIOR-WALL\n\
   NEXT-TO          = "501A Janitor"\n\
   LOCATION         = SPACE-V3\n\
   ..\n\
"500 Lounge i-wall 3" = INTERIOR-WALL\n\
   NEXT-TO          = "501 Corridor"\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"500 Lounge i-wall 4" = INTERIOR-WALL\n\
   NEXT-TO          = "501 Corridor"\n\
   LOCATION         = SPACE-V5\n\
   ..\n\
"501 Corridor" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office5"\n\
   LIGHTING-SCHEDUL = ( "Office5" )\n\
   EQUIP-SCHEDULE   = ( "Office5" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "501 Corridor pg"\n\
   C-SUB-AREA       = ( 354.375 )\n\
   C-OCC-TYPE       = ( 35 )\n\
   ..\n\
"501 Corridor - roof" = EXTERIOR-WALL\n\
   CONSTRUCTION     = "roof constr"\n\
   LOCATION         = TOP\n\
   POLYGON          = "501 Corridor roof pg"\n\
   ..\n\
"501 Corridor - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "501 Corridor floor pg mr"\n\
   ..\n\
"501 Corridor i-wall 1" = INTERIOR-WALL\n\
   NEXT-TO          = "501A Janitor"\n\
   LOCATION         = SPACE-V1\n\
   ..\n\
"501 Corridor i-wall 9" = INTERIOR-WALL\n\
   NEXT-TO          = "526 Room"\n\
   LOCATION         = SPACE-V9\n\
   ..\n\
"501 Corridor i-wall 10" = INTERIOR-WALL\n\
   NEXT-TO          = "528 Bathroom"\n\
   LOCATION         = SPACE-V10\n\
   ..\n\
"501A Janitor" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = UNCONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office4"\n\
   LIGHTING-SCHEDUL = ( "Office4" )\n\
   EQUIP-SCHEDULE   = ( "Office4" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "501A Janitor pg"\n\
   C-SUB-AREA       = ( 62.5625 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"501A Janitor - roof" = EXTERIOR-WALL\n\
   CONSTRUCTION     = "roof constr"\n\
   LOCATION         = TOP\n\
   POLYGON          = "501A Janitor roof pg"\n\
   ..\n\
"501A Janitor - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "501A Janitor floor pg mr"\n\
   ..\n\
"501B Lounge" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office3"\n\
   LIGHTING-SCHEDUL = ( "Office3" )\n\
   EQUIP-SCHEDULE   = ( "Office3" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "501B Lounge pg"\n\
   C-SUB-AREA       = ( 256.589 )\n\
   C-OCC-TYPE       = ( 35 )\n\
   ..\n\
"501B Lounge - roof" = EXTERIOR-WALL\n\
   CONSTRUCTION     = "roof constr"\n\
   LOCATION         = TOP\n\
   POLYGON          = "501B Lounge roof pg"\n\
   ..\n\
"501B Lounge x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"501B Lounge window 1" = WINDOW\n\
   X                = 0\n\
   Y                = 0\n\
   HEIGHT           = 8\n\
   WIDTH            = 18.4883\n\
   ..\n\
"501B Lounge x-wall 2" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V3\n\
   ..\n\
"501B Lounge window 2" = WINDOW\n\
   X                = 0.461593\n\
   Y                = 0\n\
   HEIGHT           = 8\n\
   WIDTH            = 9.89414\n\
   ..\n\
"501B Lounge - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "501B Lounge floor pg mr"\n\
   ..\n\
"501B Lounge i-wall 1" = INTERIOR-WALL\n\
   NEXT-TO          = "5-ST2 Stair 2"\n\
   LOCATION         = SPACE-V1\n\
   ..\n\
"501B Lounge i-wall 2" = INTERIOR-WALL\n\
   NEXT-TO          = "531 Room"\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"501B Lounge i-wall 3" = INTERIOR-WALL\n\
   NEXT-TO          = "501 Corridor"\n\
   LOCATION         = SPACE-V5\n\
   ..\n\
"501B Lounge i-wall 4" = INTERIOR-WALL\n\
   NEXT-TO          = "501 Corridor"\n\
   LOCATION         = SPACE-V6\n\
   ..\n\
"502 Room" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office1"\n\
   LIGHTING-SCHEDUL = ( "Office1" )\n\
   EQUIP-SCHEDULE   = ( "Office1" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "502 Room pg"\n\
   C-SUB-AREA       = ( 172.893 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"502 Room - roof" = EXTERIOR-WALL\n\
   CONSTRUCTION     = "roof constr"\n\
   LOCATION         = TOP\n\
   POLYGON          = "502 Room roof pg"\n\
   ..\n\
"502 Room x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"502 Room window 1" = WINDOW\n\
   X                = 7.61903\n\
   Y                = 2.95\n\
   HEIGHT           = 5\n\
   WIDTH            = 4.04547\n\
   ..\n\
"502 Room - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "502 Room floor pg mr"\n\
   ..\n\
"502 Room i-wall 1" = INTERIOR-WALL\n\
   NEXT-TO          = "504 Room"\n\
   LOCATION         = SPACE-V1\n\
   ..\n\
"503 Room" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office3"\n\
   LIGHTING-SCHEDUL = ( "Office3" )\n\
   EQUIP-SCHEDULE   = ( "Office3" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "503 Room pg"\n\
   C-SUB-AREA       = ( 121.28 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"503 Room - roof" = EXTERIOR-WALL\n\
   CONSTRUCTION     = "roof constr"\n\
   LOCATION         = TOP\n\
   POLYGON          = "503 Room roof pg"\n\
   ..\n\
"503 Room x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"503 Room window 1" = WINDOW\n\
   X                = 0.30735\n\
   Y                = 0\n\
   HEIGHT           = 8\n\
   WIDTH            = 7.77238\n\
   ..\n\
"503 Room - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "503 Room floor pg mr"\n\
   ..\n\
"503 Room i-wall 1" = INTERIOR-WALL\n\
   NEXT-TO          = "507 Room"\n\
   LOCATION         = SPACE-V1\n\
   ..\n\
"504 Room" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office5"\n\
   LIGHTING-SCHEDUL = ( "Office5" )\n\
   EQUIP-SCHEDULE   = ( "Office5" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "504 Room pg"\n\
   C-SUB-AREA       = ( 146.771 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"504 Room - roof" = EXTERIOR-WALL\n\
   CONSTRUCTION     = "roof constr"\n\
   LOCATION         = TOP\n\
   POLYGON          = "504 Room roof pg"\n\
   ..\n\
"504 Room x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"504 Room window 1" = WINDOW\n\
   X                = 7.41698\n\
   Y                = 2.95\n\
   HEIGHT           = 5\n\
   WIDTH            = 3.42184\n\
   ..\n\
"504 Room - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "504 Room floor pg mr"\n\
   ..\n\
"506 Room" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office5"\n\
   LIGHTING-SCHEDUL = ( "Office5" )\n\
   EQUIP-SCHEDULE   = ( "Office5" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "506 Room pg"\n\
   C-SUB-AREA       = ( 152.973 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"506 Room - roof" = EXTERIOR-WALL\n\
   CONSTRUCTION     = "roof constr"\n\
   LOCATION         = TOP\n\
   POLYGON          = "506 Room roof pg"\n\
   ..\n\
"506 Room x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"506 Room window 1" = WINDOW\n\
   X                = 0\n\
   Y                = 2.95\n\
   HEIGHT           = 5\n\
   WIDTH            = 3.50813\n\
   ..\n\
"506 Room - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "506 Room floor pg mr"\n\
   ..\n\
"506 Room i-wall 3" = INTERIOR-WALL\n\
   NEXT-TO          = "504 Room"\n\
   LOCATION         = SPACE-V3\n\
   ..\n\
"507 Room" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office3"\n\
   LIGHTING-SCHEDUL = ( "Office3" )\n\
   EQUIP-SCHEDULE   = ( "Office3" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "507 Room pg"\n\
   C-SUB-AREA       = ( 128.686 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"507 Room - roof" = EXTERIOR-WALL\n\
   CONSTRUCTION     = "roof constr"\n\
   LOCATION         = TOP\n\
   POLYGON          = "507 Room roof pg"\n\
   ..\n\
"507 Room x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"507 Room window 1" = WINDOW\n\
   X                = 1.36441\n\
   Y                = 2.95\n\
   HEIGHT           = 5\n\
   WIDTH            = 3.84938\n\
   ..\n\
"507 Room - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "507 Room floor pg mr"\n\
   ..\n\
"507 Room i-wall 1" = INTERIOR-WALL\n\
   NEXT-TO          = "509 Room"\n\
   LOCATION         = SPACE-V1\n\
   ..\n\
"508 Bathroom" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office4"\n\
   LIGHTING-SCHEDUL = ( "Office4" )\n\
   EQUIP-SCHEDULE   = ( "Office4" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "508 Bathroom pg"\n\
   C-SUB-AREA       = ( 166.574 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"508 Bathroom - roof" = EXTERIOR-WALL\n\
   CONSTRUCTION     = "roof constr"\n\
   LOCATION         = TOP\n\
   POLYGON          = "508 Bathroom roof pg"\n\
   ..\n\
"508 Bathroom x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"508 Bathroom - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "508 Bathroom floor pg mr"\n\
   ..\n\
"508 Bathroom i-wall 2" = INTERIOR-WALL\n\
   NEXT-TO          = "513 Corridor"\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"508 Bathroom i-wall 3" = INTERIOR-WALL\n\
   NEXT-TO          = "506 Room"\n\
   LOCATION         = SPACE-V3\n\
   ..\n\
"509 Room" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office4"\n\
   LIGHTING-SCHEDUL = ( "Office4" )\n\
   EQUIP-SCHEDULE   = ( "Office4" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "509 Room pg"\n\
   C-SUB-AREA       = ( 174.877 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"509 Room - roof" = EXTERIOR-WALL\n\
   CONSTRUCTION     = "roof constr"\n\
   LOCATION         = TOP\n\
   POLYGON          = "509 Room roof pg"\n\
   ..\n\
"509 Room x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"509 Room window 1" = WINDOW\n\
   X                = 0\n\
   Y                = 2.95\n\
   HEIGHT           = 5\n\
   WIDTH            = 3.49546\n\
   ..\n\
"509 Room - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "509 Room floor pg mr"\n\
   ..\n\
"510 Room" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office3"\n\
   LIGHTING-SCHEDUL = ( "Office3" )\n\
   EQUIP-SCHEDULE   = ( "Office3" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "510 Room pg"\n\
   C-SUB-AREA       = ( 173.494 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"510 Room - roof" = EXTERIOR-WALL\n\
   CONSTRUCTION     = "roof constr"\n\
   LOCATION         = TOP\n\
   POLYGON          = "510 Room roof pg"\n\
   ..\n\
"510 Room x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"510 Room window 1" = WINDOW\n\
   X                = 8.80543\n\
   Y                = 2.95\n\
   HEIGHT           = 5\n\
   WIDTH            = 3.24947\n\
   ..\n\
"510 Room - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "510 Room floor pg mr"\n\
   ..\n\
"510 Room i-wall 1" = INTERIOR-WALL\n\
   NEXT-TO          = "512 Room"\n\
   LOCATION         = SPACE-V1\n\
   ..\n\
"510 Room i-wall 2" = INTERIOR-WALL\n\
   NEXT-TO          = "513 Corridor"\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"510 Room i-wall 3" = INTERIOR-WALL\n\
   NEXT-TO          = "508 Bathroom"\n\
   LOCATION         = SPACE-V3\n\
   ..\n\
"511 Room" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office5"\n\
   LIGHTING-SCHEDUL = ( "Office5" )\n\
   EQUIP-SCHEDULE   = ( "Office5" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "511 Room pg"\n\
   C-SUB-AREA       = ( 175.187 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"511 Room - roof" = EXTERIOR-WALL\n\
   CONSTRUCTION     = "roof constr"\n\
   LOCATION         = TOP\n\
   POLYGON          = "511 Room roof pg"\n\
   ..\n\
"511 Room x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"511 Room window 1" = WINDOW\n\
   X                = 13.0898\n\
   Y                = 2.95\n\
   HEIGHT           = 5\n\
   WIDTH            = 3.47539\n\
   ..\n\
"511 Room - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "511 Room floor pg mr"\n\
   ..\n\
"511 Room i-wall 1" = INTERIOR-WALL\n\
   NEXT-TO          = "5-ST1 Stair 1"\n\
   LOCATION         = SPACE-V1\n\
   ..\n\
"511 Room i-wall 2" = INTERIOR-WALL\n\
   NEXT-TO          = "509 Room"\n\
   LOCATION         = SPACE-V3\n\
   ..\n\
"512 Room" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office1"\n\
   LIGHTING-SCHEDUL = ( "Office1" )\n\
   EQUIP-SCHEDULE   = ( "Office1" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "512 Room pg"\n\
   C-SUB-AREA       = ( 166.929 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"512 Room - roof" = EXTERIOR-WALL\n\
   CONSTRUCTION     = "roof constr"\n\
   LOCATION         = TOP\n\
   POLYGON          = "512 Room roof pg"\n\
   ..\n\
"512 Room x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V1\n\
   ..\n\
"512 Room x-wall 2" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"512 Room window 1" = WINDOW\n\
   X                = 0\n\
   Y                = 2.95\n\
   HEIGHT           = 5\n\
   WIDTH            = 3.51941\n\
   ..\n\
"512 Room - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "512 Room floor pg mr"\n\
   ..\n\
"513 Corridor" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office2"\n\
   LIGHTING-SCHEDUL = ( "Office2" )\n\
   EQUIP-SCHEDULE   = ( "Office2" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "513 Corridor pg"\n\
   C-SUB-AREA       = ( 201.054 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"513 Corridor - roof" = EXTERIOR-WALL\n\
   CONSTRUCTION     = "roof constr"\n\
   LOCATION         = TOP\n\
   POLYGON          = "513 Corridor roof pg"\n\
   ..\n\
"513 Corridor x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V1\n\
   ..\n\
"513 Corridor window 1" = WINDOW\n\
   X                = 0.584723\n\
   Y                = 2.95\n\
   HEIGHT           = 5\n\
   WIDTH            = 3.44719\n\
   ..\n\
"513 Corridor - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "513 Corridor floor pg mr"\n\
   ..\n\
"513 Corridor i-wall 1" = INTERIOR-WALL\n\
   NEXT-TO          = "5-ST1 Stair 1"\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"513 Corridor i-wall 2" = INTERIOR-WALL\n\
   NEXT-TO          = "511 Room"\n\
   LOCATION         = SPACE-V3\n\
   ..\n\
"513 Corridor i-wall 3" = INTERIOR-WALL\n\
   NEXT-TO          = "509 Room"\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"513 Corridor i-wall 5" = INTERIOR-WALL\n\
   NEXT-TO          = "506 Room"\n\
   LOCATION         = SPACE-V6\n\
   ..\n\
"513 Corridor i-wall 8" = INTERIOR-WALL\n\
   NEXT-TO          = "512 Room"\n\
   LOCATION         = SPACE-V9\n\
   ..\n\
"514 Corridor" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office5"\n\
   LIGHTING-SCHEDUL = ( "Office5" )\n\
   EQUIP-SCHEDULE   = ( "Office5" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "514 Corridor pg"\n\
   C-SUB-AREA       = ( 177.845 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"514 Corridor - roof" = EXTERIOR-WALL\n\
   CONSTRUCTION     = "roof constr"\n\
   LOCATION         = TOP\n\
   POLYGON          = "514 Corridor roof pg"\n\
   ..\n\
"514 Corridor x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V5\n\
   ..\n\
"514 Corridor window 1" = WINDOW\n\
   X                = 1.38615\n\
   Y                = 2.95\n\
   HEIGHT           = 5\n\
   WIDTH            = 2.92349\n\
   ..\n\
"514 Corridor - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "514 Corridor floor pg mr"\n\
   ..\n\
"514 Corridor i-wall 1" = INTERIOR-WALL\n\
   NEXT-TO          = "513 Corridor"\n\
   LOCATION         = SPACE-V1\n\
   ..\n\
"514 Corridor i-wall 2" = INTERIOR-WALL\n\
   NEXT-TO          = "507 Room"\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"514 Corridor i-wall 3" = INTERIOR-WALL\n\
   NEXT-TO          = "503 Room"\n\
   LOCATION         = SPACE-V3\n\
   ..\n\
"514 Corridor i-wall 4" = INTERIOR-WALL\n\
   NEXT-TO          = "503 Room"\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"514 Corridor i-wall 5" = INTERIOR-WALL\n\
   NEXT-TO          = "5-ST2 Stair 2"\n\
   LOCATION         = SPACE-V6\n\
   ..\n\
"514 Corridor i-wall 6" = INTERIOR-WALL\n\
   NEXT-TO          = "501A Janitor"\n\
   LOCATION         = SPACE-V7\n\
   ..\n\
"514 Corridor i-wall 7" = INTERIOR-WALL\n\
   NEXT-TO          = "502 Room"\n\
   LOCATION         = SPACE-V8\n\
   ..\n\
"514 Corridor i-wall 8" = INTERIOR-WALL\n\
   NEXT-TO          = "504 Room"\n\
   LOCATION         = SPACE-V9\n\
   ..\n\
"521 Corridor" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office1"\n\
   LIGHTING-SCHEDUL = ( "Office1" )\n\
   EQUIP-SCHEDULE   = ( "Office1" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "521 Corridor pg"\n\
   C-SUB-AREA       = ( 387.507 )\n\
   C-OCC-TYPE       = ( 35 )\n\
   ..\n\
"521 Corridor - roof" = EXTERIOR-WALL\n\
   CONSTRUCTION     = "roof constr"\n\
   LOCATION         = TOP\n\
   POLYGON          = "521 Corridor roof pg"\n\
   ..\n\
"521 Corridor x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V5\n\
   ..\n\
"521 Corridor x-wall 2" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V8\n\
   ..\n\
"521 Corridor window 1" = WINDOW\n\
   X                = 0.367488\n\
   Y                = 0\n\
   HEIGHT           = 8\n\
   WIDTH            = 7.55215\n\
   ..\n\
"521 Corridor - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "521 Corridor floor pg mr"\n\
   ..\n\
"521 Corridor i-wall 1" = INTERIOR-WALL\n\
   NEXT-TO          = "501 Corridor"\n\
   LOCATION         = SPACE-V1\n\
   ..\n\
"521 Corridor i-wall 2" = INTERIOR-WALL\n\
   NEXT-TO          = "527 Room"\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"521 Corridor i-wall 3" = INTERIOR-WALL\n\
   NEXT-TO          = "523 Room"\n\
   LOCATION         = SPACE-V3\n\
   ..\n\
"521 Corridor i-wall 4" = INTERIOR-WALL\n\
   NEXT-TO          = "523 Room"\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"521 Corridor i-wall 5" = INTERIOR-WALL\n\
   NEXT-TO          = "5-EL Elev"\n\
   LOCATION         = SPACE-V6\n\
   ..\n\
"521 Corridor i-wall 6" = INTERIOR-WALL\n\
   NEXT-TO          = "5-EL Elev"\n\
   LOCATION         = SPACE-V7\n\
   ..\n\
"521 Corridor i-wall 7" = INTERIOR-WALL\n\
   NEXT-TO          = "5-ST3 Stair 3"\n\
   LOCATION         = SPACE-V9\n\
   ..\n\
"521 Corridor i-wall 8" = INTERIOR-WALL\n\
   NEXT-TO          = "521A IT"\n\
   LOCATION         = SPACE-V10\n\
   ..\n\
"521 Corridor i-wall 9" = INTERIOR-WALL\n\
   NEXT-TO          = "540 Lounge"\n\
   LOCATION         = SPACE-V11\n\
   ..\n\
"521 Corridor i-wall 10" = INTERIOR-WALL\n\
   NEXT-TO          = "540 Lounge"\n\
   LOCATION         = SPACE-V12\n\
   ..\n\
"521 Corridor i-wall 11" = INTERIOR-WALL\n\
   NEXT-TO          = "522 Room"\n\
   LOCATION         = SPACE-V13\n\
   ..\n\
"521 Corridor i-wall 12" = INTERIOR-WALL\n\
   NEXT-TO          = "524 Room"\n\
   LOCATION         = SPACE-V14\n\
   ..\n\
"521A IT" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office3"\n\
   LIGHTING-SCHEDUL = ( "Office3" )\n\
   EQUIP-SCHEDULE   = ( "Office3" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "521A IT pg"\n\
   C-SUB-AREA       = ( 56.375 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"521A IT - roof" = EXTERIOR-WALL\n\
   CONSTRUCTION     = "roof constr"\n\
   LOCATION         = TOP\n\
   POLYGON          = "521A IT roof pg"\n\
   ..\n\
"521A IT - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "521A IT floor pg mr"\n\
   ..\n\
"522 Room" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office4"\n\
   LIGHTING-SCHEDUL = ( "Office4" )\n\
   EQUIP-SCHEDULE   = ( "Office4" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "522 Room pg"\n\
   C-SUB-AREA       = ( 177.202 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"522 Room - roof" = EXTERIOR-WALL\n\
   CONSTRUCTION     = "roof constr"\n\
   LOCATION         = TOP\n\
   POLYGON          = "522 Room roof pg"\n\
   ..\n\
"522 Room x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"522 Room window 1" = WINDOW\n\
   X                = 6.88261\n\
   Y                = 2.95\n\
   HEIGHT           = 5\n\
   WIDTH            = 4.00487\n\
   ..\n\
"522 Room - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "522 Room floor pg mr"\n\
   ..\n\
"523 Room" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office4"\n\
   LIGHTING-SCHEDUL = ( "Office4" )\n\
   EQUIP-SCHEDULE   = ( "Office4" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "523 Room pg"\n\
   C-SUB-AREA       = ( 119.708 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"523 Room - roof" = EXTERIOR-WALL\n\
   CONSTRUCTION     = "roof constr"\n\
   LOCATION         = TOP\n\
   POLYGON          = "523 Room roof pg"\n\
   ..\n\
"523 Room x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"523 Room window 1" = WINDOW\n\
   X                = 0.435879\n\
   Y                = 0\n\
   HEIGHT           = 8\n\
   WIDTH            = 7.62993\n\
   ..\n\
"523 Room - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "523 Room floor pg mr"\n\
   ..\n\
"524 Room" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office3"\n\
   LIGHTING-SCHEDUL = ( "Office3" )\n\
   EQUIP-SCHEDULE   = ( "Office3" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "524 Room pg"\n\
   C-SUB-AREA       = ( 151.476 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"524 Room - roof" = EXTERIOR-WALL\n\
   CONSTRUCTION     = "roof constr"\n\
   LOCATION         = TOP\n\
   POLYGON          = "524 Room roof pg"\n\
   ..\n\
"524 Room x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"524 Room window 1" = WINDOW\n\
   X                = 6.9079\n\
   Y                = 2.95\n\
   HEIGHT           = 5\n\
   WIDTH            = 3.35136\n\
   ..\n\
"524 Room - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "524 Room floor pg mr"\n\
   ..\n\
"524 Room i-wall 1" = INTERIOR-WALL\n\
   NEXT-TO          = "526 Room"\n\
   LOCATION         = SPACE-V1\n\
   ..\n\
"524 Room i-wall 3" = INTERIOR-WALL\n\
   NEXT-TO          = "522 Room"\n\
   LOCATION         = SPACE-V3\n\
   ..\n\
"526 Room" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office5"\n\
   LIGHTING-SCHEDUL = ( "Office5" )\n\
   EQUIP-SCHEDULE   = ( "Office5" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "526 Room pg"\n\
   C-SUB-AREA       = ( 152.682 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"526 Room - roof" = EXTERIOR-WALL\n\
   CONSTRUCTION     = "roof constr"\n\
   LOCATION         = TOP\n\
   POLYGON          = "526 Room roof pg"\n\
   ..\n\
"526 Room x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"526 Room window 1" = WINDOW\n\
   X                = 0\n\
   Y                = 2.95\n\
   HEIGHT           = 5\n\
   WIDTH            = 3.51133\n\
   ..\n\
"526 Room - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "526 Room floor pg mr"\n\
   ..\n\
"527 Room" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office3"\n\
   LIGHTING-SCHEDUL = ( "Office3" )\n\
   EQUIP-SCHEDULE   = ( "Office3" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "527 Room pg"\n\
   C-SUB-AREA       = ( 127.728 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"527 Room - roof" = EXTERIOR-WALL\n\
   CONSTRUCTION     = "roof constr"\n\
   LOCATION         = TOP\n\
   POLYGON          = "527 Room roof pg"\n\
   ..\n\
"527 Room x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"527 Room window 1" = WINDOW\n\
   X                = 1.43206\n\
   Y                = 2.95\n\
   HEIGHT           = 5\n\
   WIDTH            = 4.0101\n\
   ..\n\
"527 Room - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "527 Room floor pg mr"\n\
   ..\n\
"527 Room i-wall 1" = INTERIOR-WALL\n\
   NEXT-TO          = "529 Room"\n\
   LOCATION         = SPACE-V1\n\
   ..\n\
"527 Room i-wall 2" = INTERIOR-WALL\n\
   NEXT-TO          = "523 Room"\n\
   LOCATION         = SPACE-V3\n\
   ..\n\
"528 Bathroom" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office2"\n\
   LIGHTING-SCHEDUL = ( "Office2" )\n\
   EQUIP-SCHEDULE   = ( "Office2" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "528 Bathroom pg"\n\
   C-SUB-AREA       = ( 170.932 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"528 Bathroom - roof" = EXTERIOR-WALL\n\
   CONSTRUCTION     = "roof constr"\n\
   LOCATION         = TOP\n\
   POLYGON          = "528 Bathroom roof pg"\n\
   ..\n\
"528 Bathroom x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"528 Bathroom - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "528 Bathroom floor pg mr"\n\
   ..\n\
"528 Bathroom i-wall 3" = INTERIOR-WALL\n\
   NEXT-TO          = "526 Room"\n\
   LOCATION         = SPACE-V3\n\
   ..\n\
"529 Room" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office2"\n\
   LIGHTING-SCHEDUL = ( "Office2" )\n\
   EQUIP-SCHEDULE   = ( "Office2" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "529 Room pg"\n\
   C-SUB-AREA       = ( 169.566 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"529 Room - roof" = EXTERIOR-WALL\n\
   CONSTRUCTION     = "roof constr"\n\
   LOCATION         = TOP\n\
   POLYGON          = "529 Room roof pg"\n\
   ..\n\
"529 Room x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"529 Room window 1" = WINDOW\n\
   X                = 0\n\
   Y                = 2.95\n\
   HEIGHT           = 5\n\
   WIDTH            = 3.42736\n\
   ..\n\
"529 Room - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "529 Room floor pg mr"\n\
   ..\n\
"529 Room i-wall 3" = INTERIOR-WALL\n\
   NEXT-TO          = "501 Corridor"\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"530 Room" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office2"\n\
   LIGHTING-SCHEDUL = ( "Office2" )\n\
   EQUIP-SCHEDULE   = ( "Office2" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "530 Room pg"\n\
   C-SUB-AREA       = ( 171.641 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"530 Room - roof" = EXTERIOR-WALL\n\
   CONSTRUCTION     = "roof constr"\n\
   LOCATION         = TOP\n\
   POLYGON          = "530 Room roof pg"\n\
   ..\n\
"530 Room x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"530 Room window 1" = WINDOW\n\
   X                = 8.88799\n\
   Y                = 2.95\n\
   HEIGHT           = 5\n\
   WIDTH            = 3.34221\n\
   ..\n\
"530 Room - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "530 Room floor pg mr"\n\
   ..\n\
"530 Room i-wall 2" = INTERIOR-WALL\n\
   NEXT-TO          = "501 Corridor"\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"530 Room i-wall 3" = INTERIOR-WALL\n\
   NEXT-TO          = "528 Bathroom"\n\
   LOCATION         = SPACE-V3\n\
   ..\n\
"531 Room" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office5"\n\
   LIGHTING-SCHEDUL = ( "Office5" )\n\
   EQUIP-SCHEDULE   = ( "Office5" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "531 Room pg"\n\
   C-SUB-AREA       = ( 169.672 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"531 Room - roof" = EXTERIOR-WALL\n\
   CONSTRUCTION     = "roof constr"\n\
   LOCATION         = TOP\n\
   POLYGON          = "531 Room roof pg"\n\
   ..\n\
"531 Room x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V3\n\
   ..\n\
"531 Room window 1" = WINDOW\n\
   X                = 13.2124\n\
   Y                = 2.95\n\
   HEIGHT           = 5\n\
   WIDTH            = 3.45242\n\
   ..\n\
"531 Room - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "531 Room floor pg mr"\n\
   ..\n\
"531 Room i-wall 1" = INTERIOR-WALL\n\
   NEXT-TO          = "501 Corridor"\n\
   LOCATION         = SPACE-V1\n\
   ..\n\
"531 Room i-wall 3" = INTERIOR-WALL\n\
   NEXT-TO          = "529 Room"\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"531 Room i-wall 4" = INTERIOR-WALL\n\
   NEXT-TO          = "501 Corridor"\n\
   LOCATION         = SPACE-V5\n\
   ..\n\
"531 Corridor" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office1"\n\
   LIGHTING-SCHEDUL = ( "Office1" )\n\
   EQUIP-SCHEDULE   = ( "Office1" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "531 Corridor pg"\n\
   C-SUB-AREA       = ( 178.547 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"531 Corridor - roof" = EXTERIOR-WALL\n\
   CONSTRUCTION     = "roof constr"\n\
   LOCATION         = TOP\n\
   POLYGON          = "531 Corridor roof pg"\n\
   ..\n\
"531 Corridor x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V5\n\
   ..\n\
"531 Corridor window 1" = WINDOW\n\
   X                = 0.464611\n\
   Y                = 2.95\n\
   HEIGHT           = 5\n\
   WIDTH            = 3.93067\n\
   ..\n\
"531 Corridor - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "531 Corridor floor pg mr"\n\
   ..\n\
"531 Corridor i-wall 1" = INTERIOR-WALL\n\
   NEXT-TO          = "553 Corridor"\n\
   LOCATION         = SPACE-V1\n\
   ..\n\
"531 Corridor i-wall 5" = INTERIOR-WALL\n\
   NEXT-TO          = "552 Room"\n\
   LOCATION         = SPACE-V6\n\
   ..\n\
"531 Corridor i-wall 7" = INTERIOR-WALL\n\
   NEXT-TO          = "548 Bathroom"\n\
   LOCATION         = SPACE-V8\n\
   ..\n\
"532 Room" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office5"\n\
   LIGHTING-SCHEDUL = ( "Office5" )\n\
   EQUIP-SCHEDULE   = ( "Office5" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "532 Room pg"\n\
   C-SUB-AREA       = ( 174.786 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"532 Room - roof" = EXTERIOR-WALL\n\
   CONSTRUCTION     = "roof constr"\n\
   LOCATION         = TOP\n\
   POLYGON          = "532 Room roof pg"\n\
   ..\n\
"532 Room x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"532 Room window 1" = WINDOW\n\
   X                = 0\n\
   Y                = 2.95\n\
   HEIGHT           = 5\n\
   WIDTH            = 3.63143\n\
   ..\n\
"532 Room - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "532 Room floor pg mr"\n\
   ..\n\
"532 Room i-wall 1" = INTERIOR-WALL\n\
   NEXT-TO          = "500 Lounge"\n\
   LOCATION         = SPACE-V1\n\
   ..\n\
"532 Room i-wall 2" = INTERIOR-WALL\n\
   NEXT-TO          = "501 Corridor"\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"532 Room i-wall 3" = INTERIOR-WALL\n\
   NEXT-TO          = "530 Room"\n\
   LOCATION         = SPACE-V3\n\
   ..\n\
"540 Lounge" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office3"\n\
   LIGHTING-SCHEDUL = ( "Office3" )\n\
   EQUIP-SCHEDULE   = ( "Office3" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "540 Lounge pg"\n\
   C-SUB-AREA       = ( 478.125 )\n\
   C-OCC-TYPE       = ( 35 )\n\
   ..\n\
"540 Lounge - roof" = EXTERIOR-WALL\n\
   CONSTRUCTION     = "roof constr"\n\
   LOCATION         = TOP\n\
   POLYGON          = "540 Lounge roof pg"\n\
   ..\n\
"540 Lounge x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V1\n\
   ..\n\
"540 Lounge window 1" = WINDOW\n\
   X                = 0.359678\n\
   Y                = 0\n\
   HEIGHT           = 8\n\
   WIDTH            = 3.41842\n\
   ..\n\
"540 Lounge x-wall 2" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V7\n\
   ..\n\
"540 Lounge window 2" = WINDOW\n\
   X                = 0.475282\n\
   Y                = 0\n\
   HEIGHT           = 8\n\
   WIDTH            = 6.18598\n\
   ..\n\
"540 Lounge x-wall 3" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V8\n\
   ..\n\
"540 Lounge window 3" = WINDOW\n\
   X                = 0.468952\n\
   Y                = 0\n\
   HEIGHT           = 8\n\
   WIDTH            = 20.3476\n\
   ..\n\
"540 Lounge - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "540 Lounge floor pg mr"\n\
   ..\n\
"540 Lounge i-wall 1" = INTERIOR-WALL\n\
   NEXT-TO          = "522 Room"\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"540 Lounge i-wall 4" = INTERIOR-WALL\n\
   NEXT-TO          = "521A IT"\n\
   LOCATION         = SPACE-V5\n\
   ..\n\
"540 Lounge i-wall 5" = INTERIOR-WALL\n\
   NEXT-TO          = "540 Room"\n\
   LOCATION         = SPACE-V6\n\
   ..\n\
"540 Room" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office5"\n\
   LIGHTING-SCHEDUL = ( "Office5" )\n\
   EQUIP-SCHEDULE   = ( "Office5" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "540 Room pg"\n\
   C-SUB-AREA       = ( 191.665 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"540 Room - roof" = EXTERIOR-WALL\n\
   CONSTRUCTION     = "roof constr"\n\
   LOCATION         = TOP\n\
   POLYGON          = "540 Room roof pg"\n\
   ..\n\
"540 Room x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"540 Room window 1" = WINDOW\n\
   X                = 1.48955\n\
   Y                = 2.95\n\
   HEIGHT           = 5\n\
   WIDTH            = 3.91988\n\
   ..\n\
"540 Room - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "540 Room floor pg mr"\n\
   ..\n\
"543 Room" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office2"\n\
   LIGHTING-SCHEDUL = ( "Office2" )\n\
   EQUIP-SCHEDULE   = ( "Office2" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "543 Room pg"\n\
   C-SUB-AREA       = ( 125.138 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"543 Room - roof" = EXTERIOR-WALL\n\
   CONSTRUCTION     = "roof constr"\n\
   LOCATION         = TOP\n\
   POLYGON          = "543 Room roof pg"\n\
   ..\n\
"543 Room x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"543 Room window 1" = WINDOW\n\
   X                = 3.54037\n\
   Y                = 0\n\
   HEIGHT           = 8\n\
   WIDTH            = 7.9862\n\
   ..\n\
"543 Room - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "543 Room floor pg mr"\n\
   ..\n\
"544 Room" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office2"\n\
   LIGHTING-SCHEDUL = ( "Office2" )\n\
   EQUIP-SCHEDULE   = ( "Office2" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "544 Room pg"\n\
   C-SUB-AREA       = ( 149.602 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"544 Room - roof" = EXTERIOR-WALL\n\
   CONSTRUCTION     = "roof constr"\n\
   LOCATION         = TOP\n\
   POLYGON          = "544 Room roof pg"\n\
   ..\n\
"544 Room x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"544 Room window 1" = WINDOW\n\
   X                = 0\n\
   Y                = 2.95\n\
   HEIGHT           = 5\n\
   WIDTH            = 3.43055\n\
   ..\n\
"544 Room - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "544 Room floor pg mr"\n\
   ..\n\
"544 Room i-wall 1" = INTERIOR-WALL\n\
   NEXT-TO          = "540 Room"\n\
   LOCATION         = SPACE-V1\n\
   ..\n\
"545 Room" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office3"\n\
   LIGHTING-SCHEDUL = ( "Office3" )\n\
   EQUIP-SCHEDULE   = ( "Office3" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "545 Room pg"\n\
   C-SUB-AREA       = ( 124.157 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"545 Room - roof" = EXTERIOR-WALL\n\
   CONSTRUCTION     = "roof constr"\n\
   LOCATION         = TOP\n\
   POLYGON          = "545 Room roof pg"\n\
   ..\n\
"545 Room x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"545 Room window 1" = WINDOW\n\
   X                = 6.87478\n\
   Y                = 2.95\n\
   HEIGHT           = 5\n\
   WIDTH            = 4.01138\n\
   ..\n\
"545 Room - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "545 Room floor pg mr"\n\
   ..\n\
"545 Room i-wall 1" = INTERIOR-WALL\n\
   NEXT-TO          = "543 Room"\n\
   LOCATION         = SPACE-V1\n\
   ..\n\
"546 Room" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office1"\n\
   LIGHTING-SCHEDUL = ( "Office1" )\n\
   EQUIP-SCHEDULE   = ( "Office1" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "546 Room pg"\n\
   C-SUB-AREA       = ( 153.092 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"546 Room - roof" = EXTERIOR-WALL\n\
   CONSTRUCTION     = "roof constr"\n\
   LOCATION         = TOP\n\
   POLYGON          = "546 Room roof pg"\n\
   ..\n\
"546 Room x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"546 Room window 1" = WINDOW\n\
   X                = 7.27992\n\
   Y                = 2.95\n\
   HEIGHT           = 5\n\
   WIDTH            = 3.38496\n\
   ..\n\
"546 Room - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "546 Room floor pg mr"\n\
   ..\n\
"546 Room i-wall 1" = INTERIOR-WALL\n\
   NEXT-TO          = "544 Room"\n\
   LOCATION         = SPACE-V1\n\
   ..\n\
"546 Room i-wall 2" = INTERIOR-WALL\n\
   NEXT-TO          = "553 Corridor"\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"546 Room i-wall 3" = INTERIOR-WALL\n\
   NEXT-TO          = "548 Bathroom"\n\
   LOCATION         = SPACE-V3\n\
   ..\n\
"547 Room" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office2"\n\
   LIGHTING-SCHEDUL = ( "Office2" )\n\
   EQUIP-SCHEDULE   = ( "Office2" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "547 Room pg"\n\
   C-SUB-AREA       = ( 174.236 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"547 Room - roof" = EXTERIOR-WALL\n\
   CONSTRUCTION     = "roof constr"\n\
   LOCATION         = TOP\n\
   POLYGON          = "547 Room roof pg"\n\
   ..\n\
"547 Room x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"547 Room window 1" = WINDOW\n\
   X                = 13.5432\n\
   Y                = 2.95\n\
   HEIGHT           = 5\n\
   WIDTH            = 3.44093\n\
   ..\n\
"547 Room - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "547 Room floor pg mr"\n\
   ..\n\
"547 Room i-wall 1" = INTERIOR-WALL\n\
   NEXT-TO          = "545 Room"\n\
   LOCATION         = SPACE-V1\n\
   ..\n\
"547 Room i-wall 3" = INTERIOR-WALL\n\
   NEXT-TO          = "531 Corridor"\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"548 Bathroom" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office1"\n\
   LIGHTING-SCHEDUL = ( "Office1" )\n\
   EQUIP-SCHEDULE   = ( "Office1" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "548 Bathroom pg"\n\
   C-SUB-AREA       = ( 172.044 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"548 Bathroom - roof" = EXTERIOR-WALL\n\
   CONSTRUCTION     = "roof constr"\n\
   LOCATION         = TOP\n\
   POLYGON          = "548 Bathroom roof pg"\n\
   ..\n\
"548 Bathroom x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"548 Bathroom - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "548 Bathroom floor pg mr"\n\
   ..\n\
"549 Room" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office3"\n\
   LIGHTING-SCHEDUL = ( "Office3" )\n\
   EQUIP-SCHEDULE   = ( "Office3" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "549 Room pg"\n\
   C-SUB-AREA       = ( 182.279 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"549 Room - roof" = EXTERIOR-WALL\n\
   CONSTRUCTION     = "roof constr"\n\
   LOCATION         = TOP\n\
   POLYGON          = "549 Room roof pg"\n\
   ..\n\
"549 Room x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"549 Room window 1" = WINDOW\n\
   X                = 0\n\
   Y                = 2.95\n\
   HEIGHT           = 5\n\
   WIDTH            = 3.40393\n\
   ..\n\
"549 Room - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "549 Room floor pg mr"\n\
   ..\n\
"549 Room i-wall 1" = INTERIOR-WALL\n\
   NEXT-TO          = "547 Room"\n\
   LOCATION         = SPACE-V1\n\
   ..\n\
"549 Room i-wall 2" = INTERIOR-WALL\n\
   NEXT-TO          = "5-ST4 Stair 4"\n\
   LOCATION         = SPACE-V3\n\
   ..\n\
"549 Room i-wall 3" = INTERIOR-WALL\n\
   NEXT-TO          = "531 Corridor"\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"550 Room" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office3"\n\
   LIGHTING-SCHEDUL = ( "Office3" )\n\
   EQUIP-SCHEDULE   = ( "Office3" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "550 Room pg"\n\
   C-SUB-AREA       = ( 174.72 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"550 Room - roof" = EXTERIOR-WALL\n\
   CONSTRUCTION     = "roof constr"\n\
   LOCATION         = TOP\n\
   POLYGON          = "550 Room roof pg"\n\
   ..\n\
"550 Room x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"550 Room window 1" = WINDOW\n\
   X                = 0\n\
   Y                = 2.95\n\
   HEIGHT           = 5\n\
   WIDTH            = 3.36781\n\
   ..\n\
"550 Room - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "550 Room floor pg mr"\n\
   ..\n\
"550 Room i-wall 1" = INTERIOR-WALL\n\
   NEXT-TO          = "548 Bathroom"\n\
   LOCATION         = SPACE-V1\n\
   ..\n\
"550 Room i-wall 2" = INTERIOR-WALL\n\
   NEXT-TO          = "531 Corridor"\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"550 Room i-wall 3" = INTERIOR-WALL\n\
   NEXT-TO          = "552 Room"\n\
   LOCATION         = SPACE-V3\n\
   ..\n\
"552 Room" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office5"\n\
   LIGHTING-SCHEDUL = ( "Office5" )\n\
   EQUIP-SCHEDULE   = ( "Office5" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "552 Room pg"\n\
   C-SUB-AREA       = ( 175.488 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"552 Room - roof" = EXTERIOR-WALL\n\
   CONSTRUCTION     = "roof constr"\n\
   LOCATION         = TOP\n\
   POLYGON          = "552 Room roof pg"\n\
   ..\n\
"552 Room x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V3\n\
   ..\n\
"552 Room x-wall 2" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"552 Room window 1" = WINDOW\n\
   X                = 8.94189\n\
   Y                = 2.95\n\
   HEIGHT           = 5\n\
   WIDTH            = 3.44716\n\
   ..\n\
"552 Room - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "552 Room floor pg mr"\n\
   ..\n\
"553 Corridor" = SPACE\n\
   HEIGHT           = 8.75\n\
   SHAPE            = POLYGON\n\
   FLOOR-WEIGHT     = 0\n\
   FURNITURE-TYPE   = LIGHT\n\
   FURN-FRACTION    = 0.2\n\
   ZONE-TYPE        = CONDITIONED\n\
   PEOPLE-SCHEDULE  = "Office1"\n\
   LIGHTING-SCHEDUL = ( "Office1" )\n\
   EQUIP-SCHEDULE   = ( "Office1" )\n\
   LIGHTING-TYPE    = ( SUS-FLUOR )\n\
   LIGHTING-W/AREA  = ( 1 )\n\
   EQUIPMENT-W/AREA = ( 1 )\n\
   FURN-WEIGHT      = 2.5\n\
   AREA/PERSON      = 100\n\
   POLYGON          = "553 Corridor pg"\n\
   C-SUB-AREA       = ( 198.065 )\n\
   C-OCC-TYPE       = ( 49 )\n\
   ..\n\
"553 Corridor - roof" = EXTERIOR-WALL\n\
   CONSTRUCTION     = "roof constr"\n\
   LOCATION         = TOP\n\
   POLYGON          = "553 Corridor roof pg"\n\
   ..\n\
"553 Corridor x-wall 1" = EXTERIOR-WALL\n\
   Z                = 0\n\
   HEIGHT           = 8.75\n\
   LOCATION         = SPACE-V3\n\
   ..\n\
"553 Corridor window 1" = WINDOW\n\
   X                = 1.3372\n\
   Y                = 2.95\n\
   HEIGHT           = 5\n\
   WIDTH            = 3.18256\n\
   ..\n\
"553 Corridor - flr" = INTERIOR-WALL\n\
   CONSTRUCTION     = "8in hw conc flr deck constr"\n\
   INT-WALL-TYPE    = ADIABATIC\n\
   LOCATION         = BOTTOM\n\
   POLYGON          = "553 Corridor floor pg mr"\n\
   ..\n\
"553 Corridor i-wall 1" = INTERIOR-WALL\n\
   NEXT-TO          = "521A IT"\n\
   LOCATION         = SPACE-V1\n\
   ..\n\
"553 Corridor i-wall 2" = INTERIOR-WALL\n\
   NEXT-TO          = "5-ST3 Stair 3"\n\
   LOCATION         = SPACE-V2\n\
   ..\n\
"553 Corridor i-wall 3" = INTERIOR-WALL\n\
   NEXT-TO          = "543 Room"\n\
   LOCATION         = SPACE-V4\n\
   ..\n\
"553 Corridor i-wall 4" = INTERIOR-WALL\n\
   NEXT-TO          = "543 Room"\n\
   LOCATION         = SPACE-V5\n\
   ..\n\
"553 Corridor i-wall 5" = INTERIOR-WALL\n\
   NEXT-TO          = "545 Room"\n\
   LOCATION         = SPACE-V6\n\
   ..\n\
"553 Corridor i-wall 8" = INTERIOR-WALL\n\
   NEXT-TO          = "544 Room"\n\
   LOCATION         = SPACE-V9\n\
   ..\n\
"553 Corridor i-wall 9" = INTERIOR-WALL\n\
   NEXT-TO          = "540 Room"\n\
   LOCATION         = SPACE-V10\n\
   ..\n\
\n\
\n\
$ *********************************************************\n\
$ **                                                     **\n\
$ **                Performance Curves                   **\n\
$ **                                                     **\n\
$ *********************************************************\n\
\n\
"AF VFD w Static Reset" = CURVE-FIT\n\
   TYPE             = CUBIC\n\
   INPUT-TYPE       = COEFFICIENTS\n\
   OUTPUT-MIN       = 0.1\n\
   OUTPUT-MAX       = 1.05\n\
   COEFFICIENTS     = ( 0.04076, 0.08804, -0.07293, 0.9327 )\n\
   INDEPENDENT      = ( 1, 0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2 )\n\
   DEPENDENT        = ( 1.05, 0.83, 0.62, 0.45, 0.34, 0.25, 0.2, 0.16, 0.15 )\n\
   ..\n\
"Typical VSD Fan" = CURVE-FIT\n\
   TYPE             = CUBIC\n\
   INPUT-TYPE       = COEFFICIENTS\n\
   OUTPUT-MIN       = 0\n\
   OUTPUT-MAX       = 1\n\
   COEFFICIENTS     = ( 0.0471828, 0.130542, -0.117287, 0.940314 )\n\
   ..\n\
"Perfect SP Reset VSD Fan" = CURVE-FIT\n\
   TYPE             = CUBIC\n\
   INPUT-TYPE       = COEFFICIENTS\n\
   OUTPUT-MIN       = 0\n\
   OUTPUT-MAX       = 1\n\
   COEFFICIENTS     = ( 0.0278279, 0.0265832, -0.0870687, 1.03092 )\n\
   ..\n\
"Good SP Reset VSD Fan" = CURVE-FIT\n\
   TYPE             = CUBIC\n\
   INPUT-TYPE       = COEFFICIENTS\n\
   OUTPUT-MIN       = 0\n\
   OUTPUT-MAX       = 1\n\
   COEFFICIENTS     = ( 0.0407599, 0.088045, -0.0729261, 0.94374 )\n\
   ..\n\
"No SP Reset VSD Fan" = CURVE-FIT\n\
   TYPE             = CUBIC\n\
   INPUT-TYPE       = COEFFICIENTS\n\
   OUTPUT-MIN       = 0\n\
   OUTPUT-MAX       = 1\n\
   COEFFICIENTS     = ( 0.0704289, 0.38533, -0.460864, 1.0092 )\n\
   ..\n\
"Plenum Fan 0.3" = CURVE-FIT\n\
   TYPE             = CUBIC\n\
   INPUT-TYPE       = COEFFICIENTS\n\
   OUTPUT-MIN       = 0\n\
   OUTPUT-MAX       = 1\n\
   COEFFICIENTS     = ( 0.0341713, 0.059448, -0.0610495, 0.966141 )\n\
   ..\n\
"Plenum Fan 0.4" = CURVE-FIT\n\
   TYPE             = CUBIC\n\
   INPUT-TYPE       = COEFFICIENTS\n\
   OUTPUT-MIN       = 0\n\
   OUTPUT-MAX       = 1\n\
   COEFFICIENTS     = ( 0.0374426, 0.0720006, -0.0625644, 0.952238 )\n\
   ..\n\
"Plenum Fan 0.5" = CURVE-FIT\n\
   TYPE             = CUBIC\n\
   INPUT-TYPE       = COEFFICIENTS\n\
   OUTPUT-MIN       = 0\n\
   OUTPUT-MAX       = 1\n\
   COEFFICIENTS     = ( 0.0407599, 0.088045, -0.0729261, 0.94374 )\n\
   ..\n\
"Plenum Fan 0.6" = CURVE-FIT\n\
   TYPE             = CUBIC\n\
   INPUT-TYPE       = COEFFICIENTS\n\
   OUTPUT-MIN       = 0\n\
   OUTPUT-MAX       = 1\n\
   COEFFICIENTS     = ( 0.0440346, 0.107518, -0.0912888, 0.939911 )\n\
   ..\n\
"Plenum Fan 0.7" = CURVE-FIT\n\
   TYPE             = CUBIC\n\
   INPUT-TYPE       = COEFFICIENTS\n\
   OUTPUT-MIN       = 0\n\
   OUTPUT-MAX       = 1\n\
   COEFFICIENTS     = ( 0.0471828, 0.130542, -0.117287, 0.940314 )\n\
   ..\n\
"Plenum Fan 0.8" = CURVE-FIT\n\
   TYPE             = CUBIC\n\
   INPUT-TYPE       = COEFFICIENTS\n\
   OUTPUT-MIN       = 0\n\
   OUTPUT-MAX       = 1\n\
   COEFFICIENTS     = ( 0.0502541, 0.156228, -0.148857, 0.943697 )\n\
   ..\n\
\n\
$ *********************************************************\n\
$ **                                                     **\n\
$ **              Electric & Fuel Meters                 **\n\
$ **                                                     **\n\
$ *********************************************************\n\
\n\
$ ---------------------------------------------------------\n\
$              Electric Meters\n\
$ ---------------------------------------------------------\n\
\n\
\n\
\n\
$ ---------------------------------------------------------\n\
$              Fuel Meters\n\
$ ---------------------------------------------------------\n\
\n\
\n\
\n\
$ ---------------------------------------------------------\n\
$              Master Meters\n\
$ ---------------------------------------------------------\n\
\n\
"MASTER-METERS 1" = MASTER-METERS\n\
   MSTR-ELEC-METER  = "EM1"\n\
   MSTR-FUEL-METER  = "FM1"\n\
   ..\n\
\n\
\n\
$ *********************************************************\n\
$ **                                                     **\n\
$ **      HVAC Circulation Loops / Plant Equipment       **\n\
$ **                                                     **\n\
$ *********************************************************\n\
\n\
$ ---------------------------------------------------------\n\
$              Pumps\n\
$ ---------------------------------------------------------\n\
\n\
"HWP-1" = PUMP\n\
   FLOW             = 1\n\
   NUMBER           = 2\n\
   HEAD             = 1\n\
   MECH-EFF         = 1\n\
   MOTOR-EFF        = 0.99\n\
   MOTOR-CLASS      = PREMIUM\n\
   PUMP-KW          = 0\n\
   CAP-CTRL         = VAR-SPEED-PUMP\n\
   MIN-SPEED        = 0.2\n\
   C-NOM-HP         = 0.25\n\
   C-MOTOR-SPEED    = 2\n\
   C-MOTOR-TYPE     = 2\n\
   C-DRIVE-EFF      = 0.99\n\
   C-BHP            = 0\n\
   C-MTR-ENCL-TYPE  = 0\n\
   ..\n\
\n\
\n\
$ ---------------------------------------------------------\n\
$              Heat Exchangers\n\
$ ---------------------------------------------------------\n\
\n\
\n\
\n\
$ ---------------------------------------------------------\n\
$              Circulation Loops\n\
$ ---------------------------------------------------------\n\
\n\
"heating loop" = CIRCULATION-LOOP\n\
   TYPE             = HW\n\
   LOOP-DESIGN-DT   = 30\n\
   LOOP-OPERATION   = DEMAND\n\
   HEAT-SETPT-CTRL  = LOAD-RESET\n\
   MAX-RESET-T      = 150\n\
   MIN-RESET-T      = 120\n\
   LOOP-PUMP        = "HWP-1"\n\
   ..\n\
"DHW Loop" = CIRCULATION-LOOP\n\
   TYPE             = DHW\n\
   DESIGN-HEAT-T    = 135\n\
   PROCESS-FLOW     = ( 0.480659 )\n\
   PROCESS-SCH      = ( "DHW Eqp NRes Sch" )\n\
   PROCESS-T        = ( 135 )\n\
   ..\n\
"DEFAULT-CHW" = CIRCULATION-LOOP\n\
   TYPE             = CHW\n\
   LOOP-OPERATION   = DEMAND\n\
   LOOP-PUMP        = "DEFAULT-CHW-PUMP"\n\
   ..\n\
\n\
\n\
$ ---------------------------------------------------------\n\
$              Chillers\n\
$ ---------------------------------------------------------\n\
\n\
\n\
\n\
$ ---------------------------------------------------------\n\
$              Boilers\n\
$ ---------------------------------------------------------\n\
\n\
"B-1" = BOILER\n\
   TYPE             = HW-CONDENSING\n\
   CAPACITY         = 0\n\
   HEAT-INPUT-RATIO = 1.05263\n\
   HW-LOOP          = "heating loop"\n\
   ..\n\
\n\
\n\
$ ---------------------------------------------------------\n\
$              Domestic Water Heaters\n\
$ ---------------------------------------------------------\n\
\n\
"DHW Heater" = DW-HEATER\n\
   TYPE             = GAS\n\
   TANK-VOLUME      = 130.556\n\
   CAPACITY         = 0.174006\n\
   HIR-FPLR         = "DW-Gas-Pilotless-HIR-fPLR"\n\
   TANK-UA          = 5.43985\n\
   LOCATION         = OUTDOOR\n\
   DHW-LOOP         = "DHW Loop"\n\
   C-TYPE           = 1\n\
   C-CATEGORY       = 3\n\
   C-RECOV-EFF      = 0.8\n\
   C-STBY-LOSS-FRAC = 2.02765\n\
   C-TANK-EXT-RVAL  = 12\n\
   ..\n\
\n\
\n\
$ ---------------------------------------------------------\n\
$              Heat Rejection\n\
$ ---------------------------------------------------------\n\
\n\
\n\
\n\
$ ---------------------------------------------------------\n\
$              Tower Free Cooling\n\
$ ---------------------------------------------------------\n\
\n\
\n\
\n\
$ ---------------------------------------------------------\n\
$              Photovoltaic Modules\n\
$ ---------------------------------------------------------\n\
\n\
\n\
\n\
$ ---------------------------------------------------------\n\
$              Electric Generators\n\
$ ---------------------------------------------------------\n\
\n\
\n\
\n\
$ ---------------------------------------------------------\n\
$              Thermal Storage\n\
$ ---------------------------------------------------------\n\
\n\
\n\
\n\
$ ---------------------------------------------------------\n\
$              Ground Loop Heat Exchangers\n\
$ ---------------------------------------------------------\n\
\n\
\n\
\n\
$ ---------------------------------------------------------\n\
$              Compliance DHW (residential dwelling units)\n\
$ ---------------------------------------------------------\n\
\n\
\n\
\n\
$ *********************************************************\n\
$ **                                                     **\n\
$ **            Steam & Chilled Water Meters             **\n\
$ **                                                     **\n\
$ *********************************************************\n\
\n\
$ ---------------------------------------------------------\n\
$              Steam Meters\n\
$ ---------------------------------------------------------\n\
\n\
\n\
\n\
$ ---------------------------------------------------------\n\
$              Chilled Water Meters\n\
$ ---------------------------------------------------------\n\
\n\
"Chilled Water Meter 1" = CHW-METER\n\
   CIRCULATION-LOOP = "DEFAULT-CHW"\n\
   ..\n\
\n\
\n\
$ *********************************************************\n\
$ **                                                     **\n\
$ **               HVAC Systems / Zones                  **\n\
$ **                                                     **\n\
$ *********************************************************\n\
\n\
"AH-1 HV-West" = SYSTEM\n\
   TYPE             = UVT\n\
   HEAT-SOURCE      = HOT-WATER\n\
   BASEBOARD-SOURCE = NONE\n\
   MAX-SUPPLY-T     = 90\n\
   HEATING-SCHEDULE = "Schedule ON/OFF"\n\
   MIN-OUTSIDE-AIR  = 1\n\
   SUPPLY-STATIC    = 1.5\n\
   SUPPLY-EFF       = 0.643846\n\
   NIGHT-CYCLE-CTRL = CYCLE-ON-ANY\n\
   HW-VALVE-TYPE    = TWO-WAY\n\
   HW-LOOP          = "heating loop"\n\
   C-AFUE           = 0.78\n\
   C-SF-MTR-TYPE    = 2\n\
   C-SF-TOT-BHP     = 15.5\n\
   C-SUPP-FAN-TYPE  = 4\n\
   C-RF-MTR-TYPE    = 2\n\
   C-OSA-DMPR-CTRL  = 1\n\
   C-HTG-DUCT-LOCN  = *Ceiling Plenum*\n\
   C-HTG-DUCT-RVAL  = 7\n\
   C-CLG-DUCT-LOCN  = *Ceiling Plenum*\n\
   C-CLG-DUCT-RVAL  = 7\n\
   ..\n\
"CV-101 113 Corridor zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 1\n\
   MAX-COOL-RATE    = 0\n\
   ASSIGNED-FLOW    = {LocalRef("SPACE","AREA") * 1.1}\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   THROTTLING-RANGE = 0.1\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "113 Corridor"\n\
   ..\n\
"CV-102 114 Corridor zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 1\n\
   MAX-COOL-RATE    = 0\n\
   ASSIGNED-FLOW    = {LocalRef("SPACE","AREA") * 1.1}\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 74\n\
   THROTTLING-RANGE = 0.1\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   TERMINAL-TYPE    = SVAV\n\
   SPACE            = "114 Corridor"\n\
   ..\n\
"CV-103 208 Bathroom zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 1\n\
   MAX-COOL-RATE    = 0\n\
   ASSIGNED-FLOW    = {LocalRef("SPACE","AREA") * 1.1}\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 74\n\
   THROTTLING-RANGE = 0.1\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   TERMINAL-TYPE    = SVAV\n\
   SPACE            = "208 Bathroom"\n\
   ..\n\
"CV-104 213 Corridor zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 1\n\
   MAX-COOL-RATE    = 0\n\
   ASSIGNED-FLOW    = {LocalRef("SPACE","AREA") * 1.1}\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 74\n\
   THROTTLING-RANGE = 0.1\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   TERMINAL-TYPE    = SVAV\n\
   SPACE            = "213 Corridor"\n\
   ..\n\
"CV-105 214 Corridor zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 1\n\
   MAX-COOL-RATE    = 0\n\
   ASSIGNED-FLOW    = {LocalRef("SPACE","AREA") * 1.1}\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 74\n\
   THROTTLING-RANGE = 0.1\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   TERMINAL-TYPE    = SVAV\n\
   SPACE            = "214 Corridor"\n\
   ..\n\
"CV-106 308 Bathroom zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 1\n\
   MAX-COOL-RATE    = 0\n\
   ASSIGNED-FLOW    = {LocalRef("SPACE","AREA") * 1.1}\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 74\n\
   THROTTLING-RANGE = 0.1\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   TERMINAL-TYPE    = SVAV\n\
   SPACE            = "308 Bathroom"\n\
   ..\n\
"CV-107 313 Corridor zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 1\n\
   MAX-COOL-RATE    = 0\n\
   ASSIGNED-FLOW    = {LocalRef("SPACE","AREA") * 1.1}\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 74\n\
   THROTTLING-RANGE = 0.1\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   TERMINAL-TYPE    = SVAV\n\
   SPACE            = "313 Corridor"\n\
   ..\n\
"CV-108 314 Corridor zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 1\n\
   MAX-COOL-RATE    = 0\n\
   ASSIGNED-FLOW    = {LocalRef("SPACE","AREA") * 1.1}\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 74\n\
   THROTTLING-RANGE = 0.1\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   TERMINAL-TYPE    = SVAV\n\
   SPACE            = "314 Corridor"\n\
   ..\n\
"CV-109 413 Corridor zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 1\n\
   MAX-COOL-RATE    = 0\n\
   ASSIGNED-FLOW    = {LocalRef("SPACE","AREA") * 1.1}\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 74\n\
   THROTTLING-RANGE = 0.1\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   TERMINAL-TYPE    = SVAV\n\
   SPACE            = "413 Corridor"\n\
   ..\n\
"CV-110 408 Bathroom zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 1\n\
   MAX-COOL-RATE    = 0\n\
   ASSIGNED-FLOW    = {LocalRef("SPACE","AREA") * 1.1}\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 74\n\
   THROTTLING-RANGE = 0.1\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   TERMINAL-TYPE    = SVAV\n\
   SPACE            = "408 Bathroom"\n\
   ..\n\
"CV-111 414 Corridor zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 1\n\
   MAX-COOL-RATE    = 0\n\
   ASSIGNED-FLOW    = {LocalRef("SPACE","AREA") * 1.1}\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 74\n\
   THROTTLING-RANGE = 0.1\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   TERMINAL-TYPE    = SVAV\n\
   SPACE            = "414 Corridor"\n\
   ..\n\
"CV-112 513 Corridor zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 1\n\
   MAX-COOL-RATE    = 0\n\
   ASSIGNED-FLOW    = {LocalRef("SPACE","AREA") * 1.1}\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 74\n\
   THROTTLING-RANGE = 0.1\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   TERMINAL-TYPE    = SVAV\n\
   SPACE            = "513 Corridor"\n\
   ..\n\
"CV-113 514 Corridor zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 1\n\
   MAX-COOL-RATE    = 0\n\
   ASSIGNED-FLOW    = {LocalRef("SPACE","AREA") * 1.1}\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 74\n\
   THROTTLING-RANGE = 0.1\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   TERMINAL-TYPE    = SVAV\n\
   SPACE            = "514 Corridor"\n\
   ..\n\
"CV-114 508 Bathroom zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 1\n\
   MAX-COOL-RATE    = 0\n\
   ASSIGNED-FLOW    = {LocalRef("SPACE","AREA") * 1.1}\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 74\n\
   THROTTLING-RANGE = 0.1\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   TERMINAL-TYPE    = SVAV\n\
   SPACE            = "508 Bathroom"\n\
   ..\n\
"AC-6 IT Level 0" = SYSTEM\n\
   TYPE             = PSZ\n\
   BASEBOARD-SOURCE = NONE\n\
   RETURN-AIR-PATH  = DUCT\n\
   MIN-SUPPLY-T     = 55\n\
   SUPPLY-FLOW      = 800\n\
   MIN-OUTSIDE-AIR  = 0\n\
   FAN-SCHEDULE     = "24x7 on sch"\n\
   FAN-CONTROL      = FAN-EIR-FPLR\n\
   SUPPLY-STATIC    = 0.5\n\
   SUPPLY-EFF       = 0.643846\n\
   NIGHT-CYCLE-CTRL = CYCLE-ON-ANY\n\
   FAN-EIR-FPLR     = "Variable Speed Drive FPLR"\n\
   RETURN-FAN-LOC   = RELIEF\n\
   COOLING-CAPACITY = 24000\n\
   COOL-CTRL-RANGE  = 0.1\n\
   CONTROL-ZONE     = "AC-601 028 IT zone"\n\
   C-AFUE           = 0.78\n\
   C-SF-MTR-TYPE    = 2\n\
   C-SF-TOT-BHP     = 15.5\n\
   C-SUPP-FAN-TYPE  = 4\n\
   C-RF-MTR-TYPE    = 2\n\
   C-OSA-DMPR-CTRL  = 1\n\
   C-HTG-DUCT-LOCN  = *Ceiling Plenum*\n\
   C-HTG-DUCT-RVAL  = 7\n\
   C-CLG-DUCT-LOCN  = *Ceiling Plenum*\n\
   C-CLG-DUCT-RVAL  = 7\n\
   ..\n\
"AC-601 028 IT zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 1\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   DESIGN-COOL-T    = 74\n\
   COOL-TEMP-SCH    = "24x7 clg75 t-stat sch"\n\
   THROTTLING-RANGE = 0.1\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   TERMINAL-TYPE    = SVAV\n\
   SPACE            = "028 IT"\n\
   ..\n\
"AH-2 HV-Center" = SYSTEM\n\
   TYPE             = UVT\n\
   HEAT-SOURCE      = HOT-WATER\n\
   BASEBOARD-SOURCE = NONE\n\
   MAX-SUPPLY-T     = 90\n\
   HEATING-SCHEDULE = "Schedule ON/OFF"\n\
   MIN-OUTSIDE-AIR  = 1\n\
   FAN-SCHEDULE     = "24x7 on sch"\n\
   SUPPLY-STATIC    = 1.5\n\
   SUPPLY-EFF       = 0.643846\n\
   NIGHT-CYCLE-CTRL = CYCLE-ON-ANY\n\
   HW-VALVE-TYPE    = TWO-WAY\n\
   HW-LOOP          = "heating loop"\n\
   C-AFUE           = 0.78\n\
   C-SF-MTR-TYPE    = 2\n\
   C-SF-TOT-BHP     = 15.5\n\
   C-SUPP-FAN-TYPE  = 4\n\
   C-RF-MTR-TYPE    = 2\n\
   C-OSA-DMPR-CTRL  = 1\n\
   C-HTG-DUCT-LOCN  = *Ceiling Plenum*\n\
   C-HTG-DUCT-RVAL  = 7\n\
   C-CLG-DUCT-LOCN  = *Ceiling Plenum*\n\
   C-CLG-DUCT-RVAL  = 7\n\
   ..\n\
"CV-201 023A Corridor zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 1\n\
   ASSIGNED-FLOW    = {LocalRef("SPACE","AREA") * 1.1}\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 74\n\
   THROTTLING-RANGE = 0.1\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   TERMINAL-TYPE    = SVAV\n\
   SPACE            = "023A Corridor"\n\
   ..\n\
"CV-202 026 Laundry zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 1\n\
   ASSIGNED-FLOW    = {LocalRef("SPACE","AREA") * 1.1}\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 74\n\
   THROTTLING-RANGE = 0.1\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   TERMINAL-TYPE    = SVAV\n\
   SPACE            = "026 Laundry"\n\
   ..\n\
"CV-203 024 Laundry 2 zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 1\n\
   ASSIGNED-FLOW    = {LocalRef("SPACE","AREA") * 1.1}\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 74\n\
   THROTTLING-RANGE = 0.1\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   TERMINAL-TYPE    = SVAV\n\
   SPACE            = "024 Laundry 2"\n\
   ..\n\
"CV-204 020 Elev Lobby zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 1\n\
   ASSIGNED-FLOW    = {LocalRef("SPACE","AREA") * 1.1}\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 74\n\
   THROTTLING-RANGE = 0.1\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   TERMINAL-TYPE    = SVAV\n\
   SPACE            = "020 Elev Lobby"\n\
   ..\n\
"CV-205 125 Corridor zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 1\n\
   ASSIGNED-FLOW    = {LocalRef("SPACE","AREA") * 1.1}\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 74\n\
   THROTTLING-RANGE = 0.1\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   TERMINAL-TYPE    = SVAV\n\
   SPACE            = "125 Corridor"\n\
   ..\n\
"CV-206 201 Corridor zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 1\n\
   ASSIGNED-FLOW    = {LocalRef("SPACE","AREA") * 1.1}\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 74\n\
   THROTTLING-RANGE = 0.1\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   TERMINAL-TYPE    = SVAV\n\
   SPACE            = "201 Corridor"\n\
   ..\n\
"CV-207 130 Bathroom zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 1\n\
   ASSIGNED-FLOW    = {LocalRef("SPACE","AREA") * 1.1}\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 74\n\
   THROTTLING-RANGE = 0.1\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   TERMINAL-TYPE    = SVAV\n\
   SPACE            = "130 Bathroom"\n\
   ..\n\
"CV-208 128 Bathroom zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 1\n\
   ASSIGNED-FLOW    = {LocalRef("SPACE","AREA") * 1.1}\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 74\n\
   THROTTLING-RANGE = 0.1\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   TERMINAL-TYPE    = SVAV\n\
   SPACE            = "128 Bathroom"\n\
   ..\n\
"CV-209 121 Corridor zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 1\n\
   ASSIGNED-FLOW    = {LocalRef("SPACE","AREA") * 1.1}\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 74\n\
   THROTTLING-RANGE = 0.1\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   TERMINAL-TYPE    = SVAV\n\
   SPACE            = "121 Corridor"\n\
   ..\n\
"CV-210 225 Corridor zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 1\n\
   ASSIGNED-FLOW    = {LocalRef("SPACE","AREA") * 1.1}\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 74\n\
   THROTTLING-RANGE = 0.1\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   TERMINAL-TYPE    = SVAV\n\
   SPACE            = "225 Corridor"\n\
   ..\n\
"CV-211 228 Bathroom zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 1\n\
   ASSIGNED-FLOW    = {LocalRef("SPACE","AREA") * 1.1}\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 74\n\
   THROTTLING-RANGE = 0.1\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   TERMINAL-TYPE    = SVAV\n\
   SPACE            = "228 Bathroom"\n\
   ..\n\
"CV-212 221 Corridor zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 1\n\
   ASSIGNED-FLOW    = {LocalRef("SPACE","AREA") * 1.1}\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 74\n\
   THROTTLING-RANGE = 0.1\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   TERMINAL-TYPE    = SVAV\n\
   SPACE            = "221 Corridor"\n\
   ..\n\
"CV-213 330 Bathroom zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 1\n\
   ASSIGNED-FLOW    = {LocalRef("SPACE","AREA") * 1.1}\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 74\n\
   THROTTLING-RANGE = 0.1\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   TERMINAL-TYPE    = SVAV\n\
   SPACE            = "330 Bathroom"\n\
   ..\n\
"CV-214 328 Bathroom zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 1\n\
   ASSIGNED-FLOW    = {LocalRef("SPACE","AREA") * 1.1}\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 74\n\
   THROTTLING-RANGE = 0.1\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   TERMINAL-TYPE    = SVAV\n\
   SPACE            = "328 Bathroom"\n\
   ..\n\
"CV-215 325 Corridor zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 1\n\
   ASSIGNED-FLOW    = {LocalRef("SPACE","AREA") * 1.1}\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 74\n\
   THROTTLING-RANGE = 0.1\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   TERMINAL-TYPE    = SVAV\n\
   SPACE            = "325 Corridor"\n\
   ..\n\
"CV-216 321 Corridor zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 1\n\
   ASSIGNED-FLOW    = {LocalRef("SPACE","AREA") * 1.1}\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 74\n\
   THROTTLING-RANGE = 0.1\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   TERMINAL-TYPE    = SVAV\n\
   SPACE            = "321 Corridor"\n\
   ..\n\
"CV-217 401 Corridor zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 1\n\
   ASSIGNED-FLOW    = {LocalRef("SPACE","AREA") * 1.1}\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 74\n\
   THROTTLING-RANGE = 0.1\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   TERMINAL-TYPE    = SVAV\n\
   SPACE            = "401 Corridor"\n\
   ..\n\
"CV-218 428 Bathroom zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 1\n\
   ASSIGNED-FLOW    = {LocalRef("SPACE","AREA") * 1.1}\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 74\n\
   THROTTLING-RANGE = 0.1\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   TERMINAL-TYPE    = SVAV\n\
   SPACE            = "428 Bathroom"\n\
   ..\n\
"CV-219 421 Corridor zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 1\n\
   ASSIGNED-FLOW    = {LocalRef("SPACE","AREA") * 1.1}\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 74\n\
   THROTTLING-RANGE = 0.1\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   TERMINAL-TYPE    = SVAV\n\
   SPACE            = "421 Corridor"\n\
   ..\n\
"CV-220 501 Corridor zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 1\n\
   ASSIGNED-FLOW    = {LocalRef("SPACE","AREA") * 1.1}\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 74\n\
   THROTTLING-RANGE = 0.1\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   TERMINAL-TYPE    = SVAV\n\
   SPACE            = "501 Corridor"\n\
   ..\n\
"CV-221 528 Bathroom zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 1\n\
   ASSIGNED-FLOW    = {LocalRef("SPACE","AREA") * 1.1}\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 74\n\
   THROTTLING-RANGE = 0.1\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   TERMINAL-TYPE    = SVAV\n\
   SPACE            = "528 Bathroom"\n\
   ..\n\
"CV-222 521 Corridor zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 1\n\
   ASSIGNED-FLOW    = {LocalRef("SPACE","AREA") * 1.1}\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 74\n\
   THROTTLING-RANGE = 0.1\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   TERMINAL-TYPE    = SVAV\n\
   SPACE            = "521 Corridor"\n\
   ..\n\
"XX-5 Dummy" = SYSTEM\n\
   TYPE             = VAVS\n\
   HEAT-SOURCE      = NONE\n\
   BASEBOARD-SOURCE = NONE\n\
   RETURN-AIR-PATH  = DUCT\n\
   ECONO-LIMIT-T    = 70\n\
   OA-CONTROL       = DUAL-TEMP\n\
   FAN-SCHEDULE     = "7to7 onoff sch"\n\
   FAN-CONTROL      = FAN-EIR-FPLR\n\
   SUPPLY-STATIC    = 3.5\n\
   SUPPLY-EFF       = 0.643846\n\
   RETURN-STATIC    = 0.1\n\
   RETURN-EFF       = 0.652909\n\
   NIGHT-CYCLE-CTRL = CYCLE-ON-ANY\n\
   FAN-EIR-FPLR     = "Variable Speed Drive FPLR"\n\
   RETURN-FAN-LOC   = RELIEF\n\
   CHW-LOOP         = "DEFAULT-CHW"\n\
   COOLING-CAPACITY = 1\n\
   COOL-SH-CAP      = 1\n\
   C-AFUE           = 0.78\n\
   C-SF-MTR-TYPE    = 2\n\
   C-SF-TOT-BHP     = 15.5\n\
   C-SUPP-FAN-TYPE  = 4\n\
   C-RF-MTR-TYPE    = 2\n\
   C-OSA-DMPR-CTRL  = 1\n\
   C-HTG-DUCT-LOCN  = *Ceiling Plenum*\n\
   C-HTG-DUCT-RVAL  = 7\n\
   C-CLG-DUCT-LOCN  = *Ceiling Plenum*\n\
   C-CLG-DUCT-RVAL  = 7\n\
   ..\n\
"X-501 0-EL1 Elevator 1 zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   ASSIGNED-FLOW    = 0\n\
   DESIGN-HEAT-T    = 72\n\
   DESIGN-COOL-T    = 74\n\
   THROTTLING-RANGE = 0.1\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   TERMINAL-TYPE    = SVAV\n\
   SPACE            = "0-EL1 Elevator 1"\n\
   ..\n\
"X-502 1-EL Elev zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   ASSIGNED-FLOW    = 0\n\
   DESIGN-HEAT-T    = 72\n\
   DESIGN-COOL-T    = 74\n\
   THROTTLING-RANGE = 0.1\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   TERMINAL-TYPE    = SVAV\n\
   SPACE            = "1-EL Elev"\n\
   ..\n\
"X-503 0-ST3 Stair 3 zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   ASSIGNED-FLOW    = 0\n\
   DESIGN-HEAT-T    = 72\n\
   DESIGN-COOL-T    = 74\n\
   THROTTLING-RANGE = 0.1\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   TERMINAL-TYPE    = SVAV\n\
   SPACE            = "0-ST3 Stair 3"\n\
   ..\n\
"X-504 021A Storage zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   ASSIGNED-FLOW    = 0\n\
   DESIGN-HEAT-T    = 72\n\
   DESIGN-COOL-T    = 74\n\
   THROTTLING-RANGE = 0.1\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   TERMINAL-TYPE    = SVAV\n\
   SPACE            = "021A Storage"\n\
   ..\n\
"X-505 034 Storage zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   ASSIGNED-FLOW    = 0\n\
   DESIGN-HEAT-T    = 72\n\
   DESIGN-COOL-T    = 74\n\
   THROTTLING-RANGE = 0.1\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   TERMINAL-TYPE    = SVAV\n\
   SPACE            = "034 Storage"\n\
   ..\n\
"X-506 025 Piping zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   ASSIGNED-FLOW    = 0\n\
   DESIGN-HEAT-T    = 72\n\
   DESIGN-COOL-T    = 74\n\
   THROTTLING-RANGE = 0.1\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   TERMINAL-TYPE    = SVAV\n\
   SPACE            = "025 Piping"\n\
   ..\n\
"X-507 121A Elev Lobby zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   ASSIGNED-FLOW    = 0\n\
   DESIGN-HEAT-T    = 72\n\
   DESIGN-COOL-T    = 74\n\
   THROTTLING-RANGE = 0.1\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   TERMINAL-TYPE    = SVAV\n\
   SPACE            = "121A Elev Lobby"\n\
   ..\n\
"X-508 1-ST3 Stair 3 zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   ASSIGNED-FLOW    = 0\n\
   DESIGN-HEAT-T    = 72\n\
   DESIGN-COOL-T    = 74\n\
   THROTTLING-RANGE = 0.1\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   TERMINAL-TYPE    = SVAV\n\
   SPACE            = "1-ST3 Stair 3"\n\
   ..\n\
"X-509 1-ST4 Stair 4 zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   ASSIGNED-FLOW    = 0\n\
   DESIGN-HEAT-T    = 72\n\
   DESIGN-COOL-T    = 74\n\
   THROTTLING-RANGE = 0.1\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   TERMINAL-TYPE    = SVAV\n\
   SPACE            = "1-ST4 Stair 4"\n\
   ..\n\
"X-510 1-ST1 Stair 1 zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   ASSIGNED-FLOW    = 0\n\
   DESIGN-HEAT-T    = 72\n\
   DESIGN-COOL-T    = 74\n\
   THROTTLING-RANGE = 0.1\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   TERMINAL-TYPE    = SVAV\n\
   SPACE            = "1-ST1 Stair 1"\n\
   ..\n\
"X-511 0-ST2 Stair 2 zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   ASSIGNED-FLOW    = 0\n\
   DESIGN-HEAT-T    = 72\n\
   DESIGN-COOL-T    = 74\n\
   THROTTLING-RANGE = 0.1\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   TERMINAL-TYPE    = SVAV\n\
   SPACE            = "0-ST2 Stair 2"\n\
   ..\n\
"X-512 2-ST1 Stair 1 zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   ASSIGNED-FLOW    = 0\n\
   DESIGN-HEAT-T    = 72\n\
   DESIGN-COOL-T    = 74\n\
   THROTTLING-RANGE = 0.1\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   TERMINAL-TYPE    = SVAV\n\
   SPACE            = "2-ST1 Stair 1"\n\
   ..\n\
"X-513 2-ST2 Stair 2 zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   ASSIGNED-FLOW    = 0\n\
   DESIGN-HEAT-T    = 72\n\
   DESIGN-COOL-T    = 74\n\
   THROTTLING-RANGE = 0.1\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   TERMINAL-TYPE    = SVAV\n\
   SPACE            = "2-ST2 Stair 2"\n\
   ..\n\
"X-514 200B Storage zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   ASSIGNED-FLOW    = 0\n\
   DESIGN-HEAT-T    = 72\n\
   DESIGN-COOL-T    = 74\n\
   THROTTLING-RANGE = 0.1\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   TERMINAL-TYPE    = SVAV\n\
   SPACE            = "200B Storage"\n\
   ..\n\
"X-515 2-EL1 Elev zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   ASSIGNED-FLOW    = 0\n\
   DESIGN-HEAT-T    = 72\n\
   DESIGN-COOL-T    = 74\n\
   THROTTLING-RANGE = 0.1\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   TERMINAL-TYPE    = SVAV\n\
   SPACE            = "2-EL1 Elev"\n\
   ..\n\
"X-516 2-ST3 Stair 3 zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   ASSIGNED-FLOW    = 0\n\
   DESIGN-HEAT-T    = 72\n\
   DESIGN-COOL-T    = 74\n\
   THROTTLING-RANGE = 0.1\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   TERMINAL-TYPE    = SVAV\n\
   SPACE            = "2-ST3 Stair 3"\n\
   ..\n\
"X-517 2-ST4 Stair 4 zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   ASSIGNED-FLOW    = 0\n\
   DESIGN-HEAT-T    = 72\n\
   DESIGN-COOL-T    = 74\n\
   THROTTLING-RANGE = 0.1\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   TERMINAL-TYPE    = SVAV\n\
   SPACE            = "2-ST4 Stair 4"\n\
   ..\n\
"X-518 3-ST1 Stair 1 zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   ASSIGNED-FLOW    = 0\n\
   DESIGN-HEAT-T    = 72\n\
   DESIGN-COOL-T    = 74\n\
   THROTTLING-RANGE = 0.1\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   TERMINAL-TYPE    = SVAV\n\
   SPACE            = "3-ST1 Stair 1"\n\
   ..\n\
"X-519 3-EL Elev zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   ASSIGNED-FLOW    = 0\n\
   DESIGN-HEAT-T    = 72\n\
   DESIGN-COOL-T    = 74\n\
   THROTTLING-RANGE = 0.1\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   TERMINAL-TYPE    = SVAV\n\
   SPACE            = "3-EL Elev"\n\
   ..\n\
"X-520 321B Elev Lobby zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   ASSIGNED-FLOW    = 0\n\
   DESIGN-HEAT-T    = 72\n\
   DESIGN-COOL-T    = 74\n\
   THROTTLING-RANGE = 0.1\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   TERMINAL-TYPE    = SVAV\n\
   SPACE            = "321B Elev Lobby"\n\
   ..\n\
"X-521 3-ST3 Stair 3 zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   ASSIGNED-FLOW    = 0\n\
   DESIGN-HEAT-T    = 72\n\
   DESIGN-COOL-T    = 74\n\
   THROTTLING-RANGE = 0.1\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   TERMINAL-TYPE    = SVAV\n\
   SPACE            = "3-ST3 Stair 3"\n\
   ..\n\
"X-522 3-ST4 Stair 4 zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   ASSIGNED-FLOW    = 0\n\
   DESIGN-HEAT-T    = 72\n\
   DESIGN-COOL-T    = 74\n\
   THROTTLING-RANGE = 0.1\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   TERMINAL-TYPE    = SVAV\n\
   SPACE            = "3-ST4 Stair 4"\n\
   ..\n\
"X-523 4-ST1 Stair 1 zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   ASSIGNED-FLOW    = 0\n\
   DESIGN-HEAT-T    = 72\n\
   DESIGN-COOL-T    = 74\n\
   THROTTLING-RANGE = 0.1\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   TERMINAL-TYPE    = SVAV\n\
   SPACE            = "4-ST1 Stair 1"\n\
   ..\n\
"X-524 401A Janitor zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   ASSIGNED-FLOW    = 0\n\
   DESIGN-HEAT-T    = 72\n\
   DESIGN-COOL-T    = 74\n\
   THROTTLING-RANGE = 0.1\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   TERMINAL-TYPE    = SVAV\n\
   SPACE            = "401A Janitor"\n\
   ..\n\
"X-525 4-ST2 Stair 2 zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   ASSIGNED-FLOW    = 0\n\
   DESIGN-HEAT-T    = 72\n\
   DESIGN-COOL-T    = 74\n\
   THROTTLING-RANGE = 0.1\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   TERMINAL-TYPE    = SVAV\n\
   SPACE            = "4-ST2 Stair 2"\n\
   ..\n\
"X-526 4-EL Elev zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   ASSIGNED-FLOW    = 0\n\
   DESIGN-HEAT-T    = 72\n\
   DESIGN-COOL-T    = 74\n\
   THROTTLING-RANGE = 0.1\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   TERMINAL-TYPE    = SVAV\n\
   SPACE            = "4-EL Elev"\n\
   ..\n\
"X-527 4-ST3 Stair 3 zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   ASSIGNED-FLOW    = 0\n\
   DESIGN-HEAT-T    = 72\n\
   DESIGN-COOL-T    = 74\n\
   THROTTLING-RANGE = 0.1\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   TERMINAL-TYPE    = SVAV\n\
   SPACE            = "4-ST3 Stair 3"\n\
   ..\n\
"X-528 4-ST4 Stair 4 zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   ASSIGNED-FLOW    = 0\n\
   DESIGN-HEAT-T    = 72\n\
   DESIGN-COOL-T    = 74\n\
   THROTTLING-RANGE = 0.1\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   TERMINAL-TYPE    = SVAV\n\
   SPACE            = "4-ST4 Stair 4"\n\
   ..\n\
"X-529 5-ST1 Stair 1 zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   ASSIGNED-FLOW    = 0\n\
   DESIGN-HEAT-T    = 72\n\
   DESIGN-COOL-T    = 74\n\
   THROTTLING-RANGE = 0.1\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   TERMINAL-TYPE    = SVAV\n\
   SPACE            = "5-ST1 Stair 1"\n\
   ..\n\
"X-530 501A Janitor zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   ASSIGNED-FLOW    = 0\n\
   DESIGN-HEAT-T    = 72\n\
   DESIGN-COOL-T    = 74\n\
   THROTTLING-RANGE = 0.1\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   TERMINAL-TYPE    = SVAV\n\
   SPACE            = "501A Janitor"\n\
   ..\n\
"X-531 5-ST2 Stair 2 zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   ASSIGNED-FLOW    = 0\n\
   DESIGN-HEAT-T    = 72\n\
   DESIGN-COOL-T    = 74\n\
   THROTTLING-RANGE = 0.1\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   TERMINAL-TYPE    = SVAV\n\
   SPACE            = "5-ST2 Stair 2"\n\
   ..\n\
"X-532 5-EL Elev zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   ASSIGNED-FLOW    = 0\n\
   DESIGN-HEAT-T    = 72\n\
   DESIGN-COOL-T    = 74\n\
   THROTTLING-RANGE = 0.1\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   TERMINAL-TYPE    = SVAV\n\
   SPACE            = "5-EL Elev"\n\
   ..\n\
"X-533 5-ST3 Stair 3 zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   ASSIGNED-FLOW    = 0\n\
   DESIGN-HEAT-T    = 72\n\
   DESIGN-COOL-T    = 74\n\
   THROTTLING-RANGE = 0.1\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   TERMINAL-TYPE    = SVAV\n\
   SPACE            = "5-ST3 Stair 3"\n\
   ..\n\
"X-534 5-ST4 Stair 4 zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   ASSIGNED-FLOW    = 0\n\
   DESIGN-HEAT-T    = 72\n\
   DESIGN-COOL-T    = 74\n\
   THROTTLING-RANGE = 0.1\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   TERMINAL-TYPE    = SVAV\n\
   SPACE            = "5-ST4 Stair 4"\n\
   ..\n\
"BBD-4 Baseboard Only" = SYSTEM\n\
   TYPE             = UHT\n\
   HEAT-SOURCE      = NONE\n\
   BASEBOARD-SOURCE = HOT-WATER\n\
   SIZING-RATIO     = 1.15\n\
   HEATING-SCHEDULE = "Schedule ON/OFF"\n\
   FAN-SCHEDULE     = "24x7 on sch"\n\
   SUPPLY-STATIC    = 0\n\
   SUPPLY-EFF       = 0.33\n\
   BBRD-VALVE-TYPE  = TWO-WAY\n\
   BBRD-LOOP        = "heating loop"\n\
   FURNACE-HIR      = 1.24067\n\
   C-AFUE           = 0.78\n\
   C-SF-MTR-TYPE    = 1\n\
   C-RF-MTR-TYPE    = 1\n\
   C-OSA-DMPR-CTRL  = 1\n\
   C-HTG-DUCT-LOCN  = *In Conditioned Space*\n\
   C-HTG-DUCT-RVAL  = 7\n\
   C-CLG-DUCT-LOCN  = *In Conditioned Space*\n\
   C-CLG-DUCT-RVAL  = 7\n\
   ..\n\
"BB-401 029 Pottery zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "029 Pottery"\n\
   ..\n\
"BB-402 021 Pottery zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "021 Pottery"\n\
   ..\n\
"BB-403 022 Equip zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "022 Equip"\n\
   ..\n\
"BB-404 111 Room zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "111 Room"\n\
   ..\n\
"BB-405 109 Room zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "109 Room"\n\
   ..\n\
"BB-406 107 Room zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "107 Room"\n\
   ..\n\
"BB-407 105 Room zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "105 Room"\n\
   ..\n\
"BB-408 112 Room zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "112 Room"\n\
   ..\n\
"BB-409 110 Room zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "110 Room"\n\
   ..\n\
"BB-410 108 Bathroom zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "108 Bathroom"\n\
   ..\n\
"BB-4100 404 Room zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "404 Room"\n\
   ..\n\
"BB-4101 402 Room zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "402 Room"\n\
   ..\n\
"BB-4102 411 Room zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "411 Room"\n\
   ..\n\
"BB-4103 409 Room zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "409 Room"\n\
   ..\n\
"BB-4104 407 Room zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "407 Room"\n\
   ..\n\
"BB-4105 403 Room zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "403 Room"\n\
   ..\n\
"BB-4106 400 Lounge zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "400 Lounge"\n\
   ..\n\
"BB-4107 401B Lounge zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "401B Lounge"\n\
   ..\n\
"BB-4108 432 Room zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "432 Room"\n\
   ..\n\
"BB-4109 430 Room zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "430 Room"\n\
   ..\n\
"BB-411 106 Room zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "106 Room"\n\
   ..\n\
"BB-4110 426 Room zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "426 Room"\n\
   ..\n\
"BB-4111 424 Room zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "424 Room"\n\
   ..\n\
"BB-4112 422 Room zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "422 Room"\n\
   ..\n\
"BB-4113 440 Room zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "440 Room"\n\
   ..\n\
"BB-4114 431 Room zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "431 Room"\n\
   ..\n\
"BB-4115 429 Room zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "429 Room"\n\
   ..\n\
"BB-4116 427 Room zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "427 Room"\n\
   ..\n\
"BB-4117 423 Room zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "423 Room"\n\
   ..\n\
"BB-4118 442 Room zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "442 Room"\n\
   ..\n\
"BB-4119 444 Room zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "444 Room"\n\
   ..\n\
"BB-412 104 Room zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "104 Room"\n\
   ..\n\
"BB-4120 446 Room zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "446 Room"\n\
   ..\n\
"BB-4121 443 Room zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "443 Room"\n\
   ..\n\
"BB-4122 445 Room zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "445 Room"\n\
   ..\n\
"BB-4123 447 Room zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "447 Room"\n\
   ..\n\
"BB-4124 450 Room zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "450 Room"\n\
   ..\n\
"BB-4125 452 Room zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "452 Room"\n\
   ..\n\
"BB-4126 449 Room zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "449 Room"\n\
   ..\n\
"BB-4127 512 Room zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "512 Room"\n\
   ..\n\
"BB-4128 510 Room zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "510 Room"\n\
   ..\n\
"BB-4129 506 Room zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "506 Room"\n\
   ..\n\
"BB-413 102 Room zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "102 Room"\n\
   ..\n\
"BB-4130 504 Room zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "504 Room"\n\
   ..\n\
"BB-4131 502 Room zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "502 Room"\n\
   ..\n\
"BB-4132 511 Room zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "511 Room"\n\
   ..\n\
"BB-4133 509 Room zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "509 Room"\n\
   ..\n\
"BB-4134 507 Room zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "507 Room"\n\
   ..\n\
"BB-4135 503 Room zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "503 Room"\n\
   ..\n\
"BB-4136 500 Lounge zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "500 Lounge"\n\
   ..\n\
"BB-4137 532 Room zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "532 Room"\n\
   ..\n\
"BB-4138 501B Lounge zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "501B Lounge"\n\
   ..\n\
"BB-4139 530 Room zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "530 Room"\n\
   ..\n\
"BB-414 1-29 Pottery Upper zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "1-29 Pottery Upper"\n\
   ..\n\
"BB-4140 531 Room zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "531 Room"\n\
   ..\n\
"BB-4141 529 Room zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "529 Room"\n\
   ..\n\
"BB-4142 526 Room zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "526 Room"\n\
   ..\n\
"BB-4143 524 Room zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "524 Room"\n\
   ..\n\
"BB-4144 522 Room zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "522 Room"\n\
   ..\n\
"BB-4145 540 Lounge zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "540 Lounge"\n\
   ..\n\
"BB-4146 527 Room zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "527 Room"\n\
   ..\n\
"BB-4147 523 Room zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "523 Room"\n\
   ..\n\
"BB-4148 540 Room zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "540 Room"\n\
   ..\n\
"BB-4149 544 Room zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "544 Room"\n\
   ..\n\
"BB-415 1-ST2 Stair 2 zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "1-ST2 Stair 2"\n\
   ..\n\
"BB-4150 546 Room zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "546 Room"\n\
   ..\n\
"BB-4151 543 Room zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "543 Room"\n\
   ..\n\
"BB-4152 545 Room zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "545 Room"\n\
   ..\n\
"BB-4153 550 Room zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "550 Room"\n\
   ..\n\
"BB-4154 552 Room zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "552 Room"\n\
   ..\n\
"BB-4155 547 Room zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "547 Room"\n\
   ..\n\
"BB-4156 549 Room zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "549 Room"\n\
   ..\n\
"BB-416 101 Lounge zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "101 Lounge"\n\
   ..\n\
"BB-417 132 Room zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "132 Room"\n\
   ..\n\
"BB-418 126 Room zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "126 Room"\n\
   ..\n\
"BB-419 124 Room zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "124 Room"\n\
   ..\n\
"BB-420 122 Room zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "122 Room"\n\
   ..\n\
"BB-421 131 Room zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "131 Room"\n\
   ..\n\
"BB-422 129 Room zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "129 Room"\n\
   ..\n\
"BB-423 127 Room zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "127 Room"\n\
   ..\n\
"BB-424 125 Room zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "125 Room"\n\
   ..\n\
"BB-425 1-21 Potter Upper zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "1-21 Potter Upper"\n\
   ..\n\
"BB-426 142 Room zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "142 Room"\n\
   ..\n\
"BB-427 144 Room zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "144 Room"\n\
   ..\n\
"BB-428 143 Room zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "143 Room"\n\
   ..\n\
"BB-429 145 Room zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "145 Room"\n\
   ..\n\
"BB-430 146 Room zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "146 Room"\n\
   ..\n\
"BB-431 150 Room zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "150 Room"\n\
   ..\n\
"BB-432 152 Room zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "152 Room"\n\
   ..\n\
"BB-433 147 Room zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "147 Room"\n\
   ..\n\
"BB-434 149 Room zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "149 Room"\n\
   ..\n\
"BB-435 212 Room zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "212 Room"\n\
   ..\n\
"BB-436 210 Room zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "210 Room"\n\
   ..\n\
"BB-437 206 Room zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "206 Room"\n\
   ..\n\
"BB-438 204 Room zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "204 Room"\n\
   ..\n\
"BB-439 202 Room zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "202 Room"\n\
   ..\n\
"BB-440 211 Room zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "211 Room"\n\
   ..\n\
"BB-441 209 Room zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "209 Room"\n\
   ..\n\
"BB-442 207 Room zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "207 Room"\n\
   ..\n\
"BB-443 203 Room zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "203 Room"\n\
   ..\n\
"BB-444 200 CRE zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "200 CRE"\n\
   ..\n\
"BB-445 201A Lounge zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "201A Lounge"\n\
   ..\n\
"BB-446 232 Room zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "232 Room"\n\
   ..\n\
"BB-447 230 Room zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "230 Room"\n\
   ..\n\
"BB-448 226 Room zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "226 Room"\n\
   ..\n\
"BB-449 224 Room zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "224 Room"\n\
   ..\n\
"BB-450 222 Room zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "222 Room"\n\
   ..\n\
"BB-451 231 Room zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "231 Room"\n\
   ..\n\
"BB-452 229 Room zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "229 Room"\n\
   ..\n\
"BB-453 227 Room zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "227 Room"\n\
   ..\n\
"BB-454 223 Room zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "223 Room"\n\
   ..\n\
"BB-455 240 Room zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "240 Room"\n\
   ..\n\
"BB-456 242 Room zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "242 Room"\n\
   ..\n\
"BB-457 244 Room zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "244 Room"\n\
   ..\n\
"BB-458 246 Room zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "246 Room"\n\
   ..\n\
"BB-459 250 Room zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "250 Room"\n\
   ..\n\
"BB-460 252 Room zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "252 Room"\n\
   ..\n\
"BB-461 243 Room zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "243 Room"\n\
   ..\n\
"BB-462 245 Room zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "245 Room"\n\
   ..\n\
"BB-463 247 Room zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "247 Room"\n\
   ..\n\
"BB-464 249 Room zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "249 Room"\n\
   ..\n\
"BB-465 312 Room zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "312 Room"\n\
   ..\n\
"BB-466 310 Room zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "310 Room"\n\
   ..\n\
"BB-467 306 Room zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "306 Room"\n\
   ..\n\
"BB-468 304 Room zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "304 Room"\n\
   ..\n\
"BB-469 302 Room zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "302 Room"\n\
   ..\n\
"BB-470 311 Room zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "311 Room"\n\
   ..\n\
"BB-471 309 Room zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "309 Room"\n\
   ..\n\
"BB-472 307 Room zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "307 Room"\n\
   ..\n\
"BB-473 303 Room zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "303 Room"\n\
   ..\n\
"BB-474 300A CRE zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "300A CRE"\n\
   ..\n\
"BB-475 300B CRE zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "300B CRE"\n\
   ..\n\
"BB-476 300C CRE zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "300C CRE"\n\
   ..\n\
"BB-477 3-ST2 Stair 2 zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "3-ST2 Stair 2"\n\
   ..\n\
"BB-478 301 Lounge zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "301 Lounge"\n\
   ..\n\
"BB-479 332 Room zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "332 Room"\n\
   ..\n\
"BB-480 326 Room zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "326 Room"\n\
   ..\n\
"BB-481 324 Room zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "324 Room"\n\
   ..\n\
"BB-482 322 Room zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "322 Room"\n\
   ..\n\
"BB-483 331 Room zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "331 Room"\n\
   ..\n\
"BB-484 329 Room zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "329 Room"\n\
   ..\n\
"BB-485 327 Room zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "327 Room"\n\
   ..\n\
"BB-486 323 Room zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "323 Room"\n\
   ..\n\
"BB-487 340 Lounge zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "340 Lounge"\n\
   ..\n\
"BB-488 342 Room zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "342 Room"\n\
   ..\n\
"BB-489 344 Room zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "344 Room"\n\
   ..\n\
"BB-490 346 Room zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "346 Room"\n\
   ..\n\
"BB-491 350 Room zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "350 Room"\n\
   ..\n\
"BB-492 352 Room zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "352 Room"\n\
   ..\n\
"BB-493 343 Room zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "343 Room"\n\
   ..\n\
"BB-494 345 Room zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "345 Room"\n\
   ..\n\
"BB-495 347 Room zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "347 Room"\n\
   ..\n\
"BB-496 349 Room zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "349 Room"\n\
   ..\n\
"BB-497 412 Room zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "412 Room"\n\
   ..\n\
"BB-498 410 Room zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "410 Room"\n\
   ..\n\
"BB-499 406 Room zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 0\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 75\n\
   BASEBOARD-CTRL   = THERMOSTATIC\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   SPACE            = "406 Room"\n\
   ..\n\
"AH-3 HV-East" = SYSTEM\n\
   TYPE             = UVT\n\
   HEAT-SOURCE      = HOT-WATER\n\
   BASEBOARD-SOURCE = NONE\n\
   MAX-SUPPLY-T     = 90\n\
   HEATING-SCHEDULE = "Schedule ON/OFF"\n\
   MIN-OUTSIDE-AIR  = 1\n\
   FAN-SCHEDULE     = "24x7 on sch"\n\
   SUPPLY-STATIC    = 1.5\n\
   SUPPLY-EFF       = 0.643846\n\
   NIGHT-CYCLE-CTRL = CYCLE-ON-ANY\n\
   HW-VALVE-TYPE    = TWO-WAY\n\
   HW-LOOP          = "heating loop"\n\
   C-AFUE           = 0.78\n\
   C-SF-MTR-TYPE    = 2\n\
   C-SF-TOT-BHP     = 15.5\n\
   C-SUPP-FAN-TYPE  = 4\n\
   C-RF-MTR-TYPE    = 2\n\
   C-OSA-DMPR-CTRL  = 1\n\
   C-HTG-DUCT-LOCN  = *Ceiling Plenum*\n\
   C-HTG-DUCT-RVAL  = 7\n\
   C-CLG-DUCT-LOCN  = *Ceiling Plenum*\n\
   C-CLG-DUCT-RVAL  = 7\n\
   ..\n\
"CV-301 153 Corridor zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 1\n\
   ASSIGNED-FLOW    = {LocalRef("SPACE","AREA") * 1.1}\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 74\n\
   THROTTLING-RANGE = 0.1\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   TERMINAL-TYPE    = SVAV\n\
   SPACE            = "153 Corridor"\n\
   ..\n\
"CV-302 148 Bathroom zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 1\n\
   ASSIGNED-FLOW    = {LocalRef("SPACE","AREA") * 1.1}\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 74\n\
   THROTTLING-RANGE = 0.1\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   TERMINAL-TYPE    = SVAV\n\
   SPACE            = "148 Bathroom"\n\
   ..\n\
"CV-303 248 Bathroom zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 1\n\
   ASSIGNED-FLOW    = {LocalRef("SPACE","AREA") * 1.1}\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 74\n\
   THROTTLING-RANGE = 0.1\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   TERMINAL-TYPE    = SVAV\n\
   SPACE            = "248 Bathroom"\n\
   ..\n\
"CV-304 253 Corridor zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 1\n\
   ASSIGNED-FLOW    = {LocalRef("SPACE","AREA") * 1.1}\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 74\n\
   THROTTLING-RANGE = 0.1\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   TERMINAL-TYPE    = SVAV\n\
   SPACE            = "253 Corridor"\n\
   ..\n\
"CV-305 251 Corridor zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 1\n\
   ASSIGNED-FLOW    = {LocalRef("SPACE","AREA") * 1.1}\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 74\n\
   THROTTLING-RANGE = 0.1\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   TERMINAL-TYPE    = SVAV\n\
   SPACE            = "251 Corridor"\n\
   ..\n\
"CV-306 348 Bathroom zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 1\n\
   ASSIGNED-FLOW    = {LocalRef("SPACE","AREA") * 1.1}\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 74\n\
   THROTTLING-RANGE = 0.1\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   TERMINAL-TYPE    = SVAV\n\
   SPACE            = "348 Bathroom"\n\
   ..\n\
"CV-307 353 Corridor zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 1\n\
   ASSIGNED-FLOW    = {LocalRef("SPACE","AREA") * 1.1}\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 74\n\
   THROTTLING-RANGE = 0.1\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   TERMINAL-TYPE    = SVAV\n\
   SPACE            = "353 Corridor"\n\
   ..\n\
"CV-308 351 Corridor zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 1\n\
   ASSIGNED-FLOW    = {LocalRef("SPACE","AREA") * 1.1}\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 74\n\
   THROTTLING-RANGE = 0.1\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   TERMINAL-TYPE    = SVAV\n\
   SPACE            = "351 Corridor"\n\
   ..\n\
"CV-309 453 Corridor zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 1\n\
   ASSIGNED-FLOW    = {LocalRef("SPACE","AREA") * 1.1}\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 74\n\
   THROTTLING-RANGE = 0.1\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   TERMINAL-TYPE    = SVAV\n\
   SPACE            = "453 Corridor"\n\
   ..\n\
"CV-310 448 Bathroom zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 1\n\
   ASSIGNED-FLOW    = {LocalRef("SPACE","AREA") * 1.1}\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 74\n\
   THROTTLING-RANGE = 0.1\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   TERMINAL-TYPE    = SVAV\n\
   SPACE            = "448 Bathroom"\n\
   ..\n\
"CV-311 451 Corridor zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 1\n\
   ASSIGNED-FLOW    = {LocalRef("SPACE","AREA") * 1.1}\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 74\n\
   THROTTLING-RANGE = 0.1\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   TERMINAL-TYPE    = SVAV\n\
   SPACE            = "451 Corridor"\n\
   ..\n\
"CV-312 553 Corridor zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 1\n\
   ASSIGNED-FLOW    = {LocalRef("SPACE","AREA") * 1.1}\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 74\n\
   THROTTLING-RANGE = 0.1\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   TERMINAL-TYPE    = SVAV\n\
   SPACE            = "553 Corridor"\n\
   ..\n\
"CV-313 531 Corridor zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 1\n\
   ASSIGNED-FLOW    = {LocalRef("SPACE","AREA") * 1.1}\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 74\n\
   THROTTLING-RANGE = 0.1\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   TERMINAL-TYPE    = SVAV\n\
   SPACE            = "531 Corridor"\n\
   ..\n\
"CV-314 548 Bathroom zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 1\n\
   ASSIGNED-FLOW    = {LocalRef("SPACE","AREA") * 1.1}\n\
   DESIGN-HEAT-T    = 72\n\
   HEAT-TEMP-SCH    = "24x7 htg70 t-stat sch"\n\
   DESIGN-COOL-T    = 74\n\
   THROTTLING-RANGE = 0.1\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   TERMINAL-TYPE    = SVAV\n\
   SPACE            = "548 Bathroom"\n\
   ..\n\
"AC-6 IT Level 2" = SYSTEM\n\
   TYPE             = PSZ\n\
   BASEBOARD-SOURCE = NONE\n\
   RETURN-AIR-PATH  = DUCT\n\
   MIN-SUPPLY-T     = 55\n\
   SUPPLY-FLOW      = 800\n\
   MIN-OUTSIDE-AIR  = 0\n\
   FAN-SCHEDULE     = "24x7 on sch"\n\
   FAN-CONTROL      = FAN-EIR-FPLR\n\
   SUPPLY-STATIC    = 0.5\n\
   SUPPLY-EFF       = 0.643846\n\
   NIGHT-CYCLE-CTRL = CYCLE-ON-ANY\n\
   FAN-EIR-FPLR     = "Variable Speed Drive FPLR"\n\
   RETURN-FAN-LOC   = RELIEF\n\
   COOLING-CAPACITY = 24000\n\
   COOL-CTRL-RANGE  = 0.1\n\
   CONTROL-ZONE     = "AC-602 221A IT zone"\n\
   C-AFUE           = 0.78\n\
   C-SF-MTR-TYPE    = 2\n\
   C-SF-TOT-BHP     = 15.5\n\
   C-SUPP-FAN-TYPE  = 4\n\
   C-RF-MTR-TYPE    = 2\n\
   C-OSA-DMPR-CTRL  = 1\n\
   C-HTG-DUCT-LOCN  = *Ceiling Plenum*\n\
   C-HTG-DUCT-RVAL  = 7\n\
   C-CLG-DUCT-LOCN  = *Ceiling Plenum*\n\
   C-CLG-DUCT-RVAL  = 7\n\
   ..\n\
"AC-602 221A IT zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 1\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   DESIGN-COOL-T    = 74\n\
   COOL-TEMP-SCH    = "24x7 clg75 t-stat sch"\n\
   THROTTLING-RANGE = 0.1\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   TERMINAL-TYPE    = SVAV\n\
   SPACE            = "221A IT"\n\
   ..\n\
"AC-6 IT Level 3" = SYSTEM\n\
   TYPE             = PSZ\n\
   BASEBOARD-SOURCE = NONE\n\
   RETURN-AIR-PATH  = DUCT\n\
   MIN-SUPPLY-T     = 55\n\
   SUPPLY-FLOW      = 800\n\
   MIN-OUTSIDE-AIR  = 0\n\
   FAN-SCHEDULE     = "24x7 on sch"\n\
   FAN-CONTROL      = FAN-EIR-FPLR\n\
   SUPPLY-STATIC    = 0.5\n\
   SUPPLY-EFF       = 0.643846\n\
   NIGHT-CYCLE-CTRL = CYCLE-ON-ANY\n\
   FAN-EIR-FPLR     = "Variable Speed Drive FPLR"\n\
   RETURN-FAN-LOC   = RELIEF\n\
   COOLING-CAPACITY = 24000\n\
   COOL-CTRL-RANGE  = 0.1\n\
   CONTROL-ZONE     = "AC-603 321A IT zone"\n\
   C-AFUE           = 0.78\n\
   C-SF-MTR-TYPE    = 2\n\
   C-SF-TOT-BHP     = 15.5\n\
   C-SUPP-FAN-TYPE  = 4\n\
   C-RF-MTR-TYPE    = 2\n\
   C-OSA-DMPR-CTRL  = 1\n\
   C-HTG-DUCT-LOCN  = *Ceiling Plenum*\n\
   C-HTG-DUCT-RVAL  = 7\n\
   C-CLG-DUCT-LOCN  = *Ceiling Plenum*\n\
   C-CLG-DUCT-RVAL  = 7\n\
   ..\n\
"AC-603 321A IT zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 1\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   DESIGN-COOL-T    = 74\n\
   COOL-TEMP-SCH    = "24x7 clg75 t-stat sch"\n\
   THROTTLING-RANGE = 0.1\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   TERMINAL-TYPE    = SVAV\n\
   SPACE            = "321A IT"\n\
   ..\n\
"AC-6 IT Level 4" = SYSTEM\n\
   TYPE             = PSZ\n\
   BASEBOARD-SOURCE = NONE\n\
   RETURN-AIR-PATH  = DUCT\n\
   MIN-SUPPLY-T     = 55\n\
   SUPPLY-FLOW      = 800\n\
   MIN-OUTSIDE-AIR  = 0\n\
   FAN-SCHEDULE     = "24x7 on sch"\n\
   FAN-CONTROL      = FAN-EIR-FPLR\n\
   SUPPLY-STATIC    = 0.5\n\
   SUPPLY-EFF       = 0.643846\n\
   NIGHT-CYCLE-CTRL = CYCLE-ON-ANY\n\
   FAN-EIR-FPLR     = "Variable Speed Drive FPLR"\n\
   RETURN-FAN-LOC   = RELIEF\n\
   COOLING-CAPACITY = 24000\n\
   COOL-CTRL-RANGE  = 0.1\n\
   CONTROL-ZONE     = "AC-604 421A IT zone"\n\
   C-AFUE           = 0.78\n\
   C-SF-MTR-TYPE    = 2\n\
   C-SF-TOT-BHP     = 15.5\n\
   C-SUPP-FAN-TYPE  = 4\n\
   C-RF-MTR-TYPE    = 2\n\
   C-OSA-DMPR-CTRL  = 1\n\
   C-HTG-DUCT-LOCN  = *Ceiling Plenum*\n\
   C-HTG-DUCT-RVAL  = 7\n\
   C-CLG-DUCT-LOCN  = *Ceiling Plenum*\n\
   C-CLG-DUCT-RVAL  = 7\n\
   ..\n\
"AC-604 421A IT zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 1\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   DESIGN-COOL-T    = 74\n\
   COOL-TEMP-SCH    = "24x7 clg75 t-stat sch"\n\
   THROTTLING-RANGE = 0.1\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   TERMINAL-TYPE    = SVAV\n\
   SPACE            = "421A IT"\n\
   ..\n\
"AC-6 IT Level 5" = SYSTEM\n\
   TYPE             = PSZ\n\
   BASEBOARD-SOURCE = NONE\n\
   RETURN-AIR-PATH  = DUCT\n\
   MIN-SUPPLY-T     = 55\n\
   SUPPLY-FLOW      = 800\n\
   MIN-OUTSIDE-AIR  = 0\n\
   FAN-SCHEDULE     = "24x7 on sch"\n\
   FAN-CONTROL      = FAN-EIR-FPLR\n\
   SUPPLY-STATIC    = 0.5\n\
   SUPPLY-EFF       = 0.643846\n\
   NIGHT-CYCLE-CTRL = CYCLE-ON-ANY\n\
   FAN-EIR-FPLR     = "Variable Speed Drive FPLR"\n\
   RETURN-FAN-LOC   = RELIEF\n\
   COOLING-CAPACITY = 24000\n\
   COOL-CTRL-RANGE  = 0.1\n\
   CONTROL-ZONE     = "AC-605 521A IT zone"\n\
   C-AFUE           = 0.78\n\
   C-SF-MTR-TYPE    = 2\n\
   C-SF-TOT-BHP     = 15.5\n\
   C-SUPP-FAN-TYPE  = 4\n\
   C-RF-MTR-TYPE    = 2\n\
   C-OSA-DMPR-CTRL  = 1\n\
   C-HTG-DUCT-LOCN  = *Ceiling Plenum*\n\
   C-HTG-DUCT-RVAL  = 7\n\
   C-CLG-DUCT-LOCN  = *Ceiling Plenum*\n\
   C-CLG-DUCT-RVAL  = 7\n\
   ..\n\
"AC-605 521A IT zone" = ZONE\n\
   TYPE             = CONDITIONED\n\
   MIN-FLOW-RATIO   = 1\n\
   FLOW/AREA        = 0\n\
   DESIGN-HEAT-T    = 72\n\
   DESIGN-COOL-T    = 74\n\
   COOL-TEMP-SCH    = "24x7 clg75 t-stat sch"\n\
   THROTTLING-RANGE = 0.1\n\
   SIZING-OPTION    = ADJUST-LOADS\n\
   TERMINAL-TYPE    = SVAV\n\
   SPACE            = "521A IT"\n\
   ..\n\
\n\
\n\
$ *********************************************************\n\
$ **                                                     **\n\
$ **                Metering & Misc HVAC                 **\n\
$ **                                                     **\n\
$ *********************************************************\n\
\n\
$ ---------------------------------------------------------\n\
$              Equipment Controls\n\
$ ---------------------------------------------------------\n\
\n\
\n\
\n\
$ ---------------------------------------------------------\n\
$              Load Management\n\
$ ---------------------------------------------------------\n\
\n\
\n\
\n\
$ *********************************************************\n\
$ **                                                     **\n\
$ **                    Utility Rates                    **\n\
$ **                                                     **\n\
$ *********************************************************\n\
\n\
$ ---------------------------------------------------------\n\
$              Ratchets\n\
$ ---------------------------------------------------------\n\
\n\
\n\
\n\
$ ---------------------------------------------------------\n\
$              Block Charges\n\
$ ---------------------------------------------------------\n\
\n\
"Feb2011 PG&E Sch-E20p Sum Peak B" = BLOCK-CHARGE\n\
   BLOCK-SCH        = "PG&E Sch-E20 Schedule"\n\
   SCH-FLAG         = 1.1\n\
   BLOCK1-TYPE      = ENERGY\n\
   BLOCKS-1         = ( 1 )\n\
   COSTS-1          = ( 0.1404 )\n\
   BLOCK2-TYPE      = DEMAND\n\
   BLOCKS-2         = ( 1 )\n\
   COSTS-2          = ( 11.04 )\n\
   ..\n\
"Feb2011 PG&E Sch-E20p Sum Mid Bl" = BLOCK-CHARGE\n\
   BLOCK-SCH        = "PG&E Sch-E20 Schedule"\n\
   SCH-FLAG         = 1.2\n\
   BLOCK1-TYPE      = ENERGY\n\
   BLOCKS-1         = ( 1 )\n\
   COSTS-1          = ( 0.09807 )\n\
   BLOCK2-TYPE      = DEMAND\n\
   BLOCKS-2         = ( 1 )\n\
   COSTS-2          = ( 2.59 )\n\
   ..\n\
"Feb2011 PG&E Sch-E20p Sum Off Bl" = BLOCK-CHARGE\n\
   BLOCK-SCH        = "PG&E Sch-E20 Schedule"\n\
   SCH-FLAG         = 1.3\n\
   BLOCK1-TYPE      = ENERGY\n\
   BLOCKS-1         = ( 1 )\n\
   COSTS-1          = ( 0.07992 )\n\
   ..\n\
"Feb2011 PG&E Sch-E20p Win Mid Bl" = BLOCK-CHARGE\n\
   BLOCK-SCH        = "PG&E Sch-E20 Schedule"\n\
   SCH-FLAG         = 2.2\n\
   BLOCK1-TYPE      = ENERGY\n\
   BLOCKS-1         = ( 1 )\n\
   COSTS-1          = ( 0.08585 )\n\
   BLOCK2-TYPE      = DEMAND\n\
   BLOCKS-2         = ( 1 )\n\
   COSTS-2          = ( 0.82 )\n\
   ..\n\
"Feb2011 PG&E Sch-E20p Win Off Bl" = BLOCK-CHARGE\n\
   BLOCK-SCH        = "PG&E Sch-E20 Schedule"\n\
   SCH-FLAG         = 2.3\n\
   BLOCK1-TYPE      = ENERGY\n\
   BLOCKS-1         = ( 1 )\n\
   COSTS-1          = ( 0.07664 )\n\
   ..\n\
"Feb2011 PG&E Sch-E20p Maximum De" = BLOCK-CHARGE\n\
   BLOCK-SCH        = "PG&E Annual Schedule"\n\
   SCH-FLAG         = 1\n\
   BLOCK1-TYPE      = DEMAND\n\
   BLOCKS-1         = ( 1 )\n\
   COSTS-1          = ( 7.45 )\n\
   ..\n\
"Custom Gas Energy Blk1" = BLOCK-CHARGE\n\
   BLOCK-SCH        = "Custom Gas Season Sched"\n\
   SCH-FLAG         = 1\n\
   BLOCKS-ARE       = CUMULATIVE\n\
   BLOCK1-TYPE      = ENERGY\n\
   BLOCKS-1         = ( 4000, 1e+008 )\n\
   COSTS-1          = ( 0.86555, 0.61633 )\n\
   ..\n\
"Custom Gas Energy Blk2" = BLOCK-CHARGE\n\
   BLOCK-SCH        = "Custom Gas Season Sched"\n\
   SCH-FLAG         = 2\n\
   BLOCKS-ARE       = CUMULATIVE\n\
   BLOCK1-TYPE      = ENERGY\n\
   BLOCKS-1         = ( 4000, 1e+008 )\n\
   COSTS-1          = ( 0.80035, 0.59629 )\n\
   ..\n\
\n\
\n\
$ ---------------------------------------------------------\n\
$              Utility Rates\n\
$ ---------------------------------------------------------\n\
\n\
"Feb2011 PG&E Sch-E20p Elec Rate" = UTILITY-RATE\n\
   TYPE             = ELECTRICITY\n\
   MONTH-CHGS       = ( {31*32.85421}, {28*32.85421}, {31*32.85421},\n\
         {30*32.85421}, {31*32.85421}, {30*32.85421}, {31*32.85421},\n\
         {31*32.85421}, {30*32.85421}, {31*32.85421}, {30*32.85421},\n\
         {31*32.85421} )\n\
   BLOCK-CHARGES    = ( "Feb2011 PG&E Sch-E20p Sum Peak B",\n\
         "Feb2011 PG&E Sch-E20p Sum Mid Bl",\n\
         "Feb2011 PG&E Sch-E20p Win Mid Bl",\n\
         "Feb2011 PG&E Sch-E20p Sum Off Bl",\n\
         "Feb2011 PG&E Sch-E20p Win Off Bl",\n\
         "Feb2011 PG&E Sch-E20p Maximum De" )\n\
   RATE-LIMITATION  = 0.22782\n\
   ..\n\
"Jun10 PG&E G-NR1" = UTILITY-RATE\n\
   TYPE             = NATURAL-GAS\n\
   MONTH-CHGS       = ( 66.6302, 60.1821, 66.6302, 64.4808, 66.6302, 64.4808,\n\
         66.6302, &D, 64.4808, 66.6302, 64.4808, 66.6302 )\n\
   BLOCK-CHARGES    = ( "Custom Gas Energy Blk1", "Custom Gas Energy Blk2" )\n\
   ..\n\
\n\
\n\
$ *********************************************************\n\
$ **                                                     **\n\
$ **                 Output Reporting                    **\n\
$ **                                                     **\n\
$ *********************************************************\n\
\n\
$ ---------------------------------------------------------\n\
$              Loads Non-Hourly Reporting\n\
$ ---------------------------------------------------------\n\
\n\
LOADS-REPORT\n\
   ..\n\
\n\
\n\
$ ---------------------------------------------------------\n\
$              Systems Non-Hourly Reporting\n\
$ ---------------------------------------------------------\n\
\n\
SYSTEMS-REPORT\n\
   ..\n\
\n\
\n\
$ ---------------------------------------------------------\n\
$              Plant Non-Hourly Reporting\n\
$ ---------------------------------------------------------\n\
\n\
PLANT-REPORT\n\
   ..\n\
\n\
\n\
$ ---------------------------------------------------------\n\
$              Economics Non-Hourly Reporting\n\
$ ---------------------------------------------------------\n\
\n\
ECONOMICS-REPORT\n\
   ..\n\
\n\
\n\
$ ---------------------------------------------------------\n\
$              Hourly Reporting\n\
$ ---------------------------------------------------------\n\
\n\
\n\
\n\
\n\
$ ---------------------------------------------------------\n\
$              THE END\n\
$ ---------------------------------------------------------\n\
\n\
END ..\n\
COMPUTE ..\n\
STOP ..\n\
\n\
';