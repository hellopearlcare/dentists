import { Insurance } from '../utils/utility-classes/insurance';
import { Dentist } from '../utils/utility-classes/dentist.interface';

/*
 * This is a list of real-life, Miami-based dentists.
 */
export const DENTISTS = [
	{
		"id": "0001",
		"name": "Sofia Fontecilla",
		"namePrefix": "Dr.",
		"gender": "Female",
		"imageUrl": "https://lh3.googleusercontent.com/-EsUX0r1mHZg/AAAAAAAAAAI/AAAAAAAAAG0/-oRmosa1bHU/s640/photo.jpg",
		"accreditation": "DDS.",
		"languages": ["English", "Spanish"],
		"specialties": [
			"General",
			"Cosmetic",
			"Family"
		],
		"practices": [
			{
				"name": "Coconut Grove Dental",
				"city": "Miami",
				"zipCode": 33133,
				"phone": 3058566811,
				"address": "3220 S Dixie Hwy Suite #101",
				"imageUrl": "",
				"insurances": [
					"Aetna",
					"Humana",
					"UnitedHealthcare",
					"DeltaDental"
				],
				"schedule": {
					"Monday": "8AM-5PM",
					"Tuesday": "8AM-5PM",
					"Wednesday": "8AM-5PM",
					"Thursday": "8AM-5PM",
					"Friday": "9AM-1PM",
					"Saturday": "Closed",
					"Sunday": "Closed"
				},
				"bundles": [
					{
						"name": "New Patient Bundle (X-Rays, Cleaning, Exam)",
						"price":  99
					}
				]
			}
		]
	},



	{
		"id": "0002",
		"name": "Brian Tschirhart",
		"namePrefix": "Dr.",
		"gender": "Male",
		"imageUrl": "https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/12645072_517410608431315_565980337064601314_n.jpg?oh=4e83a97660eda2494f68662c623a61b1&oe=5A34A72D",
		"accreditation": "DDS",
		"languages": ["English", "Spanish"]
		"specialties": [
			"General",
			"Cosmetic",
			"Family"
		],
		"practices": [
			{
				"name": "Brian A. Tschirhart DDS, P.A",
				"city": "Miami",
				"zipCode": "33131",
				"phone": 3053716040,
				"address": "444 Brickell Ave, Suite #48",
				"imageUrl": "",
				"insurances": [
					"None"
				],
				"schedule": {
					"Monday": "9AM-5PM",
					"Tuesday": "9AM-5PM",
					"Wednesday": "9AM-5PM",
					"Thursday": "9AM-5PM",
					"Friday": "Closed",
					"Saturday": "Closed",
					"Sunday": "Closed"
				},
				"bundles": [
					{
						"name": "New Patient Bundle (X-Rays, Cleaning, Exam)",
						"price":  215
					}
				]
			}
		]
	},
		
		

	{
		"id": "0003",
		"name": "Oscar Reyes",
		"namePrefix": "Dr.",
		"gender": "Male",
		"imageUrl": "https://www.southmiamismiles.com/wp-content/plugins/clientprofile/images/client_uploads/dr-reyes.jpg",
		"accreditation": "DDS",
		"languages": ["Spanish", "English"],
		"specialties": [
			"General",
			"Cosmetic",
			"Prosthodontics"
		],
		"practices": [
			{
				"name": "South Miami Smiles",
				"city": "Miami",
				"zipCode": "33143",
				"phone": 3052034150,
				"address": "6915 Red Road #207, Coral Gables, FL",
				"imageUrl": "",
				"insurances": [
					"None"
				],
				"schedule": {
					"Monday": "8AM-4:30PM",
					"Tuesday": "8AM-4:30PM",
					"Wednesday": "8AM-4:30PM",
					"Thursday": "8AM-4:30PM",
					"Friday": "Closed",
					"Saturday": "Closed",
					"Sunday": "Closed"
				},
				"bundles": [
					{
						"name": "New Patient Bundle (X-Rays, Cleaning, Exam)",
						"price": 165
					}
				]
			}
		]
	},
		
		

	{
		"id": "0004",
		"name": "Jessica Papir",
		"namePrefix": "Dr.",
		"gender": "Female",
		"imageUrl": "https://d2t808ag5aqhkh.cloudfront.net/c2a18db2-a860-4499-8dc6-b20b8a3c5ee8circle_large__v1__.png",
		"accreditation": "DMD",
		"languages": ["Spanish", "English"],
		"specialties": [
			"General",
			"Cosmetic",
			"Family",
			"Orthodontics
		],
		"practices": [{
			"name": "Dental Options PA",
			"city": "Aventura",
			"zipCode": "33180",
			"phone": 3054661804,
			"address": "2999 NE 191 Street, Suite 804",
			"imageUrl": "http://www.dentalwebdesign.org/images/aventura-dentist-2.jpg",
			"insurances": [
				"Delta Dental",
				"Cigna",
				"Aetna",
				"Florida Blue: Blue Cross Blue Shield of Florida",
				"Guardian",
				"Humana",
				"Metlife"
			],
			"schedule": {
				"Monday": "9AM-6PM",
				"Tuesday": "9AM-6PM",
				"Wednesday": "8:30AM-7PM",
				"Thursday": "9AM-6PM",
				"Friday": "9AM-6PM",
				"Saturday": "9AM-3PM",
				"Sunday": "Closed"
			},
			"bundles": [
					{
						"name": "New Patient Bundle (X-Rays, Cleaning, Exam)",
						"price": 59
					}
				]
		}
	]
},
	
	

{
	"id": "0005",
	"name": "Andy Gaertner",
	"namePrefix": "Dr.",
	"gender": "Male",
	"imageUrl": "https://d1cesmq0xhh7we.cloudfront.net/d7ed0f01-cbb6-451b-978c-5fe2e021a589zoom.jpg",
	"accreditation": "DMD",
	"languages": ["Spanish", "English", "Hebrew", "French", "Dutch"],
	"specialties": [
		"General",
		"Cosmetic",
		"Family"
	"practices": [{
		"name": "Bliss Dental",
		"city": "Miami",
		"zipCode": "33183",
		"phone": 3052746500,
		"address": "8501 SW 124TH Ave, Suite 104",
		"imageUrl": "",
		"insurances": [
			"None"
],
		"schedule": {
			"Monday": "9AM-5PM",
			"Tuesday": "9AM-7PM",
			"Wednesday": "9AM-5PM",
			"Thursday": "9AM-5PM",
			"Friday": "9AM-5PM",
			"Saturday": "9AM-3PM"
			"Sunday": "Closed"
		},
		"bundles": [
			{
				"name": "New Patient Bundle (X-Rays, Cleaning, Exam)",
				"price": 95
			}
		]
	}
]
},
	
	

{
	"id": "0006",
	"name": "Tommy Gaertner",
	"namePrefix": "Dr.",
	"gender": "Male",
	"imageUrl": "https://d2t808ag5aqhkh.cloudfront.net/c6c90410-d38c-4957-9cf1-b9f54bcb6fd4zoom.jpg",
	"accreditation": "DMD",
	"languages": ["Spanish", "English", "French", "Dutch", "Hebrew"],
	"specialties": [
		"General",
		"Cosmetic",
		"Family"
	],
	"practices": [{
		"name": "Miami Beach Smiles",
		"city": "Miami Beach",
		"zipCode": "33139",
		"address": "1688 Meridian Ave, Suite #414",
		"imageUrl": "",
		"insurances": [
			"None"
],
		"schedule": {
			"Monday": "8:30AM-5PM",
			"Tuesday": "8:30AM-5PM",
			"Wednesday": "8:30AM-5PM",
			"Thursday": "8:30AM-5PM",
			"Friday": "Closed",
			"Saturday": "Closed",
			"Sunday": "Closed"
		},
		"bundles":[
				{
			"name": "New Patient Bundle (X-Rays, Cleaning, Exam)",
			"price": 95
			}
		]
	}
]
},
	
	

{
	"id": "0007",
	"name": "Antonio Otero",
	"namePrefix": "Dr.",
	"gender": "Male",
	"imageUrl": "http://mdxvitals-res.cloudinary.com/private_images/t_macro/professionals/1621556/Dr_Antonio_Otero_4.jpg",
	"accreditation": "DDS",
	"languages": ["Spanish", "English"],
	"specialties": [
		"General",
		"Cosmetic",
		"Family",
		"Prosthodontics"
	],
	"practices": [{
		"name": "Otero Dental Centers, Islas Canarias",
		"city": "Miami",
		"zipCode": "33175",
		"address": "13625 SW 26th St",
		"imageUrl": "",
		"insurances": [
		"None"
],
		"schedule": {
			"Monday": "9AM-7PM",
			"Tuesday": "9AM-7PM",
			"Wednesday": "9AM-7PM",
			"Thursday": "9AM-7PM",
			"Friday": "Closed",
			"Saturday": "Closed",
			"Sunday": "Closed"
		},
		"bundles": [
{
			"name": "Annual Membership (X-Rays, 2 Cleanings, 2 Exams)",
			"price": "169"
			}
		]
	}
]
},
	
	
	
{
	"id": "0008",
	"name": "Rolando Marty",
	"namePrefix": "Dr.",
	"gender": "Male",
	"imageUrl": "https://www.oterodentalcenters.com/img/doctors/marty.png",
	"accreditations": "DDS",
	"languages": ["Spanish", "English"],
	"specialties": [
		"Genera",
		"Cosmetic",
		"Family",
		"Prosthodontics"
	],
	"practices": [{
		"name": "Otero Dental Centers, Coral Gables",
		"city": "Miami",
		"zipCode": "33126",
		"address": "782 NW 42nd Ave Ste 538",
		"imageUrl": "",
		"insurances": [
		"None"
		],
		"schedule": {
			"Monday": "9AM-6PM",
			"Tuesday": "9AM-6PM",
			"Wednesday": "9AM-6PM",
			"Thursday": "9AM-3PM",
			"Friday": "Closed",
			"Saturday": "Closed",
			"Sunday": "Closed"
		},
		"bundles": [
{
			"name": "Annual Membership (X-Rays, 2 Cleanings, 2 Exams)",
			"price": "169"
			}
		]
	}
]
},
	
	

{
	"id": "0009",
	"name": "Adrian Gonzalez",
	"namePrefix": "Dr.",
	"gender": "Male",
	"imageUrl": "https://www.oterodentalcenters.com/img/doctors/adrian.png",
	"accreditations": "DMD",
	"languages": ["Spanish", "English"],
	"specialties": [
		"General",
		"Cosmetic",
		"Family"
	],
	"practices": [{
		"name": "Otero Dental Centers, Hialeah",
		"city": "Miami",
		"zipCode": "33012",
		"phone": 3058190008,
		"address": "1490 W 49th Pl #220",
		"imageUrl": "",
		"insurances": [
			"None"
],
		"schedule": {
			"Monday": "9AM-6PM",
			"Tuesday": "9AM-6PM",
			"Wednesday": "9AM-6PM",
			"Thursday": "9AM-6PM",
			"Friday": "9AM-6PM",
			"Saturday": "Closed",
			"Sunday": "Closed"
		},
		"bundles": [
			{
			"name": "Annual Membership (X-Rays, 2 Cleanings, 2 Exams)",
			"price": "169"
			}
		]
	}
]
},
	
	

{
	"id": "0010",
	"name": "Maria F. Gonzalez",
	"namePrefix": "Dr.",
	"gender": "Female",
	"imageUrl": "https://www.oterodentalcenters.com/img/doctors/maria.png",
	"accreditations": "DMD",
	"languages": ["Spanish", "English"],
	"specialties": [
		"General",
		"Cosmetic",
		"Orthodontics"
	],
	"practices": [{
		"name": "Otero Dental Centers, Country Walk",
		"city": "Miami",
"zipCode": "33177",
		"phone": 3052558855,
		"address": "13776 SW 152 St",
		"imageUrl": "",
		"insurances": [
			"None"
],
		"schedule": {
			"Monday": "9AM-6PM",
			"Tuesday": "9AM-7PM",
			"Wednesday": "9AM-6PM",
			"Thursday": "9AM-6PM",
			"Friday": "9AM-2PM",
			"Saturday": "Closed",
			"Sunday": "Closed"
		},
		"bundles": [
			{
			"name": "Annual Membership (X-Rays, 2 Cleanings, 2 Exams)",
			"price": 169
			}
		]
	}
]
},
	
	

{
	"id": "0011",
	"name": "Jessica Eagan",
	"namePrefix": "Dr.",
	"gender": "Female",
	"imageUrl": "http://drjeagan.com/wp-content/uploads/2016/10/Dr-Eagan.jpg",
	"accreditation": "DDS",
	"languages": ["Spanish", "English"],
	"specialties": [
		"General",
		"Cosmetic",
		"Prosthodontics"
	],
	"practices": [{
		"name": "Jessica Eagan DDS",
		"city": "Miami",
		"zipCode": "33145",
		"phone": 3058561178,
		"address": "1378 Coral Way, Suite 500",
		"imageUrl": "",
		"insurances": [
			"None"
		],
		"schedule": {
			"Monday": "8AM-5:30PM",
			"Tuesday": "8AM-5:30PM",
			"Wednesday": "8AM-5:30PM",
			"Thursday": "8AM-5:30PM",
			"Friday": "8AM-3PM",
			"Saturday": "Closed",
			"Sunday": "Closed"
		},
		"bundles": [
			{
			"name": "New Patient Bundle (X-Rays, Cleaning, Exam)",
			"price": 273
			}
		]
	}
]
},
	
	

{
	"id": "0012",
	"name": "Steven Chavez",
	"namePrefix": "Dr.",
	"gender": "Male",
	"imageUrl": "http://drjeagan.com/wp-content/uploads/2016/12/Dr-Chavez.jpg",
	"accreditation": "DDS",
	"languages": ["Spanish", "English"],
	"specialties": [
		"General",
		"Cosmetic",
		"Family"
	],
	"practices": [{
		"name": "Jessica Eagan DDS",
		"city": "Miami",
		"zipCode": "33145",
		"phone": 3058561178,
		"address": "1378 Coral Way, Suite 500",
		"imageUrl": "",
		"insurances": [
			"None"
],
		"schedule": {
			"Monday": "8AM-5:30PM",
			"Tuesday": "8AM-5:30PM",
			"Wednesday": "8AM-5:30PM",
			"Thursday": "8AM-5:30PM",
			"Friday": "8AM-3PM",
			"Saturday": "Closed",
			"Sunday": "Closed"
		},
		"bundles": [
				{
				"name": "New Patient Bundle (X-Rays, Cleaning, Exam)",
				"price": 273
				}
			]
		}
	 ]
},

	

	{
		"id": "0013",
		"name": "Elibeth Alvarez",
		"namePrefix": "Dr.",
		"gender": "Female",
		"imageUrl": "https://www.planfy.com/assets/images/global/dummy/people/avatar--default.png",
		"accreditation": "DDS",
		"languages": ["Spanish", "English"],
		"specialties": [
			"General",
			"Cosmetic",
			"Orthodontics"
		],
		"practices": [
			{
				"name": "Dental Cosmetic Spa",
				"city": "Miami",
				"zipCode": "33134",
				"number": 7864103086,
				"address": "151 Giralda Ave",
				"imageUrl": "",
				"insurances": [
					"Aetna",
					"Ameritas",
					"Argus",
					"Anthem/Unicare PPO",
					"Anthembcbs/Unitedcare/Wellpoint",
					"Assurant PPO/DHA",
					"Blue Dental Choice",
					"Cosmetic Dental Discount Program",
					"Careington",
					"Cigna",
					"Delta Dental PPO",
					"Delta Premiere",
					"Dentemax",
					"Maverest/DWP-Dental Wellness Partners",
					"GEHA-Connection Dental",
					"Guardian",
					"Humana",
					"Metlife",
					"Principal",
					"Solstice",
					"United Healthcare",
					"United Concordia-Par Net",
					"United Concordia National Advantage"
				],
				"schedule": {
					"Monday": "9AM-6PM",
					"Tuesday": "9AM-6PM",
					"Wednesday": "9AM-6PM",
					"Thursday": "9AM-6PM",
					"Friday": "9AM-6PM",
					"Saturday": "Closed",
					"Sunday": "Closed"
				},
				"bundles": [
					{
						"name": "New Patient Bundle (X-Rays, Cleaning, Exam)",
						"price": 145
					}
				]
			}
		]
	},
		


	{
		"id": "0014",
		"name": "Eduardo Ubieta",
		"namePrefix": "Dr.",
		"gender": "Male",
		"imageUrl": "https://lh3.googleusercontent.com/-FRVQZl7D96o/AAAAAAAAAAI/AAAAAAAAABY/HhvRo0-5Wdw/s640/photo.jpg",
		"accreditation": "DDS",
		"languages": ["Spanish", "English"],
		"specialties": [
			"General",
			"Cosmetic",
			"Family",
			"Prosthodontics"
		],
		"practices": [
			{
				"name": "Sunset Family & Cosmetic Dentistry",
				"city": "Miami",
				"zipCode": "33173",
				"number": 3055962815,
				"address": "9777 SW 72nd St",
				"imageUrl": "",
				"insurances": [
					"None"
				],
				"schedule": {
					"Monday": "8AM-8PM",
					"Tuesday": "8AM-8PM",
					"Wednesday": "8AM-8PM",
					"Thursday": "8AM-8PM",
					"Friday": "8AM-8PM",
					"Saturday": "8AM-3PM",
					"Sunday": "Closed",
				},
				"bundles": [
					{
						"name": "New Patient Bundle (X-Rays, Cleaning, Exam)",
						"price": 174
					}
				]
			},
			{
				"name": "Sunset Family & Cosmetic Dentistry",
				"city": "Miami",
				"zipCode": "33139",
				"number": 3055310063,
				"address": "830 Washington Ave",
				"imageUrl": "",
				"insurances": [
					"None"
				],
				"schedule": {
					"Monday": "8AM-5PM",
					"Tuesday": "8AM-5PM",
					"Wednesday": "8AM-5PM",
					"Thursday": "8AM-5PM",
					"Friday": "8AM-5PM",
					"Saturday": "Closed",
					"Sunday": "Closed"
					},
				"bundles":  [
					{
						"name": "New Patient Bundle (X-Rays, Cleaning, Exam)",
						"price": 174
					}
				]
			}
		]
	},
		
		

	{
		"id": "0015",
		"name": "Neda Bahmadi",
		"namePrefix": "Dr.",
		"gender": "Female",
		"imageUrl": "https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/1/000/1dc/305/36803a3.jpg",
		"accreditation": "DDS",
		"languages": ["Spanish","English","French", "Farsi"]
		"specialties": [
			"General",
			"Cosmetic",
			"Orthodontic",
			"Prosthodontics"
		],
		"practices": [{
			"name": "Ultra Smile Dentistry",
			"city": "Miami",
			"zipCode": "33131",
			"phone": 3053721020,
			"address": "168 SE 1st St",
			"imageUrl": "",
			"insurances": [
				"None"
	],
			"schedule": {
				"Monday": "9AM-6PM",
				"Tuesday": "9AM-6PM",
				"Wednesday": "11AM-7PM",
				"Thursday": "9AM-6PM",
				"Friday": "9AM-2PM",
				"Saturday": "Closed",
				"Sunday": "Closed"
			},
			"bundles": [
				{
				"name": "New Patient Experience (Exam, Cleaning, and X-Rays",
				"price": 200
				}
			]
		}
	    ]
	},
		
		

	{
	"id": "0016",
	"name": "Yuchen Cheng",
	"namePrefix": "Dr.",
	"gender": "Female",
	"imageUrl": "http://www.southbeachdental.com/images/sheng1.jpg",
	"accreditations": "DMD",
	"languages": ["English"],
	"specialties": [
		"General",
		"Cosmetic",
		"Family",
		"Orthodontics"
	],
	"practices": [{
		"name": "South Beach Dental",
		"city": "Miami Beach",
		"zipCode": "33139",
		"number": 3055326977,
		"address": "100 Lincoln Rd Suite CU7",
		"imageUrl": "https://s3-media4.fl.yelpcdn.com/bphoto/slvfXWAwpgJIDtfpKYcayQ/ls.jpg",
		"insurances": [
"None"
],
		"schedule": {
			"Monday": "9AM-6PM",
			"Tuesday": "9AM-6PM",
			"Wednesday": "8AM-5PM",
			"Thursday": "8AM-5PM",
			"Friday": "Closed",
			"Saturday": "Closed",
			"Sunday": "Closed"
		},
		"bundles": [
			{
			"name": "New Patient Bundle (X-Rays, Cleaning, Exam)",
			"price": 99
			}
		]
	}
]
},
	


{
	"id": "0017",
	"name": "Hamid Nassery",
	"namePrefix": "Dr.",
	"gender": "Male",
	"imageUrl": "http://www.hautemd.com/wp-content/uploads/2013/08/Dr-N-pro_New-179x210.jpg",
	"accreditation": "DDS",
	"languages": ["Spanish", "English", "Farsi"],
	"specialties": [
		"General",
		"Cosmetic",
		"Family",
		"Prosthodontics"
	],
	"practices": [{
		"name": "Real Smile Complete Health Dentistry, MB",
		"city": "Miami Beach",
		"zipCode": "33140",
		"phone": 3056724444,
		"address": "757 Arthur Godfrey Rd",
		"imageUrl": "",
		"insurances": [
			"None"
],
		"schedule": {
			"Monday": "8:30AM-5:30PM",
			"Tuesday": "8:30AM-5:30PM",
			"Wednesday": "8:30AM-5:30PM",
			"Thursday": "8:30AM-5:30PM",
			"Friday": "8:30AM-5:30PM",
			"Saturday": "Closed",
			"Sunday": "Closed"
		},
		"bundles": [
				{
			"name": "New Patient Bundle (X-Rays, Cleaning, Exam)",
			"price": 370
			}
		]
	}
]
},
	
	

{
	"id": "0018",
	"name": "Gloria Alvareztorre",
	"namePrefix": "Dr",
	"gender": "Female",
	"imageUrl": "http://mdxvitals-res.cloudinary.com/private_images/t_macro/professionals/1626903/Dr_Gloria_Alvareztorre.jpg",
	"accreditation": "DDS",
	"languages": ["Spanish", "English"],
	"specialties": [
		"General",
		"Cosmetic"
	],
	"practices": [{
		"name": "Real Smile Complete Health Dentistry, North Beach",
		"city": "Miami",
		"zipCode": "33181",
		"phone": 3053921515,
		"address": "11645 Biscayne Blvd, Suite #406",
		"imageUrl": "",
		"insurances": [
			"None"
],
		"schedule": {
			"Monday": "9AM-6PM",
			"Tuesday": "9AM-6PM",
			"Wednesday": "9AM-6PM",
			"Thursday": "9AM-6PM",
			"Friday": "9AM-6PM",
			"Saturday": "9AM-12PM",
			"Sunday": "Closed"
		},
		"bundles": [
			{
			"name": "New Patient Bundle (X-Rays, Cleaning, Exam)",
			"price": 98
			}
		]
	}
   ]
},
	


{
	"id": "0019",
	"name": "Scott Kenward",
	"namePrefix": "Dr.",
	"gender": "Male",
	"imageUrl": "https://www.healthgrades.com/img/prov/X/7/D/X7DN6_w120h160_v11339.jpg",
	"accreditation": "DDS",
	"languages": ["English"],
	"specialties": [
		"General
		"Cosmetic",
		"Family",
		"Prosthodontics"
	],
	"practices": [{
		"name": "Pinecrest Dental",
		"city": "Miami",
		"zipCode": "33156",
		"phone": 3056708088,
		"address": "8950 SW 74th Ct Ste 1212",
		"imageUrl": "",
		"insurances": [
			"None"
],
		"schedule": {
			"Monday": "8AM-5PM",
			"Tuesday": "8AM-5PM",
			"Wednesday": "8AM-5PM",
			"Thursday": "8AM-5PM",
			"Friday": "8AM-12PM",
			"Saturday": "Closed",
			"Sunday": "Closed"
		},
		"bundles": [
{
			"name": "New Patient Bundle (X-Rays, Cleaning, Exam)",
			"price": 310
			}
		]                                                                
	}
]
},
	
	

{
	"id": "0020",
	"name": "Richard Mariani",
	"namePrefix": "Dr.",
	"gender": "male",
	"imageUrl": "www.marianiorthodontics.com/portals/0/img/Mariani.png",
	"accreditation": "DDS",
	"languages": ["Spanish", "English"],
	"specialties": [
		"General",
		"Family",
		"Pediatric",
		"Orthodontics",
	],
	"practices": [{
		"name": "Mariani Orthodontics",
		"city": "Miami",
		"zipCode": "33143",
		"phone": 3056617810,
		"address": "6280 Sunset Drive, Suite 604",
		"imageUrl": "",
		"insurances": [
			"None"
],
		"schedule": {
			"Monday": "8AM-5PM",
			"Tuesday": "8AM-5PM",
			"Wednesday": "8AM-5PM",
			"Thursday": "8AM-5PM",
			"Friday": "8AM-12PM",
			"Saturday": "Closed",
			"Sunday": "Closed"
		},
		"bundles": [
			{
				"name": "New Patient Bundle (X-Rays, Cleaning, Exam)",
				"price": 320
			}
		]
	}
]
},
	


{
	"id": "0021",
	"name": "Carmen Briceno Crespi",
	"namePrefix": "Dr.",
	"gender": "Female",
	"imageUrl": "http://www.marianiorthodontics.com/portals/0/img/Briceno.png",
	"accreditation": "DDS",
	"languages": ["Spanish", "English"],
	"specialties": [
		"General",
		"Orthodontics"
	],
	"practices": [{
		"name": "Mariani Orthodontics",
		"city": "Miami",
		"zipCode": "33143",
		"phone": 3056617810,
		"address": "6280 Sunset Drive, Suite 604",
		"imageUrl": "",
		"insurances": [
			"None"
],
		"schedule": {
			"Monday": "8AM-5PM",
			"Tuesday": "8AM-5PM",
			"Wednesday": "8AM-5PM",
			"Thursday": "8AM-5PM",
			"Friday": "8AM-12PM",
			"Saturday": "Closed",
			"Sunday": "Closed"
		},
		"bundles": [
{
			"name": "New Patient Bundle (X-Rays, Cleaning, Exam)",
			"price": 320
			}
]
	}
]
},
	
	

{
	
	"id": "0022",
	"name": "Michael Robinson",
	"namePrefix": "Dr.",
	"gender": "Male",
	"imageUrl": "https://www.healthgrades.com/img/prov/2/5/F/25FK2_w120h160_v16512.jpg",
	"accreditation": "DDS",
	"languages": ["English"],
	"specialties": [
		"General",
		"Cosmetic",
		"Family",
		"Endodontics",
		"Sports"
	],
	"practices": [{
		"name": "Sunset Dentistry",
		"city": "Miami",
		"zipCode": "33143",
		"phone": 3056617810,
		"address": "6280 Sunset Dr #404",
		"imageUrl": "",
		"insurances": [
			"None"
		],
		"schedule": {
			"Monday": "8AM-5PM",
			"Tuesday": "7AM-5PM",
			"Wednesday": "8AM-5PM",
			"Thursday": "7AM-5PM",
			"Friday": "8AM-12PM",
			"Saturday": "Closed",
			"Sunday": "Closed"
		},
		"bundles": [
			{
			"name": "New Patient Bundle (X-Rays, Cleaning, Exam)",
			"price": 320
			}
		]
	}
]
},
	
	

{
	"id": "0023",
	"name": "Jorge Blanco",
	"namePrefix": "Dr.",
	"gender": "Male",
	"imageUrl": "http://www.imagesdental.com/images/dr-jorge-blanco.jpg",
	"accreditation": "DDS",
	"languages": ["Spanish", "English"],
	"specialties": [
		"General",
		"Cosmetic",
		"Family"
	],
	"practices": [{
		"name": "Images Dental",
		"city": "Miami",
		"zipCode": "33143",
		"phone": 3056700352,
		"address": "7700 S Red Road",
		"imageUrl": "",
		"insurances": [
			"None"
		],
		"schedule": {
			"Monday": "8:30AM-6PM",
			"Tuesday": "8:30AM-6PM",
			"Wednesday": "8:30AM-5PM",
			"Thursday": "8:30AM-6PM",
			"Friday": "Closed",
			"Saturday": "Closed",
			"Sunday": "Closed"
		},
		"bundles": [
{
			"name": "New Patient Bundle (X-Rays, Cleaning, Exam)",
			"price": 470
			}
			]
}
		     ]
},
	
	

	{
		"id": "0024",
		"name": "Jinelle Andujar",
		"namePrefix": "Dr.",
		"gender": "Female",
		"imageUrl": "https://www.drubieta.com/images/dr_jinelle_abdujar-sm.jpg",
		"accreditation": "DMD",
		"languages": ["Spanish", "English"],
		"specialties": [
			      "General",
			      "Cosmetic",
			      "Family"
			      ]
		"practices": [{
		  "name": "Sunset Family & Cosmetic Dentistry",
				"city": "Miami",
				"zipCode": "33139",
				"phone": 3055310063,
				"address": "830 Washington Ave",
				"imageUrl": "",
				"insurances": [
					"None"
				],
				"schedule": {
					"Monday": "8AM-5PM",
					"Tuesday": "8AM-5PM",
					"Wednesday": "8AM-5PM",
					"Thursday": "8AM-5PM",
					"Friday": "8AM-5PM",
					"Saturday": "Closed",
					"Sunday": "Closed"
					},
				"bundles":  [
					{
						"name": "New Patient Bundle (X-Rays, Cleaning, Exam)",
						"price": 174
					}
				]
			}
		]
	},
		
		
		
		{
			"id": "0025",
			"name": "Pavel Ivanov",
			"namePrefix": "Dr.",
			"gender": "Male",
			"imageUrl": "https://www.drubieta.com/images/dr_pavel-sm.jpg",
			"accreditation": "DMD",
			"languages": ["Spanish", "English"],
		        "specialties": [
					"General",
				      	"Family",
				      	"Orthodontics",
				      	"Pediatric"
				      ]
			"practices": [{
		 		"name": "Sunset Family & Cosmetic Dentistry",
				"city": "Miami",
				"zipCode": "33139",
				"phone": 3055310063,
				"address": "830 Washington Ave",
				"imageUrl": "",
				"insurances": [
					"None"
				],
				"schedule": {
					"Monday": "8AM-5PM",
					"Tuesday": "8AM-5PM",
					"Wednesday": "8AM-5PM",
					"Thursday": "8AM-5PM",
					"Friday": "8AM-5PM",
					"Saturday": "Closed",
					"Sunday": "Closed"
					},
				"bundles":  [
					{
						"name": "New Patient Bundle (X-Rays, Cleaning, Exam)",
						"price": 174
					}
				]
			}
		]
	},
		
		
			
		{
			"id": "0026",
			"name": "Marco Leyte-Vidal",
			"namePrefix": "Dr.",
			"gender": "Male",
			"imageUrl": "http://www.sunsetdentistry.com/wp-content/uploads/2016/09/docs.jpg",
			"accreditation": "DMD",
			"languages":["Spanish", "English"],
				
			"specialties": [
				"General",
				"Cosmetic",
				"Family", 
				"Endodontics",
				"Sports
				]
			"practices": [{
				"name": "Sunset Dentistry",
				"city": "Miami",
				"zipcode": "33143",
				"phone": 3056617810,
				"address": "6280 Sunset Drive, Suite #404",
				"imageUrl": "",
				"insurances": [
					"None"
					],
				"schedule": {
					"Monday": "8AM-5PM",
					"Tuesday": "7AM-5PM",
					"Wednesday": "8AM-5PM",
					"Thursday": "7AM-5PM",
					"Friday": "8AM-12PM",
					"Saturday": "Closed",
					"Sunday": "Closed"
				},
				"bundles": [
					{
					"name": "New Patient Bundle (X-Rays, Cleaning, Exam)",
					"price": 320
				}
			]
		}
]
		},
			
			
			
			{
				"id": "0027",
				"name": "Cesar Sabates"
				"namePrefix": "Dr.",
				"gender": "Male",
				"imageUrl": "http://www.cesarsabates.com/images/cesarsabatesdds.jpg",
				"accreditation": " DDS",
				"languages": ["Spanish", "English"],
				"specialties": [
					"General",
					"Cosmetic",
					"Prosthodontics",
					"Oral Surgery"
					],
				" practices": [{
					"name": "Cesar R Sabates, DDS PA",
					"city": "Miami",
					"zipcode": "33134",
					"phone": 3054487217,
					"address": "747 Ponce De Leon Blvd",
					"imagrUrl": "",
					"insurances": [
						"None"
						],
					"schedule": {
						"Monday": "8:30AM-6PM",
						"Tuesday": "8:30AM-6PM",
						"Wednesday": "8:30AM-6PM",
						"Thursday": "8:30AM-6PM",
						"Friday": "8:30AM-6PM",
						"Satuday": "Closed",
						"Sunday": "Closed"
					}
					"bundles": [
					{
						"name": "New Patient Bundle (X-Rays, Cleaning, Exam)",
						"price": 260
				}
			]
		}
]
		},
			
			
			
			{
				"id": "0028",
				"name": "Raffaella Armstron",
				"namePrefix": "Dr.",
				"gender": "Female", 
				"imageUrl": "http://c1-preview.prosites.com/84106/wy/images/bio%20photo_crop.jpg", 
				"accreditation": "DDS",
				"languages": ["Spanish", "English", "Italian"],
				"specialties": [
					"General",
					"Cosmetic"
					],
				"practices": [{
					"name": "Raffaella Armstrong DMD",
					"city": "Miami",
					"zipcode": "33131",
					"phone": 3053716064,
					"address": "150 SE 2nd Ave, Suite #604",
					"imageUrl": "",
					"insurances": [
						"None"
						],
					"schedule": {
						"Monday": "9AM-5PM",
						"Tuesday": "9AM-5PM",
						"Wednesday": "9AM-5PM",
						"Thursday": "9AM-5PM",
						"Friday": "9AM-5PM",
						"Saturday": "Closed",
						"Sunday": "Closed
					},
					"bundles": [
						{
						"name": "New Patient Bundle (X-Rays, Cleaning, Exam)",
						"price": 275,
						}
			]
		}
]
		},
			
			
			
			{ 
				"id": "0029",
				"name": "Michelle Seguel",
				"namePrefix": "Dr.",
				"gender": "Female",
				"imageUrl": "https://d2t808ag5aqhkh.cloudfront.net/df5592a9-3c50-42ba-8823-77d9e1063dcbzoom.jpg",
				"accreditation": "DMD",
				"languages": ["Spanish", "English"],
				"specialties": [
					"General",
					"Cosmetic"
					],
				"practices": [{
					"name": "Confident Miami",
					"city": "Miami",
					"zipcode": "33134",
					"phone": 3053631420,
					"addres": "475 Biltmore Way, Suite 302",
					"imageUrl": "",
					"insurances": [
						"None"
						],
					"schedule": {
						"Monday": "9AM-5PM",
						"Tuesday": "9AM-5PM",
						"Wednesday": "9AM-4PM",
						"Thursday": "9AM-5PM",
						"Friday": "9AM-1PM",
						"Saturday": "Closed",
						"Sunday": "Closed"
					},
					"bundles": [
						{
						"name": "New Patient Bundle (X-Rays, Cleaning, Exam)",
						"price": 705,
						}
			]
		}
]
		},
			
			
			
			{ 
				"id": 0030"
				"name": "Manuel Seage",
				"namePrefix": "Dr.",
				"gender": "Male",
				"imageUrl": "https://sa1s3.patientpop.com/assets/images/provider/photos/1442811.jpg",
				"accreditation": "DDS",
				"languages": ["Spanish", "English"],
				"specialties": [
					"General",
					"Cosmetic"
					],
					"practices": [{
					"name": "Confident Miami",
					"city": "Miami",
					"zipcode": "33134",
					"phone": 3053631420,
					"addres": "475 Biltmore Way, Suite 302",
					"imageUrl": "",
					"insurances": [
						"None"
						],
					"schedule": {
						"Monday": "9AM-5PM",
						"Tuesday": "9AM-5PM",
						"Wednesday": "9AM-4PM",
						"Thursday": "9AM-5PM",
						"Friday": "9AM-1PM",
						"Saturday": "Closed",
						"Sunday": "Closed"
					},
					"bundles": [
						{
						"name": "New Patient Bundle (X-Rays, Cleaning, Exam)",
						"price": 705,
						}
			]
		}
]
		},
			
			
			
			{ 
				"id": "0031",
				"name": "Dania Melnick Alonso",
				"namePrefix": "Dr.",
				"gender": "Female",
				"imageUrl":  "https://sa1s3.patientpop.com/assets/images/provider/photos/1442813.jpg"
				"accreditation": "DMD",
				"languages": ["Spanish", "English"],
				"specialties": [
					"General",
					"Cosmetic"
					],
					"practices": [{
					"name": "Confident Miami",
					"city": "Miami",
					"zipcode": "33134",
					"phone": 3053631420,
					"addres": "475 Biltmore Way, Suite 302",
					"imageUrl": "",
					"insurances": [
						"None"
						],
					"schedule": {
						"Monday": "9AM-5PM",
						"Tuesday": "9AM-5PM",
						"Wednesday": "9AM-4PM",
						"Thursday": "9AM-5PM",
						"Friday": "9AM-1PM",
						"Saturday": "Closed",
						"Sunday": "Closed"
					},
					"bundles": [
						{
						"name": "New Patient Bundle (X-Rays, Cleaning, Exam)",
						"price": 705,
						}
			]
		}
	]
]
		},
			
			
			
			{ 
				"id": "0032",
				"name": "Carmen Garcia Paul",
				"namePrefix": "Dr.", 
				"gender": "Female",
				"imageUrl": "http://www.miamibraces.com/wp-content/uploads/2016/02/AlexTphoto.com-Carmen-Garcia-Headshots-1-HighRes-1-845x1024.jpg",
				"accreditation": "DMD"
				"languages": ["Spanish", "English"],
				"specialties": [
					"General",
					"Orthodontics",
					"Pediatric"
					],
				"practices": [{
					"name": "Miami Orthodontic Specialists",
					"city": "Miami",
					"zipcode": "33156",
					"phone": 3054079000,
					"address": "8525 SW 92nd St",
					"imageUrl": "",
					"insurance": [
						"None"
						]
					"schedule": [
						"Monday": "10:00AM-6:30PM",
						"Tuesday": "8AM-5PM",
						"Wednesday": "7:30AM-4PM",
						"Thursday": "8AM-5PM",
						"Friday": "8AM-5PM",
						"Saturday": "Closed",
						"Sunday": "Closed",
					],
					"bundles": [{
						"name": "New Patient Bundle (X-Rays, Cleaning, Exam)",
						"price": "Free", 
				
											}
					      ]
			}
]
},
	{
						

					
				
				
						

						
				
					
					
					
				
	
		
		
