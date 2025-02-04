import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.TreeSet;
import java.util.stream.Collectors;
import java.util.stream.Stream;


class Main{
    public static void main(String[] args) {
        System.out.println("d");
        HashMap<String, Integer> hm1 = new HashMap<>();
        int[] a1 = {1,3};
        String[] s1 = {"Fdf","dff"};
        // a1.add(2);
        
      for(int i=0;i<9;i++){
        System.out.println(i);
      }
        hm1.put("DSds",1);
        hm1.forEach((a,b) -> {
        System.out.println(a);
        System.out.println(b);
        });
    //     System.out.println(hm1);
    //     Stream<String, Integer> sm1 = hm1.stream(); 

        List<Integer> l1 = Arrays.asList(1,2,3,4,5,6,1);
        List<Integer> filtered = l1.stream().filter(x->x%2==0).collect(Collectors.toList());
        List<Integer> filtered1 = l1.stream().map(x->x+2).collect(Collectors.toList());
        List<Integer> filtered2 = l1.stream().distinct().collect(Collectors.toList());
        List<Integer> filtered3 = l1.stream().sorted().collect(Collectors.toList());
        List<Integer> filtered4 = l1.stream().sorted((a,b)-> b-a).collect(Collectors.toList());
        List<Integer> filtered5 = l1.stream().sorted((a,b)-> b-a).limit(3).skip(2).collect(Collectors.toList());
        Integer a44 = l1.stream().sorted((a,b)-> b-a).limit(3).max((a,b)->a-b).get();
        Integer a444 = l1.stream().sorted((a,b)-> b-a).limit(3).max((a,b)->b-a).get();
      
System.out.println(filtered);
System.out.println(filtered1);
System.out.println(filtered2);
System.out.println(filtered3);
System.out.println(filtered4);
System.out.println(filtered5);
System.out.println(a44);
System.out.println(a444);



ArrayList<String> safeTypedList = new ArrayList<>();
safeTypedList.add("dsd");
safeTypedList.add("dseeed");
safeTypedList.add(1,"dseedded");
safeTypedList.set(0, "null");

safeTypedList.get(0);
safeTypedList.remove("dsd");
// safeTypedList.add(1); this will give error

for(String a:safeTypedList){
    System.out.println(a);
}

ArrayList unyyped = new ArrayList<>();
unyyped.add("d");
unyyped.add(2);

unyyped.forEach(a-> System.out.println(a));
System.out.println(safeTypedList);
System.out.println(unyyped);


HashSet<Integer> q1 = new HashSet<>();
q1.add(2);
q1.add(2222);
q1.add(12);
q1.add(3422);
q1.add(32);
System.out.println(q1);



// sorted
TreeSet<Integer> q12 = new TreeSet<>();
q12.add(2);
q12.add(2222);
q12.add(12);
q12.add(3422);
q12.add(32);
System.out.println(q12);

    
    // }
}
}