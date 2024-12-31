class Solution {
    public:
        vector<int> twoSum(vector<int>& nums, int target) {
            unordered_map<int, int> myMap;
            for (int i = 0; i < nums.size(); i++)
            {
                int temp = nums[i] ;
                if (myMap.contains(temp))
                {
                    return {myMap[temp], i}; 
                }
                myMap[target -temp] = i;   
            }
            return {};
        }
    };
    
    
    