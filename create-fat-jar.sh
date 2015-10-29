# adapted from https://github.com/anchortab/anchortab/blob/master/package.sh

./sbt package assembly
mv target/scala-2.11/Lift_3.0-M6_SPA-assembly-0.0.4.jar target/
cd target && zip -r Lift_3.0-M6_SPA-assembly-0.0.4.jar webapp -x webapp/WEB-INF/classes\* webapp/WEB-INF/lib\*

# run it using this command
# java -jar Lift_3.0-M6_SPA-assembly-0.0.4.jar

cd ../
