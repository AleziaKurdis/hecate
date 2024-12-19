# hecate
VR-3D Goto Application for Overte (Project Hecate)

INSTALLATION:

Simply run this script in Overte (Edit > Running Scripts... > From URL): 

https://aleziakurdis.github.io/hecate/app_hecate.js

-----------------------------------------------------------------

**RULES used to display the Portals from the Directory server's place API...**


**Places that are systematically excluded:**

  1- Places from an inactive domain.

  2- Places where the domain runs a different protocole version.

  
  
**Place categories (by appearance):**
  
1- **RUBY**: "Featured" places randomly picked among the SILVER category, to give a chance to places to be discovered. (Only 1 place in this category.)
  
2- **BLUESTEAL**: "Frequently Visited", each time a user use a portal, it records the event in a setting that keep the last 30 visited places. In this category, it displays those places (if present) but only if they are present at leat 3 times in the history. They are displayed in order of frequency, then by alphabetically order on the place name.
  
3- **GOLD**: At the moment there are users in a place, It get assigned to the GOLD category. It orders them by number of users and then by their natural order in the lower categories.
  
4- **SILVER**: This category contains the places that have a thumbnail showing their interest to get visitors.
  
5- **BRONZE**: This category contains the places that have no thumbnail.


**Ordering within each categories:**  
The ordering within each categories is obtained by a seeded random. The ordering are this way maintained for 5 days before being reshuffled again.
  
  
**Portals color:**
  
1- **GREEN**: Indicate that some users are present in the targeted domain.
  
2- **BLUE**: Indicate that no user are present.
  
3- **RED**: Indicate that the maximum capactity of the domain has been reached.
  
